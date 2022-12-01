const React = require ('react')
const DefaultLayout = require("./layout/Default")

class Show extends React.Component{
    render(){
        const {title, entry, shipIsBroken} = this.props.log
        return(
            <DefaultLayout title = {title}>
            
            <h3>{shipIsBroken? `We are BROKEN`:`We are AFLOAT `}</h3>
            Last Update:{new Date(this.props.log.updatedAt).toLocaleString()}
            <p>{entry}</p>
            <a href={`/${this.props.log._id}/edit`}>Edit</a>
            <br />
            <a href="/">Go to main page</a>
            <form action={`/${this.props.log._id}?_method=DELETE`} method = 'POST'>
                <input type="submit" value = "Delete" />
            </form> 
            </DefaultLayout>
        )
    }
}

module.exports = Show