import gql from 'graphql-tag';

export const CLIENTS_QUERY = gql`{
  getClients {
    name
    id
    company
  }
}`;

export const CLIENT_QUERY = gql`
  query  ConsultClient($id: ID){
  getClient(id: $id) {
    name
    id
    lastName
    company
  }
}
`;
