let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button")
let win = document.querySelector("#showWinner");

let clicks = 0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let turn = true;

const disabler = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enabler = () =>{
    for(box of boxes){
        box.disabled = false;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn){
            box.textContent = "O";
            turn = false;
        }
        else{
            box.textContent = "X";
            turn = true;
        }
        clicks++;
        box.disabled = true;
        checkWinner();
        checkDraw();
    })
})

const checkWinner = () => {
    winPattern.forEach((pattern) => {
        let first = boxes[pattern[0]].textContent;
        let second = boxes[pattern[1]].textContent;
        let third = boxes[pattern[2]].textContent;
        if(first != "" && second != "" && third != ""){
            if(first === second && second === third){
                win.innerText = `Winner ${first}`;
                disabler();
            }
        }
    })
}

const checkDraw = () => {
    if(clicks === 9){
        win.innerText = "DRAW";
    }
}

reset.addEventListener("click", () => {
    for(box of boxes){
        box.textContent = "";
    }
    win.innerText = "";
    turn = true;
    enabler();
    clicks = 0;
})