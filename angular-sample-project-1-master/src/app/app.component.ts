import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  name = 'Afroz';
  @Output() age = 24;
  @Output() email = 'afroz@gmail.com';
  constructor() {  }
  
    }

