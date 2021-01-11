import axios from 'axios';
import { ROOT_URL, getConfig } from './utils';

export const FETCH_SONGS = 'fetch_songs';

export function fetchSongs() {
	const url = `${ROOT_URL}/songs`;
	const request = axios.get(url, getConfig());

  return {
    type: FETCH_SONGS,
    payload: request
  }
}