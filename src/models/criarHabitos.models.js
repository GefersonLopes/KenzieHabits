export class Construção {

    static criarHabitos() {

        const btnAdicionar = document.querySelector("button");

        btnAdicionar.addEventListener("click", () => {

            const body = document.querySelector("body");
            body.classList = "classeTemp";

            const divMae = document.createElement("div");
            const div = document.createElement("div");

            const header = document.createElement("header");
            const h4 = document.createElement("h4");
            const buttonClose = document.createElement("button");
            const img = document.createElement("img");

            const form = document.createElement("form");

            const labelTitle = document.createElement("label");
            const inputTitulo = document.createElement("input");

            const labelText = document.createElement("label");
            const textArea = document.createElement("textarea");

            const labelCategoria = document.createElement("label");
            const select = document.createElement("select");
            const option = document.createElement("option");

            const buttonInserir = document.createElement("button");

            divMae.classList = "divMae";
            div.classList = "modelCriar_habito";
            header.classList = "modelTopo";
            h4.classList = "h4_criar";
            buttonClose.classList = "btn_close";
            img.classList = "imgClose";
            form.classList = "form_criarHabito";
            labelTitle.classList = "title";
            inputTitulo.classList = "inputs";
            labelText.classList = "title";
            textArea.classList = "text";
            labelCategoria.classList = "title";
            select.classList = "inputs";
            option.classList = "inputs";
            buttonInserir.classList = "btn_inserir";

            h4.innerText = "Criar hábito";
            img.src = "./src/img/icons/btn_close.png";
            img.alt = "fechar";
            labelTitle.innerText = "Título";
            inputTitulo.placeholder = "Digitar título";
            inputTitulo.name = "titulo";
            labelText.innerText = "Descrição";
            textArea.placeholder = "Digitar descrição";
            textArea.name = "descrição";
            labelCategoria.innerText = "Categoria";
            select.name = "seletor";
            option.innerText = "Selecionar categoria";
            buttonInserir.innerText = "Inserir";

            select.append(option);
            labelText.append(textArea);
            labelCategoria.append(select);
            labelTitle.append(inputTitulo);
            form.append(labelTitle, labelText, labelCategoria, buttonInserir);
            buttonClose.append(img);
            header.append(h4, buttonClose);
            div.append(header, form);
            divMae.append(div);
            body.append(divMae);

            buttonClose.addEventListener("click", () => {
                Construção.fechar();
            })
            Construção.dadosFormulario();

        });

    }

    static fechar() {

        const model = document.querySelector(".modelCriar_habito");
        const divMae = document.querySelector(".divMae");

        
        model.classList = "";
        model.remove();
        divMae.classList = "";

    }

    static dadosFormulario() {

        const form = document.querySelector(".form_criarHabito")
        let elementosForm = form.elements;
        
        form.addEventListener("submit", (e) => {
            
            
            e.preventDefault();
            let dados = "";

            for (let i = 0; i < elementosForm.length - 1; i++) {
                dados = {
                    titulo: elementosForm[0].value,
                    descrição: elementosForm[1].value,
                    area: elementosForm[2].value,
                }

            }
            console.log(dados);
            Construção.fechar();
            
        })
        
    }

}


