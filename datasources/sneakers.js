const { RESTDataSource } = require('apollo-datasource-rest');

class SneakersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.thesneakerdatabase.dev/v2';
  }

  async getLatestSneakers() {
    const response = await this.get(`sneakers?limit=20&gender=men&gender=women&releaseDate=lte:${this.nextWeekRelease}&releaseDate=gte:${}&sort=releaseDate:asc`)
  }

  nextWeekRelease() {
    const inOneWeek = 
  }

}