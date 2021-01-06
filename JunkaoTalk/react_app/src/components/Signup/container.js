import React, { useState } from "react";
import PropTypes from "prop-types";
import Signup, { MAX_SIGNUP_STAGE } from "./presenter";

function Container() {
	
	const [page, setPage] = useState({
		stage : 1
	});

	const [account, setAccount] = useState({
		email		: '',
		pw			: '',
		confirm_pw	: '',
		profile_img : '',
		alias		: '',
	});

	const { email, pw, confirm_pw, profile_img, alias } = account;
	const { stage } = page;

	const __step_stage__ = () => {
		if (stage <= MAX_SIGNUP_STAGE ) {
			setPage({ stage : stage+1 });
		}
	}

	const __text_input_handler__ = event => {
		const { value, name } = event.target;
		setAccount({
			...account,
			[name]: value
		});
	};

	const __img_input_handler__ = event => {
		setAccount({
			...account,
			profile_img : event.target.files[0]
		})
	};

	const __submit_handler__ = event => {
		const { account_creater } = this.props;
		
		event.preventDefault();
		account_creater(email, pw, confirm_pw, profile_img, alias);
	};

	return (
		<Signup
			email_val		= {email}
			pw_val			= {pw}
			confirm_pw_val	= {confirm_pw}
			profile_img_val = {profile_img}
			alias_val		= {alias}
			current_stage 	= {stage}

			step_stage 			= {__step_stage__}
			text_input_handler 	= {__text_input_handler__}
			img_input_hander 	= {__img_input_handler__}
			submit_handler 		= {__submit_handler__} />
	);

}

Container.propTypes = {
	createAccount : PropTypes.string.isRequired,
};

export default Container;
