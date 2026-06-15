const formulario = document.getElementById('formulario-atividades');

formulario.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const todosInputs = formulario.querySelectorAll('input.quadrado');

    todosInputs.forEach(function(input) {
        const palpiteUsuario = input.value.toUpperCase().trim();
        
        // Pega a resposta certa guardada no 'data-resposta'
        const respostaCerta = input.dataset.resposta.toUpperCase();

        
        if (palpiteUsuario === "") {
            input.classList.remove('correto', 'errado');
        } 

        else if (palpiteUsuario === respostaCerta) {
            input.classList.add('correto');
            input.classList.remove('errado');
        } 

        else {
            input.classList.add('errado');
            input.classList.remove('correto');
        }
    });
});