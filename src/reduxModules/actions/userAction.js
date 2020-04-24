export const resetUserMessage = () => {
  return async dispatch => {
    dispatch({
      type: 'RESET_USER_MESSAGE_SUCCESS',
    });
  };
};

export const userLogin = data => {
  return async dispatch => {
    console.log('data', data);
    dispatch({
      type: 'USER_LOGIN_DATA',
      data: data,
    });
  };
};

export const createUser = data => {
  return async dispatch => {
    dispatch({
      type: 'GET_USER_DATA_SUCCESS',
      data: data,
    });
  };
};
