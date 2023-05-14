var h1 = document.createElement("h1");
h1.innerHTML="Covid19 Tracker";
h1.style.textAlign="center";

document.body.append(h1);
var br=document.createElement("br")
var div = document.createElement("div");
div.style.textAlign="center";
var input= document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","Enter the Country")
input.setAttribute("id","country");


var button = document.createElement("button")
button.innerHTML="Search";
button.classList.add("btn","btn-primary");
button.style.marginTop="10px";
button.addEventListener("click",data);

div.append(input,br,button)
document.body.append(div)

async function data(){
    let d1 = document.getElementById("country").value;
    let url = `https://api.covid19api.com/country/${d1}`;
    let d2 =await fetch(url);
    let d3 =await d2.json();
    let i=d3.length-1
    let result = d3[i].Active;

    console.log(result)
    foo(result,d1);
}

function foo(ele,d1){
      
        
       var div2 = document.createElement("div");
           div2.style.marginTop="20px"
           div2 .innerHTML+=`
            <div class="col-md-4">
            <div class="card border-primary mb-3" style="max-width: 18rem;">
           
            <div class="card-header">Active Cases in ${d1} is : ${ele}</div>
           
          </div>
          </div>
            `
               document.body.append(div2);
    
        
    }