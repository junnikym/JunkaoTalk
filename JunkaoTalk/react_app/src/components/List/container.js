import React, { useState } from "react";
import List from "./presenter";

const Container = (props, context) => {

	return (
		<List 
			list={props.list}/>
	);

}

export default Container;

