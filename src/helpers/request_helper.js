class RequestHelper {

  constructor(url) {
    this.url = url;
  }

  get() {
    return fetch(this.url)
      .then(res => return res.json())
  }

}

module.exports = RequestHelper;
