// import requisicoesEditarHabito from "../models/requisicoesEditarHabitoModels.js";

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
            "habit id": id,
            "habit_title": titulo,
            "habit_description": descricao,
            "habit_category": categoria,
            "habit_status": status
        }
    
        console.log(dadosRequisicao)
    }
    

    static criarModalEditarHabito(id, token) {

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
        iconeBotaoFechar.classList.add("editar-fechar");
        iconeBotaoFechar.innerText = "X";

        botaoFechar.addEventListener("click", el => {
            el.preventDefault();
            //criar função para fechar
        })

        labelTitulo.classList.add("titulo-habito");
        labelTitulo.innerText = "Título";
        labelTitulo.for = "titulo-habito";

        inputTitulo.type = "text";
        inputTitulo.id = "titulo";
        inputTitulo.name = "titlulo-habito";
        inputTitulo.classList.add("input", "input--titulo-habito");
        inputTitulo.placeholder = "Digitar título";

        labelDescricao.for = "descricao-habito";

        inputDescricao.type = "text";
        inputDescricao.id = "descricao";
        inputDescricao.name = "descricao-habito";
        inputDescricao.classList.add("input", "input--descricao-habito");
        inputDescricao.placeholder = "Digitar descrição";
        
        labelCategoria.for = "categoria-habito";
        selectCategoria.id = "categoria";
        selectCategoria.name = "categoria-habito";
        selectCategoria.classList.add("input", "input--categoria-habito");

        optionCategoria.innerText = "Categoria";
        optionCategoria.value = "";
        
        optionCasa.innerText = "Casa";
        optionCasa.value = "casa";
        optionCasa.classList.add("fa-solid", "user-alt");

        optionEstudo.innerText = "Estudo";
        optionEstudo.value = "estudo";
        optionEstudo.classList.add("fa-solid", "poll-h");

        optionLazer.innerText = "Lazer";
        optionLazer.value = "lazer";
        optionLazer.classList.add("fa-solid", "leaf")

        optionTrabalho.innerText = "Trabalho";
        optionTrabalho.value = "trablho";
        optionTrabalho.classList.add("fa-solid", "poll");

        optionSaude.innerText = "Saúde";
        optionSaude.value = "saude";
        optionSaude.classList.add("fa-solid", "heart")

        labelStatus.for = "status-habito";

        inputStatus.type = "checkbox";
        inputStatus.id = "status";
        inputStatus.name = "status-habito";

        botaoExcluir.type = "submit";
        botaoExcluir.classList.add("excluir");
        botaoExcluir.innerText = "Excluir";
        botaoExcluir.addEventListener("click", el => {
            el.preventDefault();
            // editarHabito.excluirHabito(token);
            
        });

        botaoSalvar.type = "submit";
        botaoSalvar.class = "salvar-alteracao";
        botaoSalvar.innerText = "Salvar alterações";
        botaoSalvar.addEventListener("click", el => {
            el.preventDefault();
            recebeDados(id);
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


        this.body.append(divEditarHabito);

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

        selectCategoria.append(optionCategoria, optionCasa, optionEstudo, optionLazer, optionTrabalho, optionSaude);

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