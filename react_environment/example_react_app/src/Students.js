import React, { Component } from "react";

class Student extends Component {
   state = { student: []}

   componentDidMount(){
       fetch('/api')
            .then(res => res.json())
            .then(student => this.setState({student}));
   }
   render() {
      return( <div>
          {this.state.student.map(students => 
            <section key={students.id} >
               <h1>{students.name}</h1>
               <p>{students.hobby}</p>
            </section>
            
          )}
      </div>
      )
   }
}

export default Student;