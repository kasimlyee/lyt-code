import { useState, useEffect } from "react";

export function useCollaboration() {
  const [collaborators, setCollaborators] = useState<
    Array<{ id: string; name: string }>
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCollaborators([
        { id: "1", name: "Kasim Lyee" },
        { id: "2", name: "Kevinah Carrie" },
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { collaborators };
}
