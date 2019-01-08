import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hi: String
  }
`);

export default schema;
