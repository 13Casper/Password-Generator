const inputEl = document.getElementById("input-el")
const password1El = document.getElementById("password1-el")
const password2El = document.getElementById("password2-el")
const password3El = document.getElementById("password3-el")
const password4El = document.getElementById("password4-el")
let lettersBig = []
let lettersSmall = []
let numbers = []
let symbols = []

for (let i = 65; i < 91; i++)
    lettersBig.push(String.fromCharCode(i))

for (let i = 97; i < 123; i++)
    lettersSmall.push(String.fromCharCode(i))

for (let i = 48; i < 58; i++)
    numbers.push(String.fromCharCode(i))

for (let i = 33; i < 48; i++)
    symbols.push(String.fromCharCode(i))

function getRandomChar(a){
    let num = Math.floor(Math.random() * a.length)
    return a[num]
}

function passwordCreation(){
    let a = ""
    for (let i = 0; i < inputEl.value; i++){
        let charSelector = Math.floor(Math.random() * 9)
        if (charSelector === 1) 
            a += getRandomChar(lettersBig)
     else if (charSelector === 2) 
        a += getRandomChar(lettersSmall)
     else if (charSelector === 3)
        a += getRandomChar(numbers)
     else if (charSelector === 4)
        a += getRandomChar(symbols)
    else if (charSelector < 7)
        a += getRandomChar(lettersBig)
    else 
        a += getRandomChar(lettersSmall)
    }
    return a
}

function generatePassword(){
    let password1 = passwordCreation()
    let password2 = passwordCreation()
    let password3 = passwordCreation()
    let password4 = passwordCreation()
    
    password1El.textContent = password1
    password2El.textContent = password2
    password3El.textContent = password3
    password4El.textContent = password4
}

