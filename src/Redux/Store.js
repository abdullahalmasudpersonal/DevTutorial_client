import {createStore} from "redux";
import tutorialReducer from "./Reducers/TutorialReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(tutorialReducer, composeWithDevTools());

export default store;