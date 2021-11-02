import { memo, useState } from "react";
import { Signin } from "./signin";
import { Signup } from "./signup";

const Auth = memo(() => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };

  return (
    <div>
      {!index ? <Signin /> : <Signup />}
      <p onClick={toggleIndex}>
        {!index ? (
          <p
            style={{
              cursor: "pointer",
              margin: "12px",
              color: "#5195cb",
              margin: "auto",
              width: "130px",
              position: "relative",
              bottom: "250px",
            }}
          >
            新規ユーザー登録
          </p>
        ) : (
          <p
            style={{
              cursor: "pointer",
              margin: "12px",
              color: "#5195cb",
              margin: "auto",
              width: "250px",
              position: "relative",
              bottom: "250px",
            }}
          >
            すでにアカウントはお持ちですか?
          </p>
        )}
      </p>
    </div>
  );
});

export default Auth;
