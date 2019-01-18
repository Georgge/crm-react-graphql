import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/clients', { useNewUrlParser: true });

// Client schema define

const clientSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  company: String,
  email: String,
  type: String,
  orders: Array,
});

const Clients = mongoose.model('clients', clientSchema);

export { Clients };
