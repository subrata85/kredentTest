import {combineReducers} from 'redux';
import UserReducer from './userReducer';
import CommentPostReducer from './commentPostReducer';

export default (rootReducers = combineReducers({
  userStore: UserReducer,
  commentPostStore: CommentPostReducer,
}));
