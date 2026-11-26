//Kartu Perkenalan (Fungsi Void)
function perkenalan(nama, kelas, hobi) {
  console.log('===============================')
  console.log('Nama  : ' + nama)
  console.log('Kelas : ' + kelas)
  console.log('Hobi  : ' + hobi)
  console.log('===============================')
}

perkenalan('Egar','X RPL 2','Menonton Film')
perkenalan('Aaron','X RPL 2', 'Membaca Buku')
perkenalan('Hafidz ','X RPL 2', 'Bermain Game')


//Persegi Panjang (Fungsi Non-Void)
function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar
}

function kelilingPersegiPanjang(panjang, lebar) {
  return 2 * (panjang + lebar)
}

let luas1= luasPersegiPanjang(10, 4)
let keliling1= kelilingPersegiPanjang(10, 4)
console.log('Persegi Panjang dengan panjang 10 dan lebar 4, memiliki:')
console.log('Luas = ' + luas1)
console.log('Keliling = ' + keliling1)

let luas2= luasPersegiPanjang(8, 5)
let keliling2= kelilingPersegiPanjang(8, 5)
console.log('Persegi Panjang dengan panjang 8 dan lebar 5, memiliki:')
console.log('Luas = ' + luas2)
console.log('Keliling = ' + keliling2)


//Rapor Mini (Gabungan Void dan Non-Void)
function hitungRataRata(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}
function tentukanPredikat(rata) {
    if (rata >= 85) {
    return 'A'
  } else if (rata >= 75) {
    return 'B'
  } else if (rata >= 60) {
    return 'C'
  } else {
    return 'D'
  }
}
function cetakRapor(nama, n1, n2, n3) {
  let rataRata = hitungRataRata(n1, n2, n3)
  let predikat = tentukanPredikat(rataRata)

  console.log('Nama      : ' + nama);
  console.log('Rata-rata : ' + rataRata.toFixed(2))
  console.log('Predikat  : ' + predikat)
  console.log('-----------------------')
}
cetakRapor('Budi', 80, 85, 82);  
cetakRapor('Citra', 90, 88, 95);  
cetakRapor('Doni', 65, 70, 58);   