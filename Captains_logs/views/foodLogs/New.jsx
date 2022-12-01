const React = require('react')
const DefaultLayout = require("../layout/Default")

class New extends React.Component{
    render(){
        return(
            <DefaultLayout title = "New Food Log">
            
            <form action="/food" method='POST'>
                Title:<input type="text" name ='title'/>
                <br />
                <input type="textarea" name = 'meal' placeholder='Enter the meal name' height={100} width = {150}/>
                <br /> 
                <input type="submit" value='Create' />
            </form>
            </DefaultLayout>
        )
    } 
       
}


module.exports = New