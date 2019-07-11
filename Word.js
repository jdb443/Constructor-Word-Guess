var letter=require("./Letter");
function Word(compGuessArrObject){
    this.compGuessArrObject=compGuessArrObject;
    this.getData=function(){
        var word="";
        this.compGuessArrObject.forEach(element => {
            word+=element.underLyingChar()+" ";
                
        });
        return word;
     }
    this.isLetterGuessed=function(guessedLetter){
        this.compGuessArrObject.forEach(element =>{
           
            element.letterCheck(guessedLetter);
            
        });
    }
}
module.exports=Word;