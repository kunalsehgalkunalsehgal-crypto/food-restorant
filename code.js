let p=document.getElementById("add-num-rand")
let y= Math.random()
function random(id){
  let target = Math.floor(Math.random() * 500);
  let count = 0;

  let interval = setInterval(() => {
    count++;
    document.getElementById(id).innerText = count;
    if (count === target) clearInterval(interval);
  }, 1);}
random("counter1")
random("counter2")
random("counter3")
random("counter4")