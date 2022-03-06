const todosNode = document.querySelector('.todos');
const inputNode = document.querySelector('.input');
const btnNode = document.querySelector('.btn');

let todos = [];

function addTodo(text) {
    const todo = {
        text,
        done: false,
        id: `${Math.random()}`
    };

    todos.push(todo);

}

function deleteTodo(id) {
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.done = true;
        }
    })
}

function render() {
    html = '';

    todos.forEach(todo => {
        if(todo.done === true) {
            return;
        };

        html += `
            <div>
                ${todo.text}
                <button data-id="${todo.id}">Сделано</button>
            </div>
        `
    })

    todosNode.innerHTML = html;
}

btnNode.addEventListener('click', () => {
    const text = inputNode.value;
    addTodo(text);
    render();
});

todosNode.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const id = event.target.dataset.id;

    deleteTodo(id);
    render();
})

