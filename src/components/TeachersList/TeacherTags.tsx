'use client';

import { useColorStore } from '@/stores/useColorStore';

const TeacherTags = () => {
  const { bgFirst } = useColorStore(state => state.colors);

  return (
    <ul className="flex flex-wrap gap-2 font-medium text-sm/4">
      <li className={`px-3 py-2 rounded-[35px] ${bgFirst}`}>#A1 Beginner</li>
      <li
        className={`px-3 py-2 rounded-[35px] ${bgFirst} not-first:bg-transparent not-first:border not-first:border-blackLight`}
      >
        #A2 Elementary
      </li>
      <li
        className={`px-3 py-2 rounded-[35px] ${bgFirst} not-first:bg-transparent not-first:border not-first:border-blackLight`}
      >
        #B1 Intermediate
      </li>
      <li
        className={`px-3 py-2 rounded-[35px] ${bgFirst} not-first:bg-transparent not-first:border not-first:border-blackLight`}
      >
        #B2 Upper-Intermediate
      </li>
    </ul>
  );
};

export default TeacherTags;
