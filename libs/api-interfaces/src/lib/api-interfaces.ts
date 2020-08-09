import {
  ApiProperty,
  Expose,
  IsNumber,
  IsString
} from './decorators-nest';

export class MessageRequest {
  @ApiProperty()
  @Expose()
  @IsString({ each: true })
  public message: string[];
}

export class MessageResponse {
  @ApiProperty()
  @Expose()
  @IsString()
  public error: string;

  @ApiProperty()
  @Expose()
  @IsString({ each: true })
  public message: string[];

  @ApiProperty()
  @Expose()
  @IsNumber()
  public timeStamp: number;
}
