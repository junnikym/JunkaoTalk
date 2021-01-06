import React, { useState } from "react";
import PropTypes from "prop-types";
import Login from "./presenter";

function Container() {

	const [account, setAccount] = useState({
		email	 : '',
		password : ''
	});

	const __input_handler__ = event => {
		const { target: { value, name } } = event;
		setAccount({
			[name]: value
		});
	};

	const __submit_handler__ = event => {
		const { default_login } = this.props;
		
		event.preventDefault();
		default_login(email, password);
	};

	const { email, password } = account;

	return (
		<Login
			input_hander	= {__input_handler__}
			submit_handler	= {__submit_handler__}
			account_email	= {email}
			account_pw		= {password}
		/>
	);

}

export default Container;
