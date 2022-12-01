const React = require('react')
const DefaultLayout = require("./layout/Default")

class Index extends React.Component{
    render(){

        const { logs } = this.props
        return(
            <DefaultLayout title="Capitan's Logs">
            
          
            <a href="/food">Food Logs</a> <br />
            <a href="/new">Create Log</a>

            <ol>
                {
                logs.map((log,i)=>{
                    return(
                        <li key = {i}>
                            <h4><a href={`/${log._id}`}>{log.title.toUpperCase()}</a></h4>
                            {
                            log.shipIsBroken?'Repairs in progress':"Afloat"
                            }
                        </li>
                    )
                    
                })

                }
                
            </ol>
            </DefaultLayout>
        )
            
    }
}
module.exports = Index