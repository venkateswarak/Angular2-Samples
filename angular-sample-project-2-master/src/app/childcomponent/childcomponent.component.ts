import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  inputs: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }

}
