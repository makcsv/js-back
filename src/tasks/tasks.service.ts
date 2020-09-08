import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "./entities/task.entity";
import {Repository} from "typeorm";

@Injectable()
export class TasksService {
  constructor(
      @InjectRepository(Task)
      private tasksRepository: Repository<Task>,
  ) {}

  getAll() {
    return this.tasksRepository.find();
  }

  async setStatus(id, status) {
    this.tasksRepository.findOne(id).then(
        (task) => {
          task.isComplete = status;
          this.tasksRepository.save(task);
        }
    );
  }
}
