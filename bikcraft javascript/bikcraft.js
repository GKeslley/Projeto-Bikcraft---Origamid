// Ativar links do menu

const links = document.querySelectorAll(".cabecalho-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar items do orçamento

const parametros = new URLSearchParams(location.search);

function ativarOrcamento(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarOrcamento);

// Ativar e esconder perguntas

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  console.log(controls);
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventoPerguntas);

// Galeria imagens

const galeria = document.querySelectorAll(".bicicletas-imagens img");
const galeriaContainer = document.querySelector(".bicicletas-imagens");

function galeriaClique(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function galeriaTrocar(trocar) {
  trocar.addEventListener("click", galeriaClique);
}

galeria.forEach(galeriaTrocar);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
