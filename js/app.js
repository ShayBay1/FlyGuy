// so FlyGuy is like hangman but instead of being hanged FlyGuy flys away and gets 
// to stunt on all the HateMongers 
// i want users to be given encouragement on every correct guess from the top left of the page
const goods = [
    "KEEP GOING!",
    "YOU CAN DO IT!",
    "DON'T GIVE UP!",
    "ONE STEP CLOSER!",
    "YOU CAN FLY, GUY!",
    "YOU DON'T HAVE TIME FOR NEGATIVITY!",
    "THEY WISH THEY COULD FLY TOO! WHO COULD BLAME 'EM?",
    "YOU'RE GONNA MAKE IT!!!",
    "THEY CAN'T STOP YOU!",
    "YOU'RE GETTING BETTER AND BETTER!",
    "YOU'LL BE FLYING HIGHER THAN EVER SOON!",
    "ALMOST READY FOR TAKE OFF!",
    "YOU'RE GONNA BE BETTER THAN BEFORE!",
    "ONE LETTER AT A TIME!",
    "EASY MONEY, BABY!!!",
    "DONT STOP NOW!",
    "EVERY BREATH IS A SPECIAL GIFT FOR YOU!",
    "YOU'RE ABOVE IT ALL!",
    "THEY WON'T CATCH YOU!",
    "YOU'RE BEYOND THE HATE!",
    "STAY FREE!!",
    "STAY FLY!",
    "THERE'S NO TELLING HOW HIGH YOU'LL FLY!",
    "IF ONLY THEY COULD THEY COULD SEE YOU NOW!!",
    "YOUR CHALLEGES ARE A GIFT!",
    "DONT GET DOWN!",
    "YOURE NEVER GONNA DIE, GUY!",
    "YOURE GONNA GET BETTER EVERY TIME!",
    "YOURE GONNA MAKE 'EM SO PROUD!",
    "WHEN YOU GET THROUGH THIS, YOU'LL BE GLAD YOU HAD TO!",
    "THE CHALLANGE WILL MAKE YOU BETTER",
    "YOU'RE GROWING, AND HEALING!",
    "YOU'RE BETTER THAN EVER!",
    "DONT LOOK DOWN!"
    ]
    const bads = [
        "yew cnt flii",
        "yer guna haf ta lnd sum thyme",
        "jist chil man",
        "wai dnt yu kik bac duuuud?",
        "yuu dnt haffta flaii sough haei gaii",
        "yew luuk so okward up thair",
        "jst git dowen hiir laik us",
        "flaing iznt iven kewl",
        "hang with us dewd",
        "itz fine just relaaaax",
        "wutza matter mannn?",
        "yew dnt got wut et takez flaii gaii",
        "jst give up",
        "waii you doin so much?",
        "you can always just quit",
        "you dont have to flaii",
        "if yew fly youre gonna fall",
        "where you plannin on landin",
        "wutz the matter flaii guy?",
        "how come yew wanna fly when you can chill?",
        "just land now while yer not tew hii",
        "look at us mann were having way more fun down here",
        "if you fly away yer gonna be all alone",
        "no ones gonna fly with yew",
        "youre gonna be alone up there",
        "stay with us mann were yer buddeiiieeeess",
        "if yew go you cant come back",
        "yur nevr guna make it up there",
    ]
    // the words above are to be taken at random and displayed upon each guess (goods = correct, bads = incorrect answers)
    // bellow are the actual guess words.
    let guessWords= [
        'CHALLANGE', 
        'SUCCESS', 
        'PERSERVIERENCE',
        'REWARD',
        'OVERCOME',
        'DELEMA',
        'OVERWHELMED', 
        'FOCUSED',
        'STRESSED', 
        // 'AT PEACE', 
        // 'FREAKING OUT',
        // 'STAYING FOCUSED',
        // 'LOCKED IN',
        // 'NO SOCIAL LIFE',
        // 'I LOVE THIS',
        // 'NO CHOICE',
        // 'WORTH IT', 
        // 'PRACTICE MAKE PROGRESS' 
    ];
    let currentLetters = "";


// i need random words to be pulled for guessing
let selection = guessWords[Math.floor(Math.random() * guessWords.length)]

// now i need that random word to be guessable 
// for every letter of the random word we need a _ and a space in between
let blanks = "";
for (i = 0; i < selection.length; i++){
if (typeof selection[i].toLowerCase() === 'string' && typeof selection[i].toUpperCase() === 'string') {
    blanks += '_' 
} else {
    blanks += ' '
}
};


function returnGuessedWord(answer, hiddenWord, lettersGuessed){
    hiddenWord = hiddenWord.split('')
    for (let i = 0; i < answer.length; i++) {
        for(let j = 0; j < lettersGuessed.length; j++) {
            if(lettersGuessed[j] === answer[i]) {
               
            hiddenWord[i] = lettersGuessed[j]    
            }
        }
        
    } 
    return hiddenWord.join('');
}
console.log(selection)
function spaceUnderscores (str){
    let newStr = '' 
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== '_') {
            newStr += str[i]
        } else if ( str[i]==='_'){
            newStr += '_ '
        }
    }
    return newStr
}

// we need to put 
let guessedWord=document.getElementById("words")
guessedWord.innerText=spaceUnderscores(blanks)
// buttons need to have value
document.getElementById("letters").addEventListener('click', handleClick);
// now i can id the letter being or not being in the word and 
function handleClick (e) {

//Is the button thats clicked found in any index of the selection array property that been generated at random
     if (selection.includes(e.target.innerText) && !currentLetters.includes(e.target.innerText) ){
// yes, so now we want to replace the dash with the selected button in that letters place 

        currentLetters += e.target.innerText;
        
        blanks = returnGuessedWord(selection, blanks, currentLetters)
        console.log(blanks)
        guessedWord.innerText = spaceUnderscores(blanks)
        // for (i = 0; i < guessedWord.innerText.length; i++){
        //     if (guessedWord.innerText[i].toLowerCase()!==guessedWord.innerText[i].toUpperCase()){
        //         newGuess += guessedWord.innerText[i];
        //         console.log(guessedWord, "guessedWord")
        //         console.log(newGuess, "newguess")
        //     }
        //     if (selection[i] === e.target.innerText){
        //         newGuess += e.target.innerText;
        //         console.log(newGuess, "newguess") 


        
        //     }
        // }
        
    }

    
}


// player clicks a button, that button is or is not in Selection.

// var word = words[Math.floor(Math.random() * words.length)];

// console.log(word);

// document.getElementById("word").textContent = word;