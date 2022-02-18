import { CHANGE_NAME } from "store/actions/actionTypes";

const initialState = {
  name: "Iftekharul Islam Ifti",
};

const nameReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: payload,
      };

    default:
      return state;
  }
};

export default nameReducer;
