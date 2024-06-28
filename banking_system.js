class BankAccount{

    constructor(saldo = 0){
        this.saldo = saldo
    }

    Deposit(amount){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(amount > 0) {
                    this.saldo += amount;
                    resolve(`Deposit berhasil! | Saldo anda : ${this.saldo}`);
                } else if (isNaN(amount)) { 
                    reject("Tolong masukan angka")
                } else {
                    reject("Tolong masukan angka positive dan tidak 0")
                }
            }, 2000)
        })
        
    }

    WithDraw(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(amount > 0 && amount <= this.saldo) {
                    this.saldo -= amount;
                    resolve(`Penarikan berhasil! | Saldo anda : ${this.saldo}`);
                } else if (amount > this.saldo){
                    reject("Saldo tidak cukup untuk penarikan");
                } else if (isNaN(amount)){
                    reject("Tolong masukan Angka");
                } else {
                    reject ("Masukan angka yang positive dan tidak 0");
                }
            }, 2000)
        })
    }
}

// Memanggil
const account = new BankAccount(0);

account.Deposit(50).then(console.log).then(() => {
    return account.WithDraw(10).then(console.log);
}).then(() => {
    return account.WithDraw(1000).then(console.log);
}).catch((err) => {
    console.error(err)
})

