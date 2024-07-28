import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('/tasks')
export class TasksController{
    /*
        The constructor is the first function of the module to be executed
    */
    constructor(private tasksService: TasksService){
    }

    @Get()
    getAllTasks(@Query() query:any){
        console.log(query);
       return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id){
       return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    createTask(@Body() task:any){
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(){
        return this.tasksService.updateTask();
    }

    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus();
    }

    @Delete()
    deleteTask(){
        return this.tasksService.deleteTask();
    }
}