const board = document.querySelector('#board')
const SQUARES_NUMBER = 1155

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'

    let color = ''

    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setColor = (elem) => {
    const color = generateRandomColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = (elem) => {
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = '0 0 2px #000'
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}