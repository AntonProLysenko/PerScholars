const React = require('react')

class Index extends React.Component{
    render(){
        const { logs } = this.props
        return(
            <>
            <h1>Capitan's Logs</h1>
            <a href="/new">Create Log</a>

            <ol>
                {
                logs.map((log,i)=>{
                    return(
                        <li key = {i}>
                            <h4><a href={`/${log._id}`}>{log.title.toUpperCase()}</a></h4>
                            {
                            log.shipIsBroken?'BROKEN':"AFLOAT"
                            }
                            <br/>
                            <form action={`/${log._id}?_method=DELETE`} method = 'POST'>
                                <input type="submit" value = "Delete" />
                            </form>
                            
                        </li>
                    )
                    
                })

                }
                
            </ol>
            </>
        )
            
    }
}
module.exports = Index