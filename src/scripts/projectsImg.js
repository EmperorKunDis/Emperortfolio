var myIndex = 0;
carousel();

function carousel() {
  var d;
  var j = document.getElementsByClassName("mySlides1");
  for (d = 0; d < j.length; d++) {
    j[d].style.display = "none";
    a = d;
  }
  myIndex++;
  if (myIndex > j.length) {
    myIndex = 1;
  }
  j[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4500);

  var l;
  var c = document.getElementsByClassName("mySlides1");
  for (l = 0; l < c.length; l++) {
    c[l].style.display = "none";
    a = l;
  }
  myIndex++;
  if (myIndex > c.length) {
    myIndex = 1;
  }
  c[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4500);

  var k;
  var y = document.getElementsByClassName("mySlides2");
  for (k = 0; k < y.length; k++) {
    y[k].style.display = "none";
    a = k;
  }
  myIndex++;
  if (myIndex > y.length) {
    myIndex = 1;
  }
  y[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4500);

  var o;
  var z = document.getElementsByClassName("mySlides1");
  for (o = 0; o < z.length; o++) {
    z[i].style.display = "none";
    a = o;
  }
  myIndex++;
  if (myIndex > z.length) {
    myIndex = 1;
  }
  z[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4500);
}
