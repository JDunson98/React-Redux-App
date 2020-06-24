import axios from 'axios';

export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const FETCHING_FACT_START = "FETCHING_FACT_START";
export const FETCHING_FACT_FAILURE = "FETCHING_FACT_FAILURE";
export const FETCHING_FACT_SUCCESS = "FETCHING_FACT_SUCCESS";

export function toggleEditing() {
    return { type: "UPDATE_TITLE" };
};

export const updateTitle = newTitle => {
    return { type: "UPDATE_TITLE", payload: newTitle };
}

const headers = {
    Accept: "application/json"
};

export const getFact = () => dispatch => {
    dispatch({ type: FETCHING_FACT_START });
    axios
        .get('https://sv443.net/jokeapi/v2/joke/Any', { headers})
        .then(res => {
            console.log(res);
            dispatch({ type: FETCHING_FACT_SUCCESS, payload: res.data.joke });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: FETCHING_FACT_FAILURE,
                payload: err.response.message        
            });
        });
};