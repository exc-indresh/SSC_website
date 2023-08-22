import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  HStack,
  Hide,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/ssc-logo.jpg";
import { BsList } from "react-icons/bs";

const Header = () => {
  const navItems = ["Home", "Clubs", "Events", "Teams"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack
      className="navbar-lg fixed-top justify-content-between px-5 overflow-hidden"
      backgroundColor={"rgba(0, 0, 0, 0.5)"}
      height={"44px"}
    >
      <Hide above="sm">
        <IconButton
          backgroundColor={"transparent"}
          color={"white"}
          children={<BsList />}
          _hover={{ backgroundColor: "transparent" }}
          onClick={onOpen}
        />
      </Hide>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={"rgba(0, 0, 0, 0.8)"}>
          <DrawerCloseButton color={"white"} />
          <DrawerHeader borderBottomWidth="1px" color={"white"}>
            <Image src={logo} width={10} />
          </DrawerHeader>
          <DrawerBody>
            {navItems.map((item) => (
              <Button
                variant={"link"}
                width={"100%"}
                size={"lg"}
                color={"white"}
                backgroundColor={"transparent"}
                borderRadius={0}
                padding={"10px 15px"}
                margin={2}
                _hover={{
                  textDecoration: "none",
                  borderBottom: "4px",
                  borderBottomColor: "#FFD54F",
                }}
                transition={"0.1s"}
              >
                {item}
              </Button>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Hide below="sm">
        <Image src={logo} width={"30px"} />
        <HStack className=" justify-content-evenly">
          {navItems.map((item) => (
            <Button
              variant={"link"}
              size={"lg"}
              color={"white"}
              backgroundColor={"transparent"}
              borderRadius={0}
              padding={"10px 15px"}
              margin={2}
              _hover={{
                textDecoration: "none",
                borderBottom: "4px",
                borderBottomColor: "#FFD54F",
              }}
              transition={"0.1s"}
            >
              {item}
            </Button>
          ))}
        </HStack>
      </Hide>
    </HStack>
  );
};

export default Header;
