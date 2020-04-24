const defaultState = {
  createdUser: [],
  message: '',
  messageType: '',
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'RESET_USER_MESSAGE_SUCCESS':
      return {
        ...state,
        messageType: '',
        message: '',
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
