import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers'

const app = express();
const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({ app });

const port = 4000;

app.listen({port}, () => {
  console.log(`Apollo is listen http://localhost:${port}${server.graphqlPath}`);
});
