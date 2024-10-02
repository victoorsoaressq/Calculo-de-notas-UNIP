function calcular() {
    const np1 = parseFloat(document.querySelector("#np1").value);
    const np2 = parseFloat(document.querySelector("#np2").value);
    const pim = parseFloat(document.querySelector("#pim").value);

    const resultado = (np1 * 4 + np2 * 4 + pim * 2) / 10;
    const mensagem = document.querySelector("#text");
    const contExame = document.querySelector('#contExame');
    const contNota = document.querySelector('.contNota');

    if (resultado >= 7) {
        mensagem.textContent = `Aluno aprovado: ${resultado}`;
        contExame.style.display = 'none';
        contNota.style.display = 'block';
    } else {
        mensagem.textContent = `Aluno de exame: ${resultado}`;
        contExame.style.display = 'block';
        contNota.style.display = 'none';
    }
}

function calcularExame() {
    const np1 = parseFloat(document.querySelector("#np1").value);
    const np2 = parseFloat(document.querySelector("#np2").value);
    const pim = parseFloat(document.querySelector("#pim").value);
    const exame = parseFloat(document.querySelector("#exame").value);
    const contExame = document.querySelector('#contExame');

    const resultado = (np1 * 4 + np2 * 4 + pim * 2) / 10;
    const mediaFinal = (resultado + exame) / 2;
    const mensagem = document.querySelector("#text");
    const voltar = document.querySelector("#voltar");

    if (mediaFinal >= 5) {
        mensagem.textContent = `Aluno aprovado no exame:  ${mediaFinal}`;
    } else {
        mensagem.textContent = `Aluno de DP:  ${mediaFinal}`;
        contExame.style.display = 'none';
        voltar.style.display = 'block';
    }
}

function atualizar() {
    window.location.reload(true);
}
