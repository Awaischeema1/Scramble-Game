
const words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
];
const wordText = document.querySelector('.word'),
hintText = document.querySelector('.hint span'),
input = document.querySelector('input'),
timeDisplay = document.querySelector('.time span'),
refreshBtn = document.querySelector('.refresh-word'),
checkBtn = document.querySelector('.check-word');
let correctWord,timer;

function initTimer(maxTime) {
    timer = setInterval(() => {
        if(maxTime > 0){
            maxTime--;
            
           return timeDisplay.textContent = maxTime < 10 ? `0${maxTime}`: maxTime;
        }
        clearInterval(timer);
        alert(`Time up! ${correctWord.toUpperCase()} was the correct word`);
        gameInit();
    },1000)
}

function gameInit() {
    initTimer(30);
    const randomObj = words[Math.floor(Math.random() * words.length)];
    const wordArr = randomObj.word.split('');
    for (let i = 0; i < wordArr.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArr[i],wordArr[j]] = [wordArr[j],wordArr[i]]
    }
    correctWord = randomObj.word.toLowerCase();
    wordText.textContent = wordArr.join('');
    hintText.textContent = randomObj.hint;
    input.value = ''
    input.setAttribute('maxlength',correctWord.length)
} 
gameInit();
function checkWord (){
let userWord = input.value.toLowerCase();
if(!userWord) return alert('Please Enter A Word');
if(userWord !== correctWord) {
     alert(`Oops ${userWord} is not the correct word`);
    
}else{
    alert(`Congrats! ${userWord.toUpperCase()} is the correct word`)
    gameInit()
}
}
refreshBtn.addEventListener('click',gameInit);
checkBtn.addEventListener('click',checkWord);