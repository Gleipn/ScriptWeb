import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Fotos } from "../fotografia/foto/foto";

@Injectable({
  providedIn: "root",
})

//A função desse serviço será:
//Exibir Fotos
//Cadastrar foto
//Excluir uma foto
//Atualizar uma foto
export class DatabaseService {
  //Atributo que recebe o endereço da API
  readonly API = "http://localhost:3000/fotos/";

  //Vou contratar um tradutor - httpOptions
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  //Metodo que captura todas as fotos
  getFoto() {
    return this.http.get<Fotos[]>(this.API);
  }

  //Método de cadastro da foto
  postFoto(form: any) {
    return this.http
      .post(this.API, JSON.stringify(form), this.httpOptions)
      .subscribe();
  }

  //Exclusão da foto
  delFoto(id: number) {
    return this.http.delete(this.API + id).subscribe();
  }
}
