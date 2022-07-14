export class Construção {

    static criarHabitos() {

        const btnAdicionar = document.querySelector(".button__criar");

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

            const optionSaude = document.createElement("option");
            const optionEstudos = document.createElement("option");
            const optionCasa = document.createElement("option");
            const optionTrabalho = document.createElement("option");
            const optionLazer = document.createElement("option");

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
            optionSaude.classList = "inputs";
            optionEstudos.classList = "inputs";
            optionCasa.classList = "inputs";
            optionTrabalho.classList = "inputs";
            optionLazer.classList = "inputs";

            buttonInserir.classList = "btn_inserir";

            h4.innerText = "Criar hábito";
            img.src = "../src/img/icons/btn_close.png";
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
            optionSaude.innerText = "saude";
            optionEstudos.innerText = "estudos";
            optionCasa.innerText = "casa";
            optionTrabalho.innerText = "trabalho";
            optionLazer.innerText = "lazer";

            buttonInserir.innerText = "Inserir";

            select.append(option,optionSaude,optionEstudos,optionCasa,optionTrabalho,optionLazer);
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
                    "habit_title": elementosForm[0].value,
                    "habit_description": elementosForm[1].value,
                    "habit_category": elementosForm[2].value,
                }

            }
            console.log(dados);
            localStorage.setItem("@kenzie-capstone:criar", JSON.stringify(dados));
            criarCardHabito.requisicao();
            Construção.fechar();

        })

    }

}

export class criarCardHabito {
    static url = "https://habits-kenzie.herokuapp.com/api/habits";

    static async requisicao() {

        return await fetch(criarCardHabito.url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("@kenzie-capstone:token"))}`
            },
            body: JSON.stringify(JSON.parse(localStorage.getItem("@kenzie-capstone:criar")))
        })
            .then(obj => obj.json())
            .then(res => {
                console.log(res);
                return res;
            })
            .catch(err => console.log("deu erro ao criar hábito " + err))

    }

}


