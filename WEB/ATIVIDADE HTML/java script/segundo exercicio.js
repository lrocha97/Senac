var clicks = document.getElementById('contanelson')


contador = 0
clicks.innerHTML = contador


const botao = document.getElementById("botao");
botao.addEventListener("click", function(){
    contador ++
    clicks.innerHTML = contador
})