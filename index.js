import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('It is ok');
})

app.listen(8000, () => console.log('Server is running'));
