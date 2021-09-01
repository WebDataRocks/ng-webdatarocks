import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebdatarocksPivotModule } from '../../dist/ng-webdatarocks';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    WebdatarocksPivotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
