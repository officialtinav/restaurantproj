var xmlhttp = new XMLHttpRequest(); //show json
xmlhttp.onreadystatechange = function () { //i will do this when somthing is matched
    if (this.readyState == 4 && this.status == 200) { //4 = ready 200=okay 44=error
        var mydata = JSON.parse(this.responseText); //json will be saved as mydata

        var foodName = []; //array
        var foodPrice = [];

        for (var i = 0; i < mydata.food.length; i++) {
            foodName.push(mydata.food[i].name);
            foodPrice.push(mydata.food[i].price);
        }

        function enter() {
            var qty = document.getElementById('user1').value; //get amount
            //display price
            var overall = (qty * 1.471) * foodPrice[0];
            localStorage.setItem("total", overallP); //set item, price with tax
            var overall2 = Number(localStorage.getItem("overall2")); //get from box2
            var overall3 = Number(localStorage.getItem("overall3")); //get from box3
            var overall4 = Number(localStorage.getItem("overall4")); //get from box4
            var overall5 = Number(localStorage.getItem("overall5")); //get from box5
            var overall6 = Number(localStorage.getItem("overall6")); //get from box6
            var total = overallP + overall2 + overall3 + overall4 + overall5 + overall6;
            document.getElementById('bottom').innerHTML = "your total is $" + total.toFixed(2);
            window.alert(foodName[0] + " x " + qty);
            var itemList = (foodName[0] + " x " + qty + " = $" + foodPrice[0] * qty);
            localStorage.setItem("item1", itemList); //set order summary to next page

        }
        purchase.onclick = function () {
            if (document.getElementById('user1').value >= 1) {
                enter();

            }
            if (document.getElementById('user2').value >= 1) {
                enter2();
            }

            if (document.getElementById('user3').value >= 1) {
                enter3();
            }

            if (document.getElementById('user4').value >= 1) {
                enter4();
            }

            if (document.getElementById('user5').value >= 1) {
                enter5();
            }

            if (document.getElementById('user6').value >= 1) {
                enter6();
            }
        }

        function enter2() {
            var qty = document.getElementById('user2').value; //get quantity
            //display price at bottom with tax
            var totalP = (qty * 1.471) * foodPrice[1]; //get price
            localStorage.setItem("total2", totalP); //set item
            var totalL = Number(localStorage.getItem("total")); //get price from box1
            var totalL3 = Number(localStorage.getItem("total3")); //get from box3
            var totalL4 = Number(localStorage.getItem("total4")); //get from box4
            var totalL5 = Number(localStorage.getItem("total5")); //get from box5
            var totalL6 = Number(localStorage.getItem("total6")); //get from box6
            var total = totalP + totalL + totalL3 + totalL4 + totalL5 + totalL6;
            document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
            window.alert(foodName[1] + " x " + qty);
            var itemList = (foodName[1] + " x " + qty + " = $" + foodPrice[1] * qty);
            localStorage.setItem("item2", itemList); //set order summary to next page
        }


        function enter3() {
            var qty = document.getElementById('user3').value; //get quantity
            //display price at bottom with tax
            var totalP = (qty * 1.471) * foodPrice[2]; //get price
            localStorage.setItem("total3", totalP); //set item
            var totalL = Number(localStorage.getItem("total")); //get from box1
            var totalL2 = Number(localStorage.getItem("total2")); //get from box 2
            var totalL4 = Number(localStorage.getItem("total4")); //get from box 4
            var totalL5 = Number(localStorage.getItem("total5")); //get from box5
            var totalL6 = Number(localStorage.getItem("total6")); //get from box6
            var total = totalL + totalP + totalL2 + totalL4 + totalL5 + totalL6;
            document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
            window.alert(foodName[2] + " x " + qty);
            var itemList = (foodName[2] + " x " + qty + " = $" + foodPrice[2] * qty);
            localStorage.setItem("item3", itemList); //set order summary to next page
        }

        //function 4
        function enter4() {
            var qty = document.getElementById('user4').value; //get quantity
            //display price at bottom with tax
            var totalP = (qty * 1.471) * foodPrice[3]; //get price
            localStorage.setItem("total4", totalP); //set item
            var totalL = Number(localStorage.getItem("total")); //get from box1
            var totalL2 = Number(localStorage.getItem("total2")); //get from box 2
            var totalL3 = Number(localStorage.getItem("total3")); //get from box3
            var totalL5 = Number(localStorage.getItem("total5")); //get from box5
            var totalL6 = Number(localStorage.getItem("total6")); //get from box6
            var total = totalL + totalP + totalL2 + totalL3 + totalL5 + totalL6;
            document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
            window.alert(foodName[3] + " x " + qty);
            var itemList = (foodName[3] + " x " + qty + " = $" + foodPrice[3] * qty);
            localStorage.setItem("item4", itemList); //set order summary to next page

        }

        //function 5
        function enter5() {
            var qty = document.getElementById('user5').value; //get quantity
            //display price at bottom with tax
            var totalP = (qty * 1.471) * foodPrice[4]; //get price
            localStorage.setItem("total5", totalP); //set item
            var totalL = Number(localStorage.getItem("total")); //get from box1
            var totalL2 = Number(localStorage.getItem("total2")); //get from box 2
            var totalL3 = Number(localStorage.getItem("total3")); //get from box3
            var totalL4 = Number(localStorage.getItem("total4")); //get from box4
            var totalL6 = Number(localStorage.getItem("total6")); //get from box6
            var total = totalL + totalP + totalL2 + totalL3 + totalL4 + totalL6;
            document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
            window.alert(foodName[4] + " x " + qty);
            var itemList = (foodName[4] + " x " + qty + " = $" + foodPrice[4] * qty);
            localStorage.setItem("item5", itemList); //set order summary to next page

        }

        //function6
        function enter6() {
            var qty = document.getElementById('user6').value; //get quantity
            //display price at bottom with tax
            var totalP = (qty * 1.471) * foodPrice[5]; //get price
            localStorage.setItem("total6", totalP); //set item
            var totalL = Number(localStorage.getItem("total")); //get from box1
            var totalL2 = Number(localStorage.getItem("total2")); //get from box 2
            var totalL3 = Number(localStorage.getItem("total3")); //get from box3
            var totalL4 = Number(localStorage.getItem("total4")); //get from box4
            var totalL5 = Number(localStorage.getItem("total4")); //get from box5
            var total = totalL + totalP + totalL2 + totalL3 + totalL4 + totalL5;
            document.getElementById('bottom').innerHTML = "Your total is $" + total.toFixed(2);
            window.alert(foodName[5] + " x " + qty);
            var itemList = (foodName[5] + " x " + qty + " = $" + foodPrice[5] * qty);
            localStorage.setItem("item6", itemList); //set order summary to next page

        }

        //show name and price of items
        document.getElementById('pho').innerHTML = foodName[0] + " - $" + foodPrice[0];
        document.getElementById('grilledpork').innerHTML = foodName[1] + " - $" + foodPrice[1];
        document.getElementById('friedrice').innerHTML = foodName[2] + " - $" + foodPrice[2];
        document.getElementById('crabsoup').innerHTML = foodName[3] + " - $" + foodPrice[3];
        document.getElementById('springrolls').innerHTML = foodName[4] + " - $" + foodPrice[4];
        document.getElementById('banhmi').innerHTML = foodName[5] + " - $" + foodPrice[5];


xmlhttp.open("GET", "vietRes.json", true);
xmlhttp.send();

document.getElementsByClassName("choose")[0].value = 0;
document.getElementsByClassName("choose")[1].value = 0;
document.getElementsByClassName("choose")[2].value = 0;
document.getElementsByClassName("choose")[3].value = 0;
document.getElementsByClassName("choose")[4].value = 0;
document.getElementsByClassName("choose")[5].value = 0;


localStorage.clear();

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
    location.href = "vietRes2.html";
}

var previous = null;
var current = null;
setInterval(function () { //auto refresh
    $.getJSON("vietRes.json", function (json) {
        current = JSON.stringify(json);
        if (previous && current && previous !== current) {
            location.reload();
        }
    });
}, 2000);
