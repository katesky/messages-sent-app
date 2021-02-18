import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'messages-sent-app';
  data: string[] = [];
  onSendData(data){
    this.data.push( data);
  }
  
}
