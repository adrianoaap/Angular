import { PensamentoService } from 'src/app/componentes/pensamentos/pensamentos/pensamento.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './pensamento';


@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento  = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPesamento(): string {
    if (this.pensamento.conteudo.length <= 256) {
      return 'pensamento-p';
    }
    return 'pensamento-g';
  }

}
