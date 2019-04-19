const PubSub = require('../helpers/pub_sub');

class SelectView {

  constructor() {
    this.element = document.querySelector('#food-input')
  };

  bindEvents() {
    PubSub.subscribe('Beers:food-list-ready', (event) => {
    console.log('Beers:food-list-ready WORKING');
    this.populateFoods(event.detail);
    });

    this.element.addEventListener('change', (event) => {
      console.dir(event);
      const selectID = event.target.value;
      PubSub.publish('SelectView:food-selected')
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
