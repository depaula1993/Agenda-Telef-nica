import {listaContatos, ordenaContatos} from "./lista.js";
import { busca, buscaDados } from "./buscarDados.js";
import { salvaDados, dadosSalvos } from "./salvarDados.js";
const campos = document.querySelectorAll("[required]");
const form = document.querySelector("[data-form]");
const lista = document.querySelector("[data-lista]"); 

campos.forEach(campo => {
    campo.value = "";
})

const dadosSalvosClonado = dadosSalvos.slice();

ordenaContatos(dadosSalvosClonado);

dadosSalvosClonado.forEach(contato => {
    lista.appendChild(listaContatos(contato));
});

busca.value = "";

form.addEventListener("submit", (e) =>{

    e.preventDefault();
    
    /*class contato {
        constructor(nome, telefone, email){
            this.nome = nome;
            this.telefone = telefone;
            this.email = email;
        }
    }
    
    const novoContato = new contato(campos[0].value, campos[1].value, campos[2].value);

    console.log(novoContato);
    */

    const novoContato = {
        nome: campos[0].value,
        telefone: campos[1].value,
        email: campos[2].value
    }

    lista.innerHTML = "";
    
    salvaDados(novoContato);
    

    const dadosSalvosClonado = dadosSalvos.slice();

    ordenaContatos(dadosSalvosClonado);
    
    dadosSalvosClonado.forEach(contato => {
        lista.appendChild(listaContatos(contato));
    });
    
    //lista.appendChild(listaContatos(novoContato));

    
    

})

buscaDados();



