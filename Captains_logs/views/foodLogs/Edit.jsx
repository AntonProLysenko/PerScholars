const React = require('react')
const DefaultLayout = require ("../layout/Default")

class Edit extends React.Component{
    render(){
        return(
            <DefaultLayout title = {`Edit ${this.props.log.title}`}>
            <form action={`/food/${this.props.log._id}?_method=PUT`} method = "POST">
                Title: <input type="text"  name='title' defaultValue ={this.props.log.title}/>
                <br />
                Entry: <input type="textarea" name='meal' defaultValue = {this.props.log.meal}/>
                <br />
                
                
                <input type="submit"value={`Edit ${this.props.log.title}`} />
            </form>
            </DefaultLayout>
        )
    }
}
module.exports = Edit