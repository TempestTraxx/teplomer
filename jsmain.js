
var tlac = document.getElementById("tl");

tlac.addEventListener("click", function () {

    var request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/TempestTraxx/teplomer/master/data.json');
    request.onload = function () {
        //console.log(request.responseText)
        var data = JSON.parse(request.responseText);
        console.log(JSON.parse(data[0]));
    };
    request.send();
});


function vyber() {
    var date = document.getElementById("datumy");
    var dateString = date.options[date.selectedIndex].text;
    document.getElementById("datum").innerHTML = dateString;}
