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
