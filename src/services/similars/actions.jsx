import axios from 'axios';

function requestSimilars() {
  return axios.get(`http://localhost:3000/fe-similars.json`);
}

export const ADD_CLICK = 'ADD_CLICK';
export const CHANGE_CLICK = 'CHANGE_CLICK';
export const LOAD_SIMILARS = 'LOAD_SIMILARS';
export const LOAD_FAILURE = 'LOAD_FAILURE';

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
