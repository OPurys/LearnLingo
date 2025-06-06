'use client';

import { useColorStore } from '@/stores/useColorStore';
import { cn } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  const { text } = useColorStore(state => state.colors);

  const getLinkClass = (href: string) => {
    return pathname === href ? `${text}` : '';
  };

  return (
    <nav>
      <ul className="flex items-center gap-7 text-base/5">
        <li>
          <Link
            className={cn(
              'hover:opacity-70 focus:opacity-70 transition-opacity duration-250 py-3.5',
              getLinkClass('/')
            )}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              'hover:opacity-70 focus:opacity-70 transition-opacity duration-250 py-3.5',
              getLinkClass('/teachers')
            )}
            href="/teachers"
          >
            Teachers
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              'hover:opacity-70 focus:opacity-70 transition-opacity duration-250 py-3.5',
              getLinkClass('/favorites')
            )}
            href="/favorites"
          >
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
