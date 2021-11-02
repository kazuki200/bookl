import { memo, useRef } from "react";
import { useUserContext } from "../../context/userContext";
import {
  Center,
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { Header } from "../../page-parts/header";

export const Signin = memo(() => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };
  return (
    <>
    <Header/>
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
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" ref={psdRef} />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              ログイン
            </Button>
            <Text onClick={forgotPasswordHandler} style={{ cursor: "pointer", color:"#5195cb"}}>
              パスワードをお忘れですか? <br />{" "}
              (メールアドレスを入力後クリックしてください)
            </Text>
          </Stack>
        </Box>
      </Center>
    </form>
    </>
  );
});

export default Signin;
