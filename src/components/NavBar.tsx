import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import lightLogo from "../assets/logo_dark.png";
import darkLogo from "../assets/logo_light.png";

const NavBar = () => {
  const logoSrc = useColorModeValue(darkLogo, lightLogo);
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logoSrc} boxSize="100px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
