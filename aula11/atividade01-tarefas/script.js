

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
        const ul = document.querySelector(".task-list")

        for (let i = 0; i < 10; i++) {
            let {title, completed} = data[i]

            const li = document.createElement('li')
            const strong = document.createElement('strong')
            strong.textContent = completed ? 'concluída' : 'pendente'
            li.textContent = title + " - ";
            li.appendChild(strong)
            ul.appendChild(li)
        }
    })
    .catch(error => console.error("Erro:", error))