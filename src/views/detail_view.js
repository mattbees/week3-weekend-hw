const PubSub = require('../helpers/pub_sub');

class DetailView {

  constructor() {
    this.element = document.querySelector('#beer-detail')
  };

  bindEvents() {
    PubSub.subscribe('Beers:beer-object-ready', (event) => {
      this.showDetail(event.detail);
    });
    PubSub.subscribe('ResultView:beer-mouseout', (event) => {
      this.hideDetail();
    })
  };

  showDetail(beerObject) {
    this.fillDetail(beerObject);
    this.element.style.visibility = 'visible';
  };

  hideDetail() {
    this.element.style.visibility = 'hidden';
  };

  fillDetail(beerObject) {
    this.element.textContent = '';
    const name = this.getName(beerObject);
    const image = this.getImage(beerObject);
    const descrip = this.getDescrip(beerObject);
    const foodsHeading = this.createFoodsHeading();
    const foods = this.getFoods(beerObject);
    this.element.appendChild(name);
    this.element.appendChild(image);
    this.element.appendChild(descrip);
    this.element.appendChild(foodsHeading);
    this.element.appendChild(foods);
  };

  getName(beerObject) {
    const beerName = document.createElement('h3');
    beerName.textContent = beerObject.name;
    return beerName;
  };

  getImage(beerObject) {
    const beerImage = document.createElement('img');
    beerImage.src = beerObject.image_url;
    return beerImage;
  };

  getDescrip(beerObject) {
    const beerDescrip = document.createElement('p');
    beerDescrip.textContent = beerObject.description;
    return beerDescrip;
  };

  getFoods(beerObject) {
    const foodPairs = document.createElement('ul');
    beerObject.food_pairing.forEach((food => {
      const foodPair = document.createElement('li');
      foodPair.textContent = food;
      foodPairs.appendChild(foodPair);
    }));
    return foodPairs;
  };

  createFoodsHeading() {
    const foodsHeading = document.createElement('h4');
    foodsHeading.textContent = 'Recommended food pairings';
    return foodsHeading;
  };

};

module.exports = DetailView;
