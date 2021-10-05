document.getElementById("b1").addEventListener("click", onclick)
document.addEventListener("keydown", onkeydown);

function onkeydown(e){
   if(e.key === "Enter"){
      onclick();
   }
}

function onclick(){
   var a = Number(document.getElementById("i1").value);
   var b = Number(document.getElementById("i2").value);
   var c = Number(document.getElementById("i3").value);
   // compare
   var max = a;
   if(b > max)
     max = b;
   if(c > max)
     max = c;
   document.getElementById("p1").innerHTML = max;
}