import React from "react";
import PropTypes from "prop-types";
import SearchBox from "../SearchBox"

import "../../shared/listStyles.scss";

const ListView = (props, context) => (
	<div className="ListView">
		
		<div className="SingleThumbnail">

		</div>
		
		<div className="Info">
			{ props.title ? (<b> {props.title} </b>) : null }
			{ props.disc ? (<p> {props.disc} </p>) : null }
		</div>
		
	</div>
);

const List = (props, context) => (
	<div className="List">
		{
			props.list?.map(elem => (
				<ListView 
					title={elem.alias}
					disc={elem.status_msg}/>
			))
		}
	</div>
);

List.propTypes = {
	list : PropTypes.array.isRequired
}

// Auth.contextTypes = {
// 	t: PropTypes.func.isRequired
// };

export default List;
