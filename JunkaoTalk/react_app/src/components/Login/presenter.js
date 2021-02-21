import React from "react";
import PropTypes from "prop-types";
import "../../shared/formStyles.scss";

const Login = (props, context) => (
	<div>
		<form
			className="form"
			onSubmit={props.submit_handler}
			method="post" >

			<input
				type="email"
				name="email"
				value={props.account_email}
				onChange={props.input_hander}
				className="textInput"
				// placeholder={context.t("Email")} />
				placeholder="email" />

			<input
				type="password"
				name="password"
				value={props.account_pw}
				onChange={props.input_hander}
				className="textInput"
				// placeholder={context.t("Password")} />
				placeholder="Password" />

			<input 
				type="submit"
				className="button"
				// value={context.t("Log in")} />
				value="Log in" />

		</form>

		<span className="forgotLink"> 
			{/* {context.t("Forgot password?")}  */}
			Forgot password?
		</span>
	</div>
);

Login.propTypes = {
	input_hander 	: PropTypes.func.isRequired,
	submit_handler 	: PropTypes.func.isRequired,
	
	account_email 	: PropTypes.string.isRequired,
	account_pw 		: PropTypes.string.isRequired
};

// Login.contextTypes = {
//   t: PropTypes.func.isRequired
// };

export default Login;
