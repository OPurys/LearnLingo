'use client';

import { useModalStore } from '@/stores/modalStore';
import Button from '../components/ui/Button';

export default function Home() {
  const setModal = useModalStore(state => state.setModal);
  return (
    <div>
      <main>
        <Button onClick={() => setModal('register')} size="xs" variant="ghost">
          Log in
        </Button>
      </main>
    </div>
  );
}
