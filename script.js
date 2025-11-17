// Seleciona todos os links na barra lateral (aside)
const linksLaterais = document.querySelectorAll('.sidebar ul li');
// Seleciona o bloco de conteúdo principal
const conteudoPrincipal = document.querySelector('.main-content');

// Itera sobre cada link encontrado
linksLaterais.forEach(link => {
    // Adiciona um "ouvinte de evento" para o clique em cada link
    link.addEventListener('click', function() {
        // 1. Mudar o conteúdo
        conteudoPrincipal.querySelector('h2').textContent = 'Conteúdo Alterado pelo JavaScript!';

        // 2. Mudar a cor de fundo (Manipulação do DOM)
        // Gera uma cor aleatória
        const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
        conteudoPrincipal.style.backgroundColor = corAleatoria;
    });
});