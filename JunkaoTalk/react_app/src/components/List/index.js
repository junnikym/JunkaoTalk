import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as accountAct } from "../../redux/modules/account";

const mapStateToProps = (state, props) => {
	const { account: { list } } = state;
	
	return { list:["a", "b", "c"] };
};

export default connect(mapStateToProps, null)(Container);
