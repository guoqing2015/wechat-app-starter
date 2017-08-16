import wx from 'labrador';
import request from 'al-request';

// GitHub API
export const getRepos = (payload) => {
  const username = payload;
  // const username = yield select(makeSelectUsername());
  return request.get(`users/${username}/repos?type=all&sort=updated`)
    .then(response => ({response}))
    .catch(error => ({error}));
};
