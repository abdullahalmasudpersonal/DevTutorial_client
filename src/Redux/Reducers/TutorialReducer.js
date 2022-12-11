import { ADD_TO_HISTORY, REMOVE_FROM_HISTORY } from "../ActionTypes/ActionTypes";


const initialState = {
  readingHistory: [],
};

const TutorialReducer = (state = initialState, action) => {
  const selectedTutorial = state.readingHistory.find(
    (tutorial) => tutorial._id === action.payload._id
  );

  console.log(selectedTutorial);

  switch (action.type) {
    case ADD_TO_HISTORY:
      if (selectedTutorial) {
        const newReadingHistory = state.readingHistory.filter(
          (tutorial) => tutorial._id !== selectedTutorial._id
        );

        selectedTutorial.quantity = selectedTutorial.quantity + 1;

        return {
          ...state,
          readingHistory: [...newReadingHistory, selectedTutorial],
        };
      }
      return {
        ...state,
        readingHistory: [...state.readingHistory, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_HISTORY:
      if (selectedTutorial.quantity > 1) {
        const newReadingHistory = state.readingHistory.filter(
          (tutorial) => tutorial._id !== selectedTutorial._id
        );
        selectedTutorial.quantity = selectedTutorial.quantity - 1;

        return {
          ...state,
          readingHistory: [...newReadingHistory, selectedTutorial],
        };
      }
      return {
        ...state,
        readingHistory: state.readingHistory.filter(
          (tutorial) => tutorial._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export default TutorialReducer;