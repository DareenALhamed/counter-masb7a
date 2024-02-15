let count = [0,0,0,0];
let counter = document.querySelectorAll(".counter");
let reset = document.querySelectorAll(".reset");


for (let i = 0; i < counter.length; i++) {
counter[i].addEventListener("click", function(){
  count[i]++;
  counter[i].innerHTML = `${count[i]}`;
  
});
}
for (let i = 0; i < reset.length; i++) {
reset[i].addEventListener("click", function(){
  count[i] = 0;
  counter[i].innerHTML = count[i];
  counter[i]= "counter";

});
}

