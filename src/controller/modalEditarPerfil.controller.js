import Perfil from "../models/modalEditarPerfil.controller.js"
export default class ModalEditarPerfil {
    static body = document.querySelector('body')

    static modalEditarPerfil() {
        const corpoPrincipalModalEditarPerfil = document.createElement('div')
        corpoPrincipalModalEditarPerfil.classList.add('modal-editar-perfil')

        const corpoEditarPerfil = document.createElement('div')
        corpoEditarPerfil.classList.add('corpo-editar-perfil')

        const cabecalhoEditarPerfil = document.createElement('header')
        cabecalhoEditarPerfil.classList.add('cabecalho-editar-perfil')

        const tagEditarPerfil = document.createElement('h4')
        tagEditarPerfil.innerText = 'Editar Perfil'

        const buttonX = document.createElement('button')

        buttonX.addEventListener('click', event => {
            corpoPrincipalModalEditarPerfil.style.display = 'none'
        })

        const imagemX = document.createElement('img')
        imagemX.src = '/src/assets/img/X.png'
        imagemX.alt = 'Fechar'

        const formularioEditarPerfil = document.createElement('form')
        formularioEditarPerfil.classList.add('formulario-editar-perfil')

        const labelNome = document.createElement('label')
        labelNome.for = 'nome-perfil'
        labelNome.innerText = 'Nome'

        const inputNome = document.createElement('input')
        inputNome.id = 'nome-perfil'
        inputNome.type = 'text'

        const labelUrlImagem = document.createElement('label')
        labelUrlImagem.for = 'imagem-perfil'
        labelUrlImagem.innerText = 'URL da imagem do perfil'

        const inputImg = document.createElement('input')
        inputImg.id = 'imagem-perfil'
        inputImg.type = 'text'

        const salvar = document.createElement('button')
        salvar.type = 'button'
        salvar.innerText = 'Salvar alterações'
        salvar.classList.add('salvar-alteracoes')

        salvar.addEventListener('click', event => {
            const nomeDoUsuario = inputNome.value
            const urlDoUsuario = inputImg.value

            const dadosParaAlterar =
            {
                "usr_image": urlDoUsuario
            }

            await Perfil.editarPerfil(dadosParaAlterar)
        })

        formularioEditarPerfil.append(labelNome, inputNome, labelUrlImagem, inputImg, salvar)

        buttonX.appendChild(imagemX)

        cabecalhoEditarPerfil.append(tagEditarPerfil, buttonX)

        corpoEditarPerfil.append(cabecalhoEditarPerfil, formularioEditarPerfil)

        corpoPrincipalModalEditarPerfil.append(corpoEditarPerfil)

        this.body.appendChild(corpoPrincipalModalEditarPerfil)
    }
}

