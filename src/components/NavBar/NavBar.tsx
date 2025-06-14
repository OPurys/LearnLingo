import ColorSwitcher from '../ui/ColorSwitcher';
import AuthMenu from './AuthMenu';
import Navigation from './Navigation';
import NavLogo from './NavLogo';

const NavBar = () => {
  return (
    <header className="mx-auto max-w-296 h-12 flex justify-between items-center">
      <NavLogo />
      <Navigation />
      <ColorSwitcher />
      <AuthMenu />
    </header>
  );
};

export default NavBar;
