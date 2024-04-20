import { comoAtualizar, cttNaoEncontrado } from "./buscarDados.js";
export const dadosSalvos = JSON.parse(localStorage.getItem('contatos')) || [];

export function salvaDados(dados) {
    
    if(dadosSalvos.length == 0){
        dados.id = 1;
    }else{
        dados.id = dadosSalvos[dadosSalvos.length - 1].id +1;   
    }

    dadosSalvos.push(dados);
    
    localStorage.setItem('contatos', JSON.stringify(dadosSalvos));

    comoAtualizar.style.display = "none";
    cttNaoEncontrado.style.display ="none";

}