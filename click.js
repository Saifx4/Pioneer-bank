
//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
   const loginArea= document.getElementById("login-area");
   loginArea.style.display="none";

   const transactionArea=document.getElementById("transaction-area");
   transactionArea.style.display="block";
});


//deposit button event handler

const depositButton = document.getElementById("addDeposit");
depositButton.addEventListener('click',function (){
  
    const depositNumber = getInputNumber("depositAmount");

     //main code
    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText=totalDeposit;

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance= depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText=totalBalance;

    //shortcut
     updateSpanText("currentDeposit",depositNumber);
     updateSpanText("currentBalance",depositNumber);

    document.getElementById("depositAmount").value= "";

    

})

//withdraw button event handler

const addWithdraw = document.getElementById("addWithdraw");
addWithdraw.addEventListener('click',function () {
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber );
    updateSpanText("currentBalance", -1* withdrawNumber );

    document.getElementById("withdrawAmount").value= "";


})

//shortcut of Input text

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}




//shortcut of innerText
function updateSpanText(id,addedNumber) {
     
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = addedNumber + currentNumber;
    document.getElementById(id).innerText= total;

    
}



