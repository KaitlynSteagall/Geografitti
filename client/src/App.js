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
            <Route exact path="/" component={SmokeLogo} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/take-photo" render={() =><CapturePhoto handlePhotoDataUrl={this.handlePhotoDataUrl} />}/>
            <Route exact path="/create-art" render={() =><EditPhoto photoDataUrl={this.state.photoDataUrl} handlePhotoDataUrl={this.handlePhotoDataUrl} />} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/edit-account-info" component={EditUser} />
            <Route exact path="/view-art" component={MapPage} />
            <Route component={NotFound} /> 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
