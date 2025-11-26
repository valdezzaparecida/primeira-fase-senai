// console.log("arquivos usuarios carregar")
fetch("https://jsonplaceholder.typicode.com/users")

.then(response=>response.json())
.then(usuarios=>{
    const container = document.getElementById('container')
    const cards =usuarios.map(usuario=>{
        return`
        <div class="card">
        <h2>${usuario.name}</h2>
        </div>
        ` 

    })
    container.innerHTML=cards.join('')
})
