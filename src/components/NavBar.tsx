import { HStack, Image } from '@chakra-ui/react';
import logoD from '../assets/logo-d.webp';
import SearchInput from './SearchInput';
import ThemeSwitcher from './ThemeSwitcher';

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logoD} boxSize="64px" />
      <SearchInput />
      <ThemeSwitcher />
    </HStack>
  );
};

export default NavBar;
