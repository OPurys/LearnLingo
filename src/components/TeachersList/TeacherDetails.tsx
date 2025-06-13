'use client';

import { useModalStore } from '@/stores/modalStore';
import Button from '../ui/Button';
import TeacherReviews from './TeacherReviews';
import TeacherTags from './TeacherTags';
import { useState } from 'react';
import { TeacherProps as TeacherDetailsProps } from '@/types';

const TeacherDetails = ({ teacher }: TeacherDetailsProps) => {
  const { experience } = teacher;
  const setModal = useModalStore(state => state.setModal);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <details className="group mb-8" onToggle={() => setIsOpen(true)}>
        <summary className="cursor-pointer list-none font-medium underline group-open:hidden">
          Read more
        </summary>
        <p className="mb-8">{experience}</p>
        <TeacherReviews teacher={teacher} />
      </details>
      <TeacherTags teacher={teacher} />
      {isOpen && (
        <Button
          className="mt-8"
          type="button"
          size="lg"
          onClick={() => setModal('book', teacher.id)}
        >
          Book trial lesson
        </Button>
      )}
    </div>
  );
};

export default TeacherDetails;
