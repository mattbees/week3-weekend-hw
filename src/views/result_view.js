const PubSub = require('../helpers/pub_sub');

class ResultView {

  constructor() {
    this.element = document.querySelector('#flex-container')
  };

  bindEvents() {
    PubSub.subscribe('Beers:beer-list-ready', (event) => {
    console.log('Beers:beer-list-ready WORKING');
    });

  };


};

module.exports = ResultView;
