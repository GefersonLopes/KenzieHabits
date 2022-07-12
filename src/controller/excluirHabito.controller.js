export default class Modais {
    static corpoPrincipalModalExcluir = document.getElementById('corpo')
    static modalExcluir() {

        const excluirHabito = document.createElement('div')
        excluirHabito.classList.add('excluir-habito')

        const cabecalhoExcluir = document.createElement('header')
        cabecalhoExcluir.classList.add('cabecalho-model-excluir')

        const textoExcluir = document.createElement('h4')
        textoExcluir.innerText = "Excluir hábito"

        const fecharModal = document.createElement('button')
        fecharModal.classList.add('fechar-modal-excluir')
        fecharModal.type = 'button'

        fecharModal.addEventListener('click', event => {
            this.corpoPrincipalModalExcluir.style.display = 'none'
        })

        const imagemX = document.createElement('img')
        imagemX.src = '/src/assets/img/X.png'
        imagemX.alt = 'Fechar'

        const corpoDoModal = document.createElement('div')
        corpoDoModal.classList.add('corpo-model-excluir')

        const textoConfirmando = document.createElement('h4')
        textoConfirmando.innerText = 'Certeza que deseja excluir este hábito?'

        const textoAlerta = document.createElement('p')
        textoAlerta.innerText = 'Após executar essa ação não será possível desfazer'

        const botoesExcluir = document.createElement('div')
        botoesExcluir.classList.add('botoes-model-excluir')

        const cancelar = document.createElement('button')
        cancelar.classList.add('cancelar')
        cancelar.type = 'button'
        cancelar.innerText = 'Cancelar'

        cancelar.addEventListener('click', event => {
            this.corpoPrincipalModalExcluir.style.display = 'none'
        })

        const confirmar = document.createElement('button')
        confirmar.classList.add('confirmacao-para-excluir')
        confirmar.type = 'button'
        confirmar.innerText = 'Sim, excluir este hábito'

        botoesExcluir.append(cancelar, confirmar)

        corpoDoModal.append(textoConfirmando, textoAlerta)

        fecharModal.appendChild(imagemX)

        cabecalhoExcluir.append(textoExcluir, fecharModal)

        excluirHabito.append(cabecalhoExcluir, corpoDoModal, botoesExcluir)

        this.corpoPrincipalModalExcluir.append(excluirHabito)
    }
}




















