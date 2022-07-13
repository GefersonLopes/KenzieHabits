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
            console.log(resposta)
            localStorage.setItem("@kenzie-capstone:token", JSON.stringify(resposta.token))
            return resposta
        })
        .catch(err => console.log(err))
    }
}