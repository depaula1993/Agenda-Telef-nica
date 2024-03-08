import { botaoAtualiza } from "./atualizaContato.js";
import { botaoExcluir } from "./excluirContato.js";
import { listaContatos } from "./lista.js";
export const campos = document.querySelectorAll("[required]");

export const busca = document.querySelector("[data-busca]");
const botaoBusca = document.querySelector("[data-btn-busca]");
export const lista = document.querySelector("[data-lista]");

export function buscaDados () {

    lista.setAttribute("data-lista", 1);
    
    botaoBusca.addEventListener("click", () =>{
        const dado = busca.value;
        const regex = new RegExp(dado,"i");
        const dadosSalvos = JSON.parse(localStorage.getItem('contatos'));    
        const contato = dadosSalvos.filter((elemento) => regex.test(elemento.nome) || elemento.telefone == dado 
        || elemento.email == dado);
        
        lista.innerHTML = "";

        contato.forEach(element => {
            const botoes = document.createElement("div");
            botoes.classList.add("botoes__atualiza_exclui")
            lista.appendChild(listaContatos(element));
            lista.classList.add("lista__Busca");
            botoes.appendChild(botaoAtualiza(element));
            botoes.appendChild(botaoExcluir());
            lista.appendChild(botoes)
            //lista.appendChild(botaoAtualiza(element));
            //lista.appendChild(botaoExcluir());     
        });
        
        
        
        /*campos[0].value = contato.nome;
        campos[1].value = contato.telefone;
        campos[2].value = contato.email;
        */
    })
}
