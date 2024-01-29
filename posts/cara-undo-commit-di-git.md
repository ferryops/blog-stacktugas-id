---
title: "Cara Undo Commit di GIT"
date: "2024-01-29"
excerpt: "Di Git kita dapat melakukan undo commit atau mengembalikan perubahan sebelumnya ke repositori Git"
cover_image: ""
---

Di Git kita dapat melakukan undo commit atau mengembalikan perubahan sebelumnya ke repositori Git dengan beberapa cara.

Artikel ini akan menjelaskan bagaimana cara undo commit di Git. Berikut adalah beberapa tips untuk melakukan undo commit pada tiap kasus yang berbeda.

# Git Soft Reset

Git Soft Reset digunakan untuk mengembalikan commit terakhir tetapi tetap mempertahankan perubahan yang dibuat untuk commit tersebut. Jalankan perintah git reset dengan menambahkan opsi –soft dan juga menentukan arah commit misal HEAD untuk dikembalikan dan jumlah commit yang dikembalikan misal 1

`git reset --soft HEAD~1`

Sekarang ketika kita menjalankan perintah git status, kita akan melihat perubahan terakhir pada commit serta list commit yang dikembalikan. Artinya, perubahan yang kita buat di commit terakhir akan tetap ada di indeks tetapi tidak di commit.

## Undo Multiple commits

Git reset juga dapat digunakan untuk membatalkan beberapa commit terakhir. Misalnya, jika kita ingin membatalkan 5 commit terakhir, ganti angka 1 dengan angka 5 setelah opsi HEAD.

`git reset --soft HEAD~5`

# Git Hard Reset

Jika kita ingin membatalkan commit terakhir serta menghapus semua perubahannya, gunakan opsi –hard setelah perintah git reset.

`git reset --hard HEAD~1`

Harap berhati-hati saat menggunakan perintah ini, kita dapat kehilangan semua perubahan yang kita buat pada komit terakhir, dan tidak dapat dipulihkan.

## Git mixed reset

Opsi Mixed digunakan untuk membatalkan commit terakhir tetapi akan menyimpan perubahan di direktori dan bukan di indeks, gunakan opsi –mixed setelah git reset

`git reset --mixed HEAD~1`

## Git Revert

Git Revert digunakan untuk mengembalikan commit terakhir dan akan menyimpan perubahan sebagai commit baru dalam riwayat commit kita.

`git revert HEAD`

Git revert hanya akan mengembalikan 1 commit secara bersamaan. Jika kita ingin mengembalikan banyak commit, kita harus menjalankan perintah git revert berulang kali.

# Perbedaan Git Reset dan Git Revert

Git reset akan mengembalikan commit terakhir dan menghapus entri dari riwayat commit kita, sedangkan git revert akan membatalkan komit terakhir dan menambahkannya sebagai commit baru. Disarankan untuk menggunakan git revert saat melakukan perubahan pada repositori publik sehingga semua orang tahu bahwa commit telah dikembalikan. Jika kita menggunakan git reset, hal ini akan menghapus commit dari riwayat kita dan akan tampak seolah-olah komit tidak pernah terjadi. Git reset disarankan saat menggunakan repositori dan branch/cabang pribadi.

Di artikel ini kita sudah belajar beberapa cara untuk mengembalikan atau undo commit di git berdasarkan kasus yang berbeda, serta memahami perbedaan Git Reset dan Git Revert.

Buat kamu yang lagi sibuk dan banyak tugas kuliah, bisa banget joki tugas kuliah di sini, selain dibantu mengerjakan, kita juga bantu jelaskan pada dokumen terpisah.

Order bisa langsung via whatsapp admin ya, jelaskan tugas yang akan dikerjakan dan juga deadline nya, admin akan membalas whatsapp kamu beserta rincian yang harus kamu bayar. Tenang saja, pembayaran boleh dp 50% dan sisanya bisa kamu bayar setelah tugas selesai dikerjakan.

[Order Joki Tugas](https://stacktugas.id/)

“Tugas selesai hati pun senang”