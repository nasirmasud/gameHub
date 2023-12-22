import { HStack, Image, Text } from '@chakra-ui/react';
import logoD from '../assets/logo-d.webp';

const NavBar = () => {
  return (
    <HStack>
      <Image src={logoD} boxSize="64px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
