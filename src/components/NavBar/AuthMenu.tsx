'use client';

import { useModalStore } from '@/stores/modalStore';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { useColorStore } from '@/stores/useColorStore';

const AuthMenu = () => {
  const setModal = useModalStore(state => state.setModal);
  const { stroke } = useColorStore(state => state.colors);

  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={() => setModal('login')}
        className="gap-2"
        type="button"
        size="xs"
        variant="ghost"
      >
        <Icon className={`${stroke}`} id="icon-log-in" w={20} h={20} />
        Log in
      </Button>
      <Button
        onClick={() => setModal('register')}
        type="button"
        size="sm"
        variant="secondary"
      >
        Registration
      </Button>
    </div>
  );
};

export default AuthMenu;
