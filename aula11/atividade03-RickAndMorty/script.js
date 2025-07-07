document.getElementById('formSearch').addEventListener('submit', e => {
    e.preventDefault()

    const character = document.getElementById('character').value
    fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
        .then(res => res.json())
        .then(data => {
            const ul = document.getElementById('character-list')
            
            if (data.Response === 'True') {
                data.forEach(character => {
                    const li = document.createElement('li')

                    li.innerHTML = 
                    

                    ul.appendChild(li)
                });
            }
        })
})