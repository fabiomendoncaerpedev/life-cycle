import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ItemComponent } from './components/item/item.component';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    ListaDeCompraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
