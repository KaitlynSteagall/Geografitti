import React from "react";
import { SketchField, Tools } from "react-sketch";
import { CompactPicker } from "react-color";
import Photo from "../Camera/index";
import { Modal } from "react-bootstrap";
import "../../components/Canvas/style.css"

class TagArea extends React.Component {
  state = {
    lineWidth: 10,
    lineColor: "black",
    fillColor: "transparent",
    backgroundColor: "transparent",
    shadowWidth: 10,
    shadowOffset: 10,
    tool: Tools.Pencil,
    enableRemoveSelected: false,
    fillWithColor: true,
    fillWithBackgroundColor: false,
    drawings: [],
    canUndo: false,
    canRedo: false,
    controlledSize: false,
    imageURL: "",
    sketchWidth: 400,
    sketchHeight: 500,
    stretched: true,
    stretchedX: false,
    stretchedY: false,
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
    show: false
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
      enableCopyPaste: event.target.value === Tools.Select
    });
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

  showTools = () => {
    this.setState({
      show: true
    });
  };

  goAway = () => {
    this.setState({
      show: false
    });
  };

  componentDidMount = () => {
    (function (console) {
      console.log("mounting");
      console.save = function (data, filename) {
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
      <div className="container">
        <SketchField
          id="tagArea"
          className="canvas-area"
          ref={c => (this.tag = c)}
          height={this.state.sketchHeight}
          width={this.state.sketchWidth}
          tool={this.state.tool}
          lineColor={this.state.lineColor}
          onChange={this.onTagChange}
          fillColor={this.state.fillColor}
        />
        <Photo
          handlePhotoDataUrl={this.props.handlePhotoDataUrl}
          onClose={this.something}
          width="100%"
          height="100%"
        //  value={this.props.handlePhotoDataUrl}
        />

        <button text="Testbutton" className="btn" style={{ borderRadius: "150px" }} onClick={this.something}><i class="far fa-image"></i> Display Your Image</button>

        <button className="btn" onClick={this.showTools} style={{ borderRadius: "150px" }}><i class="fas fa-pencil-alt"></i></button>

        <Modal show={this.state.show} >
          <Modal.Body>
            <button
              className="btn tool-btn"
              onClick={this.selectTool}
              value={Tools.Circle}><i class="far fa-circle"></i> Circle
            </button>

            <button
              className="btn tool-btn"
              variant="secondary"
              onClick={this.selectTool}
              value={Tools.Pencil}
            ><i class="fas fa-pencil-alt"></i> Pencil
            </button>

            <button
              className="btn tool-btn"
              variant="secondary"
              onClick={this.selectTool}
              value={Tools.Rectangle}
            ><i class="far fa-square"></i> Rectangle
            </button>

            <button
              className="btn tool-btn"
              variant="secondary"
              onClick={this.selectTool}
              value={Tools.Line}
            ><i class="fas fa-draw-polygon"></i> Line
            </button>

            <button
              className="btn tool-btn"
              onClick={this.selectTool}
              value={Tools.Pan}
            ><i class="far fa-hand-rock"></i> Grab it
            </button>

            <button
              className="btn tool-btn"
              onClick={this.selectTool}
              value={Tools.Select}
            ><i class="far fa-hand-pointer"></i> Select and resize.
            </button>

            <input className="ml-4 mt-4" type="range" name="points" min="0" max="10"></input>

            <CompactPicker
              className="mt-2 px-3 ml-4 mr-3"
              color={this.state.lineColor}
              value={this.state.lineColor}
              onChange={color => this.setState({ lineColor: color.hex })}
            />

          </Modal.Body>

          <Modal.Footer>
            <button className="btn" onClick={this.goAway}>Done</button>
          </Modal.Footer>
        </Modal>
        

        <button className="btn" onClick={this.undo} style={{ borderRadius: "150px" }}>
          <i class="fas fa-undo"></i>
        </button>

        <button className="btn" onClick={this.redo} style={{ borderRadius: "150px" }}>
          <i class="fas fa-redo"></i>
        </button>

        <button className="btn" onClick={this.save} style={{ borderRadius: "150px" }}>
          <i class="far fa-save"></i>
        </button>
      </div>
    );
  }
}

export default TagArea;
