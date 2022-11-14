import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

class MessageDTO {
  message: string;
}

class Response {
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHomePage() {
    return "Hi there, I'm Definitely Larry. You should POST a message to me at /message";
  }

  @Post('message')
  postMessage(@Body() messageDTO: MessageDTO): Response {
    const message = this.appService.getResponse(messageDTO.message);
    return { message: message };
  }
}
