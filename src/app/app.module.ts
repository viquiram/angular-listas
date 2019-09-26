import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaAComponent } from './lista-a/lista-a.component';
import { ListaBComponent } from './lista-b/lista-b.component';
import { ListaBItemComponent } from './lista-b-item/lista-b-item.component';
import { ListaCComponent } from './lista-c/lista-c.component';
import { ListaCItemComponent } from './lista-c-item/lista-c-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAComponent,
    ListaBComponent,
    ListaBItemComponent,
    ListaCComponent,
    ListaCItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
