import axios from 'axios';
import { ADD_PROBLEM, SIMILAR_TO_PROBLEM } from '../problems/actions';

function requestSimilars() {
  return axios.get(`http://localhost:3000/fe-similars.json`);
}

export const ADD_CLICK = 'ADD_CLICK';
export const CHANGE_CLICK = 'CHANGE_CLICK';
export const LOAD_SIMILARS = 'LOAD_SIMILARS';
export const LOAD_FAILURE = 'LOAD_FAILURE';
export const REMOVE_SIMILAR = 'REMOVE_SIMILAR';
export const PROBLEM_TO_SIMILAR = 'PROBLEM_TO_SIMILAR';

export const getSimilars = () => async (dispatch) => {
  try {
    const { data } = await requestSimilars();
    dispatch({
      type: LOAD_SIMILARS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_FAILURE,
      payload: error,
    });
  }
};

export const moveToProblems = (similarId) => (dispatch, getState) => {
  const { similars } = getState();
  let moveItem = null;
  similars.items.forEach((similar) => {
    if (similarId === similar.id) {
      moveItem = similar;
    }
  });

  dispatch({ type: ADD_PROBLEM, payload: moveItem });
  dispatch({ type: REMOVE_SIMILAR, payload: { id: similarId } });
};

export const replaceProblems = (similarId) => (dispatch, getState) => {
  const {
    problems: { items, selectedId },
    similars,
  } = getState();
  let replaceProblem = null;
  let replaceSimilar = null;
  similars.items.forEach((similar) => {
    if (similarId === similar.id) {
      replaceProblem = similar;
    }
  });

  items.forEach((problem) => {
    if (problem.id === selectedId) {
      replaceSimilar = problem;
    }
  });

  dispatch({ type: SIMILAR_TO_PROBLEM, payload: replaceProblem });
  dispatch({ type: PROBLEM_TO_SIMILAR, payload: { replaceSimilar, similarId } });
};
