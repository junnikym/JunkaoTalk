import React from "react";
import PropTypes from "prop-types";
import "./styles.scss"

import DefaultProfileImg from "../../shared/img/default_profile.png"
import { NavCode } from "../../shared/enumerator"

export const FriendExtraNav = (props, context) => (

	<div className="Wapper">
		<h3 className="Title"> Friend </h3>

		<ul className="Nav Options">

			<li 
				onClick={props.extra_nav_switch_handler}
				value={NavCode.Friends}>
				<img src={DefaultProfileImg}/></li>

		</ul>
	</div>

)

export const GroupExtraNav = (props, context) => (

	<div className="Wapper">
		<h3 className="Title"> Group </h3>

		<ul className="Nav Options">
			
			<li 
				onClick={props.extra_nav_switch_handler}
				value={NavCode.Friends}>
				<img src={DefaultProfileImg}/></li>

		</ul>
	</div>

)

const SideBar = (props, context) => (

	<div className="SideBar">

		<div className="TopNav">
			{ props.draw_extra_nav() }
		</div>

		<div className="Contents">
			{ props.draw_search_box() }

			{ props.draw_list() }
		</div>

		<ul className="Nav BottomNav">

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
				value={NavCode.Logout}>
				<img src={DefaultProfileImg}/></li>
				
		</ul>
	
	</div>

);

export default SideBar;