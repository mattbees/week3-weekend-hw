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
      const food = event.target.value;
      PubSub.publish('SelectView:food-selected', food);
    });
  };

  populateFoods(foods) {
    foods.forEach((food) => {
      const option = document.createElement('option');
      option.textContent = food;
      option.value = food;
      this.element.appendChild(option);
    });
  };

};

module.exports = SelectView;
