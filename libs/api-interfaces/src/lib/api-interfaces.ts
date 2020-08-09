export class MessageRequest {
  public message: string[];
}

export class MessageResponse {
  public error: string;
  public message: string[];
  public timeStamp: number;
}
