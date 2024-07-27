import { Controller, Get } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller({})
export class TasksController{
    /*
        The constructor is the first function of the module to be executed
    */
    constructor(private tasksService: TasksService){
    }

    @Get('/tasks')
    getAllTasks(){
       return this.tasksService.getTasks();
    }
}