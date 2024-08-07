function atribuirDados(data){
    if(data.erro){
        alert("CEP INVÁLIDO!")
        rua.value = ''
        complemento.value = ''
        bairro.value= ''
        cidade.value = ''
        estado.value = ''
    }
    let rua = document.querySelector("#rua")
    let complemento = document.querySelector("#complemento")
    let bairro = document.querySelector("#bairro")
    let cidade = document.querySelector("#cidade")
    let estado = document.querySelector("#estado")
    rua.value = data.logradouro;
    complemento.value = data.complemento;
    bairro.value= data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf; 
}
var cep = document.querySelector("#cep");
const inputs = document.querySelectorAll(".input");
inputs.forEach(input=>{
    input.disabled=true
    input.style.backgroundColor = "#FCFFF5"
})
cep.addEventListener("change",()=>{
    buscar();
})
        
async function buscar(){
    let valorCep = cep.value;
    try{
        const response = await fetch(`https://viacep.com.br/ws/${valorCep}/json/`)
    if(!response.ok){
        throw new Error("Erro ao buscar o CEP!")
    }
    const data = await response.json();
    inputs.forEach(input=>{
        input.disabled=true
        input.style.backgroundColor = "white"
    })
    atribuirDados(data);
    }
    catch(erro){
        console.log(erro);

    }

}
