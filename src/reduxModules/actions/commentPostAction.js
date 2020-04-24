export const resetPostMessage = () => {
  return async dispatch => {
    dispatch({
      type: 'RESET_POST_MESSAGE_SUCCESS',
    });
  };
};

export const storeCommentPost = data => {
  return async dispatch => {
    console.log('data', data);
    dispatch({
      type: 'STOE_COMMENT_AND_POST_SUCCESS',
      data: data,
    });
  };
};
