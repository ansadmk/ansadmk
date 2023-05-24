

const fetchsend=function(str){
     
     fetch (`../pages/${str}.html`)
    .then(x => x.text())
    .then(y => document.getElementById("container").innerHTML = y);
}