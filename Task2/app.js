class News {
  _head;
  _text;
  _tegs;
  _date;
  _now = new Date();
  constructor(head = '', text = '', tegs = [], date) {
    this._head = head;
    this._text = text;
    this._tegs = [...tegs];
    this._date = date;
  }

  print() {
    document.write(`<h1>${this._head}</h1>`);
    if (this._now.getDate() == this._date) {
      document.writeln(`сегодня`);
    } else if (this._date > 1 && this._date < 7) {
      document.writeln(
        `${parseInt(this._now.getDate()) - parseInt(this._date)} дней назад`
      );
    } else {
      document.writeln(`${this._date}`);
    }
    document.writeln(`<p>${this._text}</p>`);
    for (let i = 0; i < this._tegs.length; i++) {
      document.write(`${this._tegs[i]}`);
    }
  }
}

let teg = ['#app', '#prog', '#web'];
let _new = new News('Andri', 'How are you?', teg, '20-01-2022');
_new.print();
