import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 80;
  app.enableCors({
    origin: true,
    credentials: true,
  });

  console.log(`Example app listening on port ${port}`);
  await app.listen(80, '0.0.0.0');
}
bootstrap();
