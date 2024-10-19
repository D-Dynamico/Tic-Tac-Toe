let index = 0;
let pinPosition = Array(9).fill(null);

document.querySelectorAll('.gameArray').forEach(item => {
    item.addEventListener('click', event => {
        const cellIndex = item.getAttribute("data-index");

        if (item.textContent === '') {
            const currentPlayer = index % 2 === 0 ? 'X' : 'O';
            item.textContent = currentPlayer;
            pinPosition[cellIndex] = currentPlayer;

            if (winningPosition(pinPosition, currentPlayer)) {
                document.querySelectorAll('.gameArray').forEach(cell => cell.style.pointerEvents = 'none');
            }

            index++;
            console.log(pinPosition);
        }
    });
});

document.querySelector('.rstButton').addEventListener('click', () => {
    document.querySelectorAll('.gameArray').forEach(item => {
        item.textContent = '';
    });
    pinPosition = Array(9).fill(null); 
    index = 0; 
    document.querySelector('.result').textContent = ''; 
});

function winningPosition(pinPosition, currentPlayer) {
    const winningCombos = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (pinPosition[a] === currentPlayer && pinPosition[b] === currentPlayer && pinPosition[c] === currentPlayer) {
            document.querySelector('.result').textContent = `Player ${currentPlayer === 'X' ? '1' : '2'} wins`;
            return true;
        }
    }

    return false;
}
