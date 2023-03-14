import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const logoSrc = useColorModeValue("logo_light.png", "logo_dark.png");
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logoSrc} boxSize="200px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
