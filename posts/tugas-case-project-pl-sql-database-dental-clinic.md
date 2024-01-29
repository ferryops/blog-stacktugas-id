---
title: "Tugas Case Project PL SQL Database Dental Clinic"
date: "2024-01-29"
excerpt: "Buatlah Bisnis proses sesuai dengan kasus diatas ! (Menggunakan flowchart / rich picture/activity diagram)"
cover_image: ""
---

UAS CASE PROJECT PL SQL

**Tujuan Case Project:**

- Peserta mampu memetakan business proses sesuai dengan case study

- Peserta mampu memetakan ER diagram lalu menjadi tabel-tabel dengan benar

- Peserta dapat membuat database dengan menggunakan aplikasi database

## **Materi Case Project**

ER diagram atau ERD adalah suatu model untuk menjelaskan hubungan antar data dalam basis data berdasarkan objek-objek dasar data yang mempunyai hubungan antar relasi. ER diagram digunakan untuk memodelkan struktur data dan hubungan antar data, untuk menggambarkannya digunakan beberapa notasi dan simbol seperti yang telah dipelajari dalam modul sebelumnya. ER diagram dapat ditransformasikan atau dipetakan ke dalam beberapa bentuk seperti tabel, skema relasi, dan diagram relasi antar tabel.

Pemetaan ERD ke tabel berarti memasukkan entity-entity maupun hubungannya atau kardinalitasnya ke dalam sebuah tabel yang saling berhubungan. Tabel ini sama artinya dengan entitas dari model data pada level konseptual. Komponen ERD (Entity Relationship Diagram) e / dipetakan dalam bentuk tabel yang merupakan komponen utama pembentukan basis data. Pada bagian ini anda diminta untuk :

## **Study Kasus**

Shining Dental Clinic merupakan jaringan klinik dokter gigi yang telah berdiri semenjak 2008 dan memiliki 18 klinik di area Jabodetabek. Rata – rata setiap klinik dapat menerima lebih dari 20 pasien setiap harinya. Dikarenakan kemajuan teknologi dan dorongan pemilik untuk membuka lebih banyak klinik maka manajemen memutuskan untuk membangun sistem untuk mencatat transaksi yang terjadi sehingga dapat memudahkan proses analisa performa seluruh klinik secara real-time. Manajemen Shining Dental Clinic juga berharap dengan sistem yang baru proses kontrol stok obat dapat menjadi lebih baik lagi termasuk pelacakan pada obat-obat yang sudah maupun mendekati kadaluarsa. Sistem juga harus dapat mencatat identitas pasien, dokter, dan staff yang terlibat dalam transaksi untuk keperluan analisa dan _forecasting_.

Gambar di bawah adalah invoice manual yang dicetak setiap harinya sebagai bukti penjualan kepada pasien.

### 1. **Buatlah Bisnis proses sesuai dengan kasus diatas ! (Menggunakan flowchart / rich picture/activity diagram)**

![](https://lh4.googleusercontent.com/HeOexwzMYxEFWue5GK_dxzNKr2eaoUsbLAPZLSnT3PKwGb5fLaAiVgLp_TFcVWoeJ8JtyjTetw6AmNCRdf8HzGZBO4kB3f7_HosR4LnhJlXiasBS8skHRHdVF5FhRsak8sMxkg4xh0Rz1ctFPco-ezd_5e2boGdXyy1VnBNcFnu_pBPALkl1BU7-12vk5lpD)

Alur Bisnis Proses

### 2. **Buatlah tabel berdasarkan kasus diatas tentukan pula tipe data dan size/lebar dari masing-masing field !**

![](https://lh4.googleusercontent.com/LUeJN21kx3Cxx7mxBwRHAfRvZwqzICVYBDqqNm9SXbS9O21Lkw7GCeWyBatkFarbTvJOYrYHughMBvuvPfEHnJOBKxmB3Al-SvUtHXDzaBKSKpKEX2aJODAvnevXaC_8t03eKBXuLA1Hw4KywvEYcxavo2acvyvu0dYuHcBACn_-8rwGDzBepg9e8bwKgGyI)

### 3. **Buatlah database menggunakan aplikasi database (mysql) berdasarkan tabel yang telah anda buat!**

![](https://lh5.googleusercontent.com/XfJwRygbCze5gzDp5sY-xobBTmJEhZDyYX74DSw_fMNzUD9blCFoQndnKhFr_7d1MqRunkYDPhN0hu7PqXmoTRDlmyi6i3ZOoX_0TfXH_VZtphvIJ0cKaiBGFLaeEjoLg0AbMIuAPcvJ6NwKcMoqohAvAPfj1Ccd2a5jNWIcL9JntTbTCpWXliTCZUFmO0z_)

Menampilkan Tabel menggunakan query SQL

4.  **Buat Video untuk menjelaskan point 1, 2 dan 3**

**Link Video**

## **QUERY**

Buatlah Query untuk menampilkan laporan :

1. Daftar pasien, dokter, obat-obatan dan jenis perawatan

2. Daftar perawatan yang paling banyak diminati

3. Daftar obat dan stok obat beserta tanggal kadaluarsanya yang diurutkan berdasarkan tanggal kadaluarsa terdekat

4. Jumlah pendapatan dokter berdasarkan periode tertentu (hari, minggu, bulan)

5. Jumlah pendapatan klinik berdasarkan periode tertentu (hari, minggu, bulan)

6. Jumlah penjualan obat berdasarkan periode tertentu (hari, minggu, bulan)

**KETENTUAN PENGERJAAN SOAL :**

1. Tulis jawaban query untuk no. b pada lembar jawaban beserta screenshot hasil running query

2. Rekam pembuatan jawaban bagian b dengan menggunakan zoom atau aplikasi lainnya. Pada rekaman harus terlihat video mahasiswa.

3. Simpan rekaman tersebut dalam folder, dan buka akses dari folder tersebut agar dapat dilihat oleh yang mempunyai link

4. Tulis link dari folder tersebut didalam lembar jawaban

5. Beri Nama Dan Nim Pada Lembar Jawaban

6. Simpan Nama File Dengan Nama : UAS_PBDSabtu_Nama

**————-selamat bekerja secara mandiri semoga sukses———–**

**Query SQL**

### 1. Daftar pasien, dokter, obat-obatan dan jenis perawatan

Daftar pasien

![](https://lh5.googleusercontent.com/KFF-cwbd7DbRdb9xhoXVjNhF3sfgJRk3XVRg_SAIo7ybxQznTCqQg1FLLdzSu8E6uC9mYBGpPTxkoAmADT7Kv_IgyL-jj_LofQ7OVBr0CDK73Rz0ETLdtdzh_XZ3-q6oQQYutAEBqRFUhyXoRctXLTL1FEMoImr6HmFMCooLP93NyUBXcNx962ZbglyHf6Bv)

```

SELECT * FROM `pasien`

```

Daftar Dokter

![](https://lh4.googleusercontent.com/PSG-WHUvH_cp6kp8Gika8UtB9cqVMLuewXMB1VIRirTvlvhG9pkQSKscshbz2wHAQTnA8WPEFi0HCwn3fh8miHLB3usY3K_65lIyvBRM17ec0VjQi2kF0sGqtbn89piA7oXzY9N_58i8LyxkbJp5B3BArJr5JHOxqrAgE-RwFm7Vx-SoQTBWjMIuBE793F4V)

```

SELECT * FROM `dokter`

```

Daftar Obat-obatan

![](https://lh5.googleusercontent.com/BEIVdWyEzXMZjKO29NDYJ7DgZR3m5CtJ4V3OIlp0ohv_l78nlruQvuentQWmGKkBFwnWSu44hnpEWv9M0MEPnluQL5uwYMjE2bIfWpmEtkaINyFSCue0ZtyYYNkOSzHxCWpeJWeLYA8bzMB1We--50GsBIrV-rIOckOpqueKqnKnFWYS7Pa_0ijPGc4Au7-v)

```

SELECT * FROM `obat`

```

Daftar Jenis Perawatan

![](https://lh4.googleusercontent.com/TA-qWkVRV3A0oYOtIjjJ4z1wLdulbhwRgblndsU7UY9FJNcaBW6FSX158tHB5ggPMEi2ioeDmJE5OvL8ltbe0GuQRPL7tgxQeDQ5pvrLunbxl94jAlbWQXtUvDOSGdDW4sJEExrcsfD4LMGSZFs-u6Gr_bQcxcKqKEa8XbT2UqG2cgtSTEj1dxnrkkUvAtse)

```

SELECT DISTINCT service_performed FROM service;

```

### 2. Daftar perawatan yang paling banyak diminati

![](https://lh4.googleusercontent.com/vIqWhtMhN9u-0g7Rf0txbjGW7qvdqYANioyb6qBb3A1kXjeU7n4gO_DbLmqNCcDv_atdeo8dEuZEXlwSmmLXXg_biYB9EaciqcSOCq69N0_hE778wDCREJ6ZurGooczCEEd9ys9-XohjRL9CXVGu74IKj5QOcpM3P0BblJOTwr38jFLAPoO-koTdo8SzSbcF)

```

SELECT * FROM `service` ORDER BY `service`.`service_performed` ASC

```

### 3. Daftar obat dan stok obat beserta tanggal kadaluarsanya yang diurutkan berdasarkan tanggal kadaluarsa terdekat

![](https://lh3.googleusercontent.com/vR1PSKxaJzsLZ-YjfRgN1UzfJSpqMvWQl5ga5vCjhtsWVt5BPlpcU06KHujA5v_ukozTxVVXobonL-eZQrPBMgRH5DbbstGEIenldh1iBfS7Z5iJZy-RsmlwwS1A8HLeHQJSburtHCDWLCYmMbv3YQ76e9woXOuenYfeCgxuBWxJPKjbeIkrEjxe2DbNtYDZ)

```

SELECT * FROM `obat` ORDER BY `obat`.`kadaluarsa` ASC

```

### 4. Jumlah pendapatan dokter berdasarkan periode tertentu (hari, minggu, bulan)

Pendapatan Dokter per hari

![](https://lh5.googleusercontent.com/mBSgSIN0vQ3VdPRdaA830AzqQoBo8gBE-w3kgm8iJqmzUuxvvh0Mh_-wZKWan2CzakNMVVvXPBUSGt2huRebYO0mnQi_BpKoNgHLdtj7IaYwOVVbjDT3k8O1gQw7o7zNzp1UigngEEb_ZoHrm9NAUSL48d7krwxq-ANbeTqkYpL0_3c8i-uPdjT-S22bZy0a)

```

SELECT * FROM labor WHERE service_date = '2023-01-03';

```

Pendapatan Dokter Per Minggu

![](https://lh3.googleusercontent.com/yz5onjaZQV7QNCiuruXVU2RIZdophgnJW6c3rJw5aSdbVYSoFHxrGeWFXvH8tISqYa4BSM4dTaF-Uc8RjsG_ClVvorwNij72eSXX6TkHb_3OS6gIZsRZtpGZ2dPUBIFBr5bE4dDULgndV1kPtA_r0SBZOQX1yVpJVupricjC-BQt2mhEtwCcARg0GnU4utcv)

```

SELECT * FROM labor WHERE service_date BETWEEN '2023-01-01' AND '2023-01-07';

```

Pendapatan Dokter per bulan

![](https://lh5.googleusercontent.com/lv0WEmRAAOEnQ4UsE-3m-XneQbONFM-MhP32Agi6GIZliDABA4sQMkCgraaBXHMTbB5QgnSZ71yR_Ho-46vqRExWnJw_XoPKCKjrohVjHfQ_uvmiGxYjyr4CSwDq1L_sK5nvp1wcvwt7jZzj0FZTaMV7SXINzb28QGlJb_WECFTxLydIn7vfZMPVvWsb-hqa)

```

SELECT * FROM labor WHERE MONTH(service_date) = 1;

```

### 5. Jumlah pendapatan klinik berdasarkan periode tertentu (hari, minggu, bulan)

Pendapatan klinik per hari

![](https://lh4.googleusercontent.com/KAW5AZYyk5TBmB4wesmnrvOR5c0XGjInZJSSPADHt66s55dAZAdaT5IpfiPH_gxC9Ee-5ix5sBjMtobZre0AQR2T8DgvePK9qqbLRyyIomwej4SLiII5D5upcZDVj4_06_ndlR6Ipe94DpEuRCUI6hD4pFYfpgA82aMZu_0XAKAMPMAbUBj-C3ApK1musR9-)

```

SELECT * FROM total_clinic WHERE invoice_date = '2023-01-07';

```

Pendapatan klinik per minggu

![](https://lh4.googleusercontent.com/BMvLcY-lvgMONwDhW7QUyOSkgI8cGq-g5QfafQ-2hwJs2pZV2skEX_qgqkHW3-L4GgX70XYCpJuFbgoWyWDZkGfh6ECxdv64Ncpq7z0iEuQFQlpX4ALImdBb_8iGIIiOPWfM4ZreAxVTGcdSdRxBhwc61jKLxT1nVOq8hi6U-D9kEo_cKALo30bZ3n7lcbFh)

```

SELECT * FROM total_clinic WHERE invoice_date BETWEEN '2023-01-01' AND '2023-01-07';

```

Pendapatan klinik per bulan

![](https://lh4.googleusercontent.com/8dHAp7jWbGWtU4qe-z444kXV9Ca9gN5vEQwEDS55UsLAJZUIjgUhHbLWt_9epujDcgSdDEcTdQa40w_yTooiNs-F_8NMXXVYV-W133obiJXLGEZsvaDDRoTq04EeMpT8EWNn8Npa5D5v-XBk_U1XyF7-NKCcJotTr6h7PDkF0tmXPPzJCN3d-A1ttzZ5UuKe)

```

SELECT * FROM total_clinic WHERE MONTH(invoice_date) = 1;

```

### 6. Jumlah penjualan obat berdasarkan periode tertentu (hari, minggu, bulan)

Jumlah penjualan obat per hari

![](https://lh6.googleusercontent.com/JogARGTAzikmqo96YIP8cunmMZX6FSLahg_eZPvVriVHA4kDe82e93IbJe10HPucCwEpmAWMEsB9oeF5YFvfc2v3nxxz4IFmqry6Wz7guHMuHQEca9Ga2-LK-2bmWgW3kVWSZZqroZkIO3JIOeZA5UO8NekPxjtKfivEyHRCk-TvfnaSoVwFpr7ngPcomkaq)

```

SELECT price_obat,invoice_date FROM total_clinic WHERE invoice_date = '2023-01-07';

```

Jumlah penjualan obat per minggu

![](https://lh5.googleusercontent.com/U5HgaFkpI90Ut4hwfmQ3FxRY0Lhj7WA0LpeSOOure7s3G1nFVfdoSjgjDDfJ_lub87UOF7Q4TzHVGaqX8ALJQqyQxLPPrKlTwxHP1ufJ7tMcm0_nO_Fn_3pFdqV3515QbGTjy5LNkWTOXJavO1hr9fctvDweCRDi4bsOkcxbHKn8mpOGMypfN3FMqO3ZI0pt)

```

SELECT price_obat, invoice_date FROM total_clinic WHERE invoice_date BETWEEN '2023-01-01' AND '2023-01-07';

```

Jumlah penjualan obat bulan

![](https://lh6.googleusercontent.com/DtxHy-pGbPOt2Ro-1ijV6GB5fSj2LB-xuM8N7B37t4DeoIyT_eGZmT8ZRCHG7ZTRwOzYCkvJVwAneGNGUaVdi_DPwUzbgNQZ3hOXA8UWrRjwAB8A6pUSbB4Bhah_jyGp2-no3BeNoZEuI3j05PDikqHnkfHaST3GDN7XAM6_1ASbdrW_6sgSP1Kbw1YpVDts)

```

SELECT price_obat, invoice_date FROM total_clinic WHERE MONTH(invoice_date) = 1;

```

Buat kamu yang punya tugas terkait **SQL**, bisa banget joki tugas **Database SQL** disini, selain dibantu mengerjakan, kita juga bantu jelaskan pada dokumen terpisah.

Order bisa langsung via whatsapp admin ya, jelaskan tugas yang akan dikerjakan dan juga deadline nya, admin akan membalas whatsapp kamu beserta rincian yang harus kamu bayar. Tenang saja, [pembayaran](https://stacktugas.id/pembayaran/) boleh dp 50% dan sisanya bisa kamu bayar setelah tugas selesai dikerjakan.

[Order Joki Tugas](https://stacktugas.id/)

“Tugas selesai hati pun senang”