export const ROOT_URL = process.env.NODE_ENV === 'production' ? 'https://lyrics-svc.herokuapp.com' : 'http://localhost:3000';

export function getConfig() {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${localStorage.getItem('auth_token')}`
    }
  }
}