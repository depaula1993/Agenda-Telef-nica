import { botaoAtualiza } from "./atualizaContato.js";
import { botaoExcluir } from "./excluirContato.js";
import { listaContatos } from "./lista.js";
export const campos = document.querySelectorAll("[required]");

export const busca = document.querySelector("[data-busca]");
const botaoBusca = document.querySelector("[data-btn-busca]");
export const lista = document.querySelector("[data-lista]");
export const comoAtualizar =  document.querySelector("[data-como-atualizar]");
export const cttNaoEncontrado = document.querySelector("[data-ctt-nao-enc]");

export function buscaDados () {

    botaoBusca.addEventListener("click", () =>{
        const dado = busca.value;
        const regex = new RegExp(`^${dado}`,'i');
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
            botoes.appendChild(botaoExcluir(element));
            lista.appendChild(botoes)
            //lista.appendChild(botaoAtualiza(element));
            //lista.appendChild(botaoExcluir());     
        });

        if(contato.length != 0){
            comoAtualizar.style.display = "block";
            cttNaoEncontrado.style.display ="none";
        }else{
            cttNaoEncontrado.style.display ="block";
            comoAtualizar.style.display = "none";
        }
        /*campos[0].value = contato.nome;
        campos[1].value = contato.telefone;
        campos[2].value = contato.email;
        */
    })
}
