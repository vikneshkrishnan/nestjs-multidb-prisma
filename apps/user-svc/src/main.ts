import { NestFactory } from '@nestjs/core';
import { UserSvcModule } from './user-svc.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(UserSvcModule);
  const config = new DocumentBuilder()
      .setTitle('User Service')
      .setDescription('User Service API description')
      .setVersion('1.0')
      .addTag('user')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
