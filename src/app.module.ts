// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/user.entity';
import { Task } from './tasks/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // або ваш хост
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'todo',
      entities: [User, Task],
      synchronize: true, // Не використовувати в продакшені
    }),
    UsersModule,
    TasksModule,
  ],
})
export class AppModule { }
