import React from "react";

class User extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 1,
            count2: 1,
            count3: 1,
            count4: 1,
        }
        console.log("child contructor");
    }

    render(){
        console.log("clild render");
        let {name, location, contact} = this.props;
        let {count, count2, count3, count4} = this.state;
        return(
            <div>
                <span>Name: {name}</span><br/>
                <span>Location: {location}</span><br/>
                <span>Contact: {contact}</span><br/>
                <span>{count}</span><br />
                <span>{count2}</span><br />
                <span>{count3}</span><br />
                <span>{count4}</span><br />
                <button onClick={()=> this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 2,
                    count3: this.state.count3 + 3,
                    count4: this.state.count4 + 4,

                })}>Add</button>
            </div>
        );
    }
}

export default User;