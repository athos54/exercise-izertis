const { ApolloServer, gql } = require('apollo-server');
const { default: axios } = require('axios');
const {getPosts, getPost} = require('./services/posts')

const main = async () => {
    const typeDefs = gql`
      type Query {
        post(id:String): PostDetail
        posts: [Post]
      }
      type Post{
          id: ID!
          body: String
          title: String
          userId: Int
      }
      type PostDetail{
          id: ID!
          body: String
          title: String
          user: User
          comments: [Comment]
      }
      type Geo{
          lat: Float
          lng: Float
      }
      type Company{
          bs: String
          catchPhrase: String
          name: String
      }
      type Address{
          city:String
          geo: Geo
          street: String
          suite: String
          zipcode: String
      }
      type User{
          address: Address
          company: Company
          email: String
          id: ID!
          name: String
          phone: String
          username: String
          website: String
      }
      type Comment{
          body: String
          email: String
          id: ID!
          name: String
          postId: Int
      }
    `;

    const resolvers = {
        Query: {
            posts: async () => {
                const results = await getPosts()
                return await getPosts()
            },
            post: async (parent, args, context, info) => {
                return await getPost(args.id)
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

}

main()