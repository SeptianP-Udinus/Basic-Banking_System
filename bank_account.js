let saldo = 0;

function tambahSaldo(){
    let total = parseInt(window.prompt("Masukan saldo :"));
    
    if(!isNaN(total) && total > 0) {
        alert("Saldo berhasil ditambahkan");
        saldo += total;
        alert("Jumlah saldo anda saat ini " + saldo);
    } 
    else { 
        alert("Tolong masukan angka yang benar");
    }  
}

function kurangiSaldo(){
    let total = parseInt(window.prompt("Masukan saldo :"));
    
    if(!isNaN(total) && total > 0) {
        if(saldo >= total) {
            saldo -= total;
            alert("Saldo berhasil dikurangi");
            alert("Saldo anda sekarang : " + saldo);
        } else {
            alert("pengurangan saldo tidak dapat dilakukan, karena saldo lebih kecil")
        }
    } else { 
        alert("Tolong masukan angka yang benar");
    }
} 
