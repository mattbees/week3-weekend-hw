const PubSub = require('../helpers/pub_sub');

class Beers {
  constructor(data) {
    this.data = data;
  };

  bindEvents() {
    PubSub.publish('Beers:food-list-ready', this.data);

    PubSub.subscribe('SelectView:food-selected', (event) => {
      console.log('SelectView:food-selected working');
    });

  };



};

module.exports = Beers;
