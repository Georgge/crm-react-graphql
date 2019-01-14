import mongoose from 'mongoose';
import { Clients } from './db';
import { rejects } from 'assert';

export const resolvers = {
  Query: {
    getClients: (root, {limit}) => {
      return Clients.find({}).limit(limit);
    },

    getClient: ({id}) => {
      return new Client(id, clientDB[id]);
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
    },

    updateClient: (root, {input}) => {
      return new Promise((resolve, object) => {
        Clients.findOneAndUpdate({ _id: input.id }, input, {new: true}, (error, client) => {
          if (error) rejects(error)
          else resolve(client);
        });
      });
    },

    deleteClient: (root, {id}) => {
      return new Promise((resolve, object) => {
        Clients.findOneAndRemove({ _id: id }, (error) => {
          if (error) rejects(error)
          else resolve(`${id} was removed`)
        });
      });
    }
  }
}

export default resolvers;