export default class requisicoesEditarHabito {
    static url = "https://habits-kenzie.herokuapp.com/api/habits";
    static token = JSON.parse(localStorage.getItem("@kenzie-capstone:token"))
    static headers = {
        "Content-Type": "aplication/json",
        "Authorization": `Bearer ${this.token}`
    };

    static async salvaAlteracoes (dados_alteracao) {
        return await fetch(`${this.url}/${dados_alteracao.habit_id}`, {
            method: "PATCH",
            headers: `${this.headers}`,
            body: JSON.stringify(dados_alteracao)
        })
        .then(res => res.json())
        .then(res => 
            console.log(res))
        .catch(err=> console.log(err))
    }
}