import { useState } from 'react';

export const useShowPassword = (): [boolean, () => void] => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(prev => !prev);

  return [show, toggleShow];
};
