import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PensamentoService } from '../pensamentos/pensamento.service';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  formulario! : FormGroup;

  constructor(private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['',  Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: [''],
      favorito: [false]
    })
  }

  criarPensamento(){
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(
        () => {
             this.router.navigate(['/listarPensamento']);
        }
      );
    }
  }

  cancelar() {
    // eu uso outra forma de rotas
  }

  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    }
    return 'botao__desabilitado'
  }

}
