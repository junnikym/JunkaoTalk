import React, { useState } from "react";

import SearchBox from "../SearchBox/";
import List from "./presenter";

const Container = (props, context) => {

	const [query, setQuery] = useState({
		query: ''
	});

	const __search_input_handler__ = event => {
		setQuery({
			query: event.target.value
		})
	}

	const __search_submit_handler__ = event => {
		event.preventDefault();
		props.searchAccount(query.query);
	}

	return [
		<SearchBox
			query={query.query}
			input_handler={__search_input_handler__}
			submit_handler={__search_submit_handler__}
			/>,

		<List 
			list={props.list}
			/>,
	];

}

export default Container;

