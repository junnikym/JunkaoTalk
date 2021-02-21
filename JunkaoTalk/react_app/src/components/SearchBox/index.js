import React from "react";
import PropTypes from "prop-types";
import "./styles.scss"

import logo from '../../shared/img/logo.png';

import ic_search from "../../shared/img/ic_search.png";

const SearchBox = (props, context) => (

	<div className="SearchBoxWapper">
		<form 
			className="SearchBox"
			onSubmit={props.submit_handler}
			method="get">

			<input
				type="search"
				name="query"
				value={props.query}
				className="QueryBox"
				onChange={props.input_handler}
				placeholder={props.query_hint} />

			<button 
				type="submit"
				className="SubmitBtn">

				<img src={ic_search} className="BtnImg"/> 

			</button>

		</form>
	</div>

);

SearchBox.propTypes = {
	input_hander 	: PropTypes.func.isRequired,
	submit_handler 	: PropTypes.func.isRequired,
	query 	: PropTypes.string.isRequired,
};

export default SearchBox;
