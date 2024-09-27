import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
<<<<<<< HEAD
    return 'Hello World - updated!';
=======
    return 'Hello World!';
>>>>>>> 3c8f49d (new project)
  }
}
