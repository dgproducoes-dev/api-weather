import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://monitoramento.martinello.com.br',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Permite apenas estes métodos HTTP
    allowedHeaders: 'Content-Type, Accept', // Permite apenas estes cabeçalhos
    credentials: true, // Permite o envio de cookies e credenciais de autenticação (se necessário)
  });
  await app.listen(3009);
}
bootstrap();
