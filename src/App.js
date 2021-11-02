import { useUserContext } from "./context/userContext";
import Auth from "./components/page/auth";
import { BookList } from "./components/page/bookList";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./them";
import { Spinner, Center, Flex, Text, Stack } from "@chakra-ui/react";

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        {error && (
          <p
            style={{
              backgroundColor: "tomato",
              color: "white",
              borderRadius: "6px",
              padding: "6px 12px",
              fontWeight: "bold",
              maxWidth: "400px",
              marginBottom: "18px",
              margin: "auto",
              position: "relative",
              top: "180px",
            }}
          >
            {error}
          </p>
        )}
        {loading ? (
          <Center h="100vh">
            <Flex flexDirection="column">
              <Stack spacing={10}>
                <Text fontSize={{base:"35px",md:"65px"}} color="blue.500">
                  Now　Loding
                </Text>
                <Center>
                  <Spinner size="xl" color="blue.500" emptyColor="gray.200" />
                </Center>
              </Stack>
            </Flex>
          </Center>
        ) : (
          <> {user ? <BookList /> : <Auth />} </>
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
