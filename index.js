import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (request, response) => {
  response.send('It is ok');
})

class Client {
  constructor(id, {name, lastName, company, email}) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.company = company;
    this.email = email;
  }
}

const clientDB = {};

const root = {
  client: () => {
    return {
      id: 15637,
      name: "Georgge",
      lastName: "Garcia",
      company: "CosmoCode",
      email: "georgge.dev@gmail.com"
    }
  },
  createClient: ({input}) => {
    const id = require('crypto').randomBytes(10)
      .toString('hex');

    clientDB[id] = input;
    return new Client(id, input);
  }
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8000, () => console.log('Server is running'));
