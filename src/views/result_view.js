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
        this.showDetail(/*event.srcElement.id*/); // need to pass beer as arg??
      });
      // add mouseout event:
      image.addEventListener('mouseout', (event) => {
        this.hideDetail();
      });
    });
  };

  showDetail(/*id as arg*/) {
    // TODO: Publish ResultView:beer-selected, image ID
    // TODO: Wait for response with matched beed data and render it
    this.fillDetail(/*id as arg*/); // GET RELEVANT DATA
    this.secondElement.style.visibility = 'visible';
  };

  hideDetail() {
    this.secondElement.style.visibility = 'hidden';
  };

  fillDetail(/*id as arg*/) {
    this.secondElement.textContent = '';
    const beerName = document.createElement('h3');
    beerName.textContent = 'BEERNAME';
    const beerImage = document.createElement('img');
    // TODO: code beer image
    const beerDescrip = document.createElement('p');
    beerDescrip.textContent = 'DESCRIPTION';
    this.secondElement.appendChild(beerName);
    // this.secondElement.appendChild(beerImage);
    this.secondElement.appendChild(beerDescrip);
  };

};





module.exports = ResultView;
