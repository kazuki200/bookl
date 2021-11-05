import { createContext, useContext, useState, useEffect } from "react";

export const UserBookContext = createContext({});

export const useUserBookContext = () => {
  return useContext(UserBookContext);
};

export const getDatafromLS = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const UserBookContextProvider = ({ children }) => {
  const [books, setBooks] = useState(getDatafromLS());

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const deleteBook = (title) => {
    const filterdBooks = books.filter((elemnt, index) => {
      
      return elemnt.title !== title;
    });

    setBooks(filterdBooks);
  };

  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !genre) {
      alert("タイトル、著者、ジャンルいずれかが未入力です");
      return;
    }
    let book = {
      title,
      author,
      genre,
    };

    setBooks([...books, book]);
    setTitle("");
    setAuthor("");
    setGenre("");
  };

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const contextValue = {
    books,
    title,
    author,
    genre,
    setTitle,
    setBooks,
    setGenre,
    setAuthor,
    handleAddBookSubmit,
    deleteBook,
  };
  return (
    <UserBookContext.Provider value={contextValue}>
      {children}
    </UserBookContext.Provider>
  );
};
