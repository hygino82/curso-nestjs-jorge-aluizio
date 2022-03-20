import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesService } from './courses/courses.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CoursesService],
})
export class AppModule {}
