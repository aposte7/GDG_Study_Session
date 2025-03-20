import { useEffect, useRef } from "react";

function useCharacterCount(message) {
  const hasShownApproachingAlert = useRef(false);
  const hasShownLimitAlert = useRef(false);

  useEffect(() => {
    if (message.length > 180 && message.length < 200) {
      if (!hasShownApproachingAlert.current) {
        alert("Approaching character limit!");
        hasShownApproachingAlert.current = true;
      }
    } else if (message.length === 200) {
      if (!hasShownLimitAlert.current) {
        alert("Character limit exceeded!");
        hasShownLimitAlert.current = true;
      }
    } else {
      hasShownApproachingAlert.current = false;
      hasShownLimitAlert.current = false;
    }
  }, [message]);
}

export default useCharacterCount;
