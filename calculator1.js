let str="";
let result="";
function calculate(val){
let element=document.getElementById("display");
if(val==="="){

  result=""+eval(str);
 element.innerText=result;
     str=result;
}
 else if(val==='AC'){

  str="";
  element.innerHTML="0.0";
}

else if(val==="DEL"){

  str=str.substring(0,str.length-1);

  element.innerText=str;
  str.length--;
}

else{
if(["*","/","+","-","%","."].includes(val)){
    if(["*","/","+","-","%","."].includes(str.charAt(str.length-1))){


    }
else{
  str+=val;
  element.innerText=str;
}}

  else{
str+=val;
element.innerText=result;
element.innerText=str;
}
}
document.getElementsByClassName("button").style.backgroundColor="cyan";
}
