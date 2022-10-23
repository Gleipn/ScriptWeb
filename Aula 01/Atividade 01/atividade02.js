//Desenvovler uma calculadora com dois atributos e os métodos (soma, subtração, divisao e multiplicação)
class Calculadora {
  constructor(n1, n2) {
    this.num1 = n1;
    this.num2 = n2;
  }
  soma() {
    let resultado = parseFloat(this.num1) + parseFloat(this.num2);
    return resultado;
  }
  subtracao() {
    let resultado = this.num1 - this.num2;
    return resultado;
  }
  multiplicar() {
    let resultado = this.num1 * this.num2;
    return resultado;
  }
  divisao() {
    let resultado = this.num1 / this.num2;
    return resultado;
  }
}

const calculadoraUm = new Calculadora(10, 2);
console.log(calculadoraUm.soma());
console.log(calculadoraUm.subtracao());
console.log(calculadoraUm.multiplicar());
console.log(calculadoraUm.divisao());
