export const setActive = (activeUser) => {
  console.log(activeUser);
  return {
    type: "ACTIVE_USER",
    payload: activeUser,
  };
};
export const setAll = (User) => {
  console.log(User);
  return {
    type: "ALL_USERS",
    payload: User,
  };
};
