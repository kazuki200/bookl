import { memo } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Center,
  Box,
  CloseButton,
} from "@chakra-ui/react";

export const Tableadd = memo(() => {
  return (
    <Center mt="80px" mb="200px">
      <Box w={{ base: "100%", md: "800px" }}>
        <Table
          fontSize={{ base: "10px", md: "15px" }}
          variant="striped"
          colorScheme="blue"
        >
          <Thead>
            <Tr>
              <Th>タイトル</Th>
              <Th>著者</Th>
              <Th>評価</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1からの流通論</Td>
              <Td>岸本哲也</Td>
              <Td>星</Td>
              <Td>
                <CloseButton color="whiteAlpha.700" size="lg" bg="gray.300" />
              </Td>
            </Tr>
            <Tr>
              <Td>1からの流通論</Td>
              <Td>岸本哲也</Td>
              <Td>星</Td>
              <Td>
                <CloseButton color="whiteAlpha.700" size="lg" bg="gray.300" />
              </Td>
            </Tr>
            <Tr>
              <Td>1からの流通論</Td>
              <Td>岸本哲也</Td>
              <Td>星</Td>
              <Td>
                <CloseButton color="whiteAlpha.700" size="lg" bg="gray.300" />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Center>
  );
});
