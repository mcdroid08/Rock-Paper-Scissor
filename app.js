let userScore = 0
let compScore = 0
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("comp-score")
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")

function giveWords(val) {
    if (val === "r") return "Rock"
    if (val === "p") return "Paper"
    return "Scissor"
}

function win(userChoice,compChoice) {
    userScore++
    userScore_span.innerHTML = userScore
    result_div.innerHTML = `${giveWords(userChoice)}${"user".fontsize(4).sub()} beats ${giveWords(compChoice)}${"comp".fontsize(4).sub()} !! You Win 😄`
    document.getElementById(userChoice).classList.add("greenglow")
    setTimeout(() => { document.getElementById(userChoice).classList.remove("greenglow") }, 400)
}

function lose(userChoice,compChoice) {
    compScore++
    compScore_span.innerHTML = compScore
    result_div.innerHTML = `${giveWords(userChoice)}${"user".fontsize(4).sub()} loses to ${giveWords(compChoice)}${"comp".fontsize(4).sub()} !! You Lose ☹️`
    document.getElementById(userChoice).classList.add("redglow")
    setTimeout(() => { document.getElementById(userChoice).classList.remove("redglow") }, 400)
}

function draw(userChoice,compChoice) {
    result_div.innerHTML = `${giveWords(userChoice)}${"user".fontsize(4).sub()} ties with ${giveWords(compChoice)}${"comp".fontsize(4).sub()} !! Try Again 😒`
    document.getElementById(userChoice).classList.add("greyglow")
    setTimeout(() => { document.getElementById(userChoice).classList.remove("greyglow") }, 400)
}

function getCompChoice() {
    const choices = ["r", "p", "s"]
    return choices[Math.floor(Math.random()*3)]
}

function game(userChoice) {
    const compChoice = getCompChoice()
    switch (userChoice + compChoice) {
        case "pr" : case "sp" : case "rs" : win(userChoice,compChoice); break
        case "rp" : case "ps" : case "sr" : lose(userChoice,compChoice); break
        case "pp" : case "rr" : case "ss" : draw(userChoice,compChoice); break
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissor_div.addEventListener('click', () => game("s"));
}

main();