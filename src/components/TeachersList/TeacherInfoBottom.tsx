import { TeacherProps as TeacherInfoBottomProps } from '@/types';

const TeacherInfoBottom = ({ teacher }: TeacherInfoBottomProps) => {
  const { languages, lesson_info, conditions } = teacher;

  return (
    <ul className="mb-4 font-medium">
      <li className="mb-2">
        <span className="text-lightGrey">Speaks:</span>{' '}
        <span className="underline skip-ink">{languages.join(', ')}</span>
      </li>
      <li className="mb-2">
        <span className="text-lightGrey">Lesson Info:</span> {lesson_info}
      </li>
      <li>
        <span className="text-lightGrey">Conditions:</span>{' '}
        {conditions.join(' ')}
      </li>
    </ul>
  );
};

export default TeacherInfoBottom;
