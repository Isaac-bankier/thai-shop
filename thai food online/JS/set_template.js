function StupidWorkAround(id, data) {
    var parts = window.location.search.substr(1).split("&");

    var $_GET = {};
    for (var i = 0; i < parts.length; i++) {
        var temp = parts[i].split("=");
        $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }

    document.getElementById(id).innerHTML = ($_GET[data]);
}

function FixMyProblems() {
    for (i = 1; i < 10; i++) {
        StupidWorkAround("curry" + i.toString(), "name");
    }

}

function SlightlyLessStupidWorkAround(name, data) {
    var parts = window.location.search.substr(1).split("&");

    var $_GET = {};
    for (var i = 0; i < parts.length; i++) {
        var temp = parts[i].split("=");
        $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }

    for (i = 0; i < document.getElementsByName(name).length; i++)
        document.getElementsByName(name)[i].innerHTML = $_GET[data];
}

function set_img() {
    var parts = window.location.search.substr(1).split("&");

    var $_GET = {};
    for (var i = 0; i < parts.length; i++) {
        var temp = parts[i].split("=");
        $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }

    document.getElementById("product_img").src = ($_GET["img"]);
}