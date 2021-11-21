const sounds = ['Anime','directed','fat-man','epic-sax','coffin-dance','mm-whatcha-say','you-got-that']
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {

        document.getElementById(sound).play()
        

    })

    document.getElementById('buttons').appendChild(btn)
})
