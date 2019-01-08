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
    client: Client
  }
`);

export default schema;
