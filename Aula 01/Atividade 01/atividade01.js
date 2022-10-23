//João trabalha em uma empresa de contabilidade e precisa criar um pequeno programa que:
//-> Aumente o salário de um funcionário em 10% caso ele atinja a meta.
//O atributo resultado deverá ser privado (pesquisar sobre os metodos get e set para encapsulamento do atributo privado)

class Funcionario {
  constructor(nome, vendas, salario) {
    this.nome = nome;
    this.vendas = vendas;
    this._salario = salario;
  }
  calcularSalario(vendas, meta) {
    let result = meta - vendas;
    return result;
  }
  set salario(sal) {
    if (sal <= 0) {
      this._salario = this.salario * 1.1;
      console.log(
        "O funcionário alcançou a meta e teve o salário reajustado em 10%"
      );
    } else {
      console.log("O funcionário não alcançou a meta");
    }
  }
  get salario() {
    return this._salario;
  }
}

var F1 = new Funcionario("Allaf", 101, 1200);
F1.salario = F1.calcularSalario(F1.vendas, 100);
console.log("Nome: " + F1.nome);
console.log("Salário: " + F1.salario);
