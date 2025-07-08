document.getElementById('formSearch').addEventListener('submit', e => {
    e.preventDefault()
    const resultSection = document.getElementById('character-list')

    const character = document.getElementById('character').value
    resultSection.innerHTML = ""

    const url = character == "" ? 
        `https://rickandmortyapi.com/api/character/?name=${character}`
        : `https://rickandmortyapi.com/api/character/`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            
            data.results.forEach(character => {
                const div = document.createElement('div')

                div.innerHTML = `
                    <h3>${character.name}</h3>
                    <img src="${character.image}" alt="${character.name}">
                    <p class="status">${character.status}</p>
                `

                div.classList.add('result-card')
                resultSection.appendChild(div)
                });
            
        })
})