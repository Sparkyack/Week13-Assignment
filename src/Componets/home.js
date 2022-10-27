import React from "react";
import MyNavbar from "./navbar";
import LogIn from "./login";

//this is my home page componet that imports other componets and creates the Home class
export default class Home extends React.Component{
    //render method to render the html
    render(){
        //this is the actual html returned 
        return(
            <div className="container">
                <div>
                    <MyNavbar/>
                </div>
                <div>
                    <LogIn/>
                </div>
            </div>
        )
    }
}