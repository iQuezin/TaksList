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

    const editar = () => {
        if(textbox){
            textbox.style.display = 'none';
            modify.style.display = 'block';

            const update = (event) => {
                if(event.key === 'Enter') {
                    const newContent = modify.value;
                    textbox.textContent = newContent;
                }
            }
            modify.addEventListener('keydown', update)
        
            
        }
        
    }
    edit.addEventListener('click', editar);
})