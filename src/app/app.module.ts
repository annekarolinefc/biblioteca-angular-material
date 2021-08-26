import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//IMPORTANDO MÓDULO DE BOTÃO DO MATERIAL ANGULAR
import {MatButtonModule} from '@angular/material/button';
//IMPORTANDO MÓDULO DE ICONES
import{ MatIconModule } from '@angular/material/icon'
//IMPORTANDO MÓDULO DE FORMULÁRIOS
import {MatFormFieldModule} from '@angular/material/form-field';
import{ MatInputModule } from '@angular/material/input'
//IMPORTANDO UM MÓDULO DE TOOLBAR
import {MatToolbarModule} from '@angular/material/toolbar';
//IMPORTANDO MÓDULO DE TABELA
import {MatTableModule} from '@angular/material/table';
//IMPORTANDO MODULO DE PAGINAÇÃO
import {MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
