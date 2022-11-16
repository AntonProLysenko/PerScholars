const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Index extends React.Component{
    render(){
        const{ pokemons } = this.props
        return(
            <div style = {myStyle}>
                <h1>See All The Pokemon</h1>
                    <ul>
                        {
                            pokemons.map((pok, index)=>{
                                return(                                    
                                    <li key = {index}>  {pok.name.charAt(0).toUpperCase() + pok.name.slice(1) }  </li>
                                )
                            })
                        }
                    </ul>
            </div>
        )

        
    }
}

module.exports = Index
