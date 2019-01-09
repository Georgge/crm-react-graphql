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

const resolvers = {
  getClient: ({id}) => {
    return new Client(id, clientDB[id])
  },

  createClient: ({input}) => {
    const id = require('crypto').randomBytes(10)
      .toString('hex');

    clientDB[id] = input;
    return new Client(id, input);
  }
};

export default resolvers;