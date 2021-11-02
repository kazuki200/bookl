import { Box, Flex } from "@chakra-ui/react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <Box boxShadow={"md"} bg="whiteAlpha.500" w="100%" p={{ base: "1", sm: "17", md: "19" }}>
      <Flex fontSize={{ base: "20px", sm: "30", md: "40px" }} align="center">
        <Box mr={{ base: "30px", sm: "40px", md: "60px" }} ml="40px">
          <FontAwesomeIcon icon={faBookOpen} />
        </Box>
        <Box>My</Box>
        <Box color="#85A7E6">Book</Box>
        <Box>List</Box>
      </Flex>
    </Box>
  );
};
