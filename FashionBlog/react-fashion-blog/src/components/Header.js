import Nav from "./Nav"
export default function Header() {
  return (
    <>
        <div class = "title">
            <h1>Sartre's List</h1> 
            <span class = "h3">Better-Dressed People</span>
        </div>
        
      <nav>
        <ul className="nav-ul header-links" >
          <Nav />
        </ul>
      </nav>
       
    </>
 
      
        
  )
}
