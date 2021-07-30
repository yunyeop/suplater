import express from "express";
import { createServer } from "http";
import cors from 'cors';
import router from "./routes";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV == 'production' ? '.env' : '.env.dev'
  ),
});

process.env.NODE_ENV = ( process.env.NODE_ENV && ( process.env.NODE_ENV ).trim().toLowerCase() == 'production' ) ? 'production' : 'development';

const app: express.Application = express();
const server = createServer(app);

app.use(cors());
app.use('/', router);

server.listen(process.env.PORT, () => {
  console.info(`ON ${process.env.PORT}`);
});

export default server;
