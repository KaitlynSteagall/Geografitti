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

export default Toolbutton; 