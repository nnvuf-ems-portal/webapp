import { useState, useEffect } from "react";

export const IsClientComponent = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return <>{isClient && children}</>;
};
