import { combineReducers } from 'redux';
import SongDetailsReducer from './reducer_song_details';
import SongsReducer from './reducer_songs';

const rootReducer = combineReducers({
  song_details: SongDetailsReducer,
  songs: SongsReducer
});

export default rootReducer;