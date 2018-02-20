var BankAccount = /** @class */ (function () {
    function BankAccount(owner, balance, transactions) {
        if (transactions === void 0) { transactions = []; }
        this.owner = owner;
        this.balance = balance;
        this.transactions = transactions;
    }
    BankAccount.prototype.getCurrentBal = function () {
        this.transactions.push(this.balance);
        return this.transactions;
    };
    BankAccount.prototype.deposit = function (amount) {
        this.transactions.push("+" + amount);
        return this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.transactions.push(-amount);
        return this.balance -= amount;
    };
    return BankAccount;
}());
var navyFed = new BankAccount("David", 500);
console.log(navyFed.deposit(100));
console.log(navyFed.withdraw(20));
console.log(navyFed.getCurrentBal());
