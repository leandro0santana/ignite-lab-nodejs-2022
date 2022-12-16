import { CancelNotification } from '@app/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@app/use-cases/count-recipient-notifications';
import { UnReadNotification } from '@app/use-cases/errors/unread.notification';
import { GetRecipientNotifications } from '@app/use-cases/get-recipient-notifications';
import { ReadNotification } from '@app/use-cases/read-notification';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notificantion';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnReadNotification,
  ],
})
export class HttpModule {}
