import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PanelComponent } from './panel/panel.component';
import { FooterComponent } from './panel/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PanelComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
