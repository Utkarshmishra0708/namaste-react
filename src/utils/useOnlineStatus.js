import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setoOlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setoOlineStatus(false);
    });

    window.addEventListener("online", () => {
      setoOlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
