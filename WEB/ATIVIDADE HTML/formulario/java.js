const form = document.getElementById("form")
const usurio = document.getElementById("usuario")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const senha2 = document.getElementById("senha2")


function ShowError(input, mensagem){
    const FormControl = input.parentElement
    FormControl.classList.add("error")
    const small = FormControl.querySelector("small")
    small.innerHTML = mensagem
}


function ShowSucesso(input, mensagem){
    const FormControl = input.parentElement
    FormControl.classList.add("sucesso")
}



function checkRequired(ListaInput){

    let valido = true
   ListaInput.forEach(function(input){
    if (input.value == ""){
            console.log(input)
            ShowError(input, "Campo Obrigatório")
            valido = false
            }else{
                ShowSucesso(input)
            }
   } )
   return valido
}

function CheckSize(input,max,min){
    let valido = true
    if(input.value.length < min){
        ShowError(input, `Tem que ter no mínimo ${min}`)
        valido = false
        }else if(input.value.length > max){
            ShowError(input, `Tem que ter até ${max}`)
            valido = false
        }
        return valido
    }


function CheckPassword(senha, senha2){
    if(senha.value !== senha2.value){
    ShowError(senha2, `As senhas não são iguas`)
    return false
    }
    return true
}

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    let valido = true
    
    valido = checkRequired([usurio, email, senha, senha2])

    valido = CheckSize(usurio, 15,3) && valido
    valido = CheckSize(senha, 15,6) && valido
    
    valido = CheckPassword(senha,senha2) && valido

    console.log(valido)
    if(valido){
        const dados ={
            usuarioNome: usurio.value,
            usuarioEmail: email.value,
            usuarioSenha: senha.value
        }
        console.log(dados)
        window.location.href = "home.html"   
    }
})

