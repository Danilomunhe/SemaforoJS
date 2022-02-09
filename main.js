'use strict'

//Declaração de variáveis
const semaforo = document.getElementById('semaforo')
const verde = document.getElementById('verde')
const amarelo = document.getElementById('amarelo')
const vermelho = document.getElementById('vermelho')
const automatico = document.getElementById('automatico')
let idAutomatico = null

//Funções
const passar = () => {
    semaforo.src='./img/verde.png'
}
const atencao = () => {
    semaforo.src='./img/amarelo.png'
}
const parar = () => {
    semaforo.src='./img/vermelho.png'
}
const desligado = ()=> {
    semaforo.src='./img/desligado.png'
}

const semaforoDesligado = () => {
    return semaforo.src.includes('desligado')
}
const semaforoVerde = () => {
    return semaforo.src.includes('verde')
}

const semaforoAmarelo = () => {
    return semaforo.src.includes('amarelo')
}
const semaforoVermelho = () => {
    return semaforo.src.includes('vermelho')
}

const farol = () => {
    if(semaforoDesligado()){
        passar()
    }else if(semaforoVerde()){
        atencao()
    }else if(semaforoAmarelo()){
        parar()
    }else if(semaforoVermelho()){
        desligado()
    }
}

const piscar = () =>{
    if(idAutomatico == null){
        idAutomatico = setInterval(farol, 500)
        automatico.textContent = 'Parar'
    }
    else{
        clearInterval(idAutomatico)
        automatico.textContent = 'Automatico'
        idAutomatico = null
    }
    
}

//Eventos do botão
verde.addEventListener('click', passar)
amarelo.addEventListener('click', atencao)
vermelho.addEventListener('click', parar)
automatico.addEventListener('click', piscar)
