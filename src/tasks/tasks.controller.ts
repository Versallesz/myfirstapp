import { Controller, Get } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller({})
export class TasksController{

    tasksService: TasksService;

    /*
        The constructor is the first function of the module to be executed
    */
    constructor(tasksService: TasksService){
        this.tasksService = tasksService;
    }

    @Get('/tasks')
    getAllTasks(){
       return this.tasksService.getTasks();
    }
}