import gql from 'graphql-tag';

export const CLIENTS_QUERY = gql`{
  getClients {
    name
    id
    company
  }
}`;
