import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import lightLogo from "../assets/logo_dark.png";
import darkLogo from "../assets/logo_light.png";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const logoSrc = useColorModeValue(darkLogo, lightLogo);
  return (
    <HStack padding="10px">
      <Image src={logoSrc} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
