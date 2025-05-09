import { useRef, useEffect } from 'react';

export const usePreviousModal = (
  current: string | null,
  isVisible: boolean
) => {
  const previous = useRef<string | null>(null);

  useEffect(() => {
    if (current) {
      previous.current = current;
    }
  }, [current]);

  return isVisible ? previous.current : current;
};
