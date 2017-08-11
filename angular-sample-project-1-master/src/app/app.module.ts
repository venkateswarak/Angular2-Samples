import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ChildComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }