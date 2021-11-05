import { Table, Tr, Th, Tbody, Td, Thead, CloseButton } from "@chakra-ui/react";
import { memo } from "react";
import { useUserBookContext } from "../context/userBookContext";

export const View = memo(() => {
  const { books, deleteBook } = useUserBookContext();

  return books.map((book) => (
    <Table
      fontSize={{ base: "8px", md: "15px" }}
      variant="striped"
      colorScheme="blue"
    >
      <Thead>
        <Tr>
          <Th textAlign="center">タイトル</Th>
          <Th textAlign="center">著者</Th>
          <Th textAlign="center"> ジャンル</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr key={book.title}>
          <Td width={{ base: "10px", sm: "120px" }} textAlign="center">
            {book.title}
          </Td>
          <Td width={{ base: "10px", sm: "120px" }} textAlign="center">
            {book.author}
          </Td>
          <Td width={{ base: "10px", sm: "120px" }} textAlign="center">
            {book.genre}
          </Td>
          <Td
            pr="-120px"
            width={{ base: "10px", sm: "120px" }}
            textAlign="center"
          >
            <CloseButton
              color="whiteAlpha.700"
              size="lg"
              bg="gray.300"
              onClick={() => deleteBook(book.title)}
            />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  ));
});
