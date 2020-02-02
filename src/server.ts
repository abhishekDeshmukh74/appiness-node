import express from 'express';
import debug from 'debug';
import 'module-alias/register';

import { Middlewares } from './config/middlewares/middlewares';
import { BaseRoutes } from './config/routes/base.routes';

class Server {

  public app: express.Application = express();
  public router: express.Router = express.Router();

  constructor() {
    this.initDebug();
    this.configMiddleware();
    this.configRoutes();
    this.startServer();
  }

  private initDebug() {
    debug('server');
  }

  private configMiddleware() {
    new Middlewares(this.app);
  }

  private configRoutes() {
    this.app.use('/api', this.router);
    new BaseRoutes(this.router);
  }

  private startServer() {
    this.app.set('port', process.env.PORT || 3000);

    this.app.listen(this.app.get('port'), () => {
      console.log(`server started on port ${this.app.get('port')}`);
    });
  }
}

new Server();
