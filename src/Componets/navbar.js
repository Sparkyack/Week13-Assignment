import React from 'react';
// import {Container,Navbar,NavDropdown,Nav} from 'react-bootstrap';

//this is my navbar componet that creates the MyNavbar class
export default class MyNavbar extends React.Component{
    //render method renders the html
    render(){
        //this is the actual html rendered
        return( 
            <div className='container'>    
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="//">Home</a>
                            <a className="nav-link" href="#1">Link1</a>
                            <a className="nav-link" href="#2">Link2</a>
                            <a className="nav-link" href="#3">Link3</a>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}