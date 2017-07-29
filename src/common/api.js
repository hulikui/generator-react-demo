import $ from 'jquery';

const ROOT = 'development' === process.env.NODE_ENV ? 'https://api.github.com' : '';

export const fetch = (url, data, option = {}) => {
  return $.ajax($.extend({
    url: ROOT + url,
    data: data && $.param(data, true),
    dataType: 'json',
  }, option));
};

const user = {
  getUserProfile: (username) => {
    return fetch(`/users/${username}`);
  },
};

export {
  user,
}