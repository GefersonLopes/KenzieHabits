import ModalEditarPerfil from "../controller/modalEditarPerfil.controller.js";
import ModalExcluir from "../controller/modalExcluir.controller.js";


class Homepage {
    static menuMudarPerfil() {
        const body = document.querySelector("body")
        const divContainer = document.createElement("div")
        divContainer.classList.add("menuOpen")
        
        const imgTriangulo = document.createElement("img")
        imgTriangulo.src = "/src/assets/img/Polygon 1.png"
        imgTriangulo.classList.add("triangulo")

        const btnEditarPerfil = document.createElement("button")
        btnEditarPerfil.classList.add("editarPerfil")
        const imgBoneco = document.createElement("img")
        imgBoneco.src = "/src/assets/img/user.png"
        btnEditarPerfil.innerText = "Editar perfil"

        btnEditarPerfil.append(imgBoneco)


        const btnFazerLogout = document.createElement("button")
        btnFazerLogout.classList.add("logout")
        const imgSetaLogout = document.createElement("img")
        imgSetaLogout.src = "/src/assets/img/logoutHeader.png"
        btnFazerLogout.innerText = "Sair do app"

        btnFazerLogout.append(imgSetaLogout)

        divContainer.append(imgTriangulo, btnEditarPerfil, btnFazerLogout)

        body.append(divContainer)

        btnEditarPerfil.addEventListener("click", () => {
            ModalEditarPerfil.editarPerfil()

        })

        btnFazerLogout.addEventListener("click", () => {
            window.location.href = "/index.html"
            localStorage.clear()
        })
        

    }

    static criarHeader() {
        const body = document.querySelector("body");

        const header = document.createElement("header");
        header.classList.add("header");

        const divLogoUsuario = document.createElement("div");
        divLogoUsuario.classList.add("container", "container__logo-usuario");

        const divLogoUsuarioHeader = document.createElement("div");
        divLogoUsuarioHeader.classList.add("container", "container__logo-usuario-header");

        const figureLogo = document.createElement("figure");
        const imgLogo = document.createElement("img");
        imgLogo.src = "/src/assets/img/logoKenzieHabit.png";
        imgLogo.alt = "Logo KenzieHub";
        imgLogo.classList.add("image", "image__logo");
        figureLogo.appendChild(imgLogo);

        const buttonUsuario = document.createElement("button");
        buttonUsuario.classList.add("button", "button__usuario");
        const figureUsuario = document.createElement("figure");
        const imgUsuario = document.createElement("img");
        imgUsuario.src = JSON.parse(localStorage.getItem("@kenzie-capstone:userFoto"));
        imgUsuario.alt = "Imagem de Perfil";
        imgUsuario.classList.add("image", "image__usuario");
        figureUsuario.appendChild(imgUsuario);
        buttonUsuario.appendChild(figureUsuario);

        divLogoUsuarioHeader.append(figureLogo, buttonUsuario);
        divLogoUsuario.append(divLogoUsuarioHeader);
        header.appendChild(divLogoUsuario);

        const divContainerUsuario = document.createElement("div");
        divContainerUsuario.classList.add("container", "container__usuario");

        const divContainerUsuarioHeader = document.createElement("div");
        divContainerUsuarioHeader.classList.add("container", "container__usuario-header");

        const figureUsuarioHeader = document.createElement("figure");
        const imgUsuarioHeader = document.createElement("img");
        imgUsuarioHeader.src = JSON.parse(localStorage.getItem("@kenzie-capstone:userFoto"));
        imgUsuarioHeader.alt = "Imagem do Usuario";
        imgUsuarioHeader.classList.add("image", "image__usuario-2");
        figureUsuarioHeader.appendChild(imgUsuarioHeader);

        const divContainerUsuarioInfo = document.createElement("div");
        divContainerUsuarioInfo.classList.add("container", "container__usuario-info");

        const h4Nome = document.createElement("h4");
        h4Nome.classList.add("h4", "h4__nome");
        h4Nome.innerText = JSON.parse(localStorage.getItem("@kenzie-capstone:userName"));

        const pUsuarioInfo = document.createElement("p");
        pUsuarioInfo.classList.add("p", "p__usuario-info");
        pUsuarioInfo.innerText = "Estudante de Programação";

        divContainerUsuarioInfo.append(h4Nome, pUsuarioInfo);
        divContainerUsuarioHeader.append(figureUsuarioHeader, divContainerUsuarioInfo)
        divContainerUsuario.appendChild(divContainerUsuarioHeader);
        header.appendChild(divContainerUsuario);
        body.appendChild(header);


        buttonUsuario.addEventListener("click", () => {
            this.menuMudarPerfil()
            
        })

        return header;
    }

    static criarMain() {
        const body = document.querySelector("body")
        const main = document.createElement('main')
        main.classList.add('main')
        
        const containerContainerTarefas = document.createElement('div')
        containerContainerTarefas.classList.add('container', 'container__tarefas')
        
        const sectionSectionTarefasHeader = document.createElement('section')
        sectionSectionTarefasHeader.classList.add('section', 'section__tarefas-header')
        
        const containerContainerTarefasHeader = document.createElement('div')
        containerContainerTarefasHeader.classList.add('container', 'container__tarefas-header')
        
        const h4h4TarefasTitulo = document.createElement('h4')
        h4h4TarefasTitulo.classList.add('h4', 'h4__tarefas-titulo')
        h4h4TarefasTitulo.innerText = 'Tarefas'
        
        const containerContainerTarefasBotoes = document.createElement('div')
        containerContainerTarefasBotoes.classList.add('container', 'container__tarefas-botoes')
        
        const buttonButtonTodos = document.createElement('button')
        buttonButtonTodos.classList.add('button', 'button__todos')
        buttonButtonTodos.innerText = 'Todos'
        
        const buttonButtonConcluidos = document.createElement('button')
        buttonButtonConcluidos.classList.add('button', 'button__concluidos')
        buttonButtonConcluidos.innerText = 'Concluidos'
        
        const buttonButtonCriar = document.createElement('button')
        buttonButtonCriar.classList.add('button', 'button__criar')
        buttonButtonCriar.innerText = 'Criar'
        
        const sectionSectionTarefasTabela = document.createElement('section')
        sectionSectionTarefasTabela.classList.add('section', 'section__tarefas-tabela')
        
        const containerContainerTarefasTabela = document.createElement('div')
        containerContainerTarefasTabela.classList.add('container', 'container__tarefas-tabela')
        
        const tableTableTarefas = document.createElement('table')
        tableTableTarefas.classList.add('table', 'table__tarefas')
        
        const tr = document.createElement('tr')
        tr.classList.add('tr')
        
        const thThStatus = document.createElement('th')
        thThStatus.classList.add('th', 'th__status')
        thThStatus.innerText = 'Status'
        
        const thThTitulo = document.createElement('th')
        thThTitulo.classList.add('th', 'th__titulo')
        thThTitulo.innerText = 'Título'
        
        const thThDesc = document.createElement('th')
        thThDesc.classList.add('th', 'th__desc')
        thThDesc.innerText = 'Descrição'
        
        const thThCategoria = document.createElement('th')
        thThCategoria.classList.add('th', 'th__categoria')
        thThCategoria.innerText = 'Categoria'
        
        const thThEditar = document.createElement('th')
        thThEditar.classList.add('th', 'th__editar')
        thThEditar.innerText = 'Editar'
        
        const tr2 = document.createElement('tr')
        tr2.classList.add('tr')
        
        const tdTdCheckbox = document.createElement('td')
        tdTdCheckbox.classList.add('td', 'td__checkbox')
        
        const labelLabelTabela = document.createElement('label')
        labelLabelTabela.classList.add('label', 'label__tabela')
        
        const inputInputCheckbox = document.createElement('input')
        inputInputCheckbox.classList.add('input', 'input__checkbox')
        inputInputCheckbox.type = 'checkbox'
        inputInputCheckbox.checked = ''

        
        
        const spanSpanCheckmark = document.createElement('span')
        spanSpanCheckmark.classList.add('span', 'span__checkmark')
        
        const tdTdTitulo = document.createElement('td')
        tdTdTitulo.classList.add('td', 'td__titulo')
        tdTdTitulo.innerText = 'Fazer exercícios segunda pela manhãFazer exercícios segunda pela manhãFazer exercícios segunda pela manhãFazer exercícios segunda pela manhãFazer exercícios segunda pela manhã'
        
        inputInputCheckbox.addEventListener("click", () => {
            if(inputInputCheckbox.checked !== "checked") {
                
                tdTdTitulo.style.textDecoration = "line-through"
            } else {
                tdTdTitulo.style.color = "red"

            }
        })

        const tdTdDesc = document.createElement('td')
        tdTdDesc.classList.add('td', 'td__desc')
        tdTdDesc.innerText = 'Ir correr na próximaIr correr na próximaIr correr na próximaIr correr na próximaIr correr na próxima'
        
        const tdTdCategoria = document.createElement('td')
        tdTdCategoria.classList.add('td', 'td__categoria')
        
        const spanSpanCategoria = document.createElement('span')
        spanSpanCategoria.classList.add('span', 'span__categoria')
        spanSpanCategoria.innerText = 'Saúde'
        
        const tdTdEditar = document.createElement('td')
        tdTdEditar.classList.add('td', 'td__editar')
        
        const buttonButtonEditarHabito = document.createElement('button')
        buttonButtonEditarHabito.classList.add('button', 'button__editar-habito')
        
        /* buttonButtonEditarHabito.addEventListener("click", () => {

        }) */


        const imageImageEditarHabito = document.createElement('img')
        imageImageEditarHabito.classList.add('image', 'image__editar-habito')
        imageImageEditarHabito.alt = 'Editar Hábito'
        imageImageEditarHabito.src = '/src/assets/img/habitEdit.png'
        
        const sectionSectionButton = document.createElement('section')
        sectionSectionButton.classList.add('section', 'section__button')
        
        const containerContainerButton = document.createElement('div')
        containerContainerButton.classList.add('container', 'container__button')
        
        const buttonButtonCarregar = document.createElement('button')
        buttonButtonCarregar.classList.add('button', 'button__carregar')
        buttonButtonCarregar.innerText = 'Carregar Mais'
        
        
        containerContainerButton.append(buttonButtonCarregar)
        
        sectionSectionButton.append(containerContainerButton)
        
        buttonButtonEditarHabito.append(imageImageEditarHabito)
        
        tdTdEditar.append(buttonButtonEditarHabito)
        
        tdTdCategoria.append(spanSpanCategoria)
        
        labelLabelTabela.append(inputInputCheckbox, spanSpanCheckmark)
        
        tdTdCheckbox.append(labelLabelTabela)
        
        tr2.append(tdTdCheckbox, tdTdTitulo, tdTdDesc, tdTdCategoria, tdTdEditar)
        
        tr.append(thThStatus, thThTitulo, thThDesc, thThCategoria, thThEditar)
        
        tableTableTarefas.append(tr, tr2)
        
        containerContainerTarefasTabela.append(tableTableTarefas)
        
        sectionSectionTarefasTabela.append(containerContainerTarefasTabela)
        
        containerContainerTarefasBotoes.append(buttonButtonTodos, buttonButtonConcluidos, buttonButtonCriar)
        
        containerContainerTarefasHeader.append(h4h4TarefasTitulo, containerContainerTarefasBotoes)
        
        sectionSectionTarefasHeader.append(containerContainerTarefasHeader)
        
        containerContainerTarefas.append(sectionSectionTarefasHeader, sectionSectionTarefasTabela, sectionSectionButton)
        
        main.append(containerContainerTarefas)
        
        body.append(main)
    }

    

}

export default Homepage;