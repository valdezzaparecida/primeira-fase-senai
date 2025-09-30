let dias
let valordiaria
let totalBruto,totalLiquido
let desconto10, desconto15, multa=150

dias=Number(prompt("Quantos dias"))
if(dias<=5){
    valorDiaria =100
}else if (dias<=10){
    valorDiaria=90
} else if(dias>=11){
    valorDiaria = 80

}


totalBruto=dias * valorDiaria
console.log(totalBruto);
desconto = totalBruto * 10/100
desconto = totalBruto * 15/100

totalLiquido = totalBruto-(desconto10=desconto15)+multa

// dias
// valorDiaria
// totalBruto
// desconto10
// desconto15
// multa









alert("Numero de Dias:"+ dias+
  "\nvalor por diaria: R$ "+valorDiaria.toFixed(2)+
  "\ntotal bruto:R$ "+ totalBruto.toFixed(2)+
  "\nDesconto especial:R$" + desconto10.toFixed(2)+
  "\nDesconto convenio: R$ "+ desconto15.toFixed(2)+
  "\nMulta:R$" + multa +
  "\n================"+
  "\nTotal a pagar: R$" + totalLiquido.toFixed(2).replace(".",","))