import { Router } from 'express';
import books from '@topup-mama/modules/books/api';
import characters from '@topup-mama/modules/characters/api';

class ApiV1 {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  public init(): Router {
    books(this.router);
    characters(this.router);
    return this.router;
  }
}

export default ApiV1;
