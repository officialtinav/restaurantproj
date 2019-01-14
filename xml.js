var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadtstatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var mydata = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET","jtest.json",true);
xmlhttp.send();