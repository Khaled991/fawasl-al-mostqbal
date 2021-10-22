import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

<<<<<<< HEAD
import rootReducer from "./root.reducer";
=======
import rootReducer from './rootReducer';
>>>>>>> 55be1e93eae93be44ff2bfe43da945fd0d1bc067

const middlewares: any[] = [];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
