import login from "../controller/login.controller.js";

export default class dadosUser {
    static async dadosParaLogin() {
        const formularioLogin = document.querySelector(".formLogin")
        const dados = formularioLogin.elements
        
        let data = {}

        for(let i = 0; i < dados.length; i++) {
            let item = dados[i]
            if(item !== "") {
                data[item.name] = item.value
            }
        }
        console.log(data)
        const logar = await login.entrarSite(data)
    }
}


