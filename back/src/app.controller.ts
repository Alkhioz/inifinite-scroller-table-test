import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/data/:page/:maxnumber')
  async getHello(@Param('page') page, @Param('maxnumber') maxnumber): Promise<any> {
    return await this.appService.getHello(page, maxnumber);
  }
}
