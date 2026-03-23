const form =  document.getElementById('form-inspecao'); // Variável 'form' que pega como referência o ID do HTML
const mensagem = document.getElementById('mensagem'); // Aspas simples é um liteal e aspas duplas é um string

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim(); // Pega somente o valor do campo input e trim remove espaço em branco
    const email = document.getElementById('email').value.trim();
    const setor = document.getElementById('setor').value;
    const prioridade = document.querySelector('input[name="prioridade"]:checked') // Query vai pegar apenas o que estiver selecionado (input[ref:"nome-ref"]:checked)
    const descricao = document.getElementById('descricao').value;
    const termos = document.getElementById('termos').checked; // Por ser checkbox verifica se está marcado

    if (nome === '') {
        mensagem.textContent = 'Preencha o nome.';
        return;
    } 

    if (email === '') {
        mensagem.textContent = 'Preencha o email.';
        return;
    } 

    if (setor === '') {
        mensagem.textContent = 'Selecione um setor.';
        return;
    } 

    if (!prioridade) { // '!' Diferente de preenchido
        mensagem.textContent = 'Seleciona a prioridade.';
        return;
    } 

    if (descricao.length < 10) { // Pega o tamanho da descrição
        mensagem.textContent = 'A descrição deve ter pelo menos 10 caracteres';
        return;
    }

    if (!termos) { // Se o checkbox não estiver marcado
        mensagem.textContent = 'Confirme os termos.';
        return;
    }

    mensagem.textContent = 'Formulário validado com sucesso';
});