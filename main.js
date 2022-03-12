const todosNode = document.querySelector('.todos');
const inputNode = document.querySelector('.input');
const btnNode = document.querySelector('.btn');

let todos = [];

function addTodo(text) {
    const todo = {
        text,
        done: false,
        show: true,
        id: `${Math.random()}`
    };

    todos.unshift(todo);

}

function deleteTodo(id) {
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.show = false;
        }
    })
}

function doneTodo(id) {
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.done = true;
        }
    })
}

function render() {
    html = '';

    todos.forEach(todo => {
        if(todo.show === false) {
            return;
        };

        if(todo.done === true) {
            html += `
            <div>
                <span style="text-decoration: line-through; color: #e3e3e3">${todo.text}</span>
                <button id="done" data-id="${todo.id}">Сделано</button>
                <button id="del" data-id="${todo.id}">Удалить</button>
            </div>
        `;
        } else {
            html += `
                <div>
                    ${todo.text}
                    <button id="done" data-id="${todo.id}">Сделано</button>
                    <button id="del" data-id="${todo.id}">Удалить</button>
                </div>
            `;
        }
    })

    todosNode.innerHTML = html;
}

btnNode.addEventListener('keydown', () => {
    const text = inputNode.value;
    addTodo(text);
    render();
});

todosNode.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const id = event.target.dataset.id;

    if (event.target.id === 'done') {
        doneTodo(id);
        render();
    }
    
    if (event.target.id === 'del') {
        deleteTodo(id);
        render();
    }
});