import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1> About</h1>
                <UserClass />
            </div>
        )
    }
}

export default About;