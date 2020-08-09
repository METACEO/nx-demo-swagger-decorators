import { Controller, Post, Body } from '@nestjs/common';
import { MessageRequest, MessageResponse } from '@nx-demo-swagger-decorators/api-interfaces';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {

  @ApiResponse({
    description: 'Return the provided message array with a timestamp.',
    type: MessageResponse
  })
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
