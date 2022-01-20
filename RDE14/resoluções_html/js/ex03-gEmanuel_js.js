/*Crie um script em que seja possível digitar 4 notas de um aluno calcule sua média e converta para conceitos.
    9 a 10 – Conceito A
    8 a 8.9 – Conceito B
    7 a 7.9 – Conceito C
    Nota < 7 – Conceito D*/

alert("CALCULADORA DE MÉDIA");

var n1, n2, n3, n4;
var media;
var conc;
var control=false
while(control==false){
    control = true;
    
    var n1 = parseFloat(prompt("Insira a primeira nota:"));
    var n2 = parseFloat(prompt("Insira a segunda nota:"));
    var n3 = parseFloat(prompt("Insira a terceira nota:"));
    var n4 = parseFloat(prompt("Insira a quarta nota:"));
    
    media = (n1+n2+n3+n4)/4

    if(media<7){
        conc = "D";
    } else if(media>=7 & media < 8){
        conc = "C";
    } else if(media>=8 & media<9) {
        conc = "B";
    } else if (media >=9 & media <=10){
        conc = "A";
    } else {
        alert("NÃO PODE HAVER MÉDIA SUPERIOR À 10!!")
        control = false;
    }
}

alert("A média conceitual deste aluno é " + conc);