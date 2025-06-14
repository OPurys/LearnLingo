'use client';

import { useColorStore } from '@/stores/useColorStore';
import { TeacherProps as TeacherTagsProps } from '@/types';

const TeacherTags = ({ teacher }: TeacherTagsProps) => {
  const { bgFirst } = useColorStore(state => state.colors);

  return (
    <ul className="flex flex-wrap gap-2 font-medium text-sm/4">
      {teacher.levels.map((tag, id) => (
        <li
          key={id}
          className={`px-3 py-2 rounded-[35px] ${bgFirst} not-first:bg-transparent not-first:border not-first:border-blackLight`}
        >
          &#35;{tag}
        </li>
      ))}
    </ul>
  );
};

export default TeacherTags;
