const React = require('react')
const DefaultLayout = require ("../layout/Default")

class Index extends React.Component{
    render(){
        const { logs } = this.props
        return(
            <DefaultLayout title = "Capitan's Food Logs">
            
            <a href="/">Logs Page</a> <br />
            <a href="/food/new">Create Food Log</a>

            <ol>
                {
                    logs.map((log,i)=>{
                        return(
                            <li key = {i}>
                                <h4><a href={`/food/${log._id}`}>{log.title.toUpperCase()}</a></h4>
                                <p>{log.meal}</p>
                              
                                
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