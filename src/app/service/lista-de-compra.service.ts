import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable()
export class ListaDeCompraService {

  private listaDeCompra!: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra(): Array<Item> {
    return this.listaDeCompra;
  }

  adicionarItemNaLista(nomeItem: string) {
    const item = this.criarItem(nomeItem);

    this.listaDeCompra.push(item);
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem?: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem
        ? nomeEditadoDoItem
        : itemAntigo.nome,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }

    this.listaDeCompra.splice(Number(itemAntigo.id)-1, 1, itemEditado);
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }

  private criarItem(nomeItem: string): Item {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id,
      nome: nomeItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }

    return item;
  }

}
