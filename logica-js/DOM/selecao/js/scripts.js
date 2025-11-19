//busca

const inputForm = document.querySelector("#busca")

const botaoBusca = document.querySelector("#botaoBusca")

const resultadoDiv = document.querySelector("#resultado")

inputForm,addEventListener("keydown",(e)=>{
    console.log(e.key)
})

inputForm.addEventListener("focus",(e)=>{
    inputForm.style.backgroundColor = "#FF0"
})

inputForm.addEventListener("blur",(e)=>{
    inputForm.style.backgroundColor = ""
})

//get e set

function searchResult(){
    const valorBusca = inputForm.value.trim()
    if(valorBusca){
        resultadoDiv.textContent = `Você buscou por  ${valorBusca}`
    }else{
        resultadoDiv.textContent = `Por favor,insira algo na busca`
    }
}

botaoBusca.addEventListener("click",(e)=>{
    searchResult()
})

//botão de troca de tema

const botaoTrocaTema = document.querySelector("#tema")
function alternarTema(){
    document.body.classList.toggle("escuro")
    document.body.classList.toggle("claro")
}

botaoTrocaTema.addEventListener("click",(e)=>{
    alternarTema()
})





















 

