//Projeto final
let endereco = localStorage.getItem("endereco");

if(endereco == null){
    pegarEndereco();
} else {
    let atualiza = prompt("Endereço já informado na base de dados, deseja sobrepor? S/N");
    if (atualiza == "S"){
        pegarEndereço()
    } else {
        alert("Execução finalizada.")
    }
}
    


function pegarEndereco(){
    let cep = prompt("Digite o seu CEP: ")

fetch(`https://viacep.com.br/ws/${cep}/json`, {method: "GET" })
    .then((retornoFetch) => {
        return retornoFetch.json();
    })
    .then((retornoApi) => {
       
 alert(`${retornoApi.logradouro}, ${retornoApi.complemento} - ${retornoApi.bairo} - ${retornoApi.localidade}/${retornoApi.uf}`)
    
 let resposta = prompt("Os dados estão corretos? sim/não")

    if (resposta.toLowerCase() == "sim"){
        localStorage.setItem("endereço", JSON.stringify(retornoApi))
    }
   });
}