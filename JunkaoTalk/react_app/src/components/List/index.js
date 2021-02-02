import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, props) => {
	const { account: { list } } = state;
	
	return { list: list };
};

export default connect(mapStateToProps, null)(Container);
