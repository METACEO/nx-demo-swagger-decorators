import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class MessageRequest {
  @Expose()
  @IsString({ each: true })
  public message: string[];
}

export class MessageResponse {
  @Expose()
  @IsString()
  public error: string;

  @Expose()
  @IsString({ each: true })
  public message: string[];

  @Expose()
  @IsNumber()
  public timeStamp: number;
}
