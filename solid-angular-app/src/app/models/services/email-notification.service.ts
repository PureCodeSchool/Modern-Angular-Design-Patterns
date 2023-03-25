import { NotificationService } from '../interfaces/notification-service.interface';

// EmailNotificationService class implements the NotificationServiceInterface interface to send email notifications.
export class EmailNotificationService implements NotificationService {
  // Send an email notification with the provided message.
  sendNotification(message: string): void {
    // Logic for sending an email notification.
    console.log(`Email sent: ${message}`);
  }
}
