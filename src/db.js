// This file connects to the remote prisma db and helps us query it with JS
import {Prisma} from 'prisma-binding';
import env from 'dotenv';

env.config();

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: true
});

export default db;
