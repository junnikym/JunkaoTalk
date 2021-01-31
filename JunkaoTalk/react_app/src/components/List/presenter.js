import React from "react";
import PropTypes from "prop-types";
import SearchBox from "../SearchBox"

import "../../shared/listStyles.scss";

const ListView = (props, context) => (
	<div className="ListView">
		
		<div className="SingleThumbnail">
		</div>
		
		<div className="Info">
			{props.info}
		</div>
		
	</div>
);

const List = (props, context) => (
	<div className="List">
		{
			props.list?.map(elem => (
				<ListView info={elem.alias}/>
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
