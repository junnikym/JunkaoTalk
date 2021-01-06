import React from "react";
import PropTypes from "prop-types";

const MAX_SIGNUP_STAGE = 2

const Signup = (props, context) => (
	<div>

		<form
			onSubmit={props.submit_handler}
			method="post" >

			{/* (1) : Email / Password Satege 
			--------------------------------------------------*/}
			{ props.current_stage === 1 && (
				<div>
					<input
						type="email"
						placeholder="Email"
						// placeholder={context.t("Email")}
						// className={formStyles.textInput}
						value={props.email_val}
						onChange={props.input_hander}
						name="email" />
			
					<input
						type="password"
						placeholder="Password"
						// placeholder={context.t("Password")}
						// className={formStyles.textInput}
						value={props.pw_val}
						onChange={props.input_hander}
						name="password" />
					
					<input
						type="password"
						placeholder="Confirm Password"
						// placeholder={context.t("Confirm Password")}
						// className={formStyles.textInput}
						value={props.confirm_pw_val}
						onChange={props.input_hander}
						name="password" />
					
					<input 
						type="button"
						value="Continue"
						onClick={props.step_stage} />
				</div>
			) }

			{/* (2) : Profile Imange / Alias Stage
			--------------------------------------------------*/}
			{ props.current_stage === 2 && (
				<div>
					<input
						type="file" multiple
						placeholder="Profile Image"
						// placeholder={context.t("Email")}
						// className={formStyles.imgInput}
						value={props.profile_img_val}
						onChange={props.input_hander}
						name="profile_img" />
			
					<input
						type="text"
						placeholder="Alias"
						// placeholder={context.t("Alias")}
						// className={formStyles.textInput}
						value={props.alias_val}
						onChange={props.input_hander}
						name="alias" />

					<input
						type="submit"
						// value={context.t("Sign up")}
						// className={formStyles.button}
						onChange={props.submit_handler} />
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
	phone_val		: PropTypes.object.isRequired,
	current_stage	: PropTypes.number.isRequired,

	step_stage		: PropTypes.func.isRequired,
	input_handler	: PropTypes.func.isRequired,
	submit_handler	: PropTypes.func.isRequired,
};

// SignupForm.contextTypes = {
// 	t: PropTypes.func.isRequired
// };

export { MAX_SIGNUP_STAGE };
export default Signup;
