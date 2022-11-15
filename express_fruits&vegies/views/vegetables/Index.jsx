const React= require('react')

class VgIndex extends React.Component{
    render(){
        const { vegatables } = this.props
        return(
            <div>
                <h1>Vegatables Index Page</h1>
                <ul>
                    {
                        vegatables.map((vegatable,index)=>{
                            return(
                                <li key = {index}>
                                    The{' '}
                                    <a href={`/vegatables/${index}`}>{vegatable.name}</a>
                                    {' '}
                                    is {vegatable.color} <br/>
                                    {
                                        vegatable.readyToEat ?"It is ready to eat"
                                        :'It is not ready'
                                    }
                                   
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports= VgIndex