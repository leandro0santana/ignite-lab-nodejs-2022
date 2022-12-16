import { makeNotification } from '@test/factories/notification-factory';
import { NotificationsRepositoryInMemory } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipients notification', () => {
  it('should be able to count recipient notification', async () => {
    const notificationsRepository = new NotificationsRepositoryInMemory();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-id-1',
    });

    expect(count).toEqual(2);
  });
});
