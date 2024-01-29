---
title: "Apa itu Git Shallow Clone dan Cara Menggunakannya"
date: "2024-01-29"
excerpt: "Git Shallow Clone memungkinkan kita untuk mengkloning hanya komit terbaru dari repositori"
cover_image: ""
---

Git adalah sistem kontrol versi terdistribusi yang digunakan oleh banyak pengguna di seluruh dunia. Namun, Git mengharuskan setiap pengembang untuk mengkloning seluruh repositori sebelum digunakan. Ini bisa sangat memakan waktu untuk mengunduh seluruh repositori dengan semua riwayat dan filenya. Jadi Git menyediakan cara mudah yang disebut Shallow Clone atau klon dangkal, yang memungkinkan kita hanya mengunduh commit terbaru saja, tidak semua repositori. Dengan begitu kita dapat dengan cepat mengkloning repositori Git. Pada artikel ini, kita akan belajar cara menggunakan git shallow clone.

# Apa itu Git Shallow Clone?

Git Shallow Clone memungkinkan kita untuk mengkloning hanya komit terbaru dari repositori, tidak semua repositori. Jika proyek memiliki riwayat bertahun-tahun, atau banyak komit, maka kita dapat menggunakan git shallow clone untuk menarik komit hingga kedalaman klon tertentu.

## Apa itu Kedalaman Klon Git Shallow

Kedalaman kloning git shallow adalah jumlah komit terbaru yang ingin di unduh saat mengkloning repositori.

Berikut adalah sintaks untuk menggunakan Git Shallow Clone

```git clone -–depth [depth] [remote-url]```

Sebagai contoh, kita akan coba mengkloning dari repository github https://github.com/test_user/contoh_repository hanya dengan 10 commit terbaru:

```sudo git clone --depth 10 https://github.com/test_user/contoh_repository```

Kita juga dapat mengkloning cabang tertentu dibandingkan mengkloning semua repositori, dengan sintaks berikut ini:

## Cara mengkloning repositori besar

Ketika kita mencoba untuk mengkloning repositori yang besar melalui internet, kita mungkin akan membutuhkan banyak waktu. Dalam kasus seperti itu, kita bisa menggunakan Git Shallow Clone untuk sepenuhnya mengunduh repositori besar. Berikut adalah langkah-langkah nya:

Berikut adalah contoh link yang akan dijadikan sebagai percobaan https://github.com/test_user/contoh_repository.

Pertama, kita harus mengclone Git Shallow dari repositori dengan kedalaman klon = 1

```sudo git clone --depth 1 https://github.com/test_user/contoh_repository```

Perintah di atas akan dengan cepat mengunduh dan membuat klon lokal dari repositori internet kita dengan 1 komit terakhir.

Selanjutnya jalankan perintah untuk unduh sisa commit


```sudo git fetch --unshallow```

Terkadang, repositori dari internet masih terlalu besar untuk klon secara menyeluruh. Dalam kasus seperti itu, lakukan Git Shallow Clone atau klon dangkal lagi untuk mengambil beberapa commit yang lebih baru. Misalnya, Git Shallow 20 commit terakhir

```sudo git clone --depth 20 https://github.com/test_user/contoh_repository```

Kemudian jalankan perintah git fetch –unshallow untuk mengunduh sisa komit.

```git fetch –unshallow```

Git Shallow Clone dapat menghemat waktu saat mengkloning repositori berukuran besar. Namun, jika kita push komit dari Shallow Clone, itu bisa memakan waktu lebih lama karena perbedaan perhitungan yang harus dilakukan antara salinan jauh dan shallow dari repositori lokal. Jadi disarankan untuk memulai dengan Git Shallow Clone tetapi diakhiri dengan melakukan klon penuh.

Buat kamu yang lagi sibuk dan banyak tugas kuliah, bisa banget joki tugas kuliah di sini, selain dibantu mengerjakan, kita juga bantu jelaskan pada dokumen terpisah.

Order bisa langsung via whatsapp admin ya, jelaskan tugas yang akan dikerjakan dan juga deadline nya, admin akan membalas whatsapp kamu beserta rincian yang harus kamu bayar. Tenang saja, pembayaran boleh dp 50% dan sisanya bisa kamu bayar setelah tugas selesai dikerjakan.

[Order Joki Tugas](https://stacktugas.id/)

“Tugas selesai hati pun senang”