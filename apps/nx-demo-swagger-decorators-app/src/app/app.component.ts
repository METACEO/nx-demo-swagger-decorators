import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageRequest } from '@nx-demo-swagger-decorators/api-interfaces';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'nx-demo-swagger-decorators-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  response$: Observable<any> = of({ message: 'Click a button above...' });

  constructor(private http: HttpClient) {}

  public postGood() {
    const body = new MessageRequest();
    body.message = ['Hello world!']; // Correct value type
    this.response$ = this.http.post('/api/hello', body);
  }
  public postBad() {
    const body = new MessageRequest();
    body.message = 123 as any; // Incorrect value type
    this.response$ = this.http.post('/api/hello', body);
  }
}
