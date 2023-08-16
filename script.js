const winenrBanner = document.querySelector('p');
const container = document.querySelector('.grid-container');
const allCells = document.querySelectorAll('.cell');

let winner;
let curPlayer = 'Player 1';
// Checking cells
const checkRows = function () {
  // 1, 2, 3
  // 4, 5, 6
  // 7, 8, 9
};

const handleClick = container.addEventListener('click', function (e) {
  // Guard clause
  if (!e.target.classList.contains('cell')) return;
  // Check whether cell is alredy occupied
  if (e.target.textContent) return;

  // Check whether there's already a winner
  if (winner) return;

  let id = e.target.id;
  if (curPlayer === 'Player 1') {
    document.getElementById(`${id}`).textContent = 'O';
    curPlayer = 'Player 2';
  } else if (curPlayer === 'Player 2') {
    let id = e.target.id;
    document.getElementById(`${id}`).textContent = 'X';
    curPlayer = 'Player 1';
  }

  // Check Rows
  let firstRow =
    document.getElementById(1).textContent +
    document.getElementById(2).textContent +
    document.getElementById(3).textContent;
  if (firstRow === 'OOO') winner = 'Player 1';
  else if (firstRow === 'XXX') winner = 'Player 2';
  let secondRow =
    document.getElementById(4).textContent +
    document.getElementById(5).textContent +
    document.getElementById(6).textContent;
  if (secondRow === 'OOO') winner = 'Player 1';
  else if (secondRow === 'XXX') winner = 'Player 2';

  let thirdRow =
    document.getElementById(7).textContent +
    document.getElementById(8).textContent +
    document.getElementById(9).textContent;
  if (thirdRow === 'OOO') winner = 'Player 1';
  else if (thirdRow === 'XXX') winner = 'Player 2';

  // Check Columns
  let firstColumn =
    document.getElementById(1).textContent +
    document.getElementById(4).textContent +
    document.getElementById(7).textContent;
  if (firstColumn === 'OOO') winner = 'Player 1';
  else if (firstColumn === 'XXX') winner = 'Player 2';

  let secondColumn =
    document.getElementById(2).textContent +
    document.getElementById(5).textContent +
    document.getElementById(8).textContent;
  if (secondColumn === 'OOO') winner = 'Player 1';
  else if (secondColumn === 'XXX') winner = 'Player 2';

  let thirdColumn =
    document.getElementById(3).textContent +
    document.getElementById(6).textContent +
    document.getElementById(9).textContent;
  if (thirdColumn === 'OOO') winner = 'Player 1';
  else if (thirdColumn === 'XXX') winner = 'Player 2';

  // Check Diagonals
  let firstDiagonal =
    document.getElementById(1).textContent +
    document.getElementById(5).textContent +
    document.getElementById(9).textContent;
  if (firstDiagonal === 'OOO') winner = 'Player 1';
  else if (firstDiagonal === 'XXX') winner = 'Player 2';

  let secondDiagonal =
    document.getElementById(3).textContent +
    document.getElementById(5).textContent +
    document.getElementById(7).textContent;
  if (secondDiagonal === 'OOO') winner = 'Player 1';
  else if (secondDiagonal === 'XXX') winner = 'Player 2';

  // Display winner
  winner && (winenrBanner.textContent = `${winner} wins!`);

  // Display draw
  let cellStr = '';
  allCells.forEach((c) => {
    cellStr += c.textContent;
  });
  if (cellStr.length === 9 && winner === undefined) {
    winenrBanner.textContent = 'Draw!';
  }
});

// Again
document.querySelector('.again').addEventListener('click', function () {
  curPlayer = 'Player 1';
  winner = undefined;
  allCells.forEach((cell) => (cell.textContent = ''));
  winenrBanner.textContent = '';
});
