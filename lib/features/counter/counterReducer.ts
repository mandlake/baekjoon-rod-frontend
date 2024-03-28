import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase: any = createAction(INCREASE);
export const decrease: any = createAction(DECREASE);

const initialState = { count: 0 };

const createReducer = handleActions(
  {
    [INCREASE]: (state, actions) => ({ count: state.count + 1 }),
    [DECREASE]: (state, actions) => ({ count: state.count - 1 }),
  },
  initialState
);

export default createReducer;
