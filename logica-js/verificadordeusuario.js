const prompt = require("prompt-sync")()

const usuario = prompt("Digite sua usuario: ")
const senha = prompt(" digite suu senha")




if(usuario =="admin" && senha == "12345"){


    console.log("Usuario correto")

}else{
    console.log(" Usuario incorreta")



}