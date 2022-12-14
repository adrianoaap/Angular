import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoService } from '../pensamentos/pensamento.service';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo2'
  }

  constructor(private service: PensamentoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(
      () => {
           this.router.navigate(['/listarPensamento']);
      }
    );
  }

  cancelar() {
    // eu uso outra forma de rotas
  }

}
