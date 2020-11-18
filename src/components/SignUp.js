import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function SignUpComponent (){
    const handleclick = () =>{
         alert('😍Sign Up Successful!')
        }
    return(
        <div className= "container">
            <form>
            <h3 ClassName='text-justify'>Sign Up to Create Soronko User Account</h3> 
                <div className="row">
                <div className="col-md-6">
                    
                    <label for= "fname">First Name</label><br/>
                    <input type="text" id="fname" className="form-control" placeholder='Your First Name...'/><br/><br/>

                    <label for="lname">Last Name</label><br/>
                    <input type="text" id="lname" className="form-control" placeholder='Your Last Name...'/><br/><br/>

                    <label for="country">Country</label><br/>
                    <input type="text" id="country" className="form-control" placeholder="Ghana"/><br/><br/>

                    <label for="region">Region</label><br/>
                    <input type="text" id="region" className="form-control" placeholder="Volta Region"/><br/><br/>

                    <label for="city"> City</label><br/>
                    <input type="text" id="city" className="form-control"/><br/><br/>

                </div>

                <div className="col-md-6">
                    <label for="address">Street Address</label><br/>
                    <input type="text" id="address" className="form-control"/><br/><br/>

                    <label for="pnumber">Phone Number</label><br/>
                    <input type="number" id="anumber" className="form-control" placeholder='+233(240000000)'/><br/><br/>

                    <label for="email">Email</label><br/>
                    <input type="email" id="email" className="form-control" placeholder="@gmail.com"/><br/><br/>

                    <label for="password">Password</label><br/>
                    <input type="password" id="password" className="form-control" placeholder="Must be at least 6 characters"/><br/><br/>

                    <label for="password">Confirm Password</label><br/>
                    <input type="password" id="password" className="form-control" placeholder="Must be at least 6 characters"/><br/><br/><br/>
                </div>

                </div>
                
               

            <button className="btn btn-primary" onClick={handleclick}>Sign Up</button> 

        </form>
        </div>
    )
}

export default SignUpComponent;