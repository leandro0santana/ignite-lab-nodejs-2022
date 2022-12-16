import { Content } from './content';

describe('Notification content', () => {
  it('should be albe to create a notificantion content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be albe to create a notificantion content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be albe to create a notificantion content with more than 255 characters', () => {
    expect(() => new Content('a'.repeat(256))).toThrow();
  });
});
