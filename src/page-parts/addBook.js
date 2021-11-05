import { memo, useEffect, useState } from "react";
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
  Select,
} from "@chakra-ui/react";
import { useUserContext } from "../context/userContext";
import { useUserBookContext } from "../context/userBookContext";
import { db } from "../firebase";

import {
  collection,
  getDocs,
  addDoc,
  // deleteDoc,
  doc,
} from "firebase/firestore";

export const AddBook = memo(() => {
  const { user } = useUserContext();

  const {
    title,
    author,
    genre,
    handleAddBookSubmit,
    setTitle,
    setAuthor,
    setGenre,
  } = useUserBookContext();

  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    if (!title || !author || !genre) return;
    await addDoc(usersCollectionRef, {
      title: title,
      author: author,
      genre: genre,
    });
  };

  // const deleteUser = async (id) => {
  //   const userDoc = doc(db, "users", id);
  //   await deleteDoc(userDoc);
  // };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    console.log(doc);
    getUsers();
  }, []);



  return (
    <form onSubmit={handleAddBookSubmit}>
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
              <Input onChange={(e) => setTitle(e.target.value)} value={title} />
            </FormControl>
            <FormControl w={{ base: "100%", md: "500px" }}>
              <FormLabel>著者</FormLabel>
              <Input
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
              />
            </FormControl>
            <FormControl w={{ base: "100px", md: "100px" }}>
              <FormLabel>ジャンル</FormLabel>
              <Select value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option></option>
                <option>文芸</option>
                <option>実用書</option>
                <option>ビシネス書</option>
                <option>絵本、児童書</option>
                <option>学習参考書</option>
                <option>専門書</option>
                <option>コミック、雑誌</option>
              </Select>
            </FormControl>
          </Stack>
          <Flex justifyContent={{ base: "center", md: "flex-end" }} w="100%">
            <Button
              size="md"
              w="100px"
              _focus={{ boxShadow: "none" }}
              colorScheme="blue"
              type="submit"
              onClick={createUser}
            >
              追加
            </Button>
          </Flex>
        </Box>
      </Center>
    </form>
  );
});
