const PubSub = require('../helpers/pub_sub');
const RequestHelper = require('../helpers/request_helper');

class Beers {
  constructor(data) {
    this.foodData = data;
    this.beerData = [];
  };

  bindEvents() {
    PubSub.publish('Beers:food-list-ready', this.foodData);
    this.getBeers();
    PubSub.subscribe('SelectView:food-selected', (event) => {
      const selectBeers = this.searchBeers(event.detail);
      PubSub.publish('Beers:beer-list-ready', selectBeers);
    });
    PubSub.subscribe('ResultView:beer-mouseover', (event) => {
      const selectedBeer = this.beerDetail(event.detail);
      PubSub.publish('Beers:beer-object-ready', selectedBeer);
    });
  };

  getBeers() {
    // get beers on load and store in this.beerData
    const url = 'https://api.punkapi.com/v2/beers';
    const requestHelper = new RequestHelper(url);
    requestHelper.get()
    .then(data => {
      this.beerData = data;
    })
    .catch(message => {
      console.error(message);
    });
  };

  searchBeers(foodType) {
    // filters this.beerData[] and returns recommended beers
    return this.beerData.filter((beer => {
      const foods = beer.food_pairing.toString().toLowerCase();
      return foods.includes(foodType);
    }));
  };

  beerDetail(beerName) {
    // returns beer object based on name entered as arg
    const selectedBeer = this.beerData.filter((beer => {
      return beer.name === beerName;
    }));
    return selectedBeer[0];
  };

};

module.exports = Beers;
