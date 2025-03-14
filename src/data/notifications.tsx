export interface NotificationDataType {
    id: number;
    Message: string; // The main text content of the notification
    Image: string; // Optional URL for an image
    Type: string; // Type of notification (e.g., "Alert", "Info")
    Name: string; // Name of the person or entity associated with the notification
    Form: string; // Source of the notification (e.g., "User", "System")
    Date: string; // ISO date string for the timestamp
    Plan: string;
}

export const notificationItems: NotificationDataType[] = [
    {
        id: 1,
        Message: "You have a new friend request.",
        Image: "/assets/img/notification.png", // Image URL
        Name: "Island Guy Smokers", // Name of the user
        Type: "New Membership",
        Form: "Pasific",
        Date: "2 October 2024",
        Plan:"Standard"
      },
      {
        id: 2,
        Message: "Your subscription is about to expire.",
        Image: "/assets/img/notification.png", // Image URL
        Name: "Subscription Team", // Name of the system or entity
        Type: "Warning",
        Form: "System",
        Date: "2 October 2024Z",
        Plan:"Premium"
      },
      {
        id: 3,
        Message: "You received a new message from Jane.",
        Image: "/assets/img/notification.png", // Image URL
        Name: "Jane Smith", // Name of the user who sent the message
        Type: "New Membership",
        Form: "User",
        Date: "4 October 2024",
        Plan:" Basic"
      },
];
