import login from "../controller/login.controller.js";
import componentesDomLogin from "../controller/pagina_login.controller.js";
import { Construção } from "../models/criarHabitos.models.js";
import dadosUser from "../models/login.models.js";
import Homepage from "../models/homepage.models.js";
import ModalEditarPerfil from "../controller/modalEditarPerfil.controller.js";


/* Construção.criarHabitos() */

componentesDomLogin.paginaDomLogin()

const btnFormulario = document.querySelector(".formLogin")

btnFormulario.addEventListener("submit", (e) => {
    e.preventDefault()
    dadosUser.dadosParaLogin()
    if(JSON.parse(localStorage.getItem("@kenzie-capstone:token")) === null){
        alert("aqui nao!")
    } else if(JSON.parse(localStorage.getItem("@kenzie-capstone:token")) !== null) {
        window.location.href = "/temp/testando.html"
    }
})


