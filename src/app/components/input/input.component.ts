import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnChanges {

  @Input('item-a-ser-editado') itemQueVaiSerEditado!: Item;

  editando = false;
  textoBtn = 'Salvar Item';
  valorItem!: string;

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Editar Item';
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  adicionarItem() {
    this.listaDeCompraService.adicionarItemNaLista(this.valorItem);

    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = '';
  }

  editarItem() {
    this.listaDeCompraService.editarItemDaLista(this.itemQueVaiSerEditado, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = 'Salvar Item';
  }
}
