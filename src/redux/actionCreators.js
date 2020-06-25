import * as ActionTypes from "./actionTypes"
import { DISHES } from '../Shared/dishes'

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

// two => means that the function is returning a function

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});