import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Main from "./presenter";

const Container = (props, context) => {

	useEffect(() => {
		props.friend(7);
	},[]);

	return (
		<Main />
	)
}

export default Container;