import AnswerDisplay from "./AnswerDisplay"
import Score from './Score';

export default function MultiQuestionDisplay({question}){
    

  
    const loaded= ()=>{
        // console.log(question)
        let questions = question.map((result,idx)=>{

            const {question , answer, value} = result

            return(
                
                  
                    <div className="question" key = {idx}>
                     
                    <ul>
                     <li>

                        <p><span className="title">Question:</span>{question} </p>
                        <p><span className="title">Value:</span>{value} </p>
                        <AnswerDisplay answer = {answer}/>
                     </li>
                     <br/>
                    </ul>
                </div>
                
               
            )
        })
        return questions
    }







    return question? <div><Score/> {loaded()}</div>: <></>
       
    
}