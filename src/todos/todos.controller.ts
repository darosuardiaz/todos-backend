import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { CompleteTodoDto } from './dto/complete-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() body: CreateTodoDto) {
    return this.todosService.create(body);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(+id);
  }
  
  @Put()
  complete(@Body() body: CompleteTodoDto) {
    return this.todosService.complete(body.todoIds);
  }
  

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todosService.delete(+id);
  }
}
