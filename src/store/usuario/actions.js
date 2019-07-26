export const Types = {
  userRequest: "user/REQUEST",
  userSuccess: "user/SUCCESS"
};

export function userRequest() {
  return {
    type: Types.userRequest,
    payload: {}
  };
}

export function userSuccess(data) {
  return {
    type: Types.userSuccess,
    payload: { data }
  };
}
