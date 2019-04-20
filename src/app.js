const RequestHelper = require('./helpers/request_helper');
const foodTypes = require('./data/food_types');
const Beers = require('./models/beers');
const SelectView = require('./views/select_view');
const ResultView = require('./views/result_view');
const DetailView = require('./views/detail_view');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectView = new SelectView();
  selectView.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

  const detailView = new DetailView();
  detailView.bindEvents();

  const beers = new Beers(foodTypes);
  beers.bindEvents();



});
