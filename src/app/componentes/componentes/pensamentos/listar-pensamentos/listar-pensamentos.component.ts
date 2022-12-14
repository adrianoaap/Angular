import { Pensamento } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/componentes/pensamentos/pensamentos/pensamento.service';
import { literal } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.listaPensamentos = lista;
    });
  }

}
