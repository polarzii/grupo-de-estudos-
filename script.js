const nome = document.querySelector("#nome");
const horas = document.querySelector("#horas");
const participacao = document.querySelector("#participacao");
const resumo = document.querySelector("#resumo");

const apresentacao = document.querySelector("#apresentacao");
const contador = document.querySelector("#contador");

let modalidade = participacao.querySelector("input:checked");


function atualizarResumo() {
    const nomeDigitado = nome.value.trim();
    const horasDigitadas = horas.value;

    if (nomeDigitado === "") {
        resumo.textContent = "Resumo: preencha o formulário para ver.";
        return;
    }

    const textoModalidade = modalidade
        .closest("label")
        .textContent
        .trim()
        .toLowerCase();

    resumo.textContent =
        `Resumo: ${nomeDigitado} vai participar ${textoModalidade}, estudando ${horasDigitadas} horas por semana.`;
}


function atualizarContador() {
    const quantidade = apresentacao.value.length;

    contador.textContent = `${quantidade} caracteres`;

    contador.classList.toggle("limite", quantidade > 100);
}


nome.addEventListener("input", atualizarResumo);

horas.addEventListener("input", atualizarResumo);

participacao.addEventListener("change", (evento) => {
    modalidade = evento.target;
    atualizarResumo();
});

apresentacao.addEventListener("input", atualizarContador);