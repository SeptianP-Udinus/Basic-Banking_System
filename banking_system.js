// Class Bank Account
class BankAccount{

    constructor(saldo = 0){
        this.saldo = saldo
    }

    // Method Deposit
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

    // Method WithDraw
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

// Memanggil object
const account = new BankAccount();

/** Static Try 
account.Deposit(50).then(console.log).then(() => {
    return account.WithDraw(10).then(console.log);
}).then(() => {
    return account.WithDraw(1000).then(console.log);
}).catch((err) => {
    console.error(err)
})
*/

// Menampilkan di Windows Prompt | Deposit
document.getElementById('saldo-awal').textContent = account.saldo;
document.getElementById('TambahSaldoBtn').addEventListener('click', () => {
    // Input
    let amount = parseInt(window.prompt("Masukan jumlah saldo yang ditambahkan:"));
    account.Deposit(amount).then((message) => {
        // Message
        document.getElementById('Pesan').textContent = message;
        document.getElementById('saldo-awal').textContent = account.saldo;
    }).catch((error) => { // Error Handling
        document.getElementById("Pesan").textContent = error;
    });
});

// Menampilkan di Windows Prompt | Withdraw
document.getElementById('KurangiSaldoBtn').addEventListener('click', () => {
    // Input
    let amount = parseInt(window.prompt("Masukkan jumlah saldo yang ingin dikurangi:"));
    account.WithDraw(amount).then((message) => {
        // Message
        document.getElementById('Pesan').textContent = message;
        document.getElementById('saldo-awal').textContent = account.saldo;
    }).catch((error) => { // Error Handling
        document.getElementById('Pesan').textContent = error;
    });
});

