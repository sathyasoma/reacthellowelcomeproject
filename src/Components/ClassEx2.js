import React,{Component} from "react";

class ClassEx2 extends Component{
     
    Constructor(props){
     //super();
           this.state={color:'red'};
    }
    render(){

        return <h2> this is my dog, my dog is {this.state.color}</h2>
    }

}

export default ClassEx2;