import React from "react";
import { graphql, Link } from "gatsby";
import { Link as ChakraLink } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

const RecipePage = ({
  data: {
    gcms: { recipe },
  },
}) => (
  <React.Fragment>
    <h2>{recipe.title}</h2>
    <quote>{recipe.author.name}</quote>
    <ul>
      {recipe.ingredients.map((ing) => (
        <li key={ing}>{ing}</li>
      ))}
    </ul>
    <h3>Leírás</h3>
    <p>{recipe.description}</p>
    <h3>Elkészítés</h3>
    <ReactMarkdown>{recipe.recipe}</ReactMarkdown>
    <Link to="/">
      <ChakraLink color="teal.500">Vissza az összes recepthez</ChakraLink>
    </Link>
  </React.Fragment>
);

export const pageQuery = graphql`
  query RecipePageQuery($id: ID!) {
    gcms {
      recipe(where: { id: $id }) {
        title
        author {
          name
        }
        ingredients
        recipe
        description
      }
    }
  }
`;

export default RecipePage;
