import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as accountAct } from "../../redux/modules/account";

const mapStateToProps = (state, props) => {
	const { account: { list, friends } } = state;
	
	return { 
		nav_code: props.nav_code,
		list: list, 
		friends: friends 
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		getFriendList: () => {
			dispatch(accountAct.getFriendList());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
