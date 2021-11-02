import { memo } from "react";
import {
  Center,
  Box,
  Stack,
  Flex,
  Text,
  Input,
  FormControl,
  FormLabel,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { useUserContext } from "../context/userContext";
import ReactStars from "react-stars";

export const AddBook = memo(() => {
  const { user } = useUserContext();
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <Center mt="80px">
      <Box
        p="30px"
        w={{ base: "100%", md: "800px" }}
        h="450px"
        bg="whiteAlpha.500"
        borderRadius="lg"
        boxShadow="lg"
      >
        <Stack spacing={8}>
          <Flex position="relative" bottom="8">
            <Text color="blue.500">UserName:</Text>
            <Text>{user.displayName}</Text>
          </Flex>
          <FormControl w={{ base: "100%", md: "500px" }}>
            <FormLabel>タイトル</FormLabel>
            <Input />
          </FormControl>
          <FormControl w={{ base: "100%", md: "500px" }}>
            <FormLabel>著者</FormLabel>
            <Input />
          </FormControl>
          <ReactStars w="90%" count={5} onchange={ratingChanged} size={40} />
        </Stack>
        <Flex justifyContent={{ base: "center", md: "flex-end" }} w="100%">
          <Button
            size="md"
            w="100px"
            _focus={{ boxShadow: "none" }}
            colorScheme="blue"
          >
            追加
          </Button>
        </Flex>
      </Box>
    </Center>

   
  );
});
