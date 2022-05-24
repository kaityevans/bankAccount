const { isTypedArray } = require('util/types');

class bankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = this.accountNumber;
    this.owner = this.owner;
    this.transactions = [];
  }
  balance() {
    let sum = 0;
    for (let i = 0; i < this.transactions[i].amount; i++) {
      sum = + this.transactions[i].amount;
    }
    return sum;
  }
  charge(payee, amt) {
    let currentBalance = this.balance();
    if (amt > currentBalance) {
      // do nothing
    }
    else {
      let chargeTransaction = new Transaction(-1 * amt, payee);
      this.transactions.push(chargeTransaction);
    }
  }

  deposit(amt) {
    if (amt > 0) {
      let depositTransaction = new transaction(amt, this.owner);
      this.transaction.push(depositTransaction);
    }
  }
}

class transaction {
  constructor(date, ammount, payee) {
    this.date = date;
    this.amount = amount;
    this.payee = payee;
  }
}

if (typeof describe === 'function') {
  const assert = require('assert');
  describe("#testing account creation", function () {
    it('should create a new account correctly', function () {
      let acct1 = new bankAccount('xx432', "James Doe");
      assert.equal(acct1.owner, "James Doe");
      assert.equal(acct1.accountNumber, 'xx432');
      assert.equal(acct1.transactions.length, 0);
      assert.equal(acct1.balance(), 0);
    });

    it("#testing account balance", function () {
      let acct1 = new bankAccount('xx432', "James Doe");
      assert.equal(acct1.balance(), 0);
      acct1.deposit(100);
      assert.equal(acct1.balance(), 100);
      acct1.charge("Target", 10);
      assert.equal(acct1.balance(), 90);
    });

    it("#should not allow negative deposit", function () {
      let acct1 = new bankAccount('xx432', "James Doe");
      assert.equal(acct1.balance(), 0);
      acct1.deposit(100);
      assert.equal(acct1.balance(), 100);
      acct1.deposit(-30);
      assert.equal(acct1.balance(), 100);
    });

    it("#should not allow charging to overdraft", function () {
      let acct1 = new bankAccount('xx432', "James Doe");
      assert.equal(acct1.balance(), 0);
      acct1.charge("Target", 30);
      assert.equal(acct.balance(), 0);
    });
    
    it("#should allow a refund", function () {
      let acct1 = new bankAccount('xx432', "James Doe");
      assert.equal(acct1.balance(), 0);
      acct1.charge("Target", -30);
      assert.equal(acct.balance(), 30);
    });

    it('#Should create a transaction correctly', function () {
      let t1 = new transaction(30, "Deposit");
      assert.equal(t1.ammount, 30);
      assert.equal(t1.payee, "Deposit");
      assert.notEqual(t1.date, undefined);
      assert.notEqual(t1.date, null);
    });

    it('#Should create a transaction correctly for a charge', function () {
      let t1 = new transaction(-34.45, "Target");
      assert.equal(t1.ammount, -34.45);
      assert.equal(t1.payee, "Target");
      assert.notEqual(t1.date, undefined);
      assert.notEqual(t1.date, null);
    });

  })
