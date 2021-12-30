module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GraphCMS",
        fieldName: "gcms",
        url: "https://api-eu-central-1.graphcms.com/v2/ckxow8uzb68ih01xp5gcxa0i9/master",
      },
    },
    "@chakra-ui/gatsby-plugin",
  ],
};
