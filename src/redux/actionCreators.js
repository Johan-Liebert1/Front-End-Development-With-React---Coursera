import * as ActionTypes from "./actionTypes"

export const addComment = (dishId, rating, comment, author) => ({
    
    // every action needs a type
    type: ActionTypes.ADD_COMMENT,

    //payload is the data that needs to be carried by aciton object to the reducer
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }

})