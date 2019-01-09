import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Client {
    id: ID
    name: String
    lastName: String
    company: String
    email: String
  }

  type Query {
    getClient(id: ID): Client
  }

  input ClientInput {
    id: ID
    name: String!
    lastName: String
    company: String
    email: String!
  }

  type Mutation {
    createClient(input: ClientInput) : Client
  }
`);

export default schema;
