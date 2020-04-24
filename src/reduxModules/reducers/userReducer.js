const defaultState = {
  createdUser: [],
  message: '',
  messageType: '',
  loginSuccess: '',
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'RESET_USER_MESSAGE_SUCCESS':
      return {
        ...state,
        messageType: '',
        message: '',
      };
    case 'USER_LOGIN_DATA':
      return {
        ...state,
        loginSuccess: state.createdUser.map(list =>
          list.email === action.data.email ? list : null,
        ),
      };

    case 'GET_USER_DATA_SUCCESS':
      return {
        ...state,
        createdUser: [...state.createdUser, action.data],
        message: 'User created success',
        messageType: 'success',
      };

    default:
      return state;
  }
}
