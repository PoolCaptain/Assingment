var obj1 = document.getElementById("loaderID");

var obj2 = Document.getElementById("buttonID");

function myfunction(){
    console.log(obj2);
    if (obj2 = "undefined"){
        obj1.style.display =  "block";
        const myTimeout = setTimeout(function(){obj1.style.display="none"}, 6000);
    
    }
    

}

