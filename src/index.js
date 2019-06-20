// require('dotenv').config({ path: 'variables.env' });
import env from 'dotenv';
import createServer from './createServer';
import db from './db';

const server = createServer();
env.config();

// TODO Use express middlware to handle cookies (JWT)
// TODO Use express middlware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`Server is now running on port http:/localhost:${deets.port}`);
  }
);
