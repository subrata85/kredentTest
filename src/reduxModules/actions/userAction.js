export const resetUserMessage = () => {
  console.log('user message');
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
      type: 'USER_DATA',
      data: data,
    });
  };
};

export const createUser = data => {
  return async dispatch => {
    console.log('data', data);
    dispatch({
      type: 'GET_USER_DATA_SUCCESS',
      data: data,
    });
  };
};
