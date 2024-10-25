const rua = document.querySelector('#rua span');
const bairro = document.querySelector('#bairro span');
const cidade = document.querySelector('#cidade span');
const estado = document.querySelector('#estado span');
const ddd = document.querySelector('#numero span');
const regiao = document.querySelector('#regiao span');
const btn = document.getElementById("btn");
const blocoC = document.getElementById("blocoC")

function pesquisar() {
    const cep = document.getElementById("campo").value;
    const urlApi = `https://viacep.com.br/ws/${cep}/json/`;
    if(cep.length !== 8) {
        alert("O CEP está inválido")
        return cep.value = ''
    }

    fetch(urlApi, { mode: "cors" })
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            mostrarDados(data);
        })
}

function aparecer () {
    blocoC.style.display = "flex"
}

function mostrarDados(dados) {
    rua.innerHTML = dados.logradouro || 'Não encontrado';
    bairro.innerText = dados.bairro || 'Não encontrado';
    cidade.innerText = dados.localidade || 'Não encontrado';
    estado.innerText = dados.uf || 'Não encontrado';
    regiao.innerText = dados.regiao || 'Não encontrado';
    ddd.innerText = dados.ddd || 'Não encontrado';
}

function limpar () {
    rua.innerHTML = '';
    bairro.innerText = '';
    cidade.innerText = '';
    estado.innerText = '';
    regiao.innerText = '';
    ddd.innerText = '';
}