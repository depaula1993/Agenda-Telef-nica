import { lista, comoAtualizar, cttNaoEncontrado } from "./buscarDados.js";
import { listaContatos } from "./lista.js";
import { dadosSalvos } from "./salvarDados.js";


const campos = document.querySelectorAll("[required]");

export function botaoAtualiza(contato) {

    const botaoAtualiza = document.createElement("button");
    botaoAtualiza.innerHTML = "Atualizar"
    botaoAtualiza.classList.add("botoes");

    botaoAtualiza.addEventListener("click", () =>{
        
        if(campos[0].value != "" && campos[1].value != "" && campos[2].value != ""){
            let posicaoContato = dadosSalvos.findIndex(objeto => objeto.id === contato.id);
            dadosSalvos[posicaoContato].nome = campos[0].value;
            dadosSalvos[posicaoContato].telefone = campos[1].value;
            dadosSalvos[posicaoContato].email = campos[2].value;
        
            lista.innerHTML = "";
            lista.appendChild(listaContatos(dadosSalvos[posicaoContato]));
            comoAtualizar.style.display = "none";
            cttNaoEncontrado.style.display ="none";

            localStorage.setItem('contatos', JSON.stringify(dadosSalvos));
        }    
    })

    return botaoAtualiza

}