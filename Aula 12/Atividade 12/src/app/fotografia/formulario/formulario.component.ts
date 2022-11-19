import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { DatabaseService } from "src/app/service/database.service";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"],
})
export class FormularioComponent implements OnInit {
  nameButton = "Cadastrar";

  //A ferramenta formgroup captura as informações
  //do formulario e coloca na variavel form
  form!: FormGroup;

  //Injeção de dependencia -
  //O constructor da classe sera somente para injeção de dependecia
  constructor(
    private formBuilder: FormBuilder,
    private database: DatabaseService
  ) {}

  //Ciclo de vida do Angular
  //Executar codigo no inicio, no meio ou no final da aplicação
  //ngOnInit - carrega todo codigo dentro dele no inicio da noassa APP
  ngOnInit(): void {
    this.validaForm();
  }

  validaForm() {
    this.form = this.formBuilder.group({
      img: ["", [Validators.required, Validators.minLength(5)]],
      titulo: ["", [Validators.required, Validators.minLength(1)]],
    });
  }

  //Método usado no formGroup (data driven)
  //JSON.stringify converte os dados para o formato json
  cadastro() {
    //alert('Dados cadastrados!');
    //console.log(this.form.value);
    this.database.postFoto(this.form.value);
  }

  //Todo método pode ou não receber um parametro
  //Para receber um parametro basta criar um avarivel dentro dos () do metodo

  /*  cadastrar(bastao: any) {
    alert('Dados cadastrados!');
    console.log(bastao.value);
  }
 */
  //Ao clicar no botão cadastrar do formulario
  //As informações devem ser enviadas para o console.log
  //Dica 01 - os dados do formulário devem ser passados para o metodo como parametro
  //Verificar em qual variavel os dados do formularios ficam guardados
}
