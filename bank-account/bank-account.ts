class BankAccount {
    owner: string;
    balance: number;
    transactions: any[];
    
    constructor(owner, balance, transactions = []){
        this.owner = owner;
        this.balance = balance;
        this.transactions = transactions;
    }
    
    getCurrentBal() :string {
        return `Current Balance: $${this.balance}.`;
    }
    
    deposit(amount: number) :string {
        this.transactions.push(` + $${amount} `);
        this.balance += amount;
        return `Original Balance: $${(this.balance - amount)}.\tYou have made a deposit of:\t$${amount}.\tNew balance: $${this.balance}.`;
    }
    
    withdraw(amount: number) :string {
        this.transactions.push(` - $${amount} `);
        this.balance -= amount;
        return `Original Balance: $${(this.balance + amount)}.\tYou have made a withdrawl of:\t$${amount}.\tNew balance: $${this.balance}.`;
    }
    
    transactionsHistory() :string {
        return `Transaction History: [${this.transactions}]`;
    }
}

let navyFed = new BankAccount("David", 500);
console.log(navyFed.deposit(100));
console.log(navyFed.withdraw(20));
console.log(navyFed.transactionsHistory());
console.log(navyFed.getCurrentBal());