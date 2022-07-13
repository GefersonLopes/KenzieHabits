import ModalEditarPerfil from "../controller/modalEditarPerfil.controller.js"


const btnEditarPerfil = document.querySelector(".button__usuario")

console.log(btnEditarPerfil)

btnEditarPerfil.addEventListener("click", () => {
    ModalEditarPerfil.editarPerfil()
})