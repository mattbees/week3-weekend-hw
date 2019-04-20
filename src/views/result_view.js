const PubSub = require('../helpers/pub_sub');

class ResultView {

  constructor() {
    this.firstElement = document.querySelector('#beer-container')
    this.secondElement = document.querySelector('#beer-detail')
  };

  bindEvents() {
    PubSub.subscribe('Beers:beer-list-ready', (event) => {
      this.renderBeers(event.detail);
    });

  };

  renderBeers(beers) {
    // clear results then loop through array and render each image
    this.firstElement.textContent = "";
    beers.forEach((beer) => {
      const newImage = document.createElement('img');
      newImage.src = beer.image_url;
      newImage.classList.add('flex-item');
      newImage.id = beer.name; // use this to ID the beer image
      this.firstElement.appendChild(newImage);
    });
    this.imageEvents();
  };

  imageEvents() {
    // addEventListener for each image
    const images = document.querySelectorAll('.flex-item');
    images.forEach((image) => {
      image.addEventListener('mouseover', (event) => {
        const imageID = event.srcElement.id;
        PubSub.publish('ResultView:beer-mouseover', imageID);
      });
      // add mouseout event:
      image.addEventListener('mouseout', (event) => {
        PubSub.publish('ResultView:beer-mouseout');
      });
    });
  };

};





module.exports = ResultView;
