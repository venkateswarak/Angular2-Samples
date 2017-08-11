import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() parentname: string;
   private logText(value: string): void {
        this.parentname = `${value}`
    }
  @Output() parentnameChange = new EventEmitter();
    change(newName) {
      this.parentnameChange.emit(newName);
    }

  @Input() parentage: string;
  @Output() parentageChange = new EventEmitter();
    change1(newAge) {
      this.parentageChange.emit(newAge);
    }
   
  @Input() parentemail: string;
  @Output() parentemailChange = new EventEmitter();
    change2(newEmail) {
      this.parentemailChange.emit(newEmail);
    }
   
  
    
   
  constructor() { }

  ngOnInit() {
  }

}
