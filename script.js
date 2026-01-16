const html = document.querySelector("html")
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo') //selecionou a classe do botao 
// e armazenou em uma variavel

//const titulo = document.querySelector('.app__title')
//const subtitulo = document.querySelector('.app__title-strong')


focoBt.addEventListener('click', () =>{
    html.setAttribute('data-contexto','foco')
})//adicinou um evento de click ao botao focoBt que ao ser clicado
//adiciona ao elemento html o atributo data-contexto com valor foco

curtoBt.addEventListener('click', () =>{
    html.setAttribute('data-contexto','descanso-curto')
})

longoBt.addEventListener('click', () =>{
    html.setAttribute('data-contexto','descanso-longo')
})
//mesma logica dos botoes anteriores, mas com valores diferentes para o atributo data-contexto