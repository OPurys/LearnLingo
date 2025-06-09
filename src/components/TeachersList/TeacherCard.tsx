import { TeacherProps as TeacherCardProps } from '@/types';
import TeacherAvatar from './TeacherAvatar';
import TeacherDetails from './TeacherDetails';
import TeacherInfoBottom from './TeacherInfoBottom';
import TeacherInfoTop from './TeacherInfoTop';

const TeacherCard = ({ teacher }: TeacherCardProps) => {
  return (
    <li className="w-296 p-6 bg-white rounded-3xl grid grid-cols-[120px_968px] gap-12 not-last:mb-8">
      <TeacherAvatar teacher={teacher} />
      <div>
        <TeacherInfoTop teacher={teacher} />
        <TeacherInfoBottom teacher={teacher} />
        <TeacherDetails teacher={teacher} />
      </div>
    </li>
  );
};

export default TeacherCard;
