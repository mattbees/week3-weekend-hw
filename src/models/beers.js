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
      // call next function
    });

  };

  getBeers() {
    // get beers on load and store in this.beerData
    const url = 'https://api.punkapi.com/v2/beers';
    const requestHelper = new RequestHelper(url);
    requestHelper.get()
    .then(data => {
      this.beerData = data;
      console.log(this.beerData[0]);
    })
    .catch(message => {
      console.error(message);
    });

  };

  returnSelectedData(index) {
    // take selected object from array and publish it

  };

};

module.exports = Beers;
