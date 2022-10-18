import	{Question} from "./questions.js"

export class  Quiz{
    questionIndex = 0;
    
    constructor(questions){
        this.questions = questions;
    }
    getQuestionIndex(){
        return this.questions[this.questionIndex]
    }

    isEnded(){
        return this.questions.length == this.questionIndex;
    }

    guess(answer){
        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }
        this.questionIndex++;
    }

}