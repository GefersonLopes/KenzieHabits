export default class login {

    static async entrarSite(dadosParaLogin) {
        const urlBase = "https://habits-kenzie.herokuapp.com/api/userLogin"

        return await fetch(urlBase, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosParaLogin)
        })
        .then(resposta => resposta.json())
        .then(resposta => {
            const variavelUsuario = resposta.response
            /* console.log(variavelUsuario.usr_image) */
            localStorage.setItem("@kenzie-capstone:userName", JSON.stringify(variavelUsuario.usr_name))
            localStorage.setItem("@kenzie-capstone:userFoto", JSON.stringify(variavelUsuario.usr_image))
            localStorage.setItem("@kenzie-capstone:token", JSON.stringify(resposta.token))
            return resposta
        })
        .catch(err => console.log(err))
    }
}