import { HStack, Image, Text } from '@chakra-ui/react';
import logoD from '../assets/logo-d.webp';
import ThemeSwitcher from './ThemeSwitcher';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack>
        <Image src={logoD} boxSize="64px" />
        <Text>NavBar</Text>
      </HStack>
      <ThemeSwitcher />
    </HStack>
  );
};

export default NavBar;
