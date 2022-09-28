playerScore = 0
computerScore = 0

function computer() {
    var rockPaperScissors = ["R", "P", "S"];
    let random = rockPaperScissors[Math.floor(math.random)(rockPaperScissors.length)]
}

function player() {
    var rockPaperScissors = ["R", "P", "S"];
}
function gameOutcome(computer, player) {
    if(player === computer) {
        window.confirm("draw")
    }
    else if(player > computer) {
        window.confirm("Player Wins")
    }
    else(player < computer) {
        window.confirm("Computer Wins")
    }

}