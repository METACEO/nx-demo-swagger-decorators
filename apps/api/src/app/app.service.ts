import { Injectable } from '@nestjs/common';
import { Message } from '@nx-demo-swagger-decorators/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
