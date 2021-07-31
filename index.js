console.log("hello i am working");


function scrollWin1() {
    window.scrollTo(0,0);
  }

function scrollWin2() {
  window.scrollTo(0,710);
}

function scrollWin3() {
    window.scrollTo(0,1300);
  }

function scrollWin4() {
    window.scrollTo(0,2000);
  }


// to iterate the text
  function timedText() {
    var x = document.getElementById("typing");
    setTimeout(function(){ x.innerHTML = "php developer"; }, 2000);
    setTimeout(function(){ x.innerHTML = "software developer" }, 4000);
    setTimeout(function(){ x.innerHTML = "fullstack developer" }, 6000); 
    setTimeout(function(){ x.innerHTML = "react developer" }, 8000); 
    setTimeout(function(){ x.innerHTML = "web developer" }, 10000); 
  }
  
  timedText();
  setInterval(timedText, 10000);

console.log("hello world");
 


function timedText2() {
  var y = document.getElementById("typing2");
  setTimeout(function(){ y.innerHTML = "php developer"; }, 2000);
  setTimeout(function(){ y.innerHTML = "software developer" }, 4000);
  setTimeout(function(){ y.innerHTML = "fullstack developer" }, 6000); 
  setTimeout(function(){ y.innerHTML = "react developer" }, 8000); 
  setTimeout(function(){ y.innerHTML = "web developer" }, 10000); 
}

timedText2();
setInterval(timedText2, 10000);

console.log("hello world");





