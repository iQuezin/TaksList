// Mudar cor do texto quando a tarefa estiver concluida;
document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
    const textbox = document.getElementById('textbox');

    const changeTextColor = () => {
        if(checkbox.checked) {
            textbox.style.color = "lightgray";
            textbox.style.textDecoration = 'line-through'
        } else  {
            textbox.style.color = "black";
            textbox.style.textDecoration = 'none'
        }
    }

    checkbox.addEventListener('change', changeTextColor);

    changeTextColor();
})

// Adicionar e remover Tarefas - Conflito quando tem mais de uma tarefa
document.addEventListener('DOMContentLoaded', () => {
    const remove = document.getElementById('remove')
    const tasks = document.getElementById('tasks');
    const addTask = document.getElementById('newTask-btn');
    const cardBody = document.getElementById('card');


    const removeTask = () => {
        if(tasks) {
            tasks.remove();
        }
    }

    const addNewTask = () => {
        const cloneDiv = tasks.cloneNode(true);
        cardBody.appendChild(cloneDiv);
    }


    remove.addEventListener('click', removeTask);
    addTask.addEventListener('click', addNewTask)
})

// Editar conteudo
document.addEventListener('DOMContentLoaded', () => {
    const textbox = document.getElementById('textbox');
    const modify = document.getElementById('modify');
    const edit = document.getElementById('edit');

    let editing = false;

    const trocarModo = () => {
        if(editing) {
            textbox.textContent = modify.value;
            modify.style.display = 'none';
            textbox.style.display = 'block';
            edit.textContent = "edit";
        } else {
            modify.value = textbox.textContent;
            modify.style.display = 'block';
            textbox.style.display = 'none';
            edit.textContent = 'Save'
        }
        editing = !editing;
    }
    edit.addEventListener('click', trocarModo);
})

// JSON

var tarefas =  {
    caixaDeChecagem: "",
    paragrafo: "",
    botaoEditar: "",
    botaoSalvar: "",
    botaoRemover: "",
};