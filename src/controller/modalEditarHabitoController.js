import ModalExcluir from "./modalExcluir.controller.js";

import requisicoesEditarHabito from "../models/requisicoesEditarHabitoModels.js";

export default class modalEditarHabito {
    static body = document.querySelector("body");

    static recebeDados(id) {
        
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
            /* "habit id": id, */
            "habit_title": titulo,
            "habit_description": descricao,
            "habit_category": categoria,
            // "habit_status": status
        }

        
        
        
        requisicoesEditarHabito.salvaAlteracoes(dadosRequisicao, id)
        requisicoesEditarHabito.atualizaStatus(id);
        // requisicoesEditarHabito.atualizaMain();
        console.log(dadosRequisicao)
        console.log(categoria)

    }
    

    static criarModalEditarHabito(id) {

        const divPegaGeral      = document.createElement("div");
        const divEditarHabito   = document.createElement("div");
        const divCorpoModal     = document.createElement("div");
        const divCabecalhoModal = document.createElement("div");
        const formularioModal   = document.createElement("form");
        const divTitulo         = document.createElement("div");
        const divDescricao      = document.createElement("div");
        const divCategoria      = document.createElement("div");
        const divStatus         = document.createElement("div");
        const subDivStatus      = document.createElement("div");
        const divBotoes         = document.createElement("div");

        divPegaGeral.classList.add("divPegaGeral")
        divEditarHabito.id = "editar-habito";
        divCorpoModal.classList.add("corpo-model-editar");
        divCabecalhoModal.classList.add("cabecalho-model-editar");
        formularioModal.classList.add("formulario-editar-habito");
        divTitulo.classList.add("agrupar");
        divDescricao.classList.add("agrupar");
        divCategoria.classList.add("agrupar");
        divStatus.classList.add("agrupar");
        subDivStatus.classList.add("status-habito");
        divBotoes.classList.add("botoes-model-editar");

        const tituloEditarHabito    = document.createElement("h4");
        const botaoFechar           = document.createElement("button");
        const iconeBotaoFechar      = document.createElement("p");
        const labelTitulo           = document.createElement("label");
        const inputTitulo           = document.createElement("input");
        const labelDescricao        = document.createElement("label");
        const inputDescricao        = document.createElement("input");
        const labelCategoria        = document.createElement("label");
        const selectCategoria       = document.createElement("select");
        const optionCategoria       = document.createElement("option");
        const optionCasa            = document.createElement("option");
        const optionEstudo          = document.createElement("option");
        const optionLazer           = document.createElement("option");
        const optionTrabalho        = document.createElement("option");
        const optionSaude           = document.createElement("option");
        const labelStatus           = document.createElement("label");
        const inputStatus           = document.createElement("input");
        const botaoExcluir          = document.createElement("button");
        const botaoSalvar           = document.createElement("button");


        tituloEditarHabito.innerText = "Editar hábito";

        botaoFechar.classList.add("fechar-modal-editar");
        botaoFechar.classList.add("editar-fechar");
        botaoFechar.innerText = "X";

        botaoFechar.addEventListener("click", el => {
            el.preventDefault();
            divPegaGeral.style.display = "none";
        })

        labelTitulo.classList.add("label", "titulo-habito");
        labelTitulo.innerText = "Título";
        labelTitulo.for = "titulo-habito";

        inputTitulo.type = "text";
        inputTitulo.id = "titulo";
        inputTitulo.name = "titlulo-habito";
        inputTitulo.classList.add("input", "input--titulo-habito");
        inputTitulo.placeholder = "Digitar título";

        labelDescricao.classList.add("label", "label--descricao")
        labelDescricao.for = "descricao-habito";
        labelDescricao.innerText = "Descrição";

        inputDescricao.type = "text";
        inputDescricao.id = "descricao";
        inputDescricao.name = "descricao-habito";
        inputDescricao.classList.add("input", "input--descricao-habito");
        inputDescricao.placeholder = "Digitar descrição";
        
        labelCategoria.classList.add("label", "label-categoria");
        labelCategoria.for = "categoria-habito";
        labelCategoria.innerText = "Categoria";

        selectCategoria.id = "categoria";
        selectCategoria.name = "categoria-habito";
        selectCategoria.classList.add("input", "input--categoria-habito");

        optionCategoria.innerText = "Categoria";
        optionCategoria.value = "";
        
        optionCasa.innerText = "Casa";
        optionCasa.value = "casa";
        optionCasa.classList.add("fa-solid", "user-alt");

        optionEstudo.innerText = "Estudo";
        optionEstudo.value = "estudos";
        optionEstudo.classList.add("fa-solid", "poll-h");

        optionLazer.innerText = "Lazer";
        optionLazer.value = "lazer";
        optionLazer.classList.add("fa-solid", "leaf")

        optionTrabalho.innerText = "Trabalho";
        optionTrabalho.value = "trabalho";
        optionTrabalho.classList.add("fa-solid", "poll");

        optionSaude.innerText = "Saúde";
        optionSaude.value = "saude";
        optionSaude.classList.add("fa-solid", "heart")

        labelStatus.classList.add("label", "label-status");
        labelStatus.for = "categoria-habito";
        labelStatus.innerText = "Status";

        inputStatus.type = "checkbox";
        inputStatus.id = "status";
        inputStatus.name = "status-habito";
        inputStatus.checked = "";

        botaoExcluir.type = "submit";
        botaoExcluir.classList.add("excluir");
        botaoExcluir.innerText = "Excluir";
        botaoExcluir.addEventListener("click", el => {
            el.preventDefault();
            /* --------editarHabito.excluirHabito(token);======== */
            ModalExcluir.modalExcluir(id)
            divPegaGeral.style.display = "none"
            
        });

        botaoSalvar.type = "submit";
        botaoSalvar.classList.add("salvar-alteracao");
        botaoSalvar.innerText = "Salvar alterações";
        botaoSalvar.addEventListener("click", el => {
            el.preventDefault();
            const divFecharModalEditarHabito = document.querySelector(".divPegaGeral")
            divFecharModalEditarHabito.style.display = "none"
            this.recebeDados(id)
            // window.location.reload(true)
        })

        // // const iconeCasa        = document.createElement("icone");
        // const imgCasa           = document.createElement("img");
        // // const iconeEstudo      = document.createElement("icone");
        // const imgEstudo         = document.createElement("img");
        // // const iconeLazer       = document.createElement("icone");
        // const imgLazer          = document.createElement("img");
        // // const iconeTrabalho    = document.createElement("icone");
        // const imgTrabalho       = document.createElement("img");
        // // const iconeSaude       = document.createElement("icone");
        // const imgSaude          = document.createElement("saude");

        // iconeCasa.classList.add("icone-options");
        // iconeEstudo.classList.add("icone-options");
        // iconeLazer.classList.add("icone-options");
        // iconeTrabalho.classList.add("icone-options");
        // iconeSaude.classList.add("icone-options");

        // imgCasa.src = "../assets/img/user.png";
        // imgCasa.classList.add("image-options");
        
        // imgEstudo.src = "../assets/img/estudo.png";
        // imgEstudo.classList.add("image-options");

        // imgLazer.src = "../assets/img/lazer.png";
        // imgLazer.classList.add("image-options");

        // imgTrabalho.src = "../assets/img/trabalho.png";
        // imgTrabalho.classList.add("image-options");

        // imgSaude.src = "../assets/img/saude.png";
        // imgSaude.classList.add("image-options");


        this.body.append(divPegaGeral);

        divEditarHabito.append(divCorpoModal);

        divCorpoModal.append(divCabecalhoModal, formularioModal);

        divCabecalhoModal.append(tituloEditarHabito, botaoFechar);

        formularioModal.append(divTitulo, divDescricao, divCategoria, divStatus, divBotoes);

        divTitulo.append(labelTitulo, inputTitulo);
        divDescricao.append(labelDescricao, inputDescricao);
        divCategoria.append(labelCategoria, selectCategoria);
        divStatus.append(subDivStatus);
        subDivStatus.append(labelStatus, inputStatus);
        divBotoes.append(botaoExcluir, botaoSalvar);

        divPegaGeral.append(divEditarHabito)

        selectCategoria.append(optionCasa, optionEstudo, optionLazer, optionTrabalho, optionSaude);
        
        divPegaGeral.style.display = "none"

        // optionCasa.append(iconeCasa);
        // optionEstudo.append(iconeEstudo);
        // optionLazer.append(iconeLazer);
        // optionTrabalho.append(iconeTrabalho);
        // optionSaude.append(iconeSaude);

        // iconeCasa.append(imgCasa);
        // iconeEstudo.append(imgEstudo);
        // iconeLazer.append(imgLazer);
        // iconeTrabalho.append(imgTrabalho);
        // iconeCasa.append(imgSaude)

    }
}