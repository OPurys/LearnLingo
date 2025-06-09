import Image from 'next/image';
import Icon from '../ui/Icon';
import { TeacherProps as TeacherReviewsProps } from '@/types';

const TeacherReviews = ({ teacher }: TeacherReviewsProps) => {
  return (
    <ul className="mb-8">
      {teacher.reviews.map((review, id) => (
        <li key={id} className="font-medium not-last:mb-8">
          <div className="mb-4 flex gap-x-3">
            <Image
              className="rounded-full"
              src="/teacher.png"
              alt={review.reviewer_name}
              width="44"
              height="44"
            />
            <div>
              <p className="mb-0.5 text-lightGrey">{review.reviewer_name}</p>
              <p className="flex items-center gap-2">
                <Icon id="icon-star" w={16} h={16} />
                <span className="text-sm/4.5">{review.reviewer_rating}</span>
              </p>
            </div>
          </div>
          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default TeacherReviews;
