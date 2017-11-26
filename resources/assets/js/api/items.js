const axios = require('axios');
const API_URL = '/api/items';

export const ItemsAPI = {
  getAllUnchecked(callback) {
    axios.get(API_URL)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  create(content, callback) {
    axios.post(API_URL, {content: content})
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  check(id, callback) {
    axios.patch(API_URL + '/' + id, {checked: true})
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  delete(id, callback) {
    axios.delete(API_URL + '/' + id)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
