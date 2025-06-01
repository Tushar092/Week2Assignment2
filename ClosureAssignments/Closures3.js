function createBankAccount (amount) {
    let bankAmount = amount;
    return {
        deposit(amt) {
            bankAmount += amt;
            return bankAmount;
        },
        withdraw(amt) {
            bankAmount += amt;
            return bankAmount;
        },
        getBalance() {
            return bankAmount;
        }
    };
}

const account = createBankAccount(100);

console.log(account.deposit(50));

console.log(account.withdraw(30));

console.log(account.getBalance());