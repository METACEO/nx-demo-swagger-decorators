import { Controller, Post, Body } from '@nestjs/common';
import { MessageRequest, MessageResponse } from '@nx-demo-swagger-decorators/api-interfaces';

@Controller()
export class AppController {
  @Post('hello')
  getData(@Body() body: MessageRequest): MessageResponse {
    const { message } = body;
    const timeStamp = Date.now();
    return {
      error: null,
      message,
      timeStamp
    };
  }
}
