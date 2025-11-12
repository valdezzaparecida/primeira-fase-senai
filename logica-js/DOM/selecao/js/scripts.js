// arquivo serviços

const servicoWeb = document.querySelector("#servico-web")

const showButton = document.querySelector("#show")

const hideButtonent= document.querySelector("#hide")

showButton.addEventListener("click",()=>{
    servicoWeb .classList.add("show")
    servicoWeb.classList.remove("hide")

})
hideButtonent. addEventListener("click",() =>{
    servicoWeb.classList.add("hide")
    servicoWeb.classList.remove("show")
    
})