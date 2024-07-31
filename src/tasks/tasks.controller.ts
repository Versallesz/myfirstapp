import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { CreateTaskDto } from "./dto/create-task.dto";

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
    createTask(@Body() task: CreateTaskDto){
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto){
        return this.tasksService.updateTask(task);
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