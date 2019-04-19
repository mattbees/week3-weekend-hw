const PubSub = require('../helpers/pub_sub');

class Beers {
  constructor(data) {
    this.data = data;
  };

  bindEvents() {
    PubSub.publish('Beers:food-list-ready', this.data);

    
  };



};

module.exports = Beers;
