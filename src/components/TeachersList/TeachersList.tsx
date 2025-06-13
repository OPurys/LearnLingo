import useTeachersStore from '@/stores/teachersStore';
import TeacherCard from './TeacherCard';

const TeachersList = () => {
  const teachers = useTeachersStore(state => state.teachers);
  console.log(teachers);

  return (
    <ul>
      {Object.entries(teachers).map(([id, teacher]) => (
        <TeacherCard key={id} teacher={teacher} />
      ))}
    </ul>
  );
};

export default TeachersList;
