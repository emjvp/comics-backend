import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicsController } from './comics/controllers/comics.controller';
import { ComicsService } from './comics/services/comics/comics.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot()
  ],
  controllers: [AppController, ComicsController],
  providers: [AppService, ComicsService],
})
export class AppModule {}
