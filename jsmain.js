var teplota = document.getElementById("teplota")
var tlac = document.getElementById("tl");

tlac.addEventListener("click", function () {

    var request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/TempestTraxx/teplomer/master/data.json');
    request.onload = function () {
        //console.log(request.responseText)
        var data = JSON.parse(request.responseText);
        //console.log(data[0]);
        vyber(data)
    };
    request.send();
});

function vyber(data) {
    var date = document.getElementById("datumy");
    var dateString = date.options[date.selectedIndex].text;
    document.getElementById("datum").innerHTML = dateString;
    var str = "";

    if (dateString == "23.05.2018") {
        str = data[0].teplota;
    }
    if (dateString == "24.05.2018") {
        str = data[1].teplota;
    }
    if (dateString == "25.05.2018") {
        str = data[2].teplota;
    }

    document.getElementById("teplota").innerHTML = str;
}