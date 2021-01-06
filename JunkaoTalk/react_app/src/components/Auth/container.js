import React, { useState } from "react";
import Auth from "./presenter";

function Container() {

	const [act, setAct] = useState({
		action: "login"
	});

	const { action } = act;

	const __action_switch__ = () => {
		setAct ( 
			action === "login" ? { action : "signup"} : {action : "login"}
		);
	};

	return (
		<Auth
			action = { action }
			action_switch	= {__action_switch__}
		/>
	);

}

export default Container;

