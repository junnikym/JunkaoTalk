import React from "react";
import PropTypes from "prop-types";
import "../../shared/formStyles.scss";

const MAX_SIGNUP_STAGE = 2

const Signup = (props, context) => (
	<div>

		<form
			className="form"
			onSubmit={props.submit_handler}
			method="post" >

			{/* (1) : Email / Password Satege 
			--------------------------------------------------*/}
			{ props.current_stage === 1 && (
				<div
					className="formDumy">

					<input
						type="email"
						name="email"
						placeholder="Email"
						// placeholder={context.t("Email")}
						className="textInput"
						value={props.email_val}
						onChange={props.text_input_handler} />
			
					<input
						type="password"
						name="pw" 
						placeholder="Password"
						// placeholder={context.t("Password")}
						className="textInput"
						value={props.pw_val}
						onChange={props.text_input_handler} />
					
					<input
						type="password"
						name="confirm_pw" 
						placeholder="Confirm Password"
						// placeholder={context.t("Confirm Password")}
						className="textInput"
						value={props.confirm_pw_val}
						onChange={props.text_input_handler} />
					
					<input 
						type="button"
						value="Continue"
						className="button"
						onClick={props.step_stage} />
				</div>
			) }

			{/* (2) : Profile Imange / Alias Stage
			--------------------------------------------------*/}
			{ props.current_stage === 2 && (
				<div
					className="form">
						
					<input
						type="file"
						name="profile_img"
						placeholder="Profile Image"
						// placeholder={context.t("Email")}
						// className={formStyles.imgInput}
						onChange={props.img_input_hander} />
			
					<input
						type="text"
						name="alias"
						placeholder="Alias"
						// placeholder={context.t("Alias")}
						className="textInput"
						value={props.alias_val}
						onChange={props.text_input_handler} />

					<input
						type="submit"
						// value={context.t("Sign up")}
						className="button"
						value="Sign up" />
				</div>
			) }

		</form>

		{/* <p className={formStyles.terms}>
			{context.t("By signing up, you agree to our ")}
			<span>{context.t("Terms & Privacy Policy")}</span>.
		</p> */}

	</div>
);

Signup.propTypes = {
	email_val		: PropTypes.string.isRequired,
	pw_val			: PropTypes.string.isRequired,
	confirm_pw_val	: PropTypes.string.isRequired,
	profile_img_val	: PropTypes.string.isRequired,
	alias_val		: PropTypes.string.isRequired,
	current_stage	: PropTypes.number.isRequired,

	step_stage			: PropTypes.func.isRequired,
	text_input_handler	: PropTypes.func.isRequired,
	img_input_handler	: PropTypes.func.isRequired,
	submit_handler		: PropTypes.func.isRequired,
};

// SignupForm.contextTypes = {
// 	t: PropTypes.func.isRequired
// };

export { MAX_SIGNUP_STAGE };
export default Signup;
