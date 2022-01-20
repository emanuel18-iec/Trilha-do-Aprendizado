

alert("PROGRESSÃO GEOMÉTRICA\nGabriel Emanuel")

var a1 = parseInt(prompt("PROGRESSÃO GEOMÉTRICA\nInsira o primeiro termo, a1, da progressão geométrica:"));
var q = parseFloat(prompt("PROGRESSÃO GEOMÉTRICA\nInsira a razão q dessa progressão geométrica:"))
var n = parseInt(prompt("PROGRESSÃO GEOMÉTRICA\nQuantos elementos devem conter nessa progressão geométrica?"))

var seq = a1 + ", ";
for(var i = 1; i<=n; i++){
    var somTermo = a1 + (q * i);
    if(i==n){
        seq = seq + somTermo;
    } else{
        seq = seq + somTermo + ", "
    }
    
}
alert("PROGRESSÃO GEOMÉTRICA\n\nA sequência gerada foi:\n"+seq)
