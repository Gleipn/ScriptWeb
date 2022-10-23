import { Component } from '@angular/core';

//Diretivas do angular
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Data Binding';
  descricao =
    'O data binding pega uma informação no arquivo .ts e leva para o arquivo. html';
  imagem =
    'https://cdn.pixabay.com/photo/2022/10/05/20/43/hyacinth-macaw-7501470__340.jpg';
  des = 'Papagaio';

  //Declarando um objeto quando coloco as ={}
  pessoa = {
    nome: 'Allaf',
    idade: 20,
    altura: 1.65,
    aniversario: '25/07/1991',
  };

  //carro = {} //Objeto
  //mesa = [] //Array

  //Array de Objetos
  meuCliente = [
    { nome: 'Joao', idade: 15 },
    { nome: 'Mara', idade: 35 },
    { nome: 'Maria', idade: 35 },
    { nome: 'silva', idade: 11 },
  ];

  Imagens = [
    {
      nome: 'imagem1',
      url: 'https://cdn.pixabay.com/photo/2022/09/11/14/43/whale-7446905_960_720.jpg',
      legenda: 'baleia',
    },
    {
      nome: 'imagem2',
      url: 'https://cdn.pixabay.com/photo/2021/12/02/19/14/elephant-6841179_960_720.jpg',
      legenda: 'elefante',
    },
    {
      nome: 'imagem3',
      url: 'https://cdn.pixabay.com/photo/2022/10/15/21/23/cat-7523894_960_720.jpg',
      legenda: 'gato',
    },
    {
      nome: 'imagem4',
      url: 'https://cdn.pixabay.com/photo/2022/09/24/16/32/bulldog-7476727_960_720.jpg',
      legenda: 'cachorro',
    },
    {
      nome: 'imagem5',
      url: 'https://cdn.pixabay.com/photo/2022/10/16/18/20/flamingos-7525793_960_720.jpg',
      legenda: 'flamingo',
    },
  ];
}
