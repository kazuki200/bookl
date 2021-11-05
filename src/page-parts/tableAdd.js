import { memo } from "react";
import { Center, Box } from "@chakra-ui/react";
import { useUserBookContext } from "../context/userBookContext";
import { View } from "./View";

export const Tableadd = memo(() => {
  const { books } = useUserBookContext();
  return (
    <Center mt="80px" mb="200px">
      <Box w={{ base: "100%", md: "800px" }}>
        {books.length > 0 && (
          <>
            <View />
          </>
        )}
        <div>
          {books.length < 1 && (
            <div
              style={{
                textAlign: "center",
                fontSize: "24px",
              }}
            >
              本がありません追加してください
            </div>
          )}
        </div>
      </Box>
    </Center>
  );
});
