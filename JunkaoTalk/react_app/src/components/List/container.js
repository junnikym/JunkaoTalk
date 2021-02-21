import React, { useState, useEffect } from "react";

import SearchBox from "../SearchBox/";
import List from "./presenter";

import { NavCode } from "../../shared/enumerator"

const Container = (props, context) => {

	let show_obj = null;

	useEffect(()=>{
		switch(props.nav_code) {
			case NavCode.Search:
				show_obj = props.list;
			
				break;

			case NavCode.Friends:
				props.getFriendList();
				show_obj = props.friends;
			
				break;
				
			// case NavCode.Friends:
			// 	props.getFriendList();
			// 	show_obj = props.friends;
			
			// 	break;
			
			default:
				show_obj = null;
		}
		
	}, [props.nav_code]);

	return ( <List list={props.list} /> );
}

export default Container;

