import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be albe to create a notificantion', () => {
    const notification = new Notification({
      recipientId: 'exemplo-recipient-id',
      content: new Content('Você recebeu uma solicitação de amizade'),
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
