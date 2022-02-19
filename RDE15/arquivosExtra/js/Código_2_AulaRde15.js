
function Enviar(){
    var nome = document.getElementById("nome")
    var email = document.getElementById("email")
    var ok

    if(nome.value!= "" && nome.value.indexOf(" ")!=-1){
        
        if(email.value.indexOf("@")!=-1){
            alert(nome.value + ", agradecemos o seu contato!")
            ok = TRUE
        }

        else {
            alert(nome.value + ", digite um email válido!")
            ok = false
        }
        
    }
    else{
        alert("Preencha o seu nome completo!")
        ok = false
    }
    return ok
}







//
        //alert(nome.value + "Agradecemos o seu contato!")