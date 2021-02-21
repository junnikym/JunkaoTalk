import React from "react";
// import PropTypes from "prop-types";

import Login from "../Login";
import Signup from "../Signup";

import logo from '../../shared/img/logo.png';

const Auth = (props, context) => (
	<div className="LoginSizeWapper">
	<div className="LoginSizeInsideWapper">

	<div className="fromComponent">

		<img
			className="logo" 
			src={logo}/>

		<div>
			{props.action === "login" && <Login />}
			{props.action === "signup" && <Signup />}
		</div>

		<div>

			{props.action === "signup" && (
				<p>
					{/* {context.t("Have an account?")}{" "} */}

					<span
						className="switchLink"  
						onClick={props.action_switch}>
						{/* {context.t("Log in")} */}
						Log in
					</span>
				</p>
			)}

			{props.action === "login" && (
				<p>
					{/* {context.t("Don't have an account?")}{" "} */}

					<span
						className="switchLink" 
						onClick={props.action_switch}>
						{/* {context.t("Sign up")} */}
						Sign up
					</span>
				</p>
			)}

		</div>
	
	</div>

	</div>
	</div>
);

// Auth.contextTypes = {
// 	t: PropTypes.func.isRequired
// };

export default Auth;
