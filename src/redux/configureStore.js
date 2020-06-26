import { createStore, combineReducers, applyMiddleware } from 'redux'
import {createForms} from 'react-redux-form'
import {InitialFeedback} from './forms'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';


export const configureStore = () => {

    const store = createStore(
        combineReducers ({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,

            /* we import the initial feedback and so if we initialize it like this, this will add in the necessary reducer functions and also the state information into my create store */
            ...createForms({
                feedback: InitialFeedback
            })
        }),

        //apply middleware will return a store enhancer 
        applyMiddleware(thunk, logger)
    );

    return store;
}