import { useState } from "react";

export function useNotifications() {
  const [notifications, setNotifications] = useState<
    Array<{ id: string; message: string; read: boolean }>
  >([
    {
      id: "1",
      message: "Your snippet was liked by @developer123",
      read: false,
    },
    {
      id: "2",
      message: "New feature: Real-time collaboration is now available",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return { notifications, unreadCount };
}
