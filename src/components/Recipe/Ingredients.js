import React from "react";
import { Box, Heading, List, ListItem, ListIcon, Text } from "@chakra-ui/react";

import ReactMarkdown from "react-markdown";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const RecipeParagraph = ({ title, type, data }) => {
  let content = "";

  switch (type) {
    case "TEXT":
      content = <Text>{data}</Text>;
      // content = (
      //   <Text>
      //     awffffffffffffffffffffffffffffffffff awfawfawfawf fawfawfawf awfaw
      //     fawfawfawfawfawfawfawfafawffffffffffffffffffffffffffffffffffffffffffff
      //   </Text>
      // );
      break;
    case "LIST":
      content = (
        <List spacing={3}>
          {data.map((ingredient) => (
            <ListItem fontSize="lg" key={ingredient}>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
            </ListItem>
          ))}
        </List>
      );
      break;
    case "MARKDOWN":
      content = <ReactMarkdown>{data}</ReactMarkdown>;
      break;

    default:
      break;
  }

  return (
    <Box mb={5}>
      <Heading size="lg" fontWeight={"semibold"} mb={"3"}>
        {title}
      </Heading>
      {content}
    </Box>
  );
};
