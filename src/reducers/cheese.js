import { FETCH_CHEESES_REQUEST, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_ERROR} from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

export default function cheeseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHEESES_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case FETCH_CHEESES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        cheeses: action.cheeses
      });
    case FETCH_CHEESES_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: true
      });

    default:
      return state;
  }
}