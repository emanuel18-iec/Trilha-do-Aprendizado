

var alvo, rodadas = 0, ac0 = 0, ac1 = 0, ac2 = 0, ac3 = 0, acT = 0, erros = 0;
var relat = ""
var profx = "JOGUINHO DA ADIVINHAÇÃO\n"
alert(profx + "Gabriel Emanuel")
var verification = confirm("Estás pronto??")
var repDesafio = true
if(verification == true){
    alert(profx + "QUE ÓTIMO!! Vamos começar!!")
    var name = prompt(profx + "Vamos começar inserindo o seu nome:")
    alert("Okay " + name + " vamos lá! Você terá direito a 3 dicas até acertar o número!")
    alert("Lembre-se de que você só deve inserir números e eles vão de 0 a 20!!")
    var tent = 0, chut, vmin, vmax
    while(repDesafio == true)
    {
        rodadas++
        alert("====== VAMOS PARA A " + rodadas + "ª RODADA ======")
        alvo = getRandomInt(0,20);
        tent++;
        chut = parseInt(prompt("Qual será sua primeira tentativa?"))
        if(chut == alvo){
            alert("CARAMBA, VOCÊ FOI CERTEIRO!! NA MOSCA, O NÚMERO ERA " + alvo)
            ac0++
            erros = 0
        } else{
            if(chut > alvo){
                vmax = chut-1
                vmin = 0
            }
            else if(chut < alvo){
                vmin = chut + 1
                vmax = 20
            }
            chut = parseInt(prompt("Qual será a sua segunda tentativa?\nDICA 1: O número está entre " + vmin + " e " + vmax))
            if(chut == alvo){
                alert("VOCÊ MANDOU MUITO BEM E ACERTOU!! PARABÉNS!\nO NÚMERO ERA " + alvo)
                ac1++
                erros = 0
            }
            else {
                if(chut > vmin & chut < alvo){
                    vmin = chut+1
                } else if(chut > alvo & chut < vmax){
                    vmax = chut-1
                }
                chut = parseInt(prompt("Qual será a sua terceira tentativa?\nDICA 2: O número está entre " + vmin + " e " + vmax))
                if(chut==alvo){
                    alert("VOCÊ MANDOU MUITO BEM!\nO NÚMERO ERA " + alvo)
                    ac2++
                    erros = 0
                }
                else{
                    if(chut > vmin & chut < alvo){
                        vmin = chut+1
                    } else if(chut > alvo & chut < vmax){
                        vmax = chut-1
                    }
                    chut = parseInt(prompt("Qual será a sua quarta e última tentativa?\nDICA 3: O número está entre " + vmin + " e " + vmax))
                    if(chut==alvo){
                        alert("Você acertou! O número era " + alvo)
                        ac3++
                        erros = 0
                    } else{
                        alert("VOCÊ NÃO ACERTOU NESTA RODADA :(\nEra o Número " + alvo)
                        erros++
                        
                    }
                }

            }

        }

        if(erros==3){
            verification = false;
            repDesafio = false;
            var pontos = ac0* 30 + ac1* 12 + ac2* 6 + ac3* 1
            if(pontos%2!=0 & pontos%2!=1){
                pontos=0;
            }
            var media = pontos / rodadas
            acT = ac1 + ac2 + ac3 + ac0
            alert("YOU LOSE!!!\n\nNOME: " + name + "\nRODADAS JOGADAS: " + rodadas + "\n\nPONTUAÇÃO: " + pontos +"\nAcertos Totais: " + acT + "/" + rodadas +"\nMédia de pontos: " + media + " pontos / por rodada" +"\n\nAcertos por dica:\n(0) dicas ==> " + ac0 + "\n(1) dica ==> " + ac1 + "\n(2) dicas ==> " + ac2 + "\n(3) dicas ==> " + ac3)
        } else{
            confir = confirm("Desejas continuar jogando?")
            if(confir == true){
    
            } else if (confir==false){
                acT = ac1 + ac2 + ac3 + ac0
                var pontos = ac0* 30 + ac1* 12 + ac2* 6 + ac3* 1
                var media = pontos / rodadas
                alert("NOME: " + name + "\nRODADAS JOGADAS: " + rodadas + "\n\nPONTUAÇÃO: " + pontos +"\nAcertos Totais: " + acT + "/" + rodadas  + "\nMédia de pontos: " + media + " pontos / por rodada" +"\n\nAcertos por dica:\n(0) dicas ==> " + ac0 + "\n(1) dica ==> " + ac1 + "\n(2) dicas ==> " + ac2 + "\n(3) dicas ==> " + ac3)
    
                verification = false;
                repDesafio = false;
       
            }
        }
    }
}
else{
    alert(profx + "Que pena... Se prepare e tente novamente!")
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }