// Parent Class
class BankAccount {
    public accountHolder: string;
    private balance: number;
    protected accountNumber: number;

    constructor(accountHolder: string, balance: number, accountNumber: number) {
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    // Public method
    public showAccountDetails(): void {
        console.log("Account Holder : ", this.accountHolder);
        console.log("Balance        : ", this.balance);
        console.log("Account Number : ", this.accountNumber);
    }
}

// Child Class
class SavingsAccount extends BankAccount {

    constructor(accountHolder: string, balance: number, accountNumber: number) {
        super(accountHolder, balance, accountNumber);
    }

    public showSavingsDetails(): void {
        console.log("\nSavings Account Details");
        console.log("Account Holder : ", this.accountHolder);     // public
        console.log("Account Number : ", this.accountNumber);     // protected

        // console.log(this.balance); // Error: private member
    }
}

// Object Creation
let customer = new SavingsAccount("Ninad", 50000, 123456789);

customer.showAccountDetails();
customer.showSavingsDetails();

console.log("\nAccessing Public Member:");
console.log(customer.accountHolder);

// console.log(customer.accountNumber); // Error (protected)
// console.log(customer.balance);       // Error (private)


