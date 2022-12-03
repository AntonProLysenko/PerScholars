import Sidebar from "./Sidebar"
import Reviews from "./Reviews"
import Raiting from "./Raiting"
import Analysis from "./Analysis"
import Visitors from "./Visitors"

export default function Main(){
    return(
        <div className = "container">
            <Sidebar/>
            <Reviews/>
            <Raiting/>
            <Analysis/>
            <Visitors/>
        </div>
    )
}