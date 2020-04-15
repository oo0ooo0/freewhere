import axios from 'axios';

function requestProblems() {
  return axios.get(`http://localhost:3000/fe-problems.json`);
}

export const SIMILLAR_CLICK = 'SIMILLAR_CLICK';
export const DELETE_CLICK = 'DELETE_CLICK';
export const LOAD_PROBLEMS = 'LOAD_PROBLEMS';
export const LOAD_FAILURE = 'LOAD_FAILURE';
export const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';
export const DELETE_PROBLEM = 'DELETE_PROBLEM';
export const ADD_PROBLEM = 'ADD_PROBLEM';
export const SIMILAR_TO_PROBLEM = 'SIMILAR_TO_PROBLEM';

export const getProblems = () => async (dispatch) => {
  try {
    const { data } = await requestProblems();
    dispatch({
      type: LOAD_PROBLEMS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_FAILURE,
      payload: error,
    });
  }
};
