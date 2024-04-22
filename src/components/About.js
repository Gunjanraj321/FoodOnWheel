import User from './User'
import { Component } from "react";

class About extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1> About</h1>
                <User />
            </div>
        )
    }
}

export default About;