import * as ActionTypes from "./actionTypes"


export const Comments = (state = {
                            errMess: null,
                            comments: []
                        }, action) => {

    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length
            comment.date = new Date().toISOString();

            // The concat() method is used to merge arrays. Concat does not change the existing arrays, but instead returns a new array
            // As states need to remain immutable
            
            return {...state, comments: state.comments.concat(comment)}

        default:
          return state;
      }
};