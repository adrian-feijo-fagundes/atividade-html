// Parte 01

    // Exercicio 01

const boasVindas = (nome, curso) => {
    return `Bem vindo. ${nome}! Você está no curso de ${curso}.`
}


let nome;
const curso = "programação frontend"


nome = "Adrian"

console.log(boasVindas(nome, curso))
    // Exercicio 02

const soma = (a, b) => a + b;

console.log(soma(5, 7))

// Parte 02

    // Exercicio 03

    const btnChangeVisibility = document.getElementById('changeVisibility')
    const invisibleParagraph = document.getElementById('invisible')

    invisibleParagraph.style.display = 'none'

    btnChangeVisibility.addEventListener('click', (e) => {
        invisibleParagraph.style.display = 
            invisibleParagraph.style.display == 'none' ? '' : 'none'
    })

    // Exercicio 04
    
    const box = document.querySelector('.box')

    box.addEventListener('mouseover', () => box.style.backgroundColor = 'blue')
    box.addEventListener('mouseout', () => box.style.backgroundColor = 'grey')

    // Exercicio 05

    const input = document.getElementById('text-input')
    const inputParagraph = document.getElementById('text-p')

    input.addEventListener('keyup', () => inputParagraph.textContent = input.value)

// Parte 03

    // Exercicio 06

    const inputList = document.getElementById('list-input')
    const taskList = document.getElementById('task-list')
    const addTaskBtn = document.getElementById('add-task-btn')

    addTaskBtn.addEventListener('click', () => {
        const item = document.createElement('li')
        
        if (inputList.value != '') {
            item.textContent = inputList.value
        }
        else {
            alert('Escreva algo no input da lista de tarefas')
            return
        } 

        const btnRemove = document.createElement('button')
        btnRemove.textContent = 'Remover'
        btnRemove.style.margin = '10px'
        
        btnRemove.addEventListener('click', () => {
            item.remove()
        })
        
        item.appendChild(btnRemove)

        taskList.appendChild(item)

    })

    // Exercicio 07 

    const themeBtn = document.getElementById('theme-btn')

    themeBtn.addEventListener('click', () => document.documentElement.classList.toggle('dark-mode'))
