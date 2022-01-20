class PrintMaсhine {
  _size;
  _color;
  _family;
  constructor(size = '10px', color = 'red', family = 'Times New Roman') {
    this._size = size;
    this._color = color;
    this._family = family;
  }

  print(text) {
    document.write(
      `<span style="font-size:${this._size}; color:${this._color}; font-family:${this._family};">${text}</span>`
    );
  }
}
let m = new PrintMaсhine('20px', 'blue', 'verdana');
m.print('Hello');
