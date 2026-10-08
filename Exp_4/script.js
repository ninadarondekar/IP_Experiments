"use strict";
// Parent Class
class BankAccount {
    accountHolder;
    balance;
    accountNumber;
    constructor(accountHolder, balance, accountNumber) {
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }
    // Public method
    showAccountDetails() {
        console.log("Account Holder : ", this.accountHolder);
        console.log("Balance        : ", this.balance);
        console.log("Account Number : ", this.accountNumber);
    }
}
// Child Class
class SavingsAccount extends BankAccount {
    constructor(accountHolder, balance, accountNumber) {
        super(accountHolder, balance, accountNumber);
    }
    showSavingsDetails() {
        console.log("\nSavings Account Details");
        console.log("Account Holder : ", this.accountHolder); // public
        console.log("Account Number : ", this.accountNumber); // protected
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
