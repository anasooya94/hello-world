import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentsComponent } from './textcomponents/textcomponents.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentsComponent,
    ImagecomponentComponent,
    MycomponentComponent,
    EmpInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
