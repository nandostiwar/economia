let accountBalance = 100;

function updateBalance() {
    document.getElementById("accountBalance").textContent = accountBalance;
}

function addMoney() {
    const amount = parseFloat(document.getElementById("addMoneyInput").value);
    if (!isNaN(amount) && amount > 0) {
        accountBalance += amount;
        updateBalance();
    }
}

function retireMoney() {
    const amount = parseFloat(document.getElementById("retireMoneyInput").value);
    if (!isNaN(amount) && amount > 0 && amount <= accountBalance) {
        accountBalance -= amount;
        updateBalance();
    }
}

function placeBet(percent) {
    const betAmountInput = document.getElementById("betAmount");
    const customBetAmount = parseFloat(betAmountInput.value);

    if (isNaN(customBetAmount) || customBetAmount <= 0) {
        alert("Please enter a valid bet amount.");
        return;
    }

    if (customBetAmount > accountBalance) {
        alert("Insufficient balance to place this bet.");
        return;
    }

    const betAmount = customBetAmount;
    const randomNumber = Math.floor(Math.random() * 1001);

    if (randomNumber <= percent * 10) {
        const winnings = betAmount * (percent === 25 ? 3 : percent === 50 ? 2 : 1.5);
        accountBalance += winnings;
        updateBalance();
        document.getElementById("result").textContent = `You won $${winnings}! (Machine selected ${randomNumber})`;
    } else {
        accountBalance -= betAmount;
        updateBalance();
        document.getElementById("result").textContent = `You lost $${betAmount}. (Machine selected ${randomNumber})`;
    }

    // Clear the bet amount input field
    betAmountInput.value = "";
}

updateBalance(); // Initialize the balance display