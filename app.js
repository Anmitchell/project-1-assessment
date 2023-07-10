 // number display
 const countDisplay = document.getElementById('#count-display')

const increaseBtn = document.getElementById('#increase')

const decreaseBtn = documnet.getElementById('#decrease')

const input = document.querySelector('input')

increaseBtn.addEventListener('click', add)
function add() {
    const inputValue = parseInt(input.innerText)
    let displayValue = parseInt(countDisplay.innerText)
    displayValue += inputValue
    countDisplay.innerHTML = `${displayValue}`
}

decreaseBtn.addEventListener('click', subtract)
function subtract() {
    const inputValue = parseInt(input.innerText)
    let displayValue = parseInt(countDisplay.innerText)
    displayValue -= inputValue
    countDisplay.innerHTML = `${displayValue}`
}


