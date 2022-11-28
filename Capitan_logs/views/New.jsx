const React = require('react')

class New extends React.Component{
    render(){
        return(
            <>
            <h1>New log</h1>
            <form action="/" method='POST'>
                Title:<input type="text" name ='title'/>
                <br />
                <input type="textarea" name = 'entry' placeholder='Enter detailed description' height={100} width = {150}/>
                <br />
               <input type="checkbox"  name='shipIsBroken' /> The Ship is broken
                <br />
                <input type="submit" value='Create' />
            </form>
            </>
        )
    }
       
}


module.exports = New