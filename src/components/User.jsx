import React from "react";

class User extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name:"default",
                location:"default"
            },
        }
        console.log(this.props.name + " contructor");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/kesavan-77");
        const jsonData = await data.json();
        console.log(jsonData);
        this.setState({
            userInfo: jsonData
        });
        console.log(this.props.name + " mount");
    }

    componentDidUpdate(){
        console.log(this.props.name + " update");
    }

    componentWillUnmount(){
        console.log(this.props.name + " unmount");
    }

    render(){
        console.log(this.props.name + " render");
        const {name, location, avatar_url} = this.state.userInfo;
        return(
            <div>
                <img src={avatar_url} height="300px"></img><br />
                <span>Name: {name}</span><br/>
                <span>Location: {location}</span><br/>
            </div>
        );
    }
}

export default User;