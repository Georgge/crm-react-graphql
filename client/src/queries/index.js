import gql from 'graphql-tag';

export const CLIENTS_QUERY = gql`{
  getClients {
    name
    id
    company
    lastName
  }
}`;

export const CLIENT_QUERY = gql`
  query  ConsultClient($id: ID){
  getClient(id: $id) {
    name
    id
    lastName
    company
    emails {
      email
    }
    type
  }
}
`;
