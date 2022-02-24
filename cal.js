var button = document.querySelectorAll("button");
var src = document.querySelector("#output")
var value=[];
button.forEach(function(e){
    e.addEventListener("click",function(){
        if(!e.className.match('btn')){
            value.push(e.value);
            src.innerText =value.join('');
            console.log(value);
        }
        if(e.id.match('a/c')){
            value =[];
            src.innerText=value;
            console.log(value);
        }
        if(e.id.match('del')){
            value.pop();
            src.innerText=value;
            console.log(value);
        }
        if(e.id.match('equal')){
            var result= eval(value.join(''));
            src.innerText=result;
            value =[];
        }
    })
});