// import {data} from "./data/data.js"
import { Quiz } from "./models/quiz.js"
import { question } from "./data/question.js"
console.log(question)

function main() {
    const quiz  =  new  Quiz(question);
    console.log(quiz)
}

main();     