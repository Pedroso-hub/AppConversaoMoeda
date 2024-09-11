function swap() {
    var a, b, c;
    a = document.getElementById("boxa").innerHTML;
    b = document.getElementById("boxb").innerHTML;
    c = a;
    a = b;
    b = c;
    document.getElementById("boxa").innerHTML = a;
    document.getElementById("boxb").innerHTML = b;
  }

