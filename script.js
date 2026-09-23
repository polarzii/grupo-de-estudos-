const nome = document.querySelector("#nome");
const participacao = document.querySelector("#participacao");
const resumo = document.querySelector("#resumo");

let modalidade = participacao.querySelector("input:checked");

function atualizarResumo() {
    const nomeDigitado = nome.value.trim();

    if (nomeDigitado === "") {
        resumo.textContent = "Resumo: preencha o formulário para ver.";
        return;
    }

    const textoModalidade = modalidade
        .closest("label")
        .textContent
        .trim();

    resumo.textContent =
        `Resumo: ${nomeDigitado} vai participar ${textoModalidade.toLowerCase()}.`;
}

nome.addEventListener("input", atualizarResumo);

participacao.addEventListener("change", (evento) => {
    modalidade = evento.target;
    atualizarResumo();
});