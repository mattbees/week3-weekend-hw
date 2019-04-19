const PubSub = require('../helpers/pub_sub');

class SelectView {

  constructor() {
    this.element = document.querySelector('#food-input')
  };

  bindEvents() {
    PubSub.subscribe('Beers:food-list-ready', (event) => {
    console.log('Beers:food-list-ready WORKING');
//    populateFoods(event.detail);
    });
  };

  populateFoods(foods) {
    foods.forEach((food, index) => {
      const option = document.createElement('option');
      option.textContent = food;
      option.value = index;
      this.element.appendChild(option);
    });
  };

};

module.exports = SelectView;
