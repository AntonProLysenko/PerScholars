import { Link } from "react-router-dom";


export default function Stocks({stocks}) {

  return (
    
     <ul>
          { stocks.map((stock,idx)=>{
           
            return(
              <Link to={`/stocks/${stock.symbol}`} key = {idx}>
                <li key = {idx}>{stock.name}</li>
              </Link>
                
                
            )
       })}
   </ul>
 

            
   
  )
}
