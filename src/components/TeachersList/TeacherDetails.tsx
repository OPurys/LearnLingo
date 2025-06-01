'use client';

import { useModalStore } from '@/stores/modalStore';
import Button from '../ui/Button';
import TeacherReviews from './TeacherReviews';
import TeacherTags from './TeacherTags';
import { useState } from 'react';

const TeacherDetails = () => {
  const setModal = useModalStore(state => state.setModal);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <details className="group mb-8" onToggle={() => setIsOpen(true)}>
        <summary className="cursor-pointer list-none font-medium underline group-open:hidden">
          Read more
        </summary>
        <p className="mb-8">
          Jane is an experienced and dedicated language teacher specializing in
          German and French. She holds a Bachelor&#39;s degree in German Studies
          and a Master&#39;s degree in French Literature. Her passion for
          languages and teaching has driven her to become a highly proficient
          and knowledgeable instructor. With over 10 years of teaching
          experience, Jane has helped numerous students of various backgrounds
          and proficiency levels achieve their language learning goals. She is
          skilled at adapting her teaching methods to suit the needs and
          learning styles of her students, ensuring that they feel supported and
          motivated throughout their language journey.
        </p>
        <TeacherReviews />
      </details>
      <TeacherTags />
      {isOpen && (
        <Button
          className="mt-8"
          type="button"
          size="lg"
          onClick={() => setModal('book')}
        >
          Book trial lesson
        </Button>
      )}
    </div>
  );
};

export default TeacherDetails;
