import React from "react";
import { signInWithPopup } from "firebase/auth";
const SignIn = (props) => {
  return (
    <>
      <button
        style={{
          backgroundColor: "aquamarine",
          padding: "5px",
          paddingInline: "20px",
          margin: "auto",
          borderRadius: "5px",
          border: "2px solid black",
          fontWeight: "bold",
        }}
        onClick={() => {
          signInWithPopup(props.auth, props.provider)
            .then((result) => {
              console.log("Logged In!", result);
            })
            .catch((error) => {
              console.log("Error Bruh");
            });
        }}
      >
        Sign In
      </button>
    </>
  );
};

export default SignIn;
