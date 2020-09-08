import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { TasksModule } from "../tasks/tasks.module";

@Module({
  imports: [TypeOrmModule.forRoot(), TasksModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
