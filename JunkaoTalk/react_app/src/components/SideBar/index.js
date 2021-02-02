import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as accountAct } from "../../redux/modules/account";

const mapDispatchToProps = (dispatch, props) => {
	return {
		searchAccount: (query) => {
			dispatch(accountAct.searchAccount(query));
		}

		
	};
};

export default connect(null, mapDispatchToProps)(Container);