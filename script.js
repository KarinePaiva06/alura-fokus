const html = document.querySelector("html")
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo') //selecionou a classe do botao 
// e armazenou em uma variavel

const displayTempo = document.querySelector('#timer')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const subtitulo = document.querySelector('.app__title-strong')


focoBt.addEventListener('click', () =>{
    alterarContexto('foco')
    
})
curtoBt.addEventListener('click', () =>{
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () =>{
    alterarContexto('descanso-longo')
})
//utilizou uma função para alterar o contexto da pagina

function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
}

