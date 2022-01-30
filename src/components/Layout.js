import React from "react";
import { Heading } from "@chakra-ui/react";
import { Link } from "gatsby";

export default function Layout({ children }) {
  return (
    <div
      style={{
        margin: `0 auto`,
        width: "92%",
        maxWidth: 800,
        //   padding: `0 1rem`
      }}
    >
      <Link to="/">
        <Heading color={"teal.500"} textAlign={"center"} m={"1.8rem 0"}>
          BÁLINT RECEPTEK
        </Heading>
      </Link>
      {children}
    </div>
  );
}
