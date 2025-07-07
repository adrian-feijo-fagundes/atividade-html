document.getElementById('formPost').addEventListener('submit', e => {
    e.preventDefault()

    const name = document.getElementById('username').value
    const comment = document.getElementById('comment').value
    const email = document.getElementById('email').value

    fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify({
            id: 1,
            name: name,
            email: email,
            body: comment
    }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => {
        document.querySelector('.result').innerHTML = `
            <p>
                Nome: <strong>${json.name}</strong>
            </p>
            <p>
                Email: <strong>${json.email}</strong>
            </p>
            <p>
                Comentário: <strong>${json.body}</strong>
            </p>
        `    
        
        console.log(json)

    })

})