import { useEffect, useState } from "react";

interface MessageProps {
  text: string;
  delay?: number;
}

export default function Message({ text, delay = 0 }: MessageProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`${
        show ? "animate-slide-in z-50" : "translate-x-full -z-50"
      } presenter-message`}
    >
      {text}
    </div>
  );
}
