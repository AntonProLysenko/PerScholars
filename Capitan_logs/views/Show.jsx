const react = require ('react')

class Show extends React.Component{
    render(){
        const {title, entry, shipIsBroken } = this.props.logs
        return(
            <>
            <h1>{title}</h1>
            <h3>{shipIsBroken? `We are BROKEN`:`We are AFLOAT `}</h3>
            <p>{entry}</p>
            </>
        )
    }
}

module.exports = Show