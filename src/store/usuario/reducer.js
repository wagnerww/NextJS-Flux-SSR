import produce from "immer";
import { Types } from "./actions";

const INITIAL_VALUES = {
  data: {},
  isLoading: false
};

export default function user(state = INITIAL_VALUES, action) {
  const { payload } = action;
  switch (action.type) {
    case Types.userRequest:
      return produce(state, draft => {
        draft.isLoading = true;
      });

    case Types.userSuccess:
      console.log("data", payload.data);
      return produce(state, draft => {
        draft.data = payload.data;
        draft.isLoading = false;
      });

    default:
      return state;
  }
}
