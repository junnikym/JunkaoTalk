import React from "react";
import PropTypes from "prop-types";
import formStyles from "../../shared/formStyles.scss";

const Login = (props, context) => (
	<div className={formStyles.formComponent}>
		<form
			className={formStyles.form}
			onSubmit={props.submit_handler}
			method="post" >

			<input
				type="text"
				value={props.account_email}
				onChange={props.input_hander}
				className={formStyles.textInput}
				// placeholder={context.t("Email")} />
				placeholder="Email" />

			<input
				type="password"
				name="password"
				value={props.account_pw}
				onChange={props.input_hander}
				className={formStyles.textInput}
				// placeholder={context.t("Password")} />
				placeholder="Password" />

			<input 
				type="submit"
				className={formStyles.button}
				// value={context.t("Log in")} />
				value="Log in" />

		</form>

		<span> 
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
