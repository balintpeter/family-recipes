import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  InputGroup,
  InputLeftElement,
  Input,
  VStack,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import RecipeCard from "../components/RecipeCard";

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
    <React.Fragment>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <VStack width={"92%"} maxWidth={"800px"}>
          <Heading m={"1.4rem 0"}>BÁLINT RECEPTEK</Heading>
          <InputGroup size="lg">
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.400" />}
            />
            <Input type="text" placeholder="Recept keresése..." mb={"0.6rem"} />
          </InputGroup>
          <VStack spacing={4} width={"100%"}>
            {recipes.map((recipe) => (
              <RecipeCard recipe={recipe} />
            ))}
          </VStack>
        </VStack>
      </Flex>
    </React.Fragment>
  );
};

export default IndexPage;
