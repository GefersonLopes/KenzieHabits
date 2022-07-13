class Homepage {

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
        imgUsuario.src = "/src/assets/img/logoKenzieHabit.png";
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
        imgUsuarioHeader.src = "/src/assets/img/logoKenzieHabit.png";
        imgUsuarioHeader.alt = "Imagem do Usuario";
        imgUsuarioHeader.classList.add("image", "image__usuario-2");
        figureUsuarioHeader.appendChild(imgUsuarioHeader);

        const divContainerUsuarioInfo = document.createElement("div");
        divContainerUsuarioInfo.classList.add("container", "container__usuario-info");

        const h4Nome = document.createElement("h4");
        h4Nome.classList.add("h4", "h4__nome");
        h4Nome.innerText = "Júlia Silva Camargo";

        const pUsuarioInfo = document.createElement("p");
        pUsuarioInfo.classList.add("p", "p__usuario-info");
        pUsuarioInfo.innerText = "Estudante de Programação";

        divContainerUsuarioInfo.append(h4Nome, pUsuarioInfo);
        divContainerUsuarioHeader.append(figureUsuarioHeader, divContainerUsuarioInfo)
        divContainerUsuario.appendChild(divContainerUsuarioHeader);
        header.appendChild(divContainerUsuario);
        body.appendChild(header);

        return header;
    }

    criarMain() {
        const main = document.createElement("main");
        main.classList.add("main");

        const divContainerTarefas = document.createElement("div");
        divContainerTarefas.classList.add("container container__tarefas");

        const sectionTarefasHeader = document.createElement("section");
        sectionTarefasHeader.classList.add("section section__tarefas-header");

        const divContainerTarefasHeader = document.createElement("div");
        divContainerTarefasHeader.classList.add("container container__tarefas-header");


    }
}

export default Homepage;