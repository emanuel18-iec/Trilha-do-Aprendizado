/*Crie um script em que seja possível converter o valor digitado para dólar ou real de acordo com a escolha do usuário*/

alert ("CONVERSOR MONETÁRIO (real ==> dólar)\nGabriel Emanuel")
var valorReais = prompt("Insira o valor em reais:");
var valorDolar;
var Dolar = 5.44;

if(valorReais == ""){
    alert("CONVERSOR MONETÁRIO\nO VALOR INSERIDO NÃO PODE SER NULO!\nRecarregue a página e tente novamente.");
}
else{
    var verific = verif(valorReais);
    if(verific==true){
        valorReais = parseFloat(valorReais)
        while(action!=1 & action != 2){
            var action = prompt("CONVERSOR MONETARIO\nDesejas uitlizar o valor do dólar automático (US$ 1.00 = R$ 5.44 de 19/01/2022) ou inserir o valor do dólar manualmente?\n\n(1) Utilizar o valor automático\n(2) Inserir o valor manualmente");
            if(action == 1){
                Dolar = 5.44;
            } else if (action == 2){
                Dolar = parseFloat(prompt("CONVERSOR MONETARIO\nInsira o valor para o Dólar:"))
                var v = verif(Dolar)
                if(v==false){
                    Dolar = 0;
                }
            } else{
                alert("CONVERSOR DE MOEDAS\nOpção Inválida!");
            }
            conversao()
        }
    }
    else{
        alert("CONVERSOR MONETÁRIO\nO VALOR INSERIDO É INVÁLIDO!\nRecarregue a página e tente novamente.");
    }
}
    

function conversao(){
    valorDolar = valorReais * Dolar;
    if(valorDolar == 0){
        alert("CONVERSOR MONETARIO\nERRO!!\nHouve alguma informação inserida incorretamente!\nPor gentileza, recarregue a página e tente novamente!");
    } else {
        alert("CONVERSOR MONETÁRIO\nR$ " + valorReais + " = US$ " + valorDolar);
    }
}

function verif(valorReais) { /*verifica se o valor inserido é um numeral*/
    if (isNaN(valorReais)) {
      return false;
    }
    return true;
}





/*email = prompt("INSIRA SEU EMAIL: ");
        var teste = validateEmailAddress(email);
        alert(teste)
        function validateEmailAddress(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
            }
            function validate() {
            $("#result").text("");
            var emailaddress = $("#email").val();
            if (validateEmailAddress(emailaddress)) {
            $("#result").text(emailaddress + " is valid :)");
            $("#result").css("color", "green");
            } else {
            $("#result").text(emailaddress + " is not correct, please retry:(");
            $("#result").css("color", "red");
            }
            return false;
            }
            $("#validate").bind("click", validate);*/
