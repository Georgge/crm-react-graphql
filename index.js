import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';

const root = resolvers;

const app = express();

app.get('/', (request, response) => {
  response.send('It is ok');
});

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8000, () => console.log('Server is running'));
