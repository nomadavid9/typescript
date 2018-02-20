class BankAccount {
    owner: string;
    balance: number;
    transactions: any[];
    
    constructor(owner, balance, transactions = []){
        this.owner = owner
        this.balance = balance
        this.transactions = transactions
    }
    
    getCurrentBal() :number {
        this.transactions.push("Current Bal: " + this.balance);
        return this.balance
    }
    
    deposit(amount: number) :number {
        this.transactions.push("+" + amount)
        return this.balance += amount;
    }
    
    withdraw(amount: number) :string {
        this.transactions.push(-amount)
        return "Original Balance: " + this.balance + ". You have made a withdrawel of: " + this.balance -= amount + ". New balance: " + this.balance;
    }
    
    transactionsHistory() :any[] {
        return this.transactions
    }
}

let navyFed = new BankAccount("David", 500)
console.log(navyFed.deposit(100));
console.log(navyFed.withdraw(20));
console.log(navyFed.getCurrentBal());
console.log(navyFed.transactionsHistory());