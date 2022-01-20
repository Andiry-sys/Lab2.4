class NewsLine {
  _news = [];

  constructor(news = []) {
    this._news = [...news];
  }
  GetNews() {
    return this._news.length - 1;
  }

  AddNews(text) {
    let _now = new Date();
    let _date = [_now.getDate(), _now.getMonth(), _now.getFullYear()];
    for (let i = 0; i < this._news.length; i++) {
      this._news.push(text, _date);
    }
  }
  RemoveNews(index) {
    if (index != -1) {
      this._news.splice(index, 1);
    }
  }
}
