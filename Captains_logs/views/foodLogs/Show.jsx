const React = require ('react')
const DefaultLayout = require("../layout/Default")


class Show extends React.Component{
    render(){
        const {title, meal} = this.props.log
        return(
            <DefaultLayout title = {title}>
                Last Update:{new Date(this.props.log.updatedAt).toLocaleString()}
                <p>{meal}</p>
                <a href={`/food//${this.props.log._id}/edit`}>Edit</a>
                <br />
                <a href="/food">Go to food page</a>
                <form action={`/food/${this.props.log._id}?_method=DELETE`} method = 'POST'>
                   <input type="submit" value = "Delete" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Show