import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 어디서든 process.env 사용 가능
    }),
    TypeOrmModule.forRoot({
      type: 'mysql', // 데이터베이스 유형
      host: 'localhost', // 데이터베이스 호스트
      port: 3306, // MySQL 포트
      username: 'root', // MySQL 사용자명
      password: '6429', // MySQL 비밀번호
      database: 'aws-study', // 사용할 데이터베이스 이름
      entities: [__dirname + '/entities/*.entity{.ts,.js}'], // 엔티티 파일 경로
      logging: true, // ORM이 쿼리를 보여줌
      synchronize: true, // 애플리케이션 실행 시 데이터베이스 스키마를 자동으로 동기화 (개발 중에만 true로 설정, 운영 환경에서는 false로 설정)
      // 서버가 꺼져도 DB연결을 유지해줌
      charset: 'utf8mb4_general_ci', // 이모티콘까지 가능
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
