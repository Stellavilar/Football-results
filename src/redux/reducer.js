/* eslint-disable default-case */
import { SELECT_TITLE } from './actions';

const initialState = {
    title : '',
  };

export const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case SELECT_TITLE:
            return {
                ...state,
                title: action.title
            }
    }
    return state;
};