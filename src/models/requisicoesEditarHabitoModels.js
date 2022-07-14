export default class requisicoesEditarHabito {
    static url = "https://habits-kenzie.herokuapp.com/api/habits";

    static headers = {
        "Content-Type": "aplication/json",
        "Authorization": `Bearer ${token}`
    };

    static async salvaAlteracoes (dados_alteracao, url, headers) {
        return await fetch(`${url}/${id}`, {
            method: "PATCH",
            headers: `${headers}`,
            body: JSON.stringify(dados_alteracao)
        })
        .then(res => res.json())
        .then(res => 
            console.log(res))
        .catch(err=> console.log(err))
    }
}