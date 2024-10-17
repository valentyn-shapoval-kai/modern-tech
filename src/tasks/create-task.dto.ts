// src/tasks/dto/create-task.dto.ts
export class CreateTaskDto {
  readonly title: string;
  readonly description?: string;
  readonly dueDate?: string;
  readonly priority?: string;
  readonly userId: string;
}
