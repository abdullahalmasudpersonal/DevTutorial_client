import {createStore} from "redux";
import tutorialReducer from "./Reducers/TutorialReducer";

const store = createStore(tutorialReducer);

export default store;