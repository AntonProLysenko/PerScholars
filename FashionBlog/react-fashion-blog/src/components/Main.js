import data from "../data"
import Article from "./Article"



export default function Main() {
  return (
    data.map((elem,idx)=>{
        return <Article key = {idx} {...elem}/>
    })
    
  )
}
