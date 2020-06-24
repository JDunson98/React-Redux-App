import {
    UPDATE_TITLE,
    TOGGLE_EDITING,
    FETCHING_FACT_START,
    FETCHING_FACT_SUCCESS
} from '../actions';

const initialState = {
    title: "",
    editing: false,
    loading: false,
    fact: null,
    isFetching: false,
    error: ""
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FACT_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCHING_FACT_SUCCESS: 
            return {
                ...state,
                fact: action.payload,
                isFetching: false
            };
        case TOGGLE_EDITING:
            return {
                ...state,
                editing: !state.editing
            };
        case UPDATE_TITLE:
            return {
                ...state,
                title: action.payload,
                editing: false
            };
        default: 
            return state;
    }
}