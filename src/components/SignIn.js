import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function SigInComponent (){
        const handleclick = () =>{
            alert('😍Sign In Successful!')
        }
    return(
        <form>
          <h3 className ='lgin'> Welcome to Soronko Sign In Page!</h3>
            <label for="email">Email:</label>
            <input type="email" id="email" className="email" placeholder="@gmail.com"/> <br/>

            <label for="password">Password:</label>
            <input type="password" id="password" className="password" placeholder="Must be at least 6 characters"/> <br/>

        <button onClick={handleclick}>Login</button>    
        <h5> <a href ='./components/SignUp'> Create New Account </a></h5>
        </form>

    )
}

export default SigInComponent;