import Icon from '../ui/Icon';
import { TeacherProps as TeacherInfoTopProps } from '@/types';

const TeacherInfoTop = ({ teacher }: TeacherInfoTopProps) => {
  const { name, surname, lessons_done, rating, price_per_hour } = teacher;
  return (
    <div className="mb-8 flex justify-between">
      <div>
        <p className="mb-2 font-medium text-lightGrey text-base/4">Languages</p>
        <p className="font-medium text-2xl/6">
          {name} {surname}
        </p>
      </div>
      <div className="flex gap-16">
        <ul className="font-medium flex text-base/4 h-4">
          <li className="pr-4 flex gap-2 border-r border-blackLight">
            <Icon
              className="fill-none stroke-black"
              id="icon-book"
              w={16}
              h={16}
            />
            Lessons online
          </li>
          <li className="px-4 border-r border-blackLight">
            Lessons done: {lessons_done}
          </li>
          <li className="px-4 flex gap-2 border-r border-blackLight">
            <Icon id="icon-star" w={16} h={16} />
            Rating: {rating}
          </li>
          <li className="pl-4">
            Price / 1 hour:{' '}
            <span className="text-accentGreen">{price_per_hour}&#36;</span>
          </li>
        </ul>
        <Icon
          className="fill-none stroke-black"
          id="icon-heart"
          w={20}
          h={20}
        />
      </div>
    </div>
  );
};

export default TeacherInfoTop;
