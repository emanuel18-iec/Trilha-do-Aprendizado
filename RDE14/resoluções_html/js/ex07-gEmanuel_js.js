/*Elabore um script em que seja possível entrar com dados de idade e sexo de 5 pessoas. Exiba:
    a. Quantas pessoas são do sexo masculino e quantas pessoas são do sexo feminino.
    b. Quantas pessoas são maiores e menores de idade
    c. Qual o homem mais velho e mais novo
    d. Qual a mulher mais velha e mais nova
    e. Quantos homens e quantas mulheres são maiores de idade*/


alert("ANÁLISE DE DADOS\nGabriel Emanuel")
var relatorioFinal = ""
var name, sex;
var fem=0, masc=0;
var idade
var id18M = 0, id18m=0,id18Ma=0, id18Fa=0;
var HID = null, Hid = null, FID = null, Fid = null, genM=0, genF=0;
for(var i = 1; i<=5; i++){
    name = prompt("ANÁLISE DE DADOS\nInsira o nome da " + i + "ª pessoa:");
    var tst = true 
    while(tst==true){
        sex = prompt("ANÁLISE DE DADOS\nInsira o sexo da " + i + "ª pessoa, de acordo com a legenda:\n(fem) ==> feminino\n(masc) ==> masculino")
        tst=false
        if(sex=="fem"){ /* a */
            fem++
        } else if(sex=="masc"){
            masc++
        } else {
            tst = true;
            alert("ANÁLISE DE DADOS\nInformação Inválida!!")
        }
    }
    var tst = true 
    while(tst==true){
        idade = parseFloat(prompt("ANÁLISE DE DADOS\nInsira a idade de " + name + ": "))
        tst=false
        if(idade<18){ /* b */
            id18m++
        } else if(idade>=18){
            id18M++
            if(sex=="masc"){ /* e */
                id18Ma++
            } else if (sex="fem"){
                id18Fa++
            } else {
                alert("Erro desconhecido!!")
            }
        } else {
            tst = true;
            alert("ANÁLISE DE DADOS\nERRO!!")
        }
    }
    if(sex == "masc"){ /*c*/
        genM++; //a
        if(HID==null){
            HID = idade;
        } if (Hid == null){
            Hid = idade;
        }
        if(HID != null & Hid != null){
            if(idade>HID){
                HID = idade
            } else if(idade<Hid){
                Hid = idade
            } else {

            }
        }
    } else if(sex == "fem"){ /*d*/
        genF++ //a
        if(FID==null){
            FID = idade;
        } if (Fid == null){
            Fid = idade;
        }
        if(FID != null & Fid != null){
            if(idade>FID){
                FID = idade
            }
            if(idade<Fid){
                Fid = idade
            }
        }
    } else{
        alert("ERRO!!")
    }
    relatorioFinal += "------ PESSOA " + i + " ------\nNome: " + name + "\nIdade: " + idade + "\nSexo: " + sex + "\n\n"
}
alert("====== RELATÓRIO INDIVIDUAL ======\n" + relatorioFinal)
alert("====== RELATÓRIO GERAL ======\n\nHomens: " + genM + "\nMulheres: " + genF + "\n\nMaioridade Penal (+18 anos): " + id18M + "\nMenores de Idade: " + id18m + "\n\nHomem mais velho: " + HID + "\nHomem mais jovem: " + Hid + "\n\nMulher mais velha: " + FID + "\nMulher mais jovem: " + Fid + "\n\nHomens maiores de idade: " + id18Ma + "\nMulheres maiores de idade: " + id18Fa);
