const axios = require('axios');
const moment = require('moment');

const DATE_FORMAT = 'YYYY-MM-DD';
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';

class VoxPods {
  constructor() {
    this.request = axios.create({
      baseURL: 'https://podcaster-api.herokuapp.com',
      headers: {
        'User-Agent': 'PodCaster/1'
      }
    });
  }

  async search(searchTerm) {
    try {
      const results = await this.request({
        method: 'GET',
        url: '/v2/podcasts/search',
        params: {
          term: searchTerm
        },
        responseType: 'json'
      });

      return results.data;
    } catch (err) {
      console.log('error with search', err);
    }
  }

  async getEpisodes(podcastId) {
    try {
      const episodes = await this.request({
        method: 'GET',
        url: `/v2/podcasts/${podcastId}/episodes`,
        responseType: 'json'
      });
      return episodes.data;
    } catch (err) {
      console.log('error with getEpisodes', err);
    }
  }

  async getList(listId) {
    try {
      const list = await this.request({
        method: 'GET',
        url: `/v2/lists/${listId}`,
        responseType: 'json'
      });
      return list.data;
    } catch (err) {
      console.log('error with getList', err);
    }
  }
}

module.exports = VoxPods;
