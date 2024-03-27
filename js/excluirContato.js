import { lista } from "./buscarDados.js";
import { listaContatos, ordenaContatos } from "./lista.js";
import { dadosSalvos } from "./salvarDados.js";

export function botaoExcluir(contato){
    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerHTML = "Excluir"
    botaoExcluir.classList.add("botoes");

    botaoExcluir.addEventListener("click", () => {

        let posicaoContato = dadosSalvos.findIndex(elemento => contato.id == elemento.id);

        dadosSalvos.splice(posicaoContato, 1);

        localStorage.setItem('contatos', JSON.stringify(dadosSalvos));
        
        lista.innerHTML = "";

        const dadosSalvosClonado = dadosSalvos.slice();
        
        ordenaContatos(dadosSalvosClonado)        
        
        dadosSalvosClonado.forEach(contato => {
            lista.appendChild(listaContatos(contato));
        });
        
    } )

    return botaoExcluir;
}