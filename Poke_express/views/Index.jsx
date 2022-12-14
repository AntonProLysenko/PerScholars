const React = require('react')

const myStyle = {
    color: '#b0e2df',
    backgroundColor: '#aab9ec',
    textDecoration: 'none'


    };

class Index extends React.Component{
    render(){
        const{ pokemons } = this.props
        return(
            <body style = {myStyle}>
                <h1>See All The Pokemon</h1>
                    <ul>
                        {
                            pokemons.map((pok, index)=>{
                                return(                                    
                                    <li key = {index} > 
                                        <a style = {myStyle}href = {'/pokemons/'+pok._id}>{pok.name.charAt(0).toUpperCase() + pok.name.slice(1) }</a> 
                                     </li>
                                )
                            })
                        }
                    </ul>
                    <a href="/pokemons/new">Catch Another Pokemon</a>
            </body>
        )

        
    }
}

module.exports = Index
