class BankAccount {
    owner: string;
    balance: number;
    transactions: any[];
    
    constructor(owner, balance, transactions = []){
        this.owner = owner
        this.balance = balance
        this.transactions = transactions
    }
    
    getCurrentBal() :any[] {
        this.transactions.push("current bal: " + this.balance);
        return this.transactions
    }
    
    deposit(amount: number) :number {
        this.transactions.push("+" + amount)
        return this.balance += amount;
    }
    
    withdraw(amount: number) :number {
        this.transactions.push(-amount)
        return this.balance -= amount;
    }
}

let navyFed = new BankAccount("David", 500)
console.log(navyFed.deposit(100));
console.log(navyFed.withdraw(20));
console.log(navyFed.getCurrentBal());