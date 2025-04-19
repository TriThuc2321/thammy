import { useEffect } from "react";

type UseClickOutsideProps = {
  ref: React.RefObject<HTMLDivElement | null>;
  callback: () => void;
};
export const useClickOutside = ({ ref, callback }: UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
