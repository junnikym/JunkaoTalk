import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as accountAct } from "../../redux/modules/account";

const mapStateToProps = (state, props) => {
	const { account: { list } } = state;
	
	return { list: list };
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		searchAccount: (query) => {
			dispatch(accountAct.searchAccount(query));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
