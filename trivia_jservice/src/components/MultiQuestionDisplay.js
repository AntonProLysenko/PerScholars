import Score from './Score';

export default function MultiQuestionDisplay({question}){
    

  
    const loaded= ()=>{
        // console.log(question)
        let questions = question.map((result,idx)=>{

            const {question , answer, value} = result

            return(
                <>
                  
                    <div key = {idx}>
                     
                    <ul>
                     <li>
                        <p><span className="title">Question:</span>{question} </p>
                        <p><span className="title">Answer:</span>{answer} </p>
                        <p><span className="title">Value:</span>{value} </p>
                     </li>
                     <br/>
                    </ul>
                </div>
                </>
               
            )
        })
        return questions
    }







    return question? <div><Score/> {loaded()}</div>: <></>
       
    
}