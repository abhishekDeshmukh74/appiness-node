import { Router, Request, Response } from 'express';

import { CONSTANTS } from '@constants';
import { taskController } from './../../app/tasks/task.controller';

export class BaseRoutes {

  constructor(router: Router) {
    this.init(router);
    this.init404Routes(router);
  }

  private init(router: Router) {

    router.get('/', (req: Request, res: Response) => {
      res.json({ message: 'Appiness API is working!' });
    });

    // Making the first user who registers, as Admin.
    router.post('/task1', (req: Request, res: Response) => {
      taskController.task1(req, res);
    });

    // When user deletes particular category the associated products should get deleted.
    // Send the deleted records as response.
    router.delete('/task2', (req: Request, res: Response) => {
      taskController.task2(req, res);
    });

    // When listing all categories, print the number of products associated to that category.
    router.get('/task3', (req: Request, res: Response) => {
      taskController.task3(req, res);
    });

  }

  private init404Routes(router: Router) {
    router.use((req: Request, res: Response) => {
      res.status(CONSTANTS.STATUS.NOT_FOUND).json({ message: 'Endpoint not found!' });
    });
  }

}
