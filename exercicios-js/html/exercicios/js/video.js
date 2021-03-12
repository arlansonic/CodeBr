function configurarVideo(id){
    const video = document.getElementById(id)
    video.oncontextmenu = () => false

    document.querySelector(`[wm-play=${id}]`).onclick = e => video.play()
    document.querySelector(`[wm-pause=${id}]`).onclick = e => video.pause()

    setInterval(() => {
        const percentual = (video.currentTime / video.duration) * 100
        const valorDiv = document.querySelector(`[wm-progresso=${id}] > div`)
        valorDiv.style.width = `${percentual}%`
        valorDiv.innerHTML = `${percentual.toFixed(1)}`
    }, 500);
}

configurarVideo('meuVideo')