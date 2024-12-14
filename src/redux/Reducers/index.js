import { combineReducers } from "redux";
import Login from "./Login";
//  import Master from "./masterdata";
import master from "./masterdata";
import Loader from "./loader";
import pateintPreData from "./patient_pre_data";
import designation from "./designation";

export default combineReducers({
  Login,
  master,
  Loader,
  pateintPreData,
  designation,
});
