const PubSub = require('../helpers/pub_sub');

class SelectView {

  constructor() {
    this.element = document.querySelector('#food-input')
  };

  bindEvents() {
    PubSub.subscribe('Beers:food-list-ready', (event) => {
    this.populateFoods(event.detail);
    });

    this.element.addEventListener('change', (event) => {
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
