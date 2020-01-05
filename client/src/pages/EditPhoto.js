import React from "react";
import TagArea from "../components/Canvas";

 


class EditPhoto extends React.Component {
  
  
  

  render() {
    console.log("checking props", this.props, this.props.photoDataUrl)
    return (
      <div>
        <TagArea

        dataPhotoUrl={this.props.photoDataUrl}
        handlePhotoDataUrl={this.props.handlePhotoDataUrl}
        

       />
       
      </div>

    );
  }
}

export default EditPhoto;