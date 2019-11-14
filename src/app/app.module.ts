import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarcasListagemComponent } from './components/marcas-listagem/marcas-listagem.component';
import { MarcasService } from './marcas.service';

@NgModule({
  declarations: [
    AppComponent,
    MarcasListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MarcasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
