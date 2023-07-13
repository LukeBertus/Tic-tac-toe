




let printBoard = (function(){
    let gameboard = {
        state: []
    };

    return function(){
        console.log(gameboard)
    }
});


printBoard()();


const play = document.querySelector(".play")
const overlay = document.querySelector(".overlay")

play.addEventListener('click', e => {
    e.preventDefault()
    overlay.remove()
})

function retainSquare() {
    const gameboard = document.querySelector(".gameboard")
    const height = gameboard.offsetHeight
    gameboard.style.width = height + 'px';
}
retainSquare()
window.addEventListener('resize', retainSquare)

play.dispatchEvent(new Event('click'))

function generateBoard() {
    const gameboard = document.querySelector('.gameboard')
    
    const placeCell = function(cellNum) {
        const cell = document.createElement("div")
        cell.classList.add("cell", `cell${cellNum}`)
        gameboard.appendChild(cell)
    }

    const placeLine = function(position) {
        const line = document.createElement("div")
        line.classList.add("line", position)
        gameboard.appendChild(line)
    }

    const alternatingRow = function(line1, line2, cell1, cell2, cell3) {
        placeCell(cell1)
        placeLine(line1)
        placeCell(cell2)
        placeLine(line2)
        placeCell(cell3)
    }

    const lineRow = function() {
        for (let i=0; i<5; i++) {
            placeLine()
        }
    }

    alternatingRow("lineTop", "lineTop", 1, 2, 3)
    lineRow()
    alternatingRow(null, null, 4, 5, 6)
    lineRow()
    alternatingRow("lineBottom", "lineBottom", 7, 8, 9)
}


generateBoard()







