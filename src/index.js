"use strict";

module.exports = {
  register({ strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");

    const extension = () => ({
      typeDefs: `
        type Query {
          post(slug: String!): PostEntityResponse,
          
        }
      `,
      resolvers: {
        Query: {
          post: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;
              const data = await strapi.services["api::post.post"].find({
                filters: { slug: args.slug },
              });
              const response = toEntityResponse(data.results[0]);
              return response;
            },
          },
        },
      },
    });
    extensionService.use(extension);
  },
  async bootstrap({ strapi }) {
    // for(let i =0;i <100;i++){
    //   strapi.entityService.create("api::photo.photo",{
    //     data:{
    //       caption:" Hello",
    //       content:faker.lorem.paragraph(),
    //       image:faker.image.animals(),
    //     }
    //   })
    // }
  },
};
