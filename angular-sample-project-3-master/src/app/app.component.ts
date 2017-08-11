import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private log: string ='';

    private logText(value: string): void {
        this.log = `${value}`
    }
}
