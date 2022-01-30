import React from "react";
import { graphql, Link } from "gatsby";
import {
  Heading,
  Link as ChakraLink,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { RecipeParagraph } from "../components/Recipe/Ingredients";

import Layout from "../components/Layout";
import { RecipeAuthor } from "../components/Recipe/RecipeAuthor";

const RecipePage = ({
  data: {
    gcms: { recipe },
  },
}) => (
  <Layout>
    {/* TITLE */}
    <Heading size="xl" m={"1rem 0"}>
      {recipe.title}
    </Heading>
    {/* IMAGE */}
    {JSON.stringify(recipe.picture) !== "[]" ? (
      <Image
        mb="1em"
        src={recipe.picture[0].url}
        alt={recipe.title}
        objectFit="cover"
      />
    ) : null}

    {/* AUTHOR */}
    <RecipeAuthor author={recipe.createdBy} />

    <SimpleGrid
      columns={{ sm: 1, md: 2 }}
      gridTemplateColumns={{ sm: "auto", md: "auto 1fr" }}
      spacing={6}
    >
      {/* INGREDIENTS */}
      <RecipeParagraph
        title="Összetevők"
        type="LIST"
        data={recipe.ingredients}
      />

      {/* <Box w={300} h={200} background={"blue"} />
      <Box w={300} h={150} background={"green"} /> */}
      {/* DESCRIPTION */}
      {/* <RecipeParagraph title="Leírás" type="TEXT" data={recipe.description} /> */}
    </SimpleGrid>

    {/* RECIPE */}
    <RecipeParagraph title="Elkészítés" type="MARKDOWN" data={recipe.recipe} />

    {/* BACK BUTTON */}
    <Link to="/">
      <ChakraLink pb="2em" fontWeight="bold" color="teal.500">
        Vissza az összes recepthez
      </ChakraLink>
    </Link>
  </Layout>
);

export const pageQuery = graphql`
  query RecipePageQuery($id: ID!) {
    gcms {
      recipe(where: { id: $id }) {
        title
        picture {
          id
          url
        }
        author {
          name
        }
        createdBy {
          name
          picture
        }
        createdAt
        ingredients
        description
        recipe
        category
      }
    }
  }
`;

export default RecipePage;
