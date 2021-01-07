import axios from 'axios';
import { ROOT_URL, getConfig } from './utils';

export const FETCH_SONG_DETAILS = 'fetch_song_details';

export function fetchSongDetails(id) {
	const url = `${ROOT_URL}/song_details/${id}`;
	const request = axios.get(url, getConfig());

  return {
    type: FETCH_SONG_DETAILS,
    payload: request
  }
}