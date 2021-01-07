import { FETCH_SONG_DETAILS } from '../actions/actions_song_details';

export default function(state={}, action) {
  switch (action.type) {
    case FETCH_SONG_DETAILS:
    default:
      return state;
  }
}