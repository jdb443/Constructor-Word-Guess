var word = require("./Word");
var letter = require("./Letter");
var inquirer = require("inquirer");

// Global variables;
var numberOfGuesses = 0;
var data = "";
var previousWord = "";
var computerGuess = "";

// This function picks a random animal name from an array and stores in Word construtor function
function playGame() {
    var wordChoices = [
        "aerobics", 
        "archer",
        "archery",
        "arena",
        "arrow",
        "athlete",
        "athletics",
        "axel",
        "badminton",
        "ball",
        "base",
        "baseball",
        "basketball",
        "bat",
        "baton",
        "batter",
        "batting",
        "biathlon",
        "bicycle",
        "bicycling",
        "bike",
        "biking",
        "billiards",
        "bobsleigh", 
        "bocce",
        "boomerang",
        "boules",
        "bow",
        "bowler",
        "bowling",
        "boxer",
        "boxing",
        "bunt",
        "canoe",
        "canoeing",
        "catch",
        "catcher",
        "champion",
        "championship",
        "cleats",
        "club",
        "coach",
        "compete",
        "competing",
        "competition",
        "competitor",
        "crew",
        "cricket",
        "croquet",
        "cue",
        "curling",
        "cycle",
        "cycling",
        "cyclist",
        "dart",
        "dartboard",
        "deadlifting",
        "decathlon",
        "discus",
        "dive",
        "diver",
        "diving",
        "dodgeball",
        "doubleheader",
        "dugout",
        "equestrian",
        "equipment",
        "exercise",
        "fencing",
        "fielder",
        "fitness",
        "football",
        "forward",
        "frisbee",
        "game",
        "gear",
        "goal",
        "goalie",
        "golf",
        "guard",
        "gym",
        "gymnast",
        "gymnastics",
        "halftime",
        "handball",
        "heptathlon",
        "hitter",
        "hockey",
        "home",
        "huddle",
        "hurdle",
        "infield",
        "infielder",
        "inning",
        "ironman",
        "javelin",
        "jog",
        "judo",
        "jump",
        "karate",
        "kayak",
        "kickball",
        "kite",
        "lacrosse",
        "league",
        "luge",
        "mallet",
        "medal",
        "mitt",
        "net",
        "offense",
        "olympics",
        "out",
        "paddleball",
        "paddling",
        "paintball",
        "parasailing",
        "parkour",
        "pentathlon",
        "pickleball",
        "pitcher",
        "play",
        "playoff",
        "pole",
        "polo",
        "pool",
        "puck",
        "quarter",
        "quarterback",
        "racer",
        "racewalking",
        "racket",
        "racquetball",
        "rafting",
        "referee",
        "relay",
        "riding",
        "rink",
        "rowing",
        "rugby",
        "run",
        "runner",
        "sailing",
        "score",
        "scoreboard",
        "scuba",
        "shortstop",
        "skating",
        "skeleton",
        "skiing",
        "slalom",
        "sledding",
        "snorkeling",
        "snowboarding",
        "soccer",
        "softball",
        "sport",
        "sportsmanship",
        "squash",
        "stadium",
        "strike",
        "stroke",
        "surfing",
        "swimming",
        "taekondo",
        "tag",
        "team",
        "tennis",
        "tetherball",
        "throw",
        "toboggan",
        "trampoline",
        "triathlon",
        "tugowar",
        "ultramarathon",
        "umpire",
        "unicycle",
        "uniform",
        "vault",
        "volleyball",
        "wakeboarding",
        "walking",
        "weightlifting",
        "wetsuit",
        "wicket",
        "win",
        "windsurfing",
        "wrestling"


    ];
    computerGuess = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    // console.log(computerGuess);
    console.log("Hint: Its a sport or sports term!!\n");
    var computerGuessArray = computerGuess.split("");
    var letterObjectsArray = [];
    numberOfGuesses = 10;
    // Creating letter object from the computer guessed word and storing it in an array
    for (var i = 0; i < computerGuessArray.length; i++) {
        letterObjectsArray.push(new letter(computerGuessArray[i]));
    }
    data = new word(letterObjectsArray);
    previousWord = data.getData();
    console.log(previousWord);
    checkUserInput();
}


function checkUserInput() {
    if (numberOfGuesses > 0) {
        inquirer.prompt([

            {
                type: "input",
                name: "userGuessedLetter",
                message: "Guess a letter!!!"
            }
        ]).then(function (response) {
            //console.log(response.guessedLetter);
            data.isLetterGuessed(response.userGuessedLetter.toLowerCase());
            var userGuessedWord = data.getData();
            console.log("\n" + userGuessedWord + "\n");
            checkNumGuesses(userGuessedWord);
            previousWord = userGuessedWord;
            checkUserInput();

        });
    }
    else {
        inquirer.prompt([

            {
                type: "confirm",
                name: "playAgain",
                message: "Do you want to Play again?",
                default: true

            }
        ]).then(function (response) {
            if (response.playAgain) {
                playGame();
            }


        });

    }

}

playGame();
//This function checks for the userGuessedword and displays information accordingly.Also keeps track
//of the number of guesses remaining.
function checkNumGuesses(userGuessedWord) {
    userGuessedWord = userGuessedWord.split(" ").join("");
    previousWord = previousWord.split(" ").join("");
    if (userGuessedWord === computerGuess) {
        console.log("YOU GUESSED CORRECTLY!!!\n");
        numberOfGuesses = -1;
    }
    else if (previousWord === userGuessedWord) {
        numberOfGuesses--;
        console.log("\x1b[31m%s\x1b[0m", "INCORRECT!!!");
        if (numberOfGuesses === 0)
            console.log("\nThe correct Word is " + computerGuess);
        else
            console.log("\n" + numberOfGuesses + " guesses remaining\n");

    }
    else if (previousWord !== userGuessedWord)
        console.log("\x1b[32m%s\x1b[0m", "CORRECT!!!\n");


}