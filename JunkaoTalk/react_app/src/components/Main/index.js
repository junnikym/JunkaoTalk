import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as accountAct } from "../../redux/modules/account";

// const mapDispatchToProps = (dispatch, props) => {
// 	return {
// 		friend: (target_pk) => {
// 			dispatch(accountAct.friend(target_pk));
// 		}
// 	}
// }

export default connect(null, null)(Container);