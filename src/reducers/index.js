import { combineReducers } from 'redux';
import SongDetailsReducer from './reducer_song_details';

const rootReducer = combineReducers({
  song_details: SongDetailsReducer
});

export default rootReducer;