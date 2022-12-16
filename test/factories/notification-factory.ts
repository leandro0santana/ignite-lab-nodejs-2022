import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'exemple-recipient-id',
    content: new Content('Isso é uma notificação'),
    category: 'teste',
    ...override,
  });
}
