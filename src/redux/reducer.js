import {DISHES} from "../Shared/dishes";
import {COMMENTS} from "../Shared/comments";
import {LEADERS} from "../Shared/leaders";
import {PROMOTIONS} from "../Shared/promotions";

// Initial configuration for the states
export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
}

//pure function, i.e we will not directly modify the state in this function, but return a copy of the updated state
// paramtere state is the current state
export const Reducer = (state = initialState, action) => {
    return state
}