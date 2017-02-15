function load(){
  var currentTime = new Date();
  var currentyear = currentTime.getFullYear();
  var lowyear = currentyear - 123; //http://www.nbcnews.com/news/other/123-year-old-bolivian-man-oldest-living-person-ever-documented-f6C10934840
  
  for (i = lowyear; i < currentyear; i++) {
    document.getElementById("year").innerHTML += '<option value="'+i+'">'+i+'</option>';
  }
}
