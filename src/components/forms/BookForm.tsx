'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../ui/Input';
import { BookFormData, bookFormSchema } from '@/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../ui/Button';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { useSelectedTeacher } from '@/hooks';

const BookForm = () => {
  const teacher = useSelectedTeacher();

  const { handleSubmit, control, reset } = useForm<BookFormData>({
    resolver: zodResolver(bookFormSchema),
    defaultValues: {
      reason: 'career',
      name: '',
      email: '',
      number: '',
    },
  });

  const onSubmit: SubmitHandler<BookFormData> = data => {
    toast.success('The form has been successfully submitted');
    reset();
  };

  return (
    <div>
      <h2 className="mb-5 font-medium text-[40px]/12 tracking-tight">
        Book trial lesson
      </h2>
      <p className="mb-5 max-w-118 text-base/5.5 text-textColor">
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <div className="mb-10 flex gap-3.5">
        <Image
          className="rounded-full"
          src={teacher?.avatar_url ?? '/teacher.png'}
          alt={teacher?.name ?? 'teacher'}
          width="44"
          height="44"
        />
        <div>
          <p className="mb-1 font-medium text-xs text-lightGrey">
            Your teacher
          </p>
          <p className="font-medium">
            {teacher?.name} {teacher?.surname}
          </p>
        </div>
      </div>

      <p className="mb-5 font-medium text-2xl max-w-118">
        What is your main reason for learning English?
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-10">
          <Input
            control={control}
            type="radio"
            name="reason"
            value="career"
            label="Career and business"
          />
          <Input
            control={control}
            type="radio"
            name="reason"
            value="kids"
            label="Lesson for kids"
          />
          <Input
            control={control}
            type="radio"
            name="reason"
            value="abroad"
            label="Living abroad"
          />
          <Input
            control={control}
            type="radio"
            name="reason"
            value="exams"
            label="Exams and coursework"
          />
          <Input
            control={control}
            type="radio"
            name="reason"
            value="hobby"
            label="Culture, travel or hobby"
          />
        </div>

        <div className="mb-10">
          <Input control={control} name="name" placeholder="Full Name" />
          <Input control={control} name="email" placeholder="Email" />
          <Input control={control} name="number" placeholder="Phone number" />
        </div>
        <Button type="submit" size="xxl">
          Book
        </Button>
      </form>
    </div>
  );
};

export default BookForm;
