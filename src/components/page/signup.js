import { memo, useRef } from "react";
import { useUserContext } from "../../context/userContext";

import {
  Button,
  FormLabel,
  FormControl,
  Input,
  Box,
  Stack,
  Center,
} from "@chakra-ui/react";
import { Header } from "../../page-parts/header";

export const Signup = memo(() => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <>
      <Header />
      <form onSubmit={onSubmit}>
        <Center h="100vh">
          <Box
            rounded={"lg"}
            boxShadow={"lg"}
            p={8}
            width="500px"
            mx="auto"
            bg="whiteAlpha.500"
            pb="80px"
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" ref={emailRef} />
              </FormControl>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="name" ref={nameRef} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" ref={psdRef} />
              </FormControl>
              <Button type="submit" colorScheme="blue">
                登録
              </Button>
            </Stack>
          </Box>
        </Center>
      </form>
    </>
  );
});
