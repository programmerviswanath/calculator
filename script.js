let res = document.getElementById("display");
function apnd(num){
res.value += num;
}

function Res(){
try{
res.value = eval(res.value);
}
catch(error)
{
alert("Invalid");
}
}

function Clr(){
res.value = "";
}

function Del(){
res.value = res.value.slice(0,-1);
}