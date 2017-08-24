import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import validator from 'express-validator';
import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';
import UserRouter from './server/routes/users';
import BookRouter from './server/routes/books';

dotenv.load();
const app = express();
const swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Documentation for Hello-Books API',
  },
  host: 'localhost:3000',
  basePath: '/',
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./server/routes/*.js'],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/users', UserRouter);
app.use('/api/v1/books', BookRouter);
app.get('/api', (req, res) => {
  res.header(200);
  res.send('Welcome to Hello-Books API');
});
app.get('/', (req, res) => {
  res.header(200);
  res.end('Welcome!!!!');
});
app.get('/docs', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

const port = process.env.PORT || 3000;
// app.set('port', port);

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
export default app;
