let tech = document.getElementById('comp')
let paper = document.getElementById('paper')
let scissor = document.getElementById('scissor')
let rock = document.getElementById('rock')
let you = document.getElementById('you')
let winner = document.querySelector('.results__text')
let score = document.querySelector('.score__number')
let again = document.querySelector('.play-again')
let game  = document.querySelector('.game')
let result = document.querySelector('.results')

result.classList.add('hidden')

let num = Math.floor(Math.random() * 3) + 1;

if (num == 1) {
    tech.innerHTML = `
        <div class="choice paper">
          <img src="imgs/icon-paper.svg" alt="paper" />
        </div>`
}else if (num==2) {
    tech.innerHTML = `
        <div class="choice scissors">
          <img src="imgs/icon-scissors.svg" alt="scissor" />
        </div>`
}else{
    tech.innerHTML = `
        <div class="choice rock">
          <img src="imgs/icon-rock.svg" alt="rock" />
        </div>`
}

paper.addEventListener('click', () => {
    game.classList.add('hidden')
    result.classList.remove('hidden')

    you.innerHTML = `
        <div class="choice paper">
          <img src="imgs/icon-paper.svg" alt="paper" />
        </div>`
        if (num==2 ) {
            winner.innerText ="YOU LOSE";
        } else if (num == 1) {
            winner.innerText = "DRAW";
        }else{
            winner.innerText = "YOU WIN";
            let n = 1
            count(n)
        }

})
scissor.addEventListener('click', () => {
    game.classList.add('hidden')
    result.classList.remove('hidden')

    you.innerHTML = `
        <div class="choice scissors ">
          <img src="imgs/icon-scissors.svg" alt="scissors" />
        </div>`
    if (num == 3) {
        winner.innerText = "YOU LOSE";
    } else if (num == 2) {
        winner.innerText = "DRAW";
    } else {
        winner.innerText = "YOU WIN";
        let n = 1
        count(n)
    }

})
rock.addEventListener('click', () => {
    game.classList.add('hidden')
    result.classList.remove('hidden')

    you.innerHTML = `
        <div class="choice rock">
          <img src="imgs/icon-rock.svg" alt="rock" />
        </div>`
    if (num == 1) {
        winner.innerText = "YOU LOSE";
    } else if (num == 3) {
        winner.innerText = "DRAW";
    } else {
        winner.innerText = "YOU WIN";
        let n = 1
        count(n)
    }

})

function count(num) {
    let count = 0
    count += num
    score.innerText = count

}

again.addEventListener('click',()=>{
    game.classList.remove('hidden')
    result.classList.add('hidden')
    let num = Math.floor(Math.random() * 3) + 1;

    if (num == 1) {
        tech.innerHTML = `
        <div class="choice paper">
          <img src="imgs/icon-paper.svg" alt="paper" />
        </div>`
    } else if (num == 2) {
        tech.innerHTML = `
        <div class="choice scissors">
          <img src="imgs/icon-scissors.svg" alt="scissor" />
        </div>`
    } else {
        tech.innerHTML = `
        <div class="choice rock">
          <img src="imgs/icon-rock.svg" alt="rock" />
        </div>`
    }
    paper.addEventListener('click', () => {
        game.classList.add('hidden')
        result.classList.remove('hidden')
        you.innerHTML = `
        <div class="choice paper">
          <img src="imgs/icon-paper.svg" alt="paper" />
        </div>`
        if (num == 2) {
            winner.innerText = "YOU LOSE";
        } else if (num == 1) {
            winner.innerText = "DRAW";
        } else {
            winner.innerText = "YOU WIN";
            let n = 1
            count(n)
        }

    })
    scissor.addEventListener('click', () => {
        game.classList.add('hidden')
        result.classList.remove('hidden')
        you.innerHTML = `
        <div class="choice scissors">
          <img src="imgs/icon-scissors.svg" alt="scissors" />
        </div>`
        if (num == 3) {
            winner.innerText = "YOU LOSE";
        } else if (num == 2) {
            winner.innerText = "DRAW";
        } else {
            winner.innerText = "YOU WIN";
            let n = 1
            count(n)
        }

    })
    rock.addEventListener('click', () => {
        game.classList.add('hidden')
        result.classList.remove('hidden')
        you.innerHTML = `
        <div class="choice rock">
          <img src="imgs/icon-rock.svg" alt="rock" />
        </div>`
        if (num == 1) {
            winner.innerText = "YOU LOSE";
        } else if (num == 3) {
            winner.innerText = "DRAW";
        } else {
            winner.innerText = "YOU WIN";
            let n = 1
            count(n)
        }

    })
    you.innerHTML = ""
    winner.innerText = ""
    score.innerText = "0"
    function count(num) {
        let count = 0
        count += num
        score.innerText = count

    }
})