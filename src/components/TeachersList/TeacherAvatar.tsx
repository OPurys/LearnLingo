import Image from 'next/image';
import Icon from '../ui/Icon';
import { TeacherProps as TeacherAvatarProps } from '@/types';

const TeacherAvatar = ({ teacher }: TeacherAvatarProps) => {
  const { avatar_url, surname } = teacher;

  return (
    <div className="relative w-30 h-30 rounded-full border-3 border-lightYellow flex items-center justify-center">
      <Image
        className="rounded-full bg-blue-200"
        src={avatar_url}
        alt={surname}
        width="96"
        height="96"
      />
      <Icon
        className="absolute z-10 top-4 right-5"
        id="icon-online"
        w={12}
        h={12}
      />
    </div>
  );
};

export default TeacherAvatar;
