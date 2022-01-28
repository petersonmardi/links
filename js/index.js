var el = document.getElementsByClassName("usdt");
var numEl = el.length;
var usdt_address = "0x0aA26D5c29e36547589033302D1709d624B8a7Da";
var show = document.getElementById("show_usdt");


function showUSDT() {
  show.setAttribute("class", "show");
  show.innerHTML = "<p>" + usdt_address + "</p>";
}
for (var i=0; i < numEl; i++) {
  el[i].addEventListener("click", showUSDT, false);
}

function remove() {
  show.setAttribute("class", "removeEl");
}
for (var i=0; i < numEl; i++) {
  el[i].addEventListener("dblclick", remove, false);
}
