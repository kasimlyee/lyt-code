"use client";

import { Users } from "lucide-react";
import { TooltipWrapper } from "@/components/ui/tooltip";
import { useCollaboration } from "@/hooks/useCollaboration";

export function CollaborationIndicator() {
  const { collaborators } = useCollaboration();

  return (
    <TooltipWrapper
      content={`${collaborators.length} active collaborator${collaborators.length !== 1 ? "s" : ""}`}
    >
      <div className="relative">
        <Users className="w-4 h-4 text-gray-400 hover:text-green-400" />
        {collaborators.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {collaborators.length}
          </span>
        )}
      </div>
    </TooltipWrapper>
  );
}
