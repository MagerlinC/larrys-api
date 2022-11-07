import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

const MESSAGE_KEY = 'message';

class MessageDTO {
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('message')
  postMessage(@Body() messageDTO: MessageDTO): string {
    return this.appService.getResponse(messageDTO.message);
  }
}
