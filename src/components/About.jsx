import React from 'react'
import User from './User'

// export default function About() {
//   return (
//     <div>
//       <h4>About</h4>
//       <User name="kesavan" location="Queen of hills" contact="kesavanvel77@gmail.com" />
//     </div>
//   )
// }

class About extends React.Component{
  constructor(){
    super();
    console.log("Parent constructor");
  }
  componentDidMount(){
    console.log("Parent did mount");
  }
  componentDidUpdate(){
    console.log("Parent update");
}
componentWillUnmount(){
    console.log("Parent unmount");
}
  render(){
    console.log("Parent render");
    return(
      <div>
        <h4>About</h4>
        <User name="Kesavan" location="Queen of hills" contact="kesavanvel77@gmail.com" />
      </div>
    );
  }
}

export default About;