// Abertura e Fechamento da Barra de Navegação no Mobile
const btnMenu = document.querySelector(".hero__hamburger")
const navMenu = document.querySelector(".hero__navbar")

btnMenu.addEventListener("click", function() {

    navMenu.classList.toggle("toggle-nav")
})

// Abertura e Fechamento da Barra de Pesquisa no Mobile
const divSearch = document.querySelector(".hero__search")
const btnSearch = document.querySelector(".hero__search-btn")
const inputSearch = document.querySelector(".hero__search-input")

btnSearch.addEventListener("click", function() {
    divSearch.classList.toggle("toggle-search")
    inputSearch.classList.toggle("toggle-search-input")
})