//I took away the ability to scroll and replace it with my own...

var area = 1;

function scroll_down(){
  area += 1;
  window.location.hash = area;
}

function scroll_up(){
  area -= 1;
  window.location.hash = area;
}
