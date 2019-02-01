//html select box
xmlhttp.open("GET", "vietRes.json", true);
xmlhttp.send();

function checkout() { //jump to next page
    location.href = "vietRest2.html";
}
var previous = null;
var current = null;
    setInterval(function(){
        $.getJSON("json.vietRes.json", function(json){
            current = JSON.stringify(json);
            if (previous && current && previous!==current){
                location.reload();
            }
        });
    }, 2000);

var pho = [0];
var grilledpork = [1];
var crabsoup = [2];
var springrolls = [3];
var banhmi = [4];
var banhxeo = [5];
var $ = document

for (var i = 0; i < mydata.food.length;i++) {
  fn.push(mydata.food[0].name);
  fp.push(mydata.food[0].price);
  $.createElement();
  text.createTextnode()
}

//each button has a unique id
//display name and price of items

$.getElementById('pho').innerHTML = phoName + " - $" + pho;
$.getElementById('grilledpork').innerHTML = grilledporkName + " - $" + grilledpork;
$.getElementById('crabsoup').innerHTML = crabsoupName + " - $" + crabsoup;
$.getElementById('springrolls').innerHTML = springrollsName + " - $" + springrolls;
$.getElementById('banhmi').innerHTML = banhmiName + " - $" + banhmi;
$.getElementById('banhxeo').innerHTML = banhxeoName + " - $" + banhxeo;

 function enter() {
            var amount = document.getElementById('user1').value; //get quantity
            //display price at bottom with tax
            var totalP = (amount * 1.471) * pho;
            console.log(totalP);
 }
 
$.getElementById('user1').value = 0;
$.getElementById('user2').value = 0;
$.getElementById('user3').value = 0;
$.getElementById('user4').value = 0;
$.getElementById('user5').value = 0;
$.getElementById('user6').value = 0;


localStorage.setItem("total", 0); //set price = 0
localStorage.setItem("total2", 0);
localStorage.setItem("total3", 0);
localStorage.setItem("total4", 0);
localStorage.setItem("total5", 0);
localStorage.setItem("total6", 0);

$.getElementById('pic1').style.visibility = "hidden"; //input box hidden
$.getElementById('pic2').style.visibility = "hidden";
$.getElementById('pic3').style.visibility = "hidden";
$.getElementById('pic4').style.visibility = "hidden";
$.getElementById('pic5').style.visibility = "hidden";
$.getElementById('pic6').style.visibility = "hidden";
