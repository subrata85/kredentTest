const defaultState = {
  commentPost: [],
  comment: [],
  post: [],
  messageType: '',
  message: '',
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'RESET_POST_MESSAGE_SUCCESS':
      return {
        ...state,
        messageType: '',
        message: '',
      };
    case 'STOE_COMMENT_AND_POST_SUCCESS':
      return {
        ...state,
        commentPost: [...state.commentPost, action.data],
        comment:
          action.data.comment === ''
            ? [...state.comment]
            : [...state.comment, action.data.comment],
        post:
          action.data.img === ''
            ? [...state.post]
            : [...state.post, action.data.img],
        message: 'Post success',
        messageType: 'success',
      };
    default:
      return state;
  }
}
