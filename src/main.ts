import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: /* true */ { origin: 'http://localhost:3001' } });
  await app.listen(3000);
}

bootstrap();
