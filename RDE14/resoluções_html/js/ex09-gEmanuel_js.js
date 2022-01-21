

alert("VERIFICADOR DE MULTIPLICIDADE\n(por: Gabriel Emanuel)")

var number = parseInt(prompt("VERIFICADOR DE MULTIPLICIDADE\nInsira o número a ser verificado: "))

if(number%3 ==0 & number%7 == 0){
    alert("VERIFICADOR DE MULTIPLICIDADE\nO número " + number + " é múltiplo tanto de 3, como de 7!!")
} else if(number%3==0){
    alert("VERIFICADOR DE MULTIPLICIDADE\nO número " + number + " é múltiplo de 3!!")
} else if(number%7==0){
    alert("VERIFICADOR DE MULTIPLICIDADE\nO número " + number + " é múltiplo de 7!!")
} else if (number%2==1 | number%2==0){
    alert("VERIFICADOR DE MULTIPLICIDADE\nO número " + number + " não é múltiplo nem 3, nem de 7!")
} else {
    alert("VERIFICADOR DE MULTIPLICIDADE\nO valor inserido é inválido!!")
}



