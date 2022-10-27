import React from 'react';

//this is my log in form. creates the LogIn class
export default class LogIn extends React.Component {
    //renders the form
    render(){
        //returns the form
        return(
            //this is the html added to the render method
            <div className='container w-50 border border-dark'>
                <div className='card-header'>
                    <h3>Log In</h3>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Username" aria-label="First name"></input>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Password" aria-label="Last name"></input>
                        </div>
                        <div className="col">
                            <input type="submit" value="submit"></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
