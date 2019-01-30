var xmlhttp = new XMLHttpRequest(); //display json
xmlhttp.onreadystatechange = function () { //i will do this when somthing is matched
    if (this.readyState == 4 && this.status == 200) { //4 = ready 200=okay 44=error
        var mydata = JSON.parse(this.responseText); //json will be saved as mydata
    
        var pho = mydata.food[0].price; //get price
        var phoName = mydata.food[1].name; //get name

        var grilledpork = mydata.food[1].price; //get price
        var grilledporkName = mydata.food[2].name; //get name

        var crabsoup = mydata.food[2].price; //get price
        var crabsoupName = mydata.food[3].name; //get name

        var springrolls = mydata.food[3].price; //get price
        var springrollsName = mydata.food[4].name; //get name

        var banhmi = mydata.food[4].price; //get price
        var banhmiName = mydata.food[5].name; //get name
        
        var banhxeo = mydata.food[5].price; //get price
        var banhxeoName = mydata.food[6].name; //get name


        function enter() {
            var qty = document.getElementById('user1').value; //get quantity
            //display price at bottom with tax
            var totalP = (qty * 1.471) * pho;
            localStorage.setItem("total", totalP); //set item, price with tax
            var totalL2 = Number(localStorage.getItem("total2")); //get from box2
            var totalL3 = Number(localStorage.getItem("total3")); //get from box3
            var totalL4 = Number(localStorage.getItem("total4")); //get from box4
            var totalL5 = Number(localStorage.getItem("total5")); //get from box5
            var totalL6 = Number(localStorage.getItem("total6")); //get from box6
            var total = totalP + totalL2 + totalL3 + totalL4 + totalL5 + totalL6;
            document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
            window.alert(mydata.food[0].name + " x " + qty);
            var itemList = (mydata.food[0].name + " x " + qty + " = $" + pho * qty);
            localStorage.setItem("item1", itemList); //set order summary to next page


        }
        user1.onkeypress = function () {
            if (event.keyCode == 13) { //if press enter, activate function
                enter();
            }
            if (event.keyCode == 45) { //if press "-", display "no negative"
                document.getElementById('user1').value = ""; //clears the value
                window.alert("don't put a negative");

            }
        }

        function enter2() {
            var qty = document.getElementById('user2').value; //get quantity
            //display price at bottom with tax
            var totalP = (qty * 1.471) * grilledpork; //get price
            localStorage.setItem("total2", totalP); //set item
            var totalL = Number(localStorage.getItem("total")); //get price from box1
            var totalL3 = Number(localStorage.getItem("total3")); //get from box3
            var totalL4 = Number(localStorage.getItem("total4")); //get from box4
            var totalL5 = Number(localStorage.getItem("total5")); //get from box5
            var totalL6 = Number(localStorage.getItem("total6")); //get from box6
            var total = totalP + totalL + totalL3 + totalL4 + totalL5 + totalL6;
            document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
            window.alert(mydata.food[1].name + " x " + qty);
            var itemList = (mydata.food[1].name + " x " + qty + " = $" + grilledpork * qty);
            localStorage.setItem("item2", itemList); //set order summary to next page
        }
        user2.onkeypress = function () {
            if (event.keyCode == 13) { //enter, activate function
                enter2();
            }
            if (event.keyCode == 45) { //"-", display  no minus
                window.alert("don't put a negative");
                document.getElementById('user2').value = "";
            }
        }

        function enter3() {
            var qty = document.getElementById('user3').value; //get quantity
            //display price at bottom with tax
            var totalP = (qty * 1.471) * crabsoup; //get price
            localStorage.setItem("total3", totalP); //set item
            var totalL = Number(localStorage.getItem("total")); //get from box1
            var totalL2 = Number(localStorage.getItem("total2")); //get from box 2
            var totalL4 = Number(localStorage.getItem("total4")); //get from box 4
            var totalL5 = Number(localStorage.getItem("total5")); //get from box5
            var totalL6 = Number(localStorage.getItem("total6")); //get from box6
            var total = totalL + totalP + totalL2 + totalL4 + totalL5 + totalL6;
            document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
            window.alert(mydata.food[2].name + " x " + qty);
            var itemList = (mydata.food[2].name + " x " + qty + " = $" + crabsoup * qty);
            localStorage.setItem("item3", itemList); //set order summary to next page
        }
        user3.onkeypress = function () {
            if (event.keyCode == 13) { //enter, activate
                enter3();
            }
            if (event.keyCode == 45) { //minus, display no minus
                window.alert("don't put a negative");
                document.getElementById('user3').value = ""; //claer value
            }
        }
        //function 4
        function enter4() {
            var qty = document.getElementById('user4').value; //get quantity
            //display price at bottom with tax
            var totalP = (qty * 1.471) * springrolls; //get price
            localStorage.setItem("total4", totalP); //set item
            var totalL = Number(localStorage.getItem("total")); //get from box1
            var totalL2 = Number(localStorage.getItem("total2")); //get from box 2
            var totalL3 = Number(localStorage.getItem("total3")); //get from box3
            var totalL5 = Number(localStorage.getItem("total5")); //get from box5
            var totalL6 = Number(localStorage.getItem("total6")); //get from box6
            var total = totalL + totalP + totalL2 + totalL3 + totalL5 + totalL6;
            document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
            window.alert(mydata.food[3].name + " x " + qty);
            var itemList = (mydata.food[3].name + " x " + qty + " = $" + springrolls * qty);
            localStorage.setItem("item4", itemList); //set order summary to next page

        }
        user4.onkeypress = function () {
            if (event.keyCode == 13) { //enter, activate
                enter4();
            }
            if (event.keyCode == 45) { //minus, display no minus
                window.alert("don't put a negative");
                document.getElementById('user4').value = ""; //claer value
            }
        }
        //function 5
        function enter5() {
            var qty = document.getElementById('user5').value; //get quantity
            //display price at bottom with tax
            var totalP = (qty * 1.471) * banhmi; //get price
            localStorage.setItem("total5", totalP); //set item
            var totalL = Number(localStorage.getItem("total")); //get from box1
            var totalL2 = Number(localStorage.getItem("total2")); //get from box 2
            var totalL3 = Number(localStorage.getItem("total3")); //get from box3
            var totalL4 = Number(localStorage.getItem("total4")); //get from box4
            var totalL6 = Number(localStorage.getItem("total6")); //get from box6
            var total = totalL + totalP + totalL2 + totalL3 + totalL4 + totalL6;
            document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
            window.alert(mydata.food[4].name + " x " + qty);
            var itemList = (mydata.food[4].name + " x " + qty + " = $" + banhmi * qty);
            localStorage.setItem("item5", itemList); //set order summary to next page

        }
        user5.onkeypress = function () {
            if (event.keyCode == 13) { //enter, activate
                enter5();
            }
            if (event.keyCode == 45) { //minus, display no minus
                window.alert("don't put a negative");
                document.getElementById('user5').value = ""; //claer value
            }
        }
        //function6
        function enter6() {
            var qty = document.getElementById('user6').value; //get quantity
            //display price at bottom with tax
            var totalP = (qty * 1.471) * banhxeo; //get price
            localStorage.setItem("total6", totalP); //set item
            var totalL = Number(localStorage.getItem("total")); //get from box1
            var totalL2 = Number(localStorage.getItem("total2")); //get from box 2
            var totalL3 = Number(localStorage.getItem("total3")); //get from box3
            var totalL4 = Number(localStorage.getItem("total4")); //get from box4
            var totalL5 = Number(localStorage.getItem("total4")); //get from box5
            var total = totalL + totalP + totalL2 + totalL3 + totalL4 + totalL5;
            document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
            window.alert(mydata.food[5].name + " x " + qty);
            var itemList = (mydata.food[5].name + " x " + qty + " = $" + banhxeo * qty);
            localStorage.setItem("item6", itemList); //set order summary to next page

        }
        user6.onkeypress = function () {
            if (event.keyCode == 13) { //enter, activate
                enter6();
            }
            if (event.keyCode == 45) { //minus, display no minus
                window.alert("don't put a negative");
                document.getElementById('user6').value = ""; //claer value
            }
        }
//show name and price of items
document.getElementById('pho').innerHTML = phoName + " - $" + pho;
document.getElementById('grilledpork').innerHTML = grilledporkName + " - $" + grilledpork;
document.getElementById('crabsoup').innerHTML = crabsoupName + " - $" + crabsoup;
document.getElementById('springrolls').innerHTML = springrollsName + " - $" + springrolls;
document.getElementById('banhmi').innerHTML = banhmiName + " - $" + banhmi;
document.getElementById('banhxeo').innerHTML = banhxeoName + " - $" + banhxeo;

//****create a "maneger secet link" that allows the manipulation of piece or mark the item as Sold Out
//make the button bigger
left1.ondblclick = function(){ //enter password to make box disappear
    var password = prompt("Enter password");
    if (password == "item1") {
        user1.style.visibility = "hidden";
        document.getElementById('pho').innerHTML = "Sold Out";
     }
     else{
         window.alert("Wrong password");
     }
}
title.onclick = function(){ //enter password to make box appear again
    var password = prompt("Enter password");
    if (password == "item1") {
        user1.style.visibility = "visible";
        document.getElementById('pho').innerHTML = phoName + " - $" + pho;
     }
      else{
          window.alert("Wrong password");
      }
}
//try to make sold out sign




    }

};
xmlhttp.open("GET", "vietRes.json", true);
xmlhttp.send();

document.getElementById('user1').value = 0;
document.getElementById('user2').value = 0;
document.getElementById('user3').value = 0;
document.getElementById('user4').value = 0;
document.getElementById('user5').value = 0;
document.getElementById('user6').value = 0;


localStorage.setItem("total", 0); //set price = 0
localStorage.setItem("total2", 0);
localStorage.setItem("total3", 0);
localStorage.setItem("total4", 0);
localStorage.setItem("total5", 0);
localStorage.setItem("total6", 0);

document.getElementById('pic1').style.visibility = "hidden"; //input box hidden
document.getElementById('pic2').style.visibility = "hidden";
document.getElementById('pic3').style.visibility = "hidden";
document.getElementById('pic4').style.visibility = "hidden";
document.getElementById('pic5').style.visibility = "hidden";
document.getElementById('pic6').style.visibility = "hidden";


left1.onmouseover = function () { //if mouseover, display input
    document.getElementById('pic1').style.visibility = "visible";
}
left1.onmouseout = function () { //if ,mouseout, hides the input
    document.getElementById('pic1').style.visibility = "hidden";
}


right1.onmouseover = function () { //if mouseover, make imput visible
    document.getElementById('pic2').style.visibility = "visible";
}
right1.onmouseout = function () { //if mouseout, make input hidden
    document.getElementById('pic2').style.visibility = "hidden";
}


left2.onmouseover = function () { //if mouseover, make input visible
    document.getElementById('pic3').style.visibility = "visible";
}
left2.onmouseout = function () { //if onmouseout, make input hidden
    document.getElementById('pic3').style.visibility = "hidden";
}

right2.onmouseover = function () { //if mouseover, make input visible
    document.getElementById('pic4').style.visibility = "visible";
}
right2.onmouseout = function () { //if onmouseout, make input hidden
    document.getElementById('pic4').style.visibility = "hidden";
}

left3.onmouseover = function () { //if mouseover, make input visible
    document.getElementById('pic5').style.visibility = "visible";
}
left3.onmouseout = function () { //if onmouseout, make input hidden
    document.getElementById('pic5').style.visibility = "hidden";
}

right3.onmouseover = function () { //if mouseover, make input visible
    document.getElementById('pic6').style.visibility = "visible";
}
right3.onmouseout = function () { //if onmouseout, make input hidden
    document.getElementById('pic6').style.visibility = "hidden";
}

function checkout() { //jump to next page
    location.href = "index.html";
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
