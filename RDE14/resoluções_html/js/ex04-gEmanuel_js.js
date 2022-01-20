
alert("GERADOR DA SÉRIE DE FIBONACCI\nGabriel Emanuel");

var qtde = parseInt(prompt("GERADOR DA SÉRIE DE FIBONACCI\nQuantos números desejas exibir?\n(A quantidade precisa ser igual ou maior que 3"))
if((qtde%2==0 | qtde%2==1)&qtde>2){
    var v0 = 0, v1 = 1, vAux, numeralSoma;
    var numeral = "0, 1, ";
    var i = 0;
    var cond = true;
    for(i = 0; i<(qtde-2); i++){

        numeralSoma = v0 + v1
        if(i==qtde-3){
            numeral += numeralSoma
        } else {
            numeral += numeralSoma + ", "
        }
        v0 = v1;
        v1 = numeralSoma
    }
    alert("GERADOR DA SÉRIE DE FIBONACCI\nGabriel Emanuel\n\nA SEQUÊNCIA GERADA FOI:\n" + numeral);
} else {
    alert("GERADOR DA SÉRIE DE FIBONACCI\nO valor informado é inválido!\nRecarregue a página e tente novamente!!");
}


