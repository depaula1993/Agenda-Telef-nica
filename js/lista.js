import { campos } from "./buscarDados.js";

export function listaContatos(contato) {

    const novoitem = document.createElement("dt");
    novoitem.classList.add("lista__contato");
    novoitem.innerHTML = contato.nome;
    novoitem.addEventListener("click", () => {  
        campos[0].value = contato.nome;
        campos[1].value = contato.telefone;
        campos[2].value = contato.email;
    })
    
    const itemTelefone = document.createElement("dd");
    itemTelefone.classList.add("lista__contato__dado");
    itemTelefone.innerHTML = "Tel: " + contato.telefone;
    novoitem.appendChild(itemTelefone);

    const itemEmail = document.createElement("dd");
    itemEmail.classList.add("lista__contato__dado");
    itemEmail.innerHTML = "Email: " + contato.email;
    novoitem.appendChild(itemEmail);

    return novoitem;

}

