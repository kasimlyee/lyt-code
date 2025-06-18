"use client";

import { Wifi, WifiOff, Circle } from "lucide-react";
import { TooltipWrapper } from "@/components/ui/tooltip";
import { useConnectionStatus } from "@/hooks/useConnectionStatus";

export function StatusIndicator() {
  const status = useConnectionStatus();

  const getStatus = () => {
    switch (status) {
      case "connected":
        return {
          icon: <Wifi className="w-4 h-4 text-green-400" />,
          tooltip: "Connected to LytCode Cloud",
        };
      case "disconnected":
        return {
          icon: <WifiOff className="w-4 h-4 text-red-400" />,
          tooltip: "Disconnected - working offline",
        };
      case "connecting":
        return {
          icon: <Circle className="w-4 h-4 text-yellow-400 animate-pulse" />,
          tooltip: "Connecting to LytCode Cloud...",
        };
      default:
        return {
          icon: <Circle className="w-4 h-4 text-gray-400" />,
          tooltip: "Connection status unknown",
        };
    }
  };

  const { icon, tooltip } = getStatus();

  return (
    <TooltipWrapper content={tooltip}>
      <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
        {icon}
      </button>
    </TooltipWrapper>
  );
}
