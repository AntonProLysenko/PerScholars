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
                            <a href={`/${logs._id}`}>{log.title}</a>
                            <br/>
                            
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