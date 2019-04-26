var james = [10, 8.5, 7, 3]

function media(aluno) {
    var soma = 0

    for (var contador = 0; contador < aluno.length; contador++) {
        soma = soma + aluno[contador]
    }

    return soma/aluno.length
}


var botaoAdicionaNota = document.querySelector('#botaoAdicionar') 
var botaoCalculaMedia = document.querySelector('#botaoCalcularMedia')
var resultado = document.querySelector('#resultado')
var nota = document.querySelector('[name="nota"]')

botaoAdicionaNota.addEventListener('click', function(eventoDoFormulario){
    eventoDoFormulario.preventDefault()
    james.push(parseInt(nota.value))
    console.log('Nota adicionada!!!')
})

botaoCalculaMedia.addEventListener('click', function(){
    resultado.innerHTML = media(james)
})


let nome = document.querySelector('input[name=nome]')
let email = document.querySelector('input[name=email]')
let adicionarAluno = document.querySelector('#adicionarAluno')
let listaTbody  = document.querySelector('.listaTbody')
let aluno = [{'nome':'Ana Toledo','email':'ana@gmail.com'}, {'nome':'Pedro Augusto', 'email':'pedro@hotmail.com'}]

new function() {
    mostrarClientes()
}

function mostrarClientes() {
    let body = []
    for (let index=0; index < aluno.length; index++) {
        body.push(`
            <tr>
                <td>${aluno[index].nome}</td>
                <td>${aluno[index].email}</td>
            </tr>
        `)

        listaTbody.innerHTML = body.join('')

    }
}

adicionarAluno.addEventListener('click', function(eventoDoFormulario){
    eventoDoFormulario.preventDefault()
    aluno.push({'nome':nome.value, 'email':email.value})
    mostrarClientes()
})

