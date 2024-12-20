
import { expressMiddleware } from "@apollo/server/express4";
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import  connectDb  from '../config/db';  // Adjust this path according to your structure
import  context  from '../graphql/context';  // Adjust this path according to your structure
import server from '../graphql/index';  

dotenv.config();

const app: Application = express();


const bootstrapServer = async () => {
  await connectDb();
  await server.start();

  app.use(cors({
    origin: ['https://home-quest-mu.vercel.app' ,'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));
  app.options('*', cors());
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/graphql", expressMiddleware(server, { context }));

  // Handle 404 errors - place this at the end of your middleware chain
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send('Not Found');
  });
};

bootstrapServer();

export default app;
