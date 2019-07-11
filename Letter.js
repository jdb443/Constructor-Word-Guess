function Letter(letterChar){
    this.letterChar=letterChar;
    this.isLetterGuessed=false;
    this.underLyingChar=function(){
        if(this.isLetterGuessed)
            return this.letterChar;
        else
            return "-";    

    }
    this.letterCheck=function(guessedChar){
        if(guessedChar===this.letterChar)
            this.isLetterGuessed=true;
          
    }
}

module.exports=Letter;