import gql from 'graphql-tag';

export const NEW_CLIENT = gql`
  mutation createClient($input: ClientInput) {
    createClient(input: $input) {
      id
      name
      lastName
    }
  }
`;

export const UPDATE_CLIENT = gql`
  mutation updateClient($input: ClientInput) {
    updateClient(input: $input) {
      id
      name
      lastName
      company
      type
      emails {
        email
      }
    }
  }
`;

export const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id)
  }
`;
