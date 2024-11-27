import { IsNotEmpty, IsDateString, IsNumber } from "class-validator";

export class CreatePlayerDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  goalCount:number;
  @IsNotEmpty()
  @IsDateString()
  birthDate: Date;
  @IsNotEmpty()
  TeamIdId: number;
}
