import Homepage from "../models/homepage.models.js";


export default class requisicoesEditarHabito {
    static url = "https://habits-kenzie.herokuapp.com/api/habits";
    static token = JSON.parse(localStorage.getItem("@kenzie-capstone:token"))
    static headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
    };

    static async salvaAlteracoes (dados_alteracao, id) {
        return await fetch(`${this.url}/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(dados_alteracao)
        })
        .then(res => res.json())
        .then(res => {
            window.location.reload(true);
            return res;
            // console.log(res)
        })
        .catch(err => console.log(err))
    }

    static async atualizaStatus(id) {
        return await fetch(`${this.url}/complete/${id}`, {
            method : "PATCH",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => {
            window.location.reload(true);
            return res;
            // console.log(res);
        })
        .catch(err => console.log(err));
    }

    static async pegarDadosDoHabito(id){
        return await fetch(this.url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }


}