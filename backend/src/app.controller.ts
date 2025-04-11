import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEnvTest(): string {
    return `.env 테스트 : ${process.env.DATABASE_NAME}`;
  }
}
