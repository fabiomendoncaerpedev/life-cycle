import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnChanges, OnDestroy {

  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter()
  @Output() emitindoItemParaExcluir = new EventEmitter()
  faPen = faPen;
  faTrash = faTrash

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) { }

  ngOnDestroy(): void {
    console.log('conseguiram me calar')
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  atualizarCheckBox() {
    this.item.comprado = !this.item.comprado;
    this.listaDeCompraService.editarItemDaLista(this.item);
  }

  deletarItem() {
    console.log('estao tentando me calar')
    this.emitindoItemParaExcluir.emit(this.item);
  }

}
