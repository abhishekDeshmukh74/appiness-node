import {
  Application, json, urlencoded,
  Request, Response, NextFunction
} from 'express';
import compression from 'compression';
import helmet from 'helmet';

import { CONSTANTS } from '@constants';
import { MongoDB } from './../database/mongoose.connection';
import { requestBodyHandler } from '../error/request-body-handler';

export class Middlewares {

  constructor(app: Application) {
    this.init(app);
  }

  private init(app: Application) {

    this.initHelmet(app);

    this.initBodyParser(app);

    this.connectToDatabase();

    this.setupAccessControlHeaders(app);

    this.initCompression(app);

  }

  initHelmet(app: Application) {
    app.use(helmet());
  }

  initBodyParser(app: Application) {
    app.use(json({ limit: CONSTANTS.BODY_PARSER_PAYLOAD_LIMIT }), requestBodyHandler);
    app.use(urlencoded({ limit: CONSTANTS.BODY_PARSER_PAYLOAD_LIMIT, extended: true }));
  }

  connectToDatabase() {
    new MongoDB(CONSTANTS.MONGODB_URL);
  }

  setupAccessControlHeaders(app: Application) {
    app.use((req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Requested-With, Authorization, source, User-Token');
      next();
    });
  }

  initCompression(app: Application) {
    app.use(compression());
  }

}
