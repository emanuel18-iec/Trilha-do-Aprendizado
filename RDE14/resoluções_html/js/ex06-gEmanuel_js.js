alert("MAIOR E MENOR NÚMERO\nGabriel Emanuel")

for(var i = 1; i<=5; i++){
    var number = parseFloat(prompt("MAIOR E MENOR NÚMERO\nInsira o " + i + "° número:"))
    var maior;
    var menor;

    if(i==1){
        maior = number;
        menor = number;
    } else{
        if(number>maior){
            maior = number;
        }
        if (number<menor){
            menor = number
        }
    }
}
alert("MAIOR E MENOR NÚMERO\nmaior: " + maior + "\nmenor: " + menor)