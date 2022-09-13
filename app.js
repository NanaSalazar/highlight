const paragOrigim = Array.from(document.querySelectorAll('p')).map(p => p.innerHTML)

    const input = document.querySelector('#input')
    input.addEventListener('input', e => {
        const value = e.target.value
        Array.from(document.querySelectorAll('p')).map((parag, i) => {
            const paragHTML = paragOrigim[i]
            if(value) {
                const regex = new RegExp(value, 'gi')
                const replaced = paragHTML.replace(regex, result => {
                return `<span class="highlight">${result}</span>`
                })
                parag.innerHTML = replaced
            } else {
                parag.innerHTML = paragHTML
            }

            //Transformar texto do input em regex
            
        })
    })