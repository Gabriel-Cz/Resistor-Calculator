'use strict';

import dotenv from "dotenv";
import mongoose from "mongoose";
import logger from "./src/utils/logger";
import app from "./src/app";

dotenv.config();

const DB_CONNECTION = process.env.DB_CONNECTION || '';
const PORT = process.env.PORT || 3001;

// Exit on error
mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});

// Mongoose logs in development environment
if (process.env.NODE_ENV !== 'production') {
  mongoose.set('debug', true);
}

let server: any;
mongoose.connect(DB_CONNECTION).then(() => {
  logger.info('Connected to MongoDB');
  server = app.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: any) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);