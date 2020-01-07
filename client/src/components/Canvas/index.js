import React from "react";
import { SketchField, Tools } from "react-sketch";
import { CompactPicker } from "react-color";
import Photo from "../Camera/index";
import { Row, Col, Button, Modal } from "react-bootstrap";



class TagArea extends React.Component {

  
  state = {
    lineWidth: 10,
    lineColor: "black",
    fillColor: "transparent",
    backgroundColor: "transparent",
    shadowWidth: 10,
    shadowOffset: 10,
    tool: Tools.Circle,
    enableRemoveSelected: false,
    fillWithColor: true,
    fillWithBackgroundColor: false,
    drawings: [],
    canUndo: false,
    canRedo: false,
    controlledSize: false,
    imageURL: "",
    sketchWidth: 1024,
    sketchHeight: 800,
    stretched: true,
    stretchedX: true,
    stretchedY: true,
    originX: "left",
    originY: "top",
    expandTools: false,
    expandControls: false,
    expandColors: false,
    expandBack: false,
    expandImages: false,
    expandControlled: false,
    text: "a text, cool!",
    enableCopyPaste: false,
    show: false, 
    
  };

   showTools = () =>{
     this.setState({
       show: true
     });
   }; 

   goAway = () => {
     this.setState({
       show: false
     }); 
   }; 

  save = () => {
    let drawings = this.state.drawings;
    drawings.push(this.tag.toDataURL());
    this.setState({ drawings: drawings });
    console.log(drawings);
    // Need to add the post route here!
  };

  something = () => {
    let tag = this.tag;
    tag.addImg(this.props.dataPhotoUrl);
    this.setState({
      canUndo: this.tag.canUndo(),
      canRedo: this.tag.canRedo()
    });
  };

  selectTool = event => {
    
    this.setState({
      tool: event.target.value,
      enableRemoveSelected: event.target.value === Tools.Select,
      enableCopyPaste: event.target.value === Tools.Select,
      
    });
    console.log(this.state.tool)
  };

  undo = () => {
    console.log("nada");
    this.tag.undo();
    this.setState({
      canUndo: this.tag.canUndo(),
      canRedo: this.tag.canRedo()
    });
  };

  redo = () => {
    console.log("triggering");
    this.tag.redo();
    this.setState({
      canRedo: this.tag.canRedo(),
      canUndo: this.tag.canUndo()
    });
  };

  onTagChange = () => {
    console.log("working!");
    let prev = this.state.canUndo;
    let now = this.tag.canUndo();
    if (prev !== now) {
      this.setState({ canUndo: now });
    }
  };

  componentDidMount = () => {
    (function(console) {
      console.log("mounting");
      console.save = function(data, filename) {
        if (!data) {
          console.error("Console.save: No data");
          return;
        }
        if (!filename) filename = "console.json";
        if (typeof data === "object") {
          data = JSON.stringify(data, undefined, 4);
        }
        var blob = new Blob([data], { type: "text/json" }),
          e = document.createEvent("MouseEvents"),
          a = document.createElement("a");
        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
        e.initMouseEvent(
          "click",
          true,
          false,
          window,
          0,
          0,
          0,
          0,
          0,
          false,
          false,
          false,
          false,
          0,
          null
        );
        a.dispatchEvent(e);
      };
    })(console);
  };

  render() {
    console.log(this.props.dataPhotoUrl, "thats where photo data is");
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Row>
          <Col xs="1" md="1" lg="">
            <SketchField
              id="tagArea"
              className="canvas-area"
              ref={c => (this.tag = c)}
              width="1024px"
              height="700px"
              tool={this.state.tool}
              lineColor={this.state.lineColor}
              onChange={this.onTagChange}
              fillColor={this.state.fillColor}
            />
          </Col>
        </Row>

        {/* Photo Modal */}

        <Photo
          handlePhotoDataUrl={this.props.handlePhotoDataUrl}
          
        />

        <Button variant="secondary" onClick={this.something}>
          Throw it up
        </Button>

        {/* ToolBox Modal */}

        
        <Modal show={this.state.show}
        handleClose={this.goAway}>

          {/* Tools themselves */}
          <Modal.Body>
          <button
          variant="secondary"
          onClick={this.selectTool}
          value={Tools.Line}
        >
          <i class="fas fa-grip-lines"></i>
        </button>

        <button
          className="btn btn-primary"
          onClick={this.selectTool}
          value={Tools.Pencil}
        >
          <i class="fas fa-pencil-alt"></i>
        </button>

        

        

        

        <CompactPicker
          color={this.state.lineColor}
          value={this.state.lineColor}
          onChange={color => this.setState({ lineColor: color.hex })}
        />




          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.goAway}>Done</Button>
          </Modal.Footer>
        </Modal>

        <Button onClick={this.showTools}>Open seasame</Button>

        

        
        <button
          className="btn btn-primary"
          onClick={this.selectTool}
          value={Tools.Rectangle}
        >
          <i class="fas fa-vector-square"></i>
        </button>

        

       
        <Button
          className="btn btn-success"
          onClick={this.selectTool}
          value={Tools.Pan}
        >
          Pan
        </Button>

        <Button
          className="btn btn-primary"
          onClick={this.selectTool}
          value={Tools.Select}
        >
          <i class="fas fa-mouse-pointer"></i>
        </Button>

        <Button className="btn btn-success" onClick={this.undo}>
          <i class="fas fa-undo"></i>
        </Button>
        <Button className="btn btn-primary" onClick={this.redo}>
          <i class="fas fa-redo"></i>
        </Button>
        

          

        

        <Button className="btn btn-success" onClick={this.save}>
          <i class="far fa-save">Save</i>
        </Button>

        <Button
          id="download"
          classnName="btn btn-danger"
          onClick={this.download}
        >
          Download
        </Button>

        
      </div>
    );
  }
}

export default TagArea;
