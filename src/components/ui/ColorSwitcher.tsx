'use client';

import { useColorStore } from '@/stores/useColorStore';
import { IoColorPalette } from 'react-icons/io5';

export default function ColorSwitcher() {
  const next = useColorStore(state => state.next);
  const { fillFirst } = useColorStore(state => state.colors);

  return (
    <button
      onClick={next}
      className="fixed right-5 bottom-10 hover:opacity-75 transition-opacity duration-250"
    >
      <IoColorPalette className={`${fillFirst}`} size={35} />
    </button>
  );
}
