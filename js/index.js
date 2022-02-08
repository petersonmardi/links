var el = document.getElementsByClassName("usdt");
var numEl = el.length;
var show = document.getElementById("show_usdt");
var copied = document.getElementById('copied');


function showUSDT() {
  show.setAttribute("class", "show");
}
for (var i=0; i < numEl; i++) {
  el[i].addEventListener("click", showUSDT, false);
}

function remove() {
  show.setAttribute("class", "removeEl");
  copied.setAttribute("class", "address");
}
for (var i=0; i < numEl; i++) {
  el[i].addEventListener("dblclick", remove, false);
}

var copyText = document.querySelector(".wrap");
copyText.querySelector("button").addEventListener("click", function () {
  var input = copyText.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  // copyText.classList.add("active");
  copied.setAttribute("class", "addressCopied");
  window.getSelection().removeAllRanges();
  // setTimeout(function () {
  //   copyText.classList.remove("active");
  // }, 2500);
});
