const PubSub = require('../helpers/pub_sub');

class DetailView {

  constructor() {
    this.element = document.querySelector('#beer-detail')
  };

  bindEvents() {
    PubSub.subscribe('Beers:beer-object-ready', (event) => {
      // this.renderBeers(event.detail);
    });
    PubSub.subscribe('ResultView:beer-mouseout', (event) => {
      console.log('ResultView:beer-mouseout WORKING');
    })
  };


};

module.exports = DetailView;
