import { IsNotEmpty } from "class-validator";

export class CreateTeamDto {
  @IsNotEmpty()
  country: string;
  @IsNotEmpty()
  name: string;
}
