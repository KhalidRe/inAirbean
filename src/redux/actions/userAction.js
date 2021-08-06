export const setActive = (activeUser) => {
  return {
    type: "ACTIVE_USER",
    payload: activeUser,
  };
};
export const setAll = (User) => {
  return {
    type: "ALL_USERS",
    payload: User,
  };
};
export const setCurr = (Current) => {
  return {
    type: "CURRENT_ACC",
    payload: Current,
  };
};
