let = valor
let = result
function buton(num) {
    valor = document.calculator.view.value += num;
}
function reset() {
    document.calculator.view.value= ' ';
}
function calculate() {
    result = eval(valor);
    document.calculator.view.value= result.toLocaleString('pt-BR');  
}