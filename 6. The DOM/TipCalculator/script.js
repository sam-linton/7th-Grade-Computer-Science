function computeTip() {
  let amount = document.getElementById("amount").value;
  console.log(amount);
  tip = 0.15 * amount;
  let tipDisplay =  document.getElementById("tip");
  tipDisplay.innerHTML = "<h1>" + tip + "</h1>";
}