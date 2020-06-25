import { COMMENTS } from '../Shared/comments';
import * as ActionTypes from "./actionTypes"


export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length
            comment.date = new Date().toISOString();

            // The concat() method is used to merge arrays. Concat does not change the existing arrays, but instead returns a new array
            // As states need to remain immutable
            
            return state.concat(comment)

        default:
          return state;
      }
};