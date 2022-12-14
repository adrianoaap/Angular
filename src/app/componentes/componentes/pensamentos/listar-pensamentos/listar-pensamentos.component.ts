import { Router } from '@angular/router';
import { Pensamento } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/componentes/pensamentos/pensamentos/pensamento.service';
import { literal } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu Mural';

  constructor(private service: PensamentoService
    , private router: Router) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((lista) => {
      this.listaPensamentos = lista;
    });
  }

  recarregarCompoente() {
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute =() => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  carregarMaisPensamentos() {
    this.service
      .listar(++this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);
        console.log(this.listaPensamentos);
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      });
  }

  pesquisarPensamento() {
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
     .subscribe(lista =>{
       this.listaPensamentos = lista;
     })
  }

  listarPensamentosFavoritos() {
    this.favoritos = true;
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.titulo = 'Lista Pensamentos Favoritos';
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
     .subscribe(listarPensamentosFavoritos => {
      this.listaPensamentos = listarPensamentosFavoritos;
      this.listaFavoritos = listarPensamentosFavoritos;
     })
  }

}
