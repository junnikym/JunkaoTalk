import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SideBar, {GroupExtraNav, FriendExtraNav} from "./presenter";

import SearchBox from "../SearchBox";
import List from "../List";

import { NavCode } from "../../shared/enumerator"

const Container = (props, context) => {

	const [state, setState] = useState({
		is_search_box_on: true,
		extra_nav: undefined
	})

	/**
	 * Nav
	 * -------------------------
	 */
	const [navState, setNavState] = useState({
		cursor : NavCode.Friends,
		action : undefined
	})

	useEffect(()=>{
		
		// < Which is Need SearchBox  >
		switch(navState.cursor) {
			case NavCode.Friends:
				setState({ is_search_box_on: true, extra_nav: FriendExtraNav });
				break;
			case NavCode.Group:
				setState({ is_search_box_on: true, extra_nav: GroupExtraNav });
				break;
			case NavCode.Logout:
				props.logout();
				break;
			default:
				setState({ is_search_box_on: false, extra_nav: undefined });
				break;
		}

	}, [navState]);

	const __nav_swich_handler__ = (event) => {
		const {value} = event.currentTarget;

		setNavState({
			...navState,
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
					submit_handler={__search_submit_handler__}
					/>
		}
	}

	/**
	 * List
	 * -------------------------
	 */
	const __draw_list__ = () => {
		return <List
				nav_code = {navState.cursor}/>
	}

	/**
	 * Extra Nav
	 * -------------------------
	 */

	const __extra_nav_switch_handler__ = (event) => {
		const {value} = event.currentTarget;

		setNavState({
			...navState,
			action: value
		});
	}

	const __draw_extra_nav__ = () => {
		return (state.extra_nav
			? < state.extra_nav
				extra_nav_switch_handler = {__extra_nav_switch_handler__}/>
			: undefined
		)
	}
	
	// -------------------------
	return (
		<SideBar 
			nav_switch_handler = {__nav_swich_handler__}
			is_saerch_box_on = {state.is_search_box_on}
			draw_search_box = {__draw_search_box__}
			draw_list = {__draw_list__} 
			draw_extra_nav = {__draw_extra_nav__}
			/>
	);

}

export default Container;


