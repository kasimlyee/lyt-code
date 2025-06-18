"use client";

import { Bell, BellDot } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useNotifications } from "@/hooks/useNotifications";

export function NotificationsButton() {
  const { notifications, unreadCount } = useNotifications();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors relative">
          {unreadCount > 0 ? (
            <BellDot className="w-4 h-4 text-yellow-400" />
          ) : (
            <Bell className="w-4 h-4 text-gray-400 hover:text-yellow-400" />
          )}
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-[#0f0f15] border border-gray-800/50 shadow-lg">
        <div className="divide-y divide-gray-800/50">
          <div className="p-3 font-medium text-sm bg-gradient-to-r from-blue-900/30 to-purple-900/30">
            Notifications
          </div>
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-3 text-sm hover:bg-gray-800/30"
              >
                {notification.message}
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-sm text-gray-400">
              No notifications
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
