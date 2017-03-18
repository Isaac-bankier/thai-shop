var sel = document.getElementById('year');
var currentTime = new Date();
var currentyear = currentTime.getFullYear();
var lowyear = currentyear - 123; //http://www.nbcnews.com/news/other/123-year-old-bolivian-man-oldest-living-person-ever-documented-f6C10934840

for (i = lowyear; i < currentyear + 1; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = i;
    opt.value = i;
    if (i == currentyear - 25) {
        opt.selected = "selected";
    }
    sel.appendChild(opt);
}