import React from "react"; 
import {SketchField, Tools} from "react-sketch"; 
import ToolButton from "../ToolButton"; 


class TagArea extends React.Component {
  constructor(props){
    super(props); 

    this.state={
      lineWidth: 10,
      lineColor: 'black',
      fillColor: '#68CCCA',
      backgroundColor: 'transparent',
      shadowWidth: 0,
      shadowOffset: 0,
      tool: Tools.Circle,
      enableRemoveSelected: false,
      fillWithColor: false,
      fillWithBackgroundColor: false,
      drawings: [],
      canUndo: false,
      canRedo: false,
      controlledSize: false,
      sketchWidth: 600,
      sketchHeight: 600,
      stretched: true,
      stretchedX: false,
      stretchedY: false,
      originX: 'left',
      originY: 'top',
      imageUrl: 'https://files.gamebanana.com/img/ico/sprays/4ea2f4dad8d6f.png',
      expandTools: false,
      expandControls: false,
      expandColors: false,
      expandBack: false,
      expandImages: false,
      expandControlled: false,
      text: 'a text, cool!',
      enableCopyPaste: false,
      
    };
  }

  selectTool = event => {
    this.setState({
      tool: event.target.value,
      enableRemoveSelected: event.target.value === Tools.Select,
      enableCopyPaste: event.target.value === Tools.Select
    });
  };

  _undo = () => {
    console.log("nada")
    this.tag.undo();
    this.setState({
      canUndo: this.tag.canUndo(),
      canRedo: this.tag.canRedo(),
    });
  };

  onTagChange = () =>{
    console.log("working!")
    let prev = this.state.canUndo; 
    let now = this.tag.canUndo(); 
    if (prev !== now) {
      this.setState({canUndo: now})
    }
  }; 

  componentDidMount = () => {
    (function(console) {
      console.log("mounting")
      console.save = function(data, filename) {
        if (!data) {
          console.error('Console.save: No data');
          return;
        }
        if (!filename) filename = 'console.json';
        if (typeof data === 'object') {
          data = JSON.stringify(data, undefined, 4);
        }
        var blob = new Blob([data], { type: 'text/json' }),
          e = document.createEvent('MouseEvents'),
          a = document.createElement('a');
        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
      };
    })(console);
  }; 

  

  
 
  render() {
     return (
         <div className='container'>
           <SketchField
           ref={c => (this.tag = c)}
         width='800px'
         height='800px'
         tool={this.state.tool}
         lineColor={this.state.lineColor}
         onChange={this.onTagChange}
         />
         <span>
         <ToolButton 
         
         onClick={this.selectTool}
         value={Tools.Pencil}
         
         
         
         
         
          />
         </span>
         <button
         className="btn btn-primary"
         onClick={this.selectTool}
         value={Tools.Pencil}
         >Change to Pencil</button>
         <button
         onClick={this._undo}
         
         />Undo working
         <span>
           
           
         </span>
         </div>
         
     )
  }
}


export default TagArea