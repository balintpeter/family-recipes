import React from "react";
import { Link } from "gatsby";
import { Box, Heading, Text, Badge } from "@chakra-ui/react";

const RecipeCard = ({ recipe }) => {
  const { slug, title, description, category } = recipe;
  return (
    <React.Fragment key={slug}>
      {/* TODO: LinkOverlay, LinkBox */}
      <Link to={`/recipes/${slug}`} style={{ width: "100%" }}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl" color={"teal.500"}>
            {title}
          </Heading>
          <Text mt={4} mb={2}>
            {description}
          </Text>
          {category.map((cat) => (
            <Badge mr={2} key={cat}>
              {cat}
            </Badge>
          ))}
        </Box>
      </Link>
    </React.Fragment>
  );
};

export default RecipeCard;
