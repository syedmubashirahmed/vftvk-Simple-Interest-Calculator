function updateRate() //This function will update the slider value with id rate_val to slider value
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
//Function compute calculate the simple interest using formula ptr/100
//and then outputs the total amound recieved at end of the year
//It also calculate in which the amount will be recieved
function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount=document.getElementById("principal").value;

    //If block to validate the principal amount
    if(principal==0|| isNaN(principal)){ 
        alert("Please enter a positive number");
        document.getElementById("principal").focus();//set the focal to principal-input
        return;

       }
    //This the final output text generate using back-ticks
    document.getElementById("result").innerHTML=`If you deposit 
    <span style="color:red";> ${principal}<span/> 
     <span style="color:black";>,<br>at an interest rate of </span>
     <span style="color:red";>${rate} %.</span>
     <br><span style="color:black";>You will recieve an amount of </span>
     <span style="color:red";>${interest}</span><span style="color:black";>
     ,<br>in the year</span><span style="color:red";> ${year}</span>`;
    }


