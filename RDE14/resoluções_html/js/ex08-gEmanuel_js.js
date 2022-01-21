/*fatorial*/

alert("CÁLCULO DE FATORIAL\n(por: Gabriel Emanuel)")

var fat = parseInt(prompt("CÁLCULO DE FATORIAL\nInsira o número a ser aplicado o fatorial:"))

var i = fat;
var fatF = fat;
var cond = true;

while(cond==true){    
    fatF = fatF * (i-1);
    if(i==2){
        cond = false
    }
    i--
}

alert("CÁLCULO DE FATORIAL\n" + fat + "! = " + fatF)


