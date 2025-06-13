import { useModalStore } from '@/stores/modalStore';
import useTeachersStore from '@/stores/teachersStore';

export const useSelectedTeacher = () => {
  const selectedTeacherId = useModalStore(state => state.selectedTeacherId);
  const teachers = useTeachersStore(state => state.teachers);

  if (!selectedTeacherId) return null;

  return teachers[selectedTeacherId] ?? null;
};
