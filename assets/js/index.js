const resultElement = document.getElementById('result')
const overlayElement = document.getElementsByClassName('overlay')[0]
const imageResultElement = document.querySelector('.overlay img')
const playerElement = document.getElementById('player')
const cpuElement = document.getElementById('cpu')

let playerScore = 0, cpuScore = 0;

function play(tool) { //0 = ROCK, 1 = PAPER, 2 = SCISSORS
    let cpuTool = Math.floor(Math.random() * 3)
    switch (tool) { //El reto es usar switch
        case cpuTool:
            showResult(cpuTool, 'TIE!')
            break
        case 0:
            if(cpuTool ==  1)
                showResult(cpuTool,'CPU WON!')
            else
                showResult(cpuTool,'PLAYER WON!')
            break
        case 1:
            if (cpuTool == 2)
                showResult(cpuTool,'CPU WON!')
            else
                showResult(cpuTool,'PLAYER WON!')
            break
        case 2:
            if (cpuTool == 0)
                showResult(cpuTool, 'CPU WON!')
            else
                showResult(cpuTool, 'PLAYER WON!')
            break
    }
}

function showResult(cpuTool, result) {
    if (result == 'PLAYER WON!')
        playerElement.innerText = ++playerScore
    else if (result == 'CPU WON!')
        cpuElement.innerText = ++cpuScore

    if(cpuTool == 0)
        imageResultElement.src = '../assets/img/rockB.png'
    else if (cpuTool == 1)
        imageResultElement.src = '../assets/img/paperB.png'
    else
        imageResultElement.src = '../assets/img/scissorsB.png'

    resultElement.innerText = result
    overlayElement.style.display = 'block'
}

function resetGame() {
    playerScore = cpuScore = 0
    playerElement.innerText = playerScore
    cpuElement.innerText = cpuScore
}