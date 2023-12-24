import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService){}

  create(payload: CreateTodoDto) {
    return this.prisma.todos.create({ data: payload })
  }

  findAll() {
    return this.prisma.todos.findMany({ where: { deleted: false } });
  }

  findOne(todoId: number) {
    return this.prisma.todos.findUnique({ where: { id: todoId } });
  }

  complete(todoIds: number[]) {
    return this.prisma.todos.updateMany({
      where: {id: {in: todoIds}},
      data: { completed: true}
    });
  }

  delete(todoId: number) {
    return this.prisma.todos.update({
      data: { deleted: true },
      where: { id: todoId } 
    });
  }
}
