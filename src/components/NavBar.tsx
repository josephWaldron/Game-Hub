import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const logoSrc = useColorModeValue(
    "../src/assets/logo_light.png",
    "../src/assets/logo_dark.png"
  );
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logoSrc} boxSize="100px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
