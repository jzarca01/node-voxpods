const axios = require('axios');

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

  async getEpisodes(showId) {
    try {
      const episodes = await this.request({
        method: 'GET',
        url: `/v2/podcasts/${showId}/episodes`,
        responseType: 'json'
      });
      return episodes.data;
    } catch (err) {
      console.log('error with getEpisodes', err);
    }
  }

  async getAllLists(limit = 15) {
    try {
      const lists = await this.request({
        method: 'GET',
        url: `/v2/lists/all/lists`,
        params: {
          limit: limit
        },
        responseType: 'json'
      });
      const { sections } = lists.data;
      return sections.length ? sections : [];
    } catch (err) {
      console.log('error with getAllLists', err);
    }
  }

  async getList(listId) {
    try {
      const list = await this.request({
        method: 'GET',
        url: `/v2/lists/${listId}`,
        responseType: 'json'
      });
      const { sections } = list.data;
      return sections.length ? sections[0] : [];
    } catch (err) {
      console.log('error with getList', err);
    }
  }
}

module.exports = VoxPods;
