// NotificationService interface defines a contract for sending notifications.
export interface NotificationService {
  // Send a notification with the provided message.
  sendNotification(message: string): void;
}
