---
title: "Cara Mengabaikan File di Git Commit dengan gitignore"
date: "2024-01-29"
excerpt: "Saat bekerja dengan repositori git, kita dapat mengabaikan atau excluded file dan folder tertentu karena kita merasa tidak perlu mengirimnya ke repositori"
cover_image: ""
---

Saat bekerja dengan repositori git, kita dapat mengabaikan atau excluded file dan folder tertentu karena kita merasa tidak perlu mengirimnya ke repositori. Hal ini dapat terjadi jika perubahan tersebut relevan secara lokal tetapi tidak penting bagi pengembang lain yang menggunakan repositori kita. Dalam kasus seperti itu, disarankan untuk mengabaikan file & folder tersebut dari git commit.

Artikel ini akan membahas bagaimana cara mengecualikan file di git commit.

## Cara Mengabaikan File di Git Commit

Berikut adalah langkah-langkah untuk mengabaikan file di git commit. git memungkinkan kita membuat file .gitignore yang pada dasarnya mencantumkan semua file dan folder yang perlu diabaikan. Ketika kita menjalankan perintah git seperti git status atau git commit, perintah tersebut akan membaca konten file .gitignore untuk mengabaikan file dan folder yang cocok dengan pola yang disebutkan dalam file tersebut. kita dapat menambahkan file ini di direktori root repositori git atau subdirektori mana pun. kita juga dapat menempatkan beberapa file .gitignore di berbagai subdirektori dari pada menempatkan satu file di folder root.

### 1. Buat File .gitignore

Misal repositori kita terletak di /home/ubuntu/project. Buka terminal dan jalankan perintah berikut untuk membuat file .gitignore di sistem Linux.

```sudo nano /home/ubuntu/project/.gitignore```

### 2. Tambahkan file dan folder untuk di abaikan

Tambahkan file dan folder yang ingin kita abaikan di setiap baris. kita dapat menentukan jalur relatif ke file & folder. Atau menggunakan karakter wildcard dan pola regex seperti * untuk mencantumkannya. Berikut adalah karakter wildcard yang umum digunakan:

**menambahkan tkita bintang gkita sebelum nama folder ke direktori manapun di repositori
*bintang satu artinya karakter sama dengan nol atau lebih
!menambahkan tkita seru ke nama file dan folder berarti mengakhiri pengecualian, artinya, konten tidak akan diabaikan.
/awalan garis miring menunjukkan direktori tempat .gitignore ditempatkan
#digunakan untuk menambahkan komentar

Mari kita lihat contoh file gitignore .git, beserta komentar di setiap baris:

#mengabaikan semua file .log di repositori
*.log

#tidak mengabaikan key.log
!key.log

#mengabaikan direktori apa pun yang berisi pdf di path nya seperti /project/pdf dan /project/test/pdf/share
**pdf

#mengabaikan debug0.log ke debug9.log
debug[0-9].log

#mengabaikan semua file .txt di direktori sekarang
/*.txt

Simpan dan tutup file. Setiap pola dalam file .gitignore diperiksa berdasarkan lokasi path folder.

Sekarang ketika kita mengkomit file dan folder ke repositori git, hal ini secara otomatis akan mengabaikan semua yang disebutkan dalam file gitignore .git.

Demikian tutorial cara mengabaikan file di git commit.

Buat kamu yang lagi sibuk dan banyak **tugas kuliah**, bisa banget joki tugas **kuliah** di sini, selain dibantu mengerjakan, kita juga bantu jelaskan pada dokumen terpisah.

Order bisa langsung via whatsapp admin ya, jelaskan tugas yang akan dikerjakan dan juga deadline nya, admin akan membalas whatsapp kamu beserta rincian yang harus kamu bayar. Tenang saja, [pembayaran](https://stacktugas.id/pembayaran/) boleh dp 50% dan sisanya bisa kamu bayar setelah tugas selesai dikerjakan.

[Order Joki Tugas](https://)

“Tugas selesai hati pun senang”