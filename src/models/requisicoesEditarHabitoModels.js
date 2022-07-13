export default class requisicoesEditarHabito {
    static url = "https://habits-kenzie.herokuapp.com/api/habits";
    static token = JSON.parse(localStorage.getItem("@kenzie-capstone:token0"));
    static headers = {
        "Content-Type": "aplication/json",
        "Authorization": `Bearer ${token}`
    };

    static async salvaAlteracoes (dados_alteracao, url, headers) {
        return await fetch(`${url}/habits/${id}`, {
            method: "PATCH",
            headers: `${headers}`,
            body: JSON.stringify(dados_alteracao)
        })
        .then(res => res.json())
        .catch(err=> console.log(err))
    }

}