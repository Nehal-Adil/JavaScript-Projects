let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");

let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".winner-msg");
let msg = document.querySelector(".winner");

let turn0 = true; // player 0 is X, player 1 is O

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("Clicked");
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

function disableBoxes() {
  boxes.forEach((box) => (box.disabled = true));
}

function enableBoxes() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
}

function showWinner(winner) {
  msg.innerText = `Congratulations!!! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

function checkWinner() {
  winPatterns.forEach((pattern) => {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    let pos0 = boxes[pattern[0]].innerText;
    let pos1 = boxes[pattern[1]].innerText;
    let pos2 = boxes[pattern[2]].innerText;

    if (pos0 != "" && pos1 != "" && pos2 != "") {
      if (pos0 === pos1 && pos1 === pos2) {
        console.log("Winner", pos0);
        showWinner(pos0);
      }
    }
  });
}

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
