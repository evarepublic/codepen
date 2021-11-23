const a = document.getElementById("a"),
  b = document.getElementById("b"),
  outputArea = document.getElementById("res"),
  sumBtn = document.getElementById("sum"),
  multBtn = document.getElementById("mult");

const calculator = {
  res: "",
  sum: function () {
    this.res = +a.value + +b.value;
    this.show();
  },
  mult: function () {
    this.res = a.value * b.value;
    this.show();
  },
  show: function () {
    outputArea.value = this.res;
  },
  eventListeners: function () {
    sumBtn.addEventListener("click", this.sum.bind(this));
    multBtn.addEventListener("click", this.mult.bind(this));
  },
};

calculator.eventListeners();
