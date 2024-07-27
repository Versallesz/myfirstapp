import { Controller, Get } from "@nestjs/common";

@Controller({})
export class TasksController{

    @Get('/tasks')
    getAllTasks(){
        //add logic
        return "Get all tasks";
    }
}