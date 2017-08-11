import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  private textValue = "";
    private log: string ='';
    private log1: string ='';
    private show: string ='';
    
    

    
    private logCheckbox(element: HTMLInputElement): void {
        this.log1 = `${element.value} - ${element.checked ? !'' : 'false'}\n`
    }
     private list = [
        { id: 1, name: 'one' },
        { id: 2, name: 'two' },
        { id: 3, name: 'three' }
    ];
    private current: number = 2;
    private log2: string ='';

    private logDropdown(id: number): void {
        const NAME = this.list.find( (item: any) => item.id == id ).name;
        this.log2 = `Value ${NAME} was selected`
    };

  
  
      
   
  
 
  constructor() { }

  ngOnInit() {
  }

}
