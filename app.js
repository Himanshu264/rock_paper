let computerClass = document.querySelector('.computerImage');
let userClass = document.querySelector('.userImage');
let paper = document.querySelector('.paper')
let rock = document.querySelector('.rock')
let scissor = document.querySelector('.scissor')
let userTo = document.querySelector('.userTotal')
let computerTo = document.querySelector('.compTotal')
let message = document.querySelector('.message')
let userScore = 0
let computerScore = 0

// user click : change image in userimage class and computer turn

function computerTurn(computerInput, userInput) {
    let input = computerInput
    let useInput = userInput
    if (input == 0) {
        computerClass.src = 'images/rock_comp.svg'
        winner(computerInput, useInput)
    } else if (input == 1) {
        computerClass.src = 'images/paper.svg'
        winner(computerInput, useInput)
    } else if (input = 2) {
        computerClass.src = 'images/scissor_comp.svg'
        winner(computerInput, useInput)
    }
}

function winner(comp, user) {
    if (user == 0 && comp == 2 || user == 1 && comp == 0 || user == 2 && comp == 1) {
        userScore++
        message.innerHTML = "User Win"
    } else if (user == 0 && comp == 0 || user == 1 && comp == 1 || user == 2 && comp == 2) {
        message.innerHTML = "Both are same"
    }
    else {
        computerScore++
        message.innerHTML = "Computer Win"
    }

    userTo.innerHTML = userScore
    computerTo.innerHTML = computerScore

}


rock.addEventListener('click', function () {
    userClass.src = 'images/rock.svg'
    computerTurn(Math.floor(Math.random() * 3), 0)
})

paper.addEventListener('click', function () {
    userClass.src = 'images/paper_user.svg'
    computerTurn(Math.floor(Math.random() * 3), 1)
})

scissor.addEventListener('click', function () {
    userClass.src = 'images/scissor.svg'
    computerTurn(Math.floor(Math.random() * 3), 2)
})