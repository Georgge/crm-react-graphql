import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (request, response) => {
  response.send('It is ok');
})

const root = {
  hi: () => 'Hello world from GraphQl'
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8000, () => console.log('Server is running'));
