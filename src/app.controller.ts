import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
const MESSAGE_PARAM = 'message';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('response')
  getResponse(@Req() request): string {
    const message = request.query[MESSAGE_PARAM];
    return this.appService.getResponse(message);
  }
}
