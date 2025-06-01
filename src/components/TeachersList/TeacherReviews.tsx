import Image from 'next/image';
import Icon from '../ui/Icon';

const TeacherReviews = () => {
  return (
    <ul className="mb-8">
      <li className="font-medium not-last:mb-8">
        <div className="mb-4 flex gap-x-3">
          <Image
            className="rounded-full"
            src="/teacher.png"
            alt="teacher"
            width="44"
            height="44"
          />
          <div>
            <p className="mb-0.5 text-lightGrey">Frank</p>
            <p className="flex items-center gap-2">
              <Icon id="icon-star" w={16} h={16} />
              <span className="text-sm/4.5">4.0</span>
            </p>
          </div>
        </div>
        <p>Jane&#39;s lessons were very helpful. I made good progress.</p>
      </li>
      <li className="font-medium not-last:mb-8">
        <div className="mb-4 flex gap-x-3">
          <Image
            className="rounded-full"
            src="/teacher.png"
            alt="teacher"
            width="44"
            height="44"
          />
          <div>
            <p className="mb-0.5 text-lightGrey">Frank</p>
            <p className="flex items-center gap-2">
              <Icon id="icon-star" w={16} h={16} />
              <span className="text-sm/4.5">4.0</span>
            </p>
          </div>
        </div>
        <p>Jane&#39;s lessons were very helpful. I made good progress.</p>
      </li>
    </ul>
  );
};

export default TeacherReviews;
