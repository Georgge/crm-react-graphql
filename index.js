import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (request, response) => {
  response.send('It is ok');
})

const root = {
  client: () => {
    return {
      id: 15637,
      name: "Georgge",
      lastName: "Garcia",
      company: "CosmoCode",
      emails: [
        {email: "test1@mail.com"},
        {email: "test2@mail.com"}
      ]
    }
  }
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8000, () => console.log('Server is running'));
