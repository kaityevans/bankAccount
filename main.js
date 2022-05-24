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

    describe("Bunch of transactions and tests", function ()){
      let bigAccount = new bankAccount("11223344", "Maggie Smith");
      it('test account created correctly', function () {
        assert.equal("11223344", bigAccount.accountNumber);
        assert.equal("Maggie Smith", bigAccount.owner);
        assert.equal(bigAccount.balance(), 0);
      })

      it('test deposits', function () {
        bigAccount.deposit(30); //30
        assert.equal('Deposit', bigAccount.transactions[0].payee);
        assert.equal(30, bigAccount.transactions[0].amount);

        bigAccount.deposit(20); //50
        bigAccount.deposit(-3); //50
        bigAccount.deposit(34.25); //84.25
        bigAccount.deposit(10000.45); //10084.70
        assert.equals(10084.70, bigAccount.balance());
        bigAccount.charge("Clearout", 10084.70);
        assert.equal(0, bigAccount.balance());
      });


      it('test charges', function () {
        bigAccount.deposit(1000);
        bigAccount.charge("Target", 40); //9960
        bigAccount.charge("Freebirds", 10.32); //9949.68
        bigAccount.charge("Texaco", 40); //9909.68
        bigAccount.deposit("Bob;s", -20); //9929.68
        assert.equal(9929.68, bigAccount.balance());
        assert.equal(10, bigAccount.transactions.length);
      });

      it('test overdraft', function () {
        bigAccount.deposit(1000);
        bigAccount.charge("Target", 400000); //9960
        assert.equal(10, bigAccount.transactions.length);
        assert.equal(9929.68, bigAccount.balance());
      });

      it("test a zero deposit", function () {
        bigAccount.deposit(0);
        assert.equal(10, bigAccount.transactions.length);
        assert.equal(9929.68, bigAccount.balance());
      });
    };
  })
