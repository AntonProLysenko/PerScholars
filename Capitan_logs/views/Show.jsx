const React = require ('react')

class Show extends React.Component{
    render(){
        const {title, entry, shipIsBroken} = this.props.log
        return(
            <>
            <h1>{title}</h1>
            <h3>{shipIsBroken? `We are BROKEN`:`We are AFLOAT `}</h3>
            Last Update:{this.props.log.createdAt.toString()}
            <p>{entry}</p>
            <a href={`/${this.props.log._id}/edit`}>Edit</a>
            </>
        )
    }
}

module.exports = Show