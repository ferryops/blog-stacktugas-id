---
title: "Pseudocode, Flowchart dan Bahasa Alamiah Studi Kasus Biaya Produksi"
date: "2024-02-24"
excerpt: "Tugas membuat pseudocode, flowchart dan bahasa alamiah stdudi kasus menghitung biaya produksi"
cover_image: "https://i.ibb.co/zSHYBhW/biaya-produksi-drawio.png"
---


1.  Membuat Pseudocode, Flowchart, dan bahasa ilmiah tentang perhitungan suatu data (minimal 2 operasi perhitungan)
2.  Minimal Menggunakan 2 decision symbol

Evaluasi

Dalam laporan ini saya memilih studi kasus perhitungan biaya produksi, berikut pseudocode, flowchart dan bahasa ilmiahnya.

## 1.1 Pseudocode

Berikut ini pseudocode untuk menghitung biaya produksi

DEKLARASI

jumlah_produk: integer

biaya_bahan_baku: integer

biaya_tenaga_kerja: integer

biaya_overhead: integer

jumlah_hari: integer

DEFINISI

Read(jumlah_produk, biaya_bahan_baku, biaya_tenaga_kerja, biaya_overhead)

Read(rentang_waktu)

If rentang_waktu Then

Read(jumlah_hari)

rata_jumlah_produk = jumlah_produk / jumlah_hari

rata_biaya_bahan_baku = biaya_bahan_baku / jumlah_hari

rata_biaya_tenaga_kerja = biaya_tenaga_kerja / jumlah_hari

rata_biaya_overhead = biaya_overhead / jumlah_hari

Else

rata_jumlah_produk = jumlah_produk / 30

rata_biaya_bahan_baku = biaya_bahan_baku / 30

rata_biaya_tenaga_kerja = biaya_tenaga_kerja / 30

rata_biaya_overhead = biaya_overhead / 30

biaya_produksi = rata_jumlah_produk * (rata_biaya_bahan_baku + rata_biaya_tenaga_kerja + rata_biaya_overhead)

Print(biaya_produksi)

Read(ulangi)

If (ulangi = true) Then

repeat

Else

stop

## 1.2 Flowchart

![Flowchart menghitung biaya produksi](https://i.ibb.co/zSHYBhW/biaya-produksi-drawio.png)

## 1.3 Bahasa Alamiah

Berikut bahasa alamiah menghitung biaya produksi produk:

1.  Mulai
    
2.  Input jumlah_produk, biaya_bahan_baku, biaya_tenaga_kerja, biaya_overhead
    
3.  Input rentang waktu
    
4.  Jika Ya, maka input rentang waktu
    
5.  Jika Tidak, maka nilai default adalah 30 hari
    
6.  Menghitung jumlah biaya produksi dengan rumus
    
7.  rata_jumlah_produk = jumlah_produk / jumlah_hari
    
8.  rata_biaya_bahan_baku = biaya_bahan_baku / jumlah_hari
    
9.  rata_biaya_tenaga_kerja = biaya_tenaga_kerja / jumlah_hari
    
10.  rata_biaya_overhead = biaya_overhead / jumlah_hari
    
11.  rata_jumlah_produk * (rata_biaya_bahan_baku + rata_biaya_tenaga_kerja + rata_biaya_overhead)
    
12.  Menampilkan hasil biaya produksi
    
13.  Ingin mengulang perhitungan biaya produksi?
    
14.  Jika ya, maka kembali ke input data (2)
    
15.  Jika tidak, maka ke langkah 6
    
16.  Selesai
    

Referensi:

-   [https://www.wallstreetmojo.com/production-cost-formula/](https://www.wallstreetmojo.com/production-cost-formula/)
    
-   [https://stackoverflow.com/questions/66717567/how-can-i-write-a-pseudocode-for-this-scenario](https://stackoverflow.com/questions/66717567/how-can-i-write-a-pseudocode-for-this-scenario)
    
-   [https://www.code4example.com/pseudocode/pseudocode-examples/](https://www.code4example.com/pseudocode/pseudocode-examples/)
    
-   [https://www.codecademy.com/resources/docs/general/pseudocode](https://www.codecademy.com/resources/docs/general/pseudocode)
    
-   [https://cs50.harvard.edu/ap/2020/assets/pdfs/pseudocode.pdf](https://cs50.harvard.edu/ap/2020/assets/pdfs/pseudocode.pdf)
    
-   [https://mamikos.com/info/simbol-flowchart-beserta-fungsinya-pljr/](https://mamikos.com/info/simbol-flowchart-beserta-fungsinya-pljr/)
    
-   [https://jawabanapapun.com/apa-itu-predefined-process/](https://jawabanapapun.com/apa-itu-predefined-process/)