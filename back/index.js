const { ApolloServer, gql } = require("apollo-server");
const { default: axios } = require("axios");
const {
  getPosts,
  getPost,
  getUsers,
  updatePost,
  createPost,
} = require("./services/misc");

const main = async () => {
  const typeDefs = gql`
    type Query {
      post(id: String): PostDetail
      posts(userId: String): [Post]
      users: [User]
    }
    type Mutation {
      createPost(userId: String, title: String, body: String): Post
      updatePost(id: String!, userId: String, title: String, body: String): Post
      deletePost(id: String!): Post
    }

    type Post {
      id: ID!
      body: String
      title: String
      userId: Int
    }
    type PostDetail {
      id: ID!
      body: String
      title: String
      user: User
      comments: [Comment]
    }
    type Geo {
      lat: Float
      lng: Float
    }
    type Company {
      bs: String
      catchPhrase: String
      name: String
    }
    type Address {
      city: String
      geo: Geo
      street: String
      suite: String
      zipcode: String
    }
    type User {
      address: Address
      company: Company
      email: String
      id: ID!
      name: String
      phone: String
      username: String
      website: String
    }
    type Comment {
      body: String
      email: String
      id: ID!
      name: String
      postId: Int
    }
  `;

  const resolvers = {
    Query: {
      posts: async (parent, args, context, info) => {
        let result = [];
        if (args.userId) {
          results = await getPosts(args.userId);
        } else {
          results = await getPosts();
        }
        return results;
      },
      post: async (parent, args, context, info) => {
        return await getPost(args.id);
      },
      users: async () => {
        return await getUsers();
      },
    },
    Mutation: {
      createPost: async (parent, args, context, info) => {
        const result = await updatePost(args);
        return result;
      },
      updatePost: async (parent, args, context, info) => {
        const result = await updatePost(args);
        return result;
      },
      deletePost: async (parent, args, context, info) => {
        const result = await deletePost(args);
        return result;
      },
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

main();
