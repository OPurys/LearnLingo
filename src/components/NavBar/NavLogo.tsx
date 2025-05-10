import Link from 'next/link';
import Icon from '../ui/Icon';

const NavLogo = () => {
  return (
    <div>
      <Link className="flex items-center gap-2" href="/">
        <Icon id="icon-ukraine" w={28} h={28} />
        <span className="font-medium text-xl/6">LearnLingo</span>
      </Link>
    </div>
  );
};

export default NavLogo;
