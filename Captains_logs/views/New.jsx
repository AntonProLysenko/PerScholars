const React = require('react')
const DefaultLayout = require("./layout/Default")
class New extends React.Component{
    render(){
        return(
            <DefaultLayout title = 'New Log'>
            
            <form action="/" method='POST'>
                Title:<input type="text" name ='title'/>
                <br />
                <input type="textarea" name = 'entry' placeholder='Enter detailed description' height={100} width = {150}/>
                <br />
               <input type="checkbox"  name='shipIsBroken' /> The Ship is broken
                <br />
                <input type="submit" value='Create' />
            </form>
            </DefaultLayout>
        )
    } 
       
}


module.exports = New