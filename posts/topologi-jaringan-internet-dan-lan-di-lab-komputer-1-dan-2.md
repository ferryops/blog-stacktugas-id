---
title: "Topologi Jaringan Internet dan LAN di LAB Komputer 1 dan 2"
date: "2024-01-29"
excerpt: "Tiap ruangan tidak saling terhubung, tetapi dapat menggunakan koneksi internet yang sama"
cover_image: ""
---

Berikut adalah topologi jaringan internet dan Lan di dua ruangan yang berbeda dengan ketentuan

1.  Tiap ruangan tidak saling terhubung, tetapi dapat menggunakan koneksi internet yang sama
2.  speed limit tiap perangkat adalah 50Mbps

![](https://lh3.googleusercontent.com/i6X-boO3Fl3P7YxN1uNq-P3yLhOzzzADLyspRg2b-nr1bxnPkwd83QIAgZsaVyGJeTuVKt446KVEBOaPAGJgetYz9khm04YIIMprSWcDzYmtMXfKQJ5V3p6PZDFTqaOqb2J_Fl0ShLQXAk9z1dlVqL7K_LD4I4XPyax8XG9zmGMrCpT949_9nKOW70j4iw)

1.  Untuk mengatasi ketentuan pertama, maka diterapkan teknik subnetting, teknik subnetting dapat memisahkan dua ruangan yang tidak diinginkan untuk saling berkomunikasi. Subnetting adalah teknik membagi satu jaringan besar menjadi beberapa subnet atau jaringan kecil yang terpisah. Dengan menggunakan subnetting, kita dapat membuat dua ruangan tersebut terpisah dalam jaringan yang berbeda, sehingga tidak dapat saling berkomunikasi. sebagai contoh ruangan A menggunakan subnet 192.168.1.0 dan ruangan B menggunakan subnet 192.168.2.0.
2.  Untuk mengatasi ketentuan yang kedua, kita dapat menggunakan fitur QoS (Quality of Service) pada router. Berikut prosedur nya:

Masuk ke mode privileged

```
en
```

Masuk ke mode configure terminal dengan mengetik “configure terminal” pada CLI (Command Line Interface) router.

```
conf t
```

Buat class map baru dengan mengetik “class-map [nama class map]”.

```
class-map limit50mbps
```

Masuk ke dalam class map tersebut dengan mengetik “match access-group [nama access group]”.

```
match access-group limit50mbps
```

Access group merupakan grup akses yang terdiri dari beberapa aturan (rule) yang menentukan apa yang akan dibatasi bandwithnya.

Buat access group baru dengan mengetik “access-list [nama access group]”.

```
access-list limit50mbps
```

Masuk ke dalam access group tersebut dengan mengetik “permit ip any any” untuk mengizinkan semua traffic IP masuk ke dalam access group.

```
permit ip any any
```

Kembali ke mode class map dengan mengetik “exit” di CLI.

```
ex
```

Buat policy map baru dengan mengetik “policy-map [nama policy map]”.

```
policy-map limit50mbps
```

Masuk ke dalam policy map tersebut dengan mengetik “class [nama class map]”.

```
class limit50mbps
```

Tambahkan batas limit bandwith dengan mengetik “police [bandwith dalam bps]”.

```
police 50000000
```

Perintah diatas akan mengatur batas limit bandwith menjadi 50mbps.

Kembali ke mode configure terminal dengan mengetik “exit” di CLI.

```
ex
```

Aplikasikan policy map tersebut ke interface yang akan dibatasi bandwidth-nya dengan mengetik “service-policy output [nama policy map]”.

```
service-policy output limit50mbps
```

```
write memory
```

Selesai. kita sudah berhasil mengkonfigurasi router Cisco di Packet Tracer untuk mengatur batas limit 50mbps. Pastikan untuk menyimpan perubahan dengan mengetik “write memory” di CLI.

Buat kamu yang punya tugas terkait **Jaringan**/**Packet Tracer**, bisa banget joki tugas **Jaringan** di sini, selain dibantu mengerjakan, kita juga bantu jelaskan pada dokumen terpisah.

Order bisa langsung via whatsapp admin ya, jelaskan tugas yang akan dikerjakan dan juga deadline nya, admin akan membalas whatsapp kamu beserta rincian yang harus kamu bayar. Tenang saja, [pembayaran](https://stacktugas.id/pembayaran/) boleh dp 50% dan sisanya bisa kamu bayar setelah tugas selesai dikerjakan.

[Order Joki Tugas](https://stacktugas.id/)

“Tugas selesai hati pun senang”