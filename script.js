const sidebar = document.querySelector('#sidebar');
const containerButtons = document.querySelector('#container-buttons');
sidebar.innerHTML = containerButtons.innerHTML;
const menu = document.querySelector('#menu');
const headerButtons = document.querySelectorAll('header nav button');
const sidebarButtons = document.querySelectorAll('#sidebar button');

for (let i = 0; i < sidebarButtons.length; i++) {
    sidebarButtons[i].addEventListener('click', function(){scrollNaTela(i)})   
    headerButtons[i].addEventListener('click', function(){scrollNaTela(i)})   
}

function fechaSidebar() { 
    sidebar.classList.remove('open');
}
// ao clicar no menu, fecha ou abre a sidebar
menu.addEventListener('click', function() {
    if (sidebar.classList.contains('open')) {
        fechaSidebar();
    } else {
        sidebar.classList.add('open');
    }
})

// fecha a sidebar ao alterar tamanho da janela
document.body.onresize = function(){
    fechaSidebar();
}

function scrollNaTela(btnNum) {
    fechaSidebar();
    let targetOffset = document.querySelector(trataPosition(btnNum)).offsetTop;
    window.scrollTo(0, targetOffset - 110);
}

function trataPosition(number) {
    switch (number) {
        case 0:
            return '#presentation';
            break;
        case 1:
            return '#projetos';
            break;
        case 2:
            return '#informacoes';
            break;
        case 3:
            return '#contato';
            break;
        default:
            break;
    }
}
