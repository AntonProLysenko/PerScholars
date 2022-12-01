const React = require('react')
const DefaultLayout = require("./layout/Default")

class Edit extends React.Component{
    render(){
        const log = this.props.log
        console.log(this.props)
        return(
         
            <DefaultLayout title = {`Edit ${this.props.log.title}`}>
            <form action={`/${this.props.log._id}?_method=PUT`} method = "POST">
                Title: <input type="text"  name='title' defaultValue ={log.title}/>
                <br />
                Entry: <input type="textarea" name='entry' defaultValue = {log.entry}/>
                <br />
                Ship is broken:
                {log.shipIsBroken? <input type="checkbox" name='shipIsBroken' defaultChecked/>:<input type="checkbox" name='shipIsBroken'/>}
                <br />
                <input type="submit"value={`Edit ${log.title}`} />
            </form>
            
            </DefaultLayout>
        )
    }
}
module.exports = Edit