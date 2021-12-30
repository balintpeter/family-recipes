exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      gcms: { recipes },
    },
  } = await graphql(`
    {
      gcms {
        recipes(stage: PUBLISHED) {
          id
          slug
        }
      }
    }
  `);

  recipes.forEach(({ id, slug }) => {
    createPage({
      path: `/recipes/${slug}`,
      component: require.resolve(`./src/templates/RecipePage.js`),
      context: {
        id,
      },
    });
  });
};
