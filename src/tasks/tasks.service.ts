import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TasksService {


    private tasks = [];

    getTasks(){
        return this.tasks;
    }

    getTask(id: number){
        const taskFound = this.tasks.find(t => t.id === id);
        console.log(taskFound);
        if(!taskFound){
            return new NotFoundException(`Task with id ${id} not found`)
        }

        return taskFound;
    }

    createTask(task: CreateTaskDto){ 
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        })
        return task;
    }

    updateTask(task: UpdateTaskDto){
        return 'updating task...';
    }

    deleteTask(){
        return 'deleting task...';
    }

    updateTaskStatus(){
        return 'updating task status...';
    }
}