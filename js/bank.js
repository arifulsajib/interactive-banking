// initialize
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const despositElement = document.getElementById("deposit-amount");
const withdrawElement = document.getElementById("withdraw-amount");
const balanceElement = document.getElementById("total-balance");
const depositInput = document.getElementById("deposit-input");
const withdrawInput = document.getElementById("withdraw-input");

// button enable and disable
depositInput.addEventListener("keyup", function () {
    if (depositInput.value == "") {
        depositBtn.disabled = true;
        depositBtn.classList.replace("bg-blue-700", "bg-blue-400");
    } else {
        depositBtn.disabled = false;
        depositBtn.classList.replace("bg-blue-400", "bg-blue-700");
    }
})

withdrawInput.addEventListener("keyup", function () {
    if (withdrawInput.value == "") {
        withdrawBtn.disabled = true;
        withdrawBtn.classList.replace("bg-blue-700", "bg-blue-400");
    } else {
        withdrawBtn.disabled = false;
        withdrawBtn.classList.replace("bg-blue-400", "bg-blue-700");
    }
})

// deposit
depositBtn.addEventListener("click", function () {
    const depositTotal = parseFloat(despositElement.innerText);
    const newDeposit = parseFloat(depositInput.value);
    const balanceTotal = parseFloat(balanceElement.innerText);

    const newDepositTotal = depositTotal + newDeposit;
    const newBalanceTotal = newDeposit + balanceTotal;

    despositElement.innerText = newDepositTotal;
    balanceElement.innerText = newBalanceTotal;

    depositInput.value = "";
    depositBtn.disabled = true;
    depositBtn.classList.replace("bg-blue-700", "bg-blue-400");
});

// withdraw 
withdrawBtn.addEventListener("click", function () {
    const withdrawTotal = parseFloat(withdrawElement.innerText);
    const newWithdraw = parseFloat(withdrawInput.value);
    const balanceTotal = parseFloat(balanceElement.innerText);

    if (balanceTotal < newWithdraw) {
        alert("You dont have Enough balance to withdraw!");
    } else {
        const newWithdrawTotal = withdrawTotal + newWithdraw;
        const newBalanceTotal = balanceTotal - newWithdraw;

        withdrawElement.innerText = newWithdrawTotal;
        balanceElement.innerText = newBalanceTotal;

        withdrawInput.value = "";
        withdrawBtn.disabled = true;
        withdrawBtn.classList.replace("bg-blue-700", "bg-blue-400");
    }
});

// logout-btn
document.getElementById("logout-btn").addEventListener("click", function () {
    window.location.href = "index.html";
})