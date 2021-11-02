import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Flex,
  Button,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  CloseButton,
  Center,
} from "@chakra-ui/react";
import { useUserContext } from "../context/userContext";
import { HamburgerIcon } from "@chakra-ui/icons";

export const HeaderBookList = () => {
  const { logoutUser, user } = useUserContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      boxShadow={"md"}
      bg="whiteAlpha.500"
      w="100%"
      p={{ base: "6", md: "19" }}
    >
      <Flex
        fontSize={{ base: "25px", md: "40px" }}
        align="center"
        justifyContent="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <Flex>
          <Box mr={{ base: "30px", md: "60px" }} ml="40px">
            <FontAwesomeIcon icon={faBookOpen} />
          </Box>
          <Box>My</Box>
          <Box color="#85A7E6">Book</Box>
          <Box>List</Box>
        </Flex>
        <Button
          _focus={{ boxShadow: "none" }}
          onClick={logoutUser}
          colorScheme="blue"
        >
          ログアウト
        </Button>
      </Flex>
      <IconButton
        marginY="0"
        marginRight="0"
        marginLeft="auto"
        aria-label="メニューボタン"
        icon={<HamburgerIcon />}
        size="sm"
        variant="unstyled"
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
        _focus={{ boxShadow: "none" }}
      />
      <Drawer placement="left" size="sm" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton _focus={{ boxShadow: "none" }} />
            <DrawerBody p={12} bg="gray.100">
              <Center>
                <Flex fontSize="25px" mr="60px">
                  <Box mr="30px" ml="40px">
                    <FontAwesomeIcon icon={faBookOpen} />
                  </Box>
                  <Box>My</Box>
                  <Box color="#85A7E6">Book</Box>
                  <Box>List</Box>
                </Flex>
              </Center>
              <Button
                _focus={{ boxShadow: "none" }}
                w="100%"
                onClick={logoutUser}
              >
                ログアウト
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};
