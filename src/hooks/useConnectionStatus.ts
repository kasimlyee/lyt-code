import { useState, useEffect } from "react";

type ConnectionStatus = "connected" | "disconnected" | "connecting";

export function useConnectionStatus(): ConnectionStatus {
  const [status, setStatus] = useState<ConnectionStatus>("connecting");

  useEffect(() => {
    const timer1 = setTimeout(() => setStatus("connected"), 1000);
    const timer2 = setTimeout(() => setStatus("disconnected"), 10000);
    const timer3 = setTimeout(() => setStatus("connecting"), 15000);
    const timer4 = setTimeout(() => setStatus("connected"), 20000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return status;
}
