import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/404')
  getHello() {
    return {statuscode: 404, message: 'This URL does not exist'};
  }
}
