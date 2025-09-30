const prompt = require("prompt-sync")()

const carteiraHabilitacao = prompt("Possui carteiraHabilitção:")
const idade=prompt("Digite sua idade")

if(carteiraHabilitacao == "sim" && idade>= 18){

    console.log ("habiliotado")

}else{

    console.log("Não habilitado")
}

