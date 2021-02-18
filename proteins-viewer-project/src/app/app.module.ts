import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { ProteinsViewComponent } from './proteins-view/proteins-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalViewComponent,
    ProteinsViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
