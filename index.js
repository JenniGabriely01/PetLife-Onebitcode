// Seleciona todos os elementos com a classe 'duvida' e armazena em uma variável.
var elementosDuvida = document.querySelectorAll('.duvida');

// Itera sobre cada elemento da lista 'elementosDuvida'.
elementosDuvida.forEach(function(duvida){
    // Adiciona um ouvinte de evento de clique a cada elemento 'duvida'.
    duvida.addEventListener('click', function(){
        // Alterna a presença da classe 'ativa' no elemento, ativando ou desativando.
        duvida.classList.toggle('ativa');
    });
});

