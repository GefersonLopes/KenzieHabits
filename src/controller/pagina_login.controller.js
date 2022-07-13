export default class componentesDomLogin {
    static paginaDomLogin() {
        const body = document.querySelector("body")
        const divContainerGeral = document.createElement("div")
        divContainerGeral.classList.add("container_geral")

        const divContainer = document.createElement("div")
        divContainer.classList.add("container")

        const divPartLogin = document.createElement("div")
        divPartLogin.classList.add("partLogin")

        const tituloLogin = document.createElement("h4")
        tituloLogin.classList.add("titulo_login")
        tituloLogin.innerText = "Login"


        //FORMULARIO PARA LOGIN
        const formLogin = document.createElement("form")
        formLogin.classList.add("formLogin")

        const labelEmail = document.createElement("label")
        labelEmail.for = "email"
        labelEmail.innerText = "Usuário"

        const inputEmail = document.createElement("input")
        inputEmail.autocomplete="off" 
        inputEmail.type="email" 
        inputEmail.name="email" 
        inputEmail.id="email" 
        inputEmail.placeholder="Digitar meu email"

        const labelSenha = document.createElement("label")
        labelSenha.for = "password"
        labelSenha.innerText = "Senha"

        const inputSenha = document.createElement("input")
        inputSenha.autocomplete="off" 
        inputSenha.type="password" 
        inputSenha.name="password" 
        inputSenha.id="password" 
        inputSenha.placeholder="Digitar minha senha"

        const btnEntrar = document.createElement("button")
        btnEntrar.type = "submit"
        btnEntrar.classList.add("btnEntrar")
        btnEntrar.innerText = "Entrar"


        //PROPAGANDA DA PAGINA
        const divPartPropaganda = document.createElement("div")
        divPartPropaganda.classList.add("partPropaganda")

        const tituloPropaganda = document.createElement("h2")
        tituloPropaganda.innerText = "KenzieHabit"

        const spanPropaganda = document.createElement("span")
        spanPropaganda.innerHTML = "If you are going to use a <u>passage</u> of Lorem Ipsum"
        
        const pPropaganda = document.createElement("p")
        pPropaganda.innerText = "you need to be sure there isn't anything"

        formLogin.append(labelEmail, inputEmail, labelSenha, inputSenha, btnEntrar)
        divPartLogin.append(tituloLogin, formLogin)
        divPartPropaganda.append(tituloPropaganda, spanPropaganda, pPropaganda)
        divContainer.append(divPartLogin, divPartPropaganda)
        divContainerGeral.append(divContainer)
        body.append(divContainerGeral)
    }
}