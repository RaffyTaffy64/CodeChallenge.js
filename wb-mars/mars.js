alert('Starting your Mars Adventure!')
alert('Booting up...')
alert('All systems go!')
alert(`Let's start`)

const username = prompt(`"Hi there. What is your name?`)
    alert(`Greetings, ${username} --- Welcome to the Mars Adventure Game.`)
    alert(`Yesterday, you received a call from your good friend at NASA`)
    alert(`They need someone to go to Mars this weekend, and YOU'VE been chosen!`)

let excited= prompt(`Are you excited? Type Y or N`)
    if (excited === `y`) {
        alert(`I knew you'd say that! It's cool that you're going to Mars!!`)
    }
    if (excited === `n`) {
        alert(`Well, it's too late to back out now.`)
    }

alert(`It's time to pack for your trip to Mars.`)
let numSuitcases = prompt(`How many suitcases do you plan to bring?`)
    numSuitcases = Number(numSuitcases)
    if (numSuitcases > 2) {
        alert(`That's way too many! You'll have to pack more lightly`)
    }
    if (numSuitcases <= 2) {
        alert(`Perfect! You'll certainly fit in the spaceship!!`)
    }

alert(`You're allowed to bring one companion animal with you.`)

let companionType = prompt(`What kind of companion animal would you like to bring?`)

    let firstLetterA = companionType[0]
    firstLetterA = firstLetterA.toUpperCase()

    let otherLettersA = companionType.slice(1)
    otherLettersA = otherLettersA.toLowerCase()

    companionType = firstLetterA + otherLettersA

let companionName = prompt(`What is your companion's name?`)
    let firstLetter = companionName[0]
    firstLetter = firstLetter.toUpperCase()

    let otherLetters = companionName.slice(1)
    otherLetters = otherLetters.toLowerCase()

    companionName = firstLetter + otherLetters

alert(`Cool! So you're bringing ${companionName} the ${companionType}.`)

alert(`NASA has an interior design team offering to outfit your space ship.`)
alert(`You have a couple of options for the interior decor of your ship. Your options are:

A - Sleek, modern minimalism
B - Retro/Vintage space age
C - Victorian-era steampunk
`)

let decorChoice = prompt('Which decor would you like? Choose A, B, or C.');
// Clean up user input
decorChoice = decorChoice.toUpperCase();

let decor;
if (decorChoice === 'A') {
  decor = 'modern minimalist';
} else if (decorChoice === 'B') {
  decor = 'retro';
} else if (decorChoice === 'C') {
  decor = 'steampunk';
}

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`)

let timer = 5
while (timer > 0) {
    alert(`${timer}...`)
    timer -= 1
}
alert(`*** LIFTOFF ***`)