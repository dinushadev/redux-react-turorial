import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors){
  return { type:types.LOAD_AUTHOR_SUCCESS, authors};
}


export function loadAuthors(){
    return function(dispatch){
      dispatch(beginAjaxCall());
      return AuthorApi.getAllAuthors().then(authors =>{
        dispatch(loadAuthorsSuccess(authors));
      }).catch(err =>{
        throw(err);
      });
    };
}
