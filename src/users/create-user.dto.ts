// src/users/dto/create-user.dto.ts
export class CreateUserDto {
  readonly username: string;
  readonly password: string;
  readonly email?: string;
}
