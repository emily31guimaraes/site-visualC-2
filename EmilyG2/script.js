const buttons = document.querySelectorAll('.btn-proximo');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const current = document.querySelector('.ativo');
        const nextStepId = 'passo-' + button.getAttribute('data-proximo');

        // Animação de transição
        current.classList.remove('ativo');
        setTimeout(() => {
            document.getElementById(nextStepId).classList.add('ativo');
        }, 100); // Duração da transição
    });
});
