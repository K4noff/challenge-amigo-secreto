const listaNomeAmigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const nomeAmigo = document.getElementById('amigo');
let amigosSorteados = new Set();

function adicionarAmigo() {
    const nome = nomeAmigo.value.trim();
    const regex = /^[a-zA-ZÀ-ÿ\s]+$/;

    if (!regex.test(nome)) {
        alert('Por favor, insira um nome válido.');
        nomeAmigo.value = ''; 
        return;
    }

    if (nome && !listaNomeAmigos.includes(nome)) {
        listaNomeAmigos.push(nome);

        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);

        nomeAmigo.value = '';
    } else if (!nome) {
        alert('Por favor, insira um nome.');
    } else {
        alert('Este nome já foi adicionado.');
    }

    nomeAmigo.value = '';
}

function sortearAmigo() {
    if (listaNomeAmigos.length > 0) {
        const amigosNaoSorteados = listaNomeAmigos.filter(nome => !amigosSorteados.has(nome));

        if (amigosNaoSorteados.length === 0) {
           
            const titulo = document.querySelector('h2');
            if (titulo) {
                titulo.textContent = 'Lista finalizada!';
            }
            return;
            
        }

        const nomeSorteado = amigosNaoSorteados[Math.floor(Math.random() * amigosNaoSorteados.length)];
        amigosSorteados.add(nomeSorteado);

        const li = document.createElement('li');
        li.textContent = `Seu amigo secreto é: ${nomeSorteado}!`;
        resultado.innerHTML = '';
        resultado.appendChild(li);
        listaAmigos.style.display = 'none';
    } else {
        alert('A lista está vazia, Adicione um nome para sorteio.');
    }
}
function reiniciarLista() {
    listaNomeAmigos.length = 0;
    amigosSorteados.clear();
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
    listaAmigos.style.display = 'block'; 
    alert('Lista reiniciada com sucesso!');}