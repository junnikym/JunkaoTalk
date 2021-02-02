import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SideBar from "./presenter";

import SearchBox from "../SearchBox";

export const NavCode = {
	Friends : 0,
	Group 	: 1,
	Setting : 2
}

const Container = (props, context) => {

	const [state, setState] = useState({
		is_search_box_on: true
	})

	/**
	 * Nav
	 * -------------------------
	 */
	const [navState, setNavState] = useState({
		cursor : ""
	})

	useEffect(()=>{
		
		// < Which is Need SearchBox  >
		switch(navState.cursor) {
			case NavCode.Friends:
			case NavCode.Group:
				setState({ is_search_box_on: true });
				break;
			default:
				setState({ is_search_box_on: false });
				break;
		}

	}, [navState]);

	const __nav_swich_handler__ = (event) => {
		const {value} = event.currentTarget;

		setNavState({
			cursor: value
		});
	}

	/**
	 * Search Box
	 * -------------------------
	 */
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

	const __draw_search_box__ = () => {
		if(state.is_search_box_on) {
			return <SearchBox
					query={query.query}
					input_handler={__search_input_handler__}
					submit_handler={__search_submit_handler__} />
		}
	}

	
	// -------------------------
	return (
		<SideBar 
			nav_switch_handler = {__nav_swich_handler__}
			is_saerch_box_on = {state.is_search_box_on}
			draw_search_box = {__draw_search_box__} />
	);

}

export default Container;


