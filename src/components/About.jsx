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

  render(){
    console.log("Parent render");
    return(
      <div>
        <h4>About</h4>
        <User name="kesavan" location="Queen of hills" contact="kesavanvel77@gmail.com" />
        <User name="kesavan" location="Queen of hills" contact="kesavanvel77@gmail.com" />
      </div>
    );
  }
}

export default About;