import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { environment } from '../environments/environment';
import { AppController } from './app.controller';

const productionModules = environment.production
  ? [ ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'nx-demo-swagger-decorators-app'),
    })]
  : [];

@Module({
  imports: [
    ...productionModules
  ],
  controllers: [AppController]
})
export class AppModule {}
