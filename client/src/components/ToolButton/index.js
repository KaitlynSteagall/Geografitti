<<<<<<< HEAD
<<<<<<< HEAD
import React from "react"; 

=======
import React from "react";
import { Tools } from "react-sketch";
>>>>>>> 6b8e95cb41252131df832ed46713fddba1895ec0

function Toolbutton(props) {

<<<<<<< HEAD


  function Toolbutton(props){

  
    return(

      
      
      
      
    ); 
  }
  



=======
  return (
    <button
      className="btn btn-primary"
      onClick={props.selectTool}
      value={Tools.Pencil}>
      testbutton
    </button>
  );
}
>>>>>>> 6b8e95cb41252131df832ed46713fddba1895ec0
=======

import React from "react";
import { Tools } from "react-sketch";

function Toolbutton(props) {

  function Toolbutton(props){

  return (
    <button
      className="btn btn-primary"
      onClick={props.selectTool}
      value={Tools.Pencil}>
      testbutton
    </button>
  );
}

>>>>>>> 658e63f5dd297994b63ea0cc2ec2d466bff59db8

export default Toolbutton; 