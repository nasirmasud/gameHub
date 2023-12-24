import { HStack, Image } from '@chakra-ui/react';
import logoD from '../assets/logo-d.webp';
import SearchInput, { Props } from './SearchInput';
import ThemeSwitcher from './ThemeSwitcher';

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logoD} boxSize="64px" />
      <SearchInput onSearch={onSearch} />
      <ThemeSwitcher />
    </HStack>
  );
};

export default NavBar;
