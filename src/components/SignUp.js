import React from 'react'

function SignUpComponent (){
    const handleclick = () =>{
         alert('😍Sign Up Successful!')
        }
    return(
        <form>
            <h3 ClassName='lgup'>Sign Up to Create Soronko User Account</h3>
                <label for= "fname">First Name</label><br/>
                <input type="text" id="fname" className="fname" placeholder='Your First Name...'/><br/><br/>

                <label for="lname">Last Name</label><br/>
                <input type="text" id="lname" className="lname" placeholder='Your Last Name...'/><br/><br/>

                <label for="country">Country</label><br/>
                <input type="text" id="country" className="country" placeholder="Ghana"/><br/><br/>

                <label for="region">Region</label><br/>
                <input type="text" id="region" className="region" placeholder="Volta Region"/><br/><br/>

                <label for="city"> City</label><br/>
                <input type="text" id="city" className="city"/><br/><br/>

                <label for="address">Street Address</label><br/>
                <input type="text" id="address" className="address"/><br/><br/>

                <label for="pnumber">Phone Number:</label><br/>
                <input type="number" id="anumber" className="number" placeholder='+233(240000000)'/><br/><br/>

                <label for="email">Email</label><br/>
                <input type="email" id="email" className="email" placeholder="@gmail.com"/><br/><br/>

                <label for="password">Password</label><br/>
                <input type="password" id="password" className="password" placeholder="Must be at least 6 characters"/><br/><br/>

                <label for="password">Confirm Password</label><br/>
                <input type="password" id="password" className="password" placeholder="Must be at least 6 characters"/><br/><br/><br/>

            <button onClick={handleclick}>Sign Up</button> 

        </form>
    )
}

export default SignUpComponent;