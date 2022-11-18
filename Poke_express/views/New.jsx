const React = require('react')

class New extends React.Component{
    render(){
        return(
            <div>
                <h1>Create New Pokemon</h1>
                <nav>
                    <a href="/pokemons">Home Page </a>
                </nav>
                    <form action="/pokemons" method = "POST">
                        Pokemon: <input type="text" name="name" />
                        <br />
                        <input type="submit" value = "Catch Pokemon" />
                    </form>
                
            </div>
        )
    }
}
module.exports = New