import { NotificationsRepositoryInMemory } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notificantion';

describe('Send notification', () => {
  it('should be able to send notification', async () => {
    const notificationsRepository = new NotificationsRepositoryInMemory();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'exemple-recipient-id',
      content: 'Isso é uma notificação',
      category: 'social',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
