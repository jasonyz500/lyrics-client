import { FETCH_SONGS } from '../actions/actions_songs';

export default function(state={}, action) {
  switch (action.type) {
    case FETCH_SONGS:
      return action.payload.data || state;
    default:
      return state;
  }
}