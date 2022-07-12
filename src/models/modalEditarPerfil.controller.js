export default class Perfil {
    static valorToken = JSON.parse(localStorage.getItem("@kenzie-capstone:token"))

    static async editarPerfil(dadosParaAlterar) {
        return await fetch("https://habits-kenzie.herokuapp.com/api/user/profile", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.valorToken}`
            },
            body: JSON.stringify(dadosParaAlterar)
        })
            .then(res => res.json())
            .catch(erro => console.log(erro))
    }
}

