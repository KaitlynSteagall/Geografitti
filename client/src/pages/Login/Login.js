import React, { Component } from "react";
import "./style.css";

class Login extends Component {

	render() {
		return (
			<div className="container h-80">
			  <div className="row align-items-center h-100 ">
			   <div className="col-3 mx-auto">
			    <div className="text-center">
				  	<img id="profile-img" class="img.avatar" src="./splash.jpg" alt="graffiti" />
				    	<p id="profile-name" class="profile-name-card" />
				   	<form className="form-signin">
				 	<input type="username" name="username" id="inputUname" class="form-control form-group" placeholder="username" required autofocus />
					<input type="password" name="password" id="inputPassword" class="form-control form-group" placeholder="password" required autofocus />
					<button className="btn btn-primary" type="button" enabled>
					<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
					Enter
					</button>
				<button className="btn btn-primary" type="button" enabled>
			  	<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
				Sign up
				 </button>
			   	</form>
			    	</div>
			  	</div>
		  	</div>
	  	</div>
    );
  }
}

export default Login;

