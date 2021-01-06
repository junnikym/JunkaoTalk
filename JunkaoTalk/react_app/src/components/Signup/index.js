import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as accountAct } from "../../redux/modules/account";

const mapDispatchToProps = (dispatch, props) => {
	return {
		createAccount: (email, password, phone, alias) => {
			dispatch(accountAct.createAccount(email, password, phone, alias));
		}
	};
};

export default connect(null, mapDispatchToProps)(Container);
