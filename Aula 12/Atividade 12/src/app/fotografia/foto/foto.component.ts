import { Component } from '@angular/core';

import { Fotos } from './foto';
import { DatabaseService } from 'src/app/service/database.service';

//Decorarator diz a função da classe
//Decorar a classe - Utilizar um decorator
@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css'],
})
export class FotoComponent {
  nameButton = 'Fotos Pares';
  titulo = 'Minhas Fotos';
  control = true;

  //Criar um array de objetos para as fotos
  imagens: Fotos[] = [];

  //O metodo constructor de toda classe é carregada junto com o componente
  //HttpClient é a ferramenta utilizada para conectar ao banco de dados(json-server(db.json))
  //Ela também permite fazer todo o crud
  //Injeção de dependencia  - Que é disponibilizar a ferramenta dentro dos () do constructor
  constructor(private database: DatabaseService) {}

  ngOnInit() {
    this.database.getFoto().subscribe((caixa) => (this.imagens = caixa));
  }

  //Método do botao de click
  mudar() {
    /* this.control = !this.control;

    if (this.nameButton == 'Todas Imagens') {
      this.nameButton = 'Fotos Pares';
    } else {
      this.nameButton = 'Todas Imagens';
    } */
  }

  deletar(id: number) {
    this.database.delFoto(id).subscribe();
  }
}
