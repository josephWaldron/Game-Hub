import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import lightLogo from "../assets/logo_dark.png";
import darkLogo from "../assets/logo_light.png";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const logoSrc = useColorModeValue(darkLogo, lightLogo);
  return (
    <HStack padding="10px">
      <Image src={logoSrc} boxSize="100px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
