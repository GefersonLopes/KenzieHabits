import login from "../controller/login.controller.js";
import componentesDomLogin from "../controller/pagina_login.controller.js";
import dadosUser from "../models/login.models.js";

componentesDomLogin.paginaDomLogin()

const btnFormulario = document.querySelector(".formLogin")

btnFormulario.addEventListener("submit", (e) => {
    e.preventDefault()
    dadosUser.dadosParaLogin()
})