const PubSub = require('../helpers/pub_sub');

class ResultView {

  constructor() {
    this.element = document.querySelector('#beer-container')
  };

  bindEvents() {
    PubSub.subscribe('Beers:beer-list-ready', (event) => {
    this.renderBeers(event.detail);
    });
  };

  renderBeers(beers) {
    // clear results then loop through array and render each image
    this.element.textContent = "";
    beers.forEach((beer) => {
      const newImage = document.createElement('img');
      newImage.src = beer.image_url;
      newImage.classList.add('flex-item');
      this.element.appendChild(newImage);
    });
    this.imageEvents();
  };

  imageEvents() {
    // addEventListener for each image
    const images = document.querySelectorAll('.flex-item');
    images.forEach((image) => {
      image.addEventListener('mouseover', (event) => {
        this.showDetail();
      });
      // add mouseout event:
      image.addEventListener('mouseout', (event) => {
        this.shrinkView();
      });
    });
  };

  showDetail() {
    // onmouseover, reveal beer-detail div
    const beerDetail = document.querySelector('.fixed-container');
    beerDetail.style.visibility = 'visible';
    // const fixedDivPara = document.createElement('p');
    // fixedDivPara.textContent = 'Test text';
    // const fixedDiv = document.createElement('div');
    // fixedDiv.classList.add('fixed-container');
    // fixedDiv.appendChild(fixedDivPara);
    // document.querySelector('body').appendChild(fixedDiv);
  };

  shrinkView() {
    const beerDetail = document.querySelector('.fixed-container');
    beerDetail.style.visibility = 'hidden';
  };

};

module.exports = ResultView;

// object.addEventListener("mouseout", myScript);
