import {} from "@chakra-ui/react";
import { memo } from "react";
import { HeaderBookList } from "../../page-parts/headerBookList";
import { AddBook } from "../../page-parts/addBook";
import { Tableadd } from "../../page-parts/tableAdd";

export const BookList = memo(() => {
  return (
    <>
      <HeaderBookList />
      <AddBook />
      <Tableadd />
    </>
  );
});
