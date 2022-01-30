import React from "react";
import { Avatar, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";

export const RecipeAuthor = ({ author }) => (
  <Flex alignItems={"center"} mb={"2rem"}>
    <Avatar name={author.name} src={author.picture} size="sm" mr={"4"} />
    <Text fontSize={"lg"} fontWeight={"semibold"}>
      {author.name}
    </Text>
  </Flex>
);
