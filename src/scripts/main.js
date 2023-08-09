let tasks = document.querySelector("#tasks");
const text = document.querySelector(".text-task");
const button = document.querySelector(".button");

let listaDeTarefas = [];

function adicionarTarefa() {
    listaDeTarefas.push({
        tarefa: text.value,
        concluida: false,
    });

    text.value = "";
    
    mostrarTarefas();
}

function mostrarTarefas() {
    let novaLi = "";

    listaDeTarefas.forEach((item, index) => {
        novaLi += `
        <li class="task ${item.concluida && "done"}">
        <input type="checkbox" 
        name="check" class="completeTask" onclick='concluirTarefa(${index})'/>
        <p class="textTask">${item.tarefa}</p>
        <button class="delete" href="#" onclick="deletarTarefa(${index})">
            <i class="fa-solid fa-trash"></i>
        </button>
        </li>`;
    });

    tasks.innerHTML = novaLi;

    localStorage.setItem("lista", JSON.stringify(listaDeTarefas));
}

function concluirTarefa(index) {
    listaDeTarefas[index].concluida = !listaDeTarefas[index].concluida;

    mostrarTarefas();
}

function deletarTarefa(index) {
    listaDeTarefas.splice(index, 1);

    mostrarTarefas();
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem("lista");

    if (tarefasDoLocalStorage) {
        listaDeTarefas = JSON.parse(tarefasDoLocalStorage);
    }

    mostrarTarefas();
}

recarregarTarefas();
button.addEventListener("click", adicionarTarefa);
