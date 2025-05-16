import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: '*', // Permite cualquier origen en desarrollo. En producción, usa la URL del frontend (ej. 'http://localhost:4000')
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('API Documentation Video Recording')
    .setDescription('Api documentation')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  const theme = new SwaggerTheme();

  const options = {
    explorer: true,
    customCss: theme.getBuffer(SwaggerThemeNameEnum.MONOKAI),
  };

  SwaggerModule.setup('api', app, documentFactory, options);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();