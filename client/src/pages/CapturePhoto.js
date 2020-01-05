import React from "react";
import Photo from "../components/Camera"; 
class CapturePhoto extends React.Component {
  
  render() {
    
    return (
      <div>
        <Photo
        handlePhotoDataUrl={this.props.handlePhotoDataUrl}

       />
       
      </div>

    );
  }
}

<<<<<<< HEAD
export default CapturePhoto;

 


// class CapturePhoto extends React.Component {
  
  
  

//   render() {
    
//     return (
//       <div>
//         <TagArea
        

//        />
       
//       </div>

//     );
//   }
// }

// export default CapturePhoto;
=======
export default CapturePhoto;
>>>>>>> 658e63f5dd297994b63ea0cc2ec2d466bff59db8
