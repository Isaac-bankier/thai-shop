//I took away the ability to scroll and replace it with my own...

var area = -1;

function scroll_down() {
    if (5 > area) {
        area += 1;
        window.location.hash = area;
    }
}

function scroll_up() {
    if (area > -1) {
        area -= 1;
        window.location.hash = area;
    }
}