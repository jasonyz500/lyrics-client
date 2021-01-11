import axios from 'axios';
import { ROOT_URL, getConfig } from './utils';

export const FETCH_SONG_DETAILS = 'fetch_song_details';
export const ADD_SONG = 'add_song';
export const EDIT_SONG = 'edit_song';

export function fetchSongDetails(id) {
	const url = `${ROOT_URL}/song_details/${id}`;
	const request = axios.get(url, getConfig());

  return {
    type: FETCH_SONG_DETAILS,
    payload: request
  }
}

export function addSong(data) {
	const url = `${ROOT_URL}/song_details/new`;
	const request = axios.post(url, data, getConfig());

  return {
    type: ADD_SONG,
    payload: request
  }
}

export function editSong(id, data) {
  const url = `${ROOT_URL}/song_details/${id}`;
  const request = axios.put(url, data, getConfig());

  return {
    type: EDIT_SONG,
    payload: request
  } 
}