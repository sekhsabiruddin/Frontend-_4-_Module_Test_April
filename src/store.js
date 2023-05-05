import { createStore } from "redux";

//check letet can be mistake//
import rootReducer from "./reducers/reducer";

const store = createStore(rootReducer);

export default store;
