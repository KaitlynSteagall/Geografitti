import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SmokeLogo from "./components/SmokeLogo/SmokeLogo";
import Login from "./pages/Login/Login"
import Menu from "./pages/Menu"
import CapturePhoto from "./pages/CapturePhoto"
import EditPhoto from "./pages/EditPhoto"
import Portfolio from "./pages/Portfolio/Portfolio"
import EditUser from "./pages/EditUser/EditUser"
import MapPage from "./pages/MapPage/MapPage"
import NotFound from "./pages/NotFound/NotFound"

class App extends Component {

  state={
    photoDataUrl: "",
    
  }
  handlePhotoDataUrl = (newPhotoDataUrl)=>{
    this.setState({photoDataUrl: newPhotoDataUrl})
    
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/" component={Login} /> */}
            <Route exact path="/Menu" component={Menu} />
            <Route exact path="/Take-Photo" render={() =><CapturePhoto handlePhotoDataUrl={this.handlePhotoDataUrl} />}/>
            <Route exact path="/Create-Art" render={() =><EditPhoto photoDataUrl={this.state.photoDataUrl} handlePhotoDataUrl={this.handlePhotoDataUrl} />} />
            {/* <Route exact path="/Portfolio" component={Portfolio} /> */}
            {/* <Route exact path="/Edit-Account-Info" component={EditUser} /> */}
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;