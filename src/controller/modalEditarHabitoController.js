// import requisicoesEditarHabito from "../models/requisicoesEditarHabitoModels.js";

const botaoExcluir = document.querySelector(".excluir");
botaoExcluir.addEventListener("click", el => {
    el.preventDefault();
    // editarHabito.excluirHabito();
    
});

const botaoSalvar = document.querySelector(".salvar-alteracao");
botaoSalvar.addEventListener("click", el => {
    el.preventDefault();
    recebeDados(id);
})


function recebeDados(id) {

    const inputTitulo = document.querySelector("#titulo");
    const titulo = inputTitulo.value;

    const inputDescricao = document.querySelector("#descricao");
    const descricao = inputDescricao.value;

    const selectCategoria = document.querySelector("#categoria");
    const categoria = selectCategoria.value;

    const statusHabito = document.querySelector("#status");
    const status = statusHabito.value;

    // editarHabito.editar(id, titulo, descricao, categoria, status);

    const dadosRequisicao = {
        "habit id": id,
        "habit_title": titulo,
        "habit_description": descricao,
        "habit_category": categoria,
        "habit_status": status
    }

    console.log(dadosRequisicao)
}
