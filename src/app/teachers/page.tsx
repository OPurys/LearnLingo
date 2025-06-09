'use client';

import TeachersList from '@/components/TeachersList/TeachersList';
import useTeachersStore from '@/stores/teachersStore';
import { useEffect } from 'react';

const TeachersPage = () => {
  const fetchTeachers = useTeachersStore(state => state.fetchTeachers);

  useEffect(() => {
    const unsubscribe = fetchTeachers();
    return () => unsubscribe();
  }, [fetchTeachers]);
  return (
    <main className="pt-5 pb-24 px-32 bg-bgGrey grid place-items-center">
      <section>
        <TeachersList />
      </section>
    </main>
  );
};

export default TeachersPage;
