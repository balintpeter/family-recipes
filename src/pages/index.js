import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { InputGroup, InputLeftElement, Input, VStack } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import RecipeCard from "../components/Recipe/RecipeCard";
import Layout from "../components/Layout";

const pageQuery = graphql`
  query MyQuery {
    gcms {
      recipes {
        title
        slug
        description
        category
      }
    }
  }
`;

const IndexPage = () => {
  const {
    gcms: { recipes },
  } = useStaticQuery(pageQuery);

  return (
    <Layout>
      <InputGroup size="lg">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.400" />}
        />
        <Input type="text" placeholder="Recept keresése..." mb={"0.6rem"} />
      </InputGroup>
      <VStack spacing={4} width={"100%"}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </VStack>
    </Layout>
  );
};

export default IndexPage;
