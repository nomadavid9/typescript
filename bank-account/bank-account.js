var BankAccount = /** @class */ (function () {
    function BankAccount(owner, balance, transactions) {
        if (transactions === void 0) { transactions = []; }
        this.owner = owner;
        this.balance = balance;
        this.transactions = transactions;
    }
    BankAccount.prototype.getCurrentBal = function () {
        return "Current Balance: " + this.balance + ".";
    };
    BankAccount.prototype.deposit = function (amount) {
        this.transactions.push("+" + amount);
        this.balance += amount;
        return "Original Balance: " + (this.balance - amount) + ". You have made a deposit of: " + amount + ". New balance: " + this.balance + ".";
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.transactions.push(-amount);
        this.balance -= amount;
        return "Original Balance: " + (this.balance + amount) + ". You have made a withdrawl of: " + amount + ". New balance: " + this.balance + ".";
    };
    BankAccount.prototype.transactionsHistory = function () {
        return this.transactions;
    };
    return BankAccount;
}());
var navyFed = new BankAccount("David", 500);
console.log(navyFed.deposit(100));
console.log(navyFed.withdraw(20));
console.log(navyFed.transactionsHistory());
console.log(navyFed.getCurrentBal());
