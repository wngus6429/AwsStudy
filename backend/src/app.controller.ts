import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEnvTest(): string {
    return `.env 테스트 : ${process.env.DATABASE_NAME}`;
  }

  @Get('/health')
  getHealthCheck(): string {
    return 'OK';
  }
  //   1) 가장 간단한 방법: 기본 200 OK 상태로 문자열 반환하기
  // NestJS에서는 리턴값만 던지면 자동으로 200 상태코드를 붙여줍니다.
  // 따라서 굳이 response 객체를 건드릴 필요 없이, 그냥 문자열이나 객체를 리턴하세요:
  // @Get('/health')
  // @HttpCode(HttpStatus.OK)  // 200을 명시
  // getHealthCheck(): string {
  //   return 'OK';
  // }
}
