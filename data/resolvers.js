import mongoose from 'mongoose';
import { Clients } from './db';
import { rejects } from 'assert';

export const resolvers = {
  Query: {
    getClient: ({id}) => {
      return new Client(id, clientDB[id])
    },
  },
  Mutation: {
    createClient: (root, {input}) => {
      const newClient = new Clients({
        name: input.name,
        lastName: input.lastName,
        company: input.company,
        emails: input.emails,
        type: input.type,
        orders: input.orders,
      });
      newClient.id = newClient._id;
      
      return new Promise((resolve, object) => {
        newClient.save((error) => {
          if (error) rejects(error)
          else resolve(newClient)
        });
      });
    }
  }
}

export default resolvers;