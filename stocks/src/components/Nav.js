import { Link } from "react-router-dom"


export default function Nav(props){
    return(
        <div className="nav-bar">
           <Link to="/">
                <div> <h2>IStocks</h2></div>
            </Link>

            <Link to="/stocks">
                <div> Stocks</div>
            </Link>

            <Link to="/about">
                <div> About Us</div>
            </Link>
        </div>
    )
}


