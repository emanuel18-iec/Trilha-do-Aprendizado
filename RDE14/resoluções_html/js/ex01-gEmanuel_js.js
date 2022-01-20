/*Crie um script em que seja possível digitar a temperatura em Celsius, e seja exibida a temperatura convertida em Fahrenheit e Kelvin*/

alert ("CONVERSOR DE TEMPERATURAS\nGabriel Emanuel")
var tempCelsius = prompt("Insira o valor em celsius a ser convertido:");

if(tempCelsius == ""){
    alert("O VALOR INSERIDO NÃO SER NULO!\nRecarregue a página e tente novamente.");
}
else{
    var verific = verif(tempCelsius);

    if(verific == true){
        tempCelsius = parseFloat(tempCelsius);
        var tempKelvin = tempCelsius + 273.15;
        var tempFahrenheit = (tempCelsius * 9 / 5) + 32;
        alert("CONVERSOR DE TEMPERATURAS\n\n" + tempCelsius + "°C = " + tempFahrenheit + "°F = " + tempKelvin + "K");
    } else {
        alert("O VALOR INSERIDO É INVÁLIDO!\nRecarregue a página e tente novamente.");
    }
}


function verif(tempCelsius) { /*verifica se o valor inserido é um numeral*/
    if (isNaN(tempCelsius)) {
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
