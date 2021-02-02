import React from "react";
import PropTypes from "prop-types";
import "./styles.scss"

import List from "../List";

import DefaultProfileImg from "../../shared/img/default_profile.png"
import { NavCode } from "./container";
import SearchBox from "../SearchBox";

const SideBar = (props, context) => (

	<div className="SideBar">

		<ul className="Nav">

			<li 
				onClick={props.nav_switch_handler}
				value={NavCode.Friends}>
				<img src={DefaultProfileImg}/></li>
			<li 
				onClick={props.nav_switch_handler}
				value={NavCode.Group}>
				<img src={DefaultProfileImg}/></li>
			<li 
				onClick={props.nav_switch_handler}
				value={NavCode.Setting}>
				<img src={DefaultProfileImg}/></li>
			<li 
				onClick={props.nav_switch_handler}
				value={NavCode.Friends}>
				<img src={DefaultProfileImg}/></li>
				
		</ul>

		{ props.draw_search_box() }

		<List/>
	
	</div>

);

export default SideBar;