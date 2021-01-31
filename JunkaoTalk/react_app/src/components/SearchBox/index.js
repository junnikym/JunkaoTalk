import React from "react";
import PropTypes from "prop-types";
import "./styles.scss"

import logo from '../../shared/img/logo.png';

import ic_search from "../../shared/img/ic_search.png";

const SearchBox = (props, context) => (

	<div>
		<form 
			className="SearchBox"
			method="get">

			<input
				type="search"
				name="query"
				value={props.query}
				className="QueryBox"
				onChange={props.input_hander}
				placeholder={props.query_hint} />

			<button 
				type="submit"
				className="SubmitBtn">

				<img src={ic_search} className="BtnImg"/> 

			</button>

		</form>

		<hr/>
	</div>

);

export default SearchBox;
