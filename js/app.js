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
        "yew luuk so okward up thair",
        "flaing iznt iven kewl",
        "wutza matter mannn?",
        "jst give up",
       
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
        'PRORGRESS',
    ];
  
    let livesLeftPlaceHolder =  document.querySelector('#livesLeft')
    let messagePlaceHolder =  document.querySelector('#message')
    let currentLetters = "";
    let livesLeft = 8;
// i need random words to be pulled for guessing
    let selection = guessWords[Math.floor(Math.random() * guessWords.length)];
    let correct = goods[Math.floor(Math.random() * goods.length)];
    let incorect = bads[Math.floor(Math.random() * bads.length)];
// now i need the random word to be guessable.
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
// need space between underscores 
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
    let flyguy = document.querySelector('#flyguy img');

// we need to make the play button refresh the page
    let refresh = document.getElementById('play');
refresh.addEventListener('click', function (){
   location.reload();
})
    let guessedWord=document.getElementById("words");
guessedWord.innerText=spaceUnderscores(blanks);
// buttons need to have value
document.getElementById("letters").addEventListener('click', handleClick);
// now i can id the letter being or not being in the word and 
function handleClick (e) {
    let selectionArray = selection.split('');
//Is the button thats clicked found in any index of the selection array property that been generated at random
     if (selection.includes(e.target.innerText) && !currentLetters.includes(e.target.innerText) ){
// yes, so now we want to replace the dash with the selected button in that letters place 

        currentLetters += e.target.innerText;
        
        blanks = returnGuessedWord(selection, blanks, currentLetters)
        guessedWord.innerText = spaceUnderscores(blanks)
        messagePlaceHolder.innerText = correct;
        if(!blanks.includes('_')){
            alert('You Won! Click PLAY AGAIN')
            flyguy.className = 'fly';
        }
    }
// we need to keep Score, we need to win or lose.
// if we count down lives on each wrong guess and when its 0 you lose.
    if (selectionArray.includes(e.target.innerText)){
        let countdownToWin=selectionArray.length;
     // that works, and every correct guess is logging in the console.
    // now i need it to run down each *livesLeft = 8 and at 0 you lose
        
    } else if (!selectionArray.includes(e.target.innerText)){
        livesLeft--;
        if (livesLeft <1){
            alert('Game Over! Click Play Again')
        }
        messagePlaceHolder.innerText = incorect;
        livesLeftPlaceHolder.innerText = `Lives Left: ${livesLeft}`;      
    }
}