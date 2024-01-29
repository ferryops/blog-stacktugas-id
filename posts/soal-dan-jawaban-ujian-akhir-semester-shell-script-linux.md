---
title: "Soal dan Jawaban Ujian Akhir Semester Shell Script Linux"
date: "2024-01-29"
excerpt: "Buatlah shell script untuk mengelompokkan kelas alamat IP"
cover_image: ""
---

Shell script adalah sekumpulan perintah yang ditulis dalam bahasa shell, seperti bash, yang dapat dijalankan secara berturut-turut. Shell script biasanya digunakan untuk menjalankan tindakan yang berulang-ulang, seperti mengatur server, atau mengelola file dan direktori.

![](https://lh3.googleusercontent.com/Zs3M5Fziwz6Rc-KD_5LsNn49k89VcyUFQdLEcbkN0tu9sh7nPqhLB1p_flOzg92KqvODtFXkHEuacTlP5Wta2VaNDH0Y-tAvi4zXc2dWY9TAi7bujfDHhwCBUAMsaRLmKN4i_PuKhReX_RJ23fQ4H9PPmCVgYDzktOUS-gvx1PTe59TupVSRd8pnn4icsQ)

Shell script juga bisa digunakan untuk menjalankan perintah-perintah yang ada di sistem operasi secara otomatis. Contohnya, sebuah shell script bisa digunakan untuk mengekstrak file zip, mengirim email, atau mengatur firewall.

# Soal Shell Script Linux 1

1.Buatlah shell script untuk mengelompokkan kelas alamat IP!

- Dapat mengelompokkan kelas alamat IP dari A sampai E
- Dapat mengelompokkan alamat IP private dan public
- memverifikasi alamat IP yang di input jika alamat IP tidak valid

**shell script**

```
#!/bin/bash

# Daftar pengelompokkan IP address
ips=("10.0.0.1" "172.16.0.1" "192.168.0.1" "100.64.0.1" "198.51.100.1")

# Mengelompokkan IP addresses kelas A
echo "Kelas A:"
for ip in "${ips&#91;@]}"; do
  if &#91;&#91; $ip =~ ^&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}$ ]]; then
    octet1=$(echo "$ip" | cut -d"." -f1)
    if &#91;&#91; $octet1 -ge 1 ]] &amp;&amp; &#91;&#91; $octet1 -le 126 ]]; then
      echo "$ip"
    fi
  fi
done

# Mengelompokkan IP addresses kelas B
echo "Kelas B:"
for ip in "${ips&#91;@]}"; do
  if &#91;&#91; $ip =~ ^&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}$ ]]; then
    octet1=$(echo "$ip" | cut -d"." -f1)
    if &#91;&#91; $octet1 -ge 128 ]] &amp;&amp; &#91;&#91; $octet1 -le 191 ]]; then
      echo "$ip"
    fi
  fi
done

# Mengelompokkan IP addresses kelas C
echo "Kelas C:"
for ip in "${ips&#91;@]}"; do
  if &#91;&#91; $ip =~ ^&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}$ ]]; then
    octet1=$(echo "$ip" | cut -d"." -f1)
    if &#91;&#91; $octet1 -ge 192 ]] &amp;&amp; &#91;&#91; $octet1 -le 223 ]]; then
      echo "$ip"
    fi
  fi
done

# Mengelompokkan IP addresses kelas D
echo "Kelas D:"
for ip in "${ips&#91;@]}"; do
  if &#91;&#91; $ip =~ ^&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}$ ]]; then
    octet1=$(echo "$ip" | cut -d"." -f1)
    if &#91;&#91; $octet1 -ge 224 ]] &amp;&amp; &#91;&#91; $octet1 -le 239 ]]; then
      echo "$ip"
    fi
  fi
done

# Mengelompokkan IP addresses kelas E
echo "Kelas E:"
for ip in "${ips&#91;@]}"; do
  if &#91;&#91; $ip =~ ^&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}$ ]]; then
    octet1=$(echo "$ip" | cut -d"." -f1)
    if &#91;&#91; $octet1 -ge 240 ]] &amp;&amp; &#91;&#91; $octet1 -le 255 ]]; then
      echo "$ip"
    fi
  fi
done

# Pengelompokkan IP private
echo "Pengelompokkan IP private:"
for ip in "${ips&#91;@]}"; do
  if &#91;&#91; $ip =~ ^&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}$ ]]; then
    octet1=$(echo "$ip" | cut -d"." -f1)
    if &#91;&#91; $octet1 -eq 10 ]] || &#91;&#91; $octet1 -eq 172 ]] || &#91;&#91; $octet1 -eq 192 ]]; then
      echo "$ip"
    fi
  fi
done

# Pengelompokkan IP Publik
echo "Pengelompokkan IP publik:"
for ip in "${ips&#91;@]}"; do
  if &#91;&#91; $ip =~ ^&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}$ ]]; then
    octet1=$(echo "$ip" | cut -d"." -f1)
    if &#91;&#91; $octet1 -ne 10 ]] &amp;&amp; &#91;&#91; $octet1 -ne 172 ]] &amp;&amp; &#91;&#91; $octet1 -ne 192 ]]; then
      echo "$ip"
    fi
  fi
done

# Input IP address
read -p "Masukkan alamat IP: " ip

# Verifikasi jika alamat IP yang di input tidak valid
if &#91;&#91; $ip =~ ^&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}\.&#91;0-9]{1,3}$ ]]; then
  octet1=$(echo "$ip" | cut -d"." -f1)
  octet2=$(echo "$ip" | cut -d"." -f2)
  octet3=$(echo "$ip" | cut -d"." -f3)
  octet4=$(echo "$ip" | cut -d"." -f4)

# Check if the IP address is private
if &#91;&#91; $ip =~ ^(10\.|172\.1&#91;6-9]\.|172\.2&#91;0-9]\.|172\.3&#91;0-1]\.|192\.168\.) ]]; then
  echo "$ip adalah IP private"
else
  echo "$ip adalah ip publik"
fi

  if &#91;&#91; $octet1 -le 255 ]] &amp;&amp; &#91;&#91; $octet2 -le 255 ]] &amp;&amp; &#91;&#91; $octet3 -le 255 ]] &amp;&amp; &#91;&#91; $octet4 -le 255 ]]; then
    echo "Alamat IP valid."
  else
    echo "Alamat IP tidak valid."
  fi
else
  echo "Alamat IP tidak valid."
fi

```

**eksekusi script di terminal linux**

_bash ./classIP.sh_

**Penjelasan pengelompokkan IP kelas A sampai E**

Pada shell script untuk mengelompokkan alamat IP ke dalam kelas A, pertama-tama akan dibuat list “ips” yang berisi daftar alamat IP yang akan dikelompokkan. Kemudian, akan ditampilkan pesan yang menandakan bahwa alamat IP kelas A akan ditampilkan.

Setelah itu, akan dilakukan looping terhadap setiap alamat IP pada list “ips”. Untuk setiap alamat IP, akan dilakukan verifikasi apakah format alamat IP yang dimasukkan valid dengan menggunakan perintah if [[$ip =~ ^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$]]. Jika valid, maka akan dilanjutkan ke proses selanjutnya.

Kemudian, akan diambil nilai octet pertama dari alamat IP yang dimasukkan dengan menggunakan perintah octet1=$(echo “$ip” | cut -d”.” -f1). Nilai octet pertama ini kemudian akan dibandingkan dengan rentang 1 sampai 126 untuk memverifikasi apakah alamat IP tersebut termasuk dalam kelas A. Jika sesuai dengan kriteria kelas A, maka alamat IP tersebut akan ditampilkan dengan menggunakan perintah echo “$ip”.

Proses ini akan terus dilakukan untuk setiap alamat IP pada list “ips” sampai proses looping selesai.

**Penjelasan pengelompokkan IP Private dan IP Publik**

Pada shell script yang diberikan untuk mengelompokkan alamat IP private dan IP publik, pertama-tama dilakukan pemverifikasian terhadap format alamat IP. Jika format alamat IP valid, maka akan dilakukan pembagian ke dalam dua kelompok yaitu IP private dan IP publik.

Kriteria alamat IP private adalah alamat IP yang dimulai dengan 10.0.0.0/8, 172.16.0.0/12, atau 192.168.0.0/16. Selain itu, dianggap sebagai IP publik.

Untuk setiap alamat IP yang terverifikasi valid, akan dilakukan pembagian ke dalam dua kelompok tersebut dengan menggunakan perintah if. Jika sesuai dengan kriteria IP private, maka alamat IP tersebut akan ditampilkan pada kelompok IP private. Sebaliknya, jika sesuai dengan kriteria IP publik, maka alamat IP tersebut akan ditampilkan pada kelompok IP publik.

Pada akhir shell script, akan ditampilkan daftar alamat IP yang sudah dikelompokkan ke dalam IP private dan IP publik.

**Penjelasan alamat IP yang di input valid atau tidak valid**

- read -p “Masukkan alamat IP: ” ip: Perintah ini akan meminta user untuk memasukkan alamat IP yang akan diverifikasi.
- if [[$ip =~ ^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$]]: Perintah ini akan memverifikasi apakah format alamat IP yang dimasukkan valid. Jika valid, maka akan dilanjutkan ke proses selanjutnya.
- octet1=$(echo “$ip” | cut -d”.” -f1): Perintah ini akan mengambil nilai octet pertama dari alamat IP yang dimasukkan. Perintah yang sama juga digunakan untuk mengambil nilai octet kedua, ketiga, dan keempat.
- if [[$octet1 -le 255]] && [[$octet2 -le 255]] && [[$octet3 -le 255]] && [[$octet4 -le 255]]: Perintah ini akan memverifikasi apakah nilai octet yang diambil valid. Jika semua nilai octet valid, maka akan ditampilkan pesan “Alamat IP valid.”. Jika salah satu nilai octet tidak valid, maka akan ditampilkan pesan “Alamat IP tidak valid.”.

Secara keseluruhan, shell script tersebut akan memverifikasi apakah alamat IP yang dimasukkan memiliki format yang valid.

# Soal Shell Script Linux 2

2.Buatlah shell script untuk membuat user linux!

- Membuat 3 user dengan nama ali, hasan, dan badu
- mengkonfigurasi password untuk setiap user
- menampilkan hasil pembuatan user
- menampilkan hasil konfigurasi password
- menampilkan detail direktori dari user
- menjeda semua output ke terminal selama 3 detik

shell script

```
#!/bin/bash

# Buat 3 user dengan nama ali, hasan, dan badu
useradd ali
useradd hasan
useradd badu

# konfigurasi password untuk setiap user yang telah dibuat
echo "password-ali" | passwd --stdin ali
echo "password-hasan" | passwd --stdin hasan
echo "password-badu" | passwd --stdin badu

# Menampilkan hasil pembuatan user (ali, hasan, dan badu)
echo "Nama user:"
echo "ali"
echo "hasan"
echo "badu"
sleep 3

# Menampilkan hasil konfigurasi password user
echo "Ini password user 'ali', 'hasan', 'badu':"
echo "$(getent shadow ali)"
echo "$(getent shadow hasan)"
echo "$(getent shadow badu)"

# Menampilkan detail home directory dari user yang dibuat
echo "Direktori home user:"
echo "ali: $(getent passwd ali | cut -d: -f6)"
echo "hasan: $(getent passwd hasan | cut -d: -f6)"
echo "badu: $(getent passwd badu | cut -d: -f6)"
sleep 3
```

**Perintah eksekusi script di terminal linux**

_bash ./buat-user-linux.sh_

**Penjelasan shell script**

1.  **Membuat user baru**: Shell script akan menggunakan perintah useradd untuk membuat user baru dengan nama yang ditentukan.
2.  **Mengkonfigurasi password user**: Shell script akan menggunakan perintah passwd untuk mengkonfigurasi password user yang baru dibuat.
3.  **Menampilkan nama user**: Shell script akan menggunakan perintah echo untuk menampilkan nama user yang baru dibuat ke terminal.
4.  **Menampilkan konfigurasi password user**: Shell script akan menggunakan perintah getent shadow untuk menampilkan informasi password user, seperti tanggal terakhir password diubah, tanggal terakhir user terkoneksi ke sistem, dan sebagainya.
5.  **Menampilkan direktori user**: Shell script akan menggunakan perintah echo untuk menampilkan direktori user yang baru dibuat ke terminal.
6.  Perintah sleep digunakan untuk menunda output selanjutnya

# Soal Shell Script Linux 3

3.Buatlah shell script untuk mengotomatisasi penginstalan dan konfigurasi ssh

- Instal layanan ssh
- menjalankan layanan ssh
- memverifikasi status ssh

**Shell Script Untuk Distro Ubuntu/Debian/kali/mint**

```
#!/bin/bash

# Menginstalasi layanan SSH
apt-get update
apt-get install -y openssh-server

# Menjalankan layanan SSH
systemctl start ssh

# Memverifikasi status layanan SSH
systemctl status ssh
```

**Shell Script Untuk Distro RedHat Enterprise _Linux_; Fedora; CentOS; Oracle Enterprise _Linux_; Scientific, CERN; SUSE, OpenSUSE**.

```
#!/bin/bash

# Menginstalasi layanan SSH
yum install -y openssh-server

# Menjalankan layanan SSH
systemctl start sshd
systemctl enable sshd

# Memverifikasi status layanan SSH
systemctl status sshd
```

**Perintah eksekusi Script di terminal linux**

_bash ./SSHService.sh_

**Penjelasan Script**

- Menginstal layanan SSH: Shell script akan menggunakan perintah **apt-get** atau **yum** untuk menginstal paket SSH yang diperlukan (menyesuaikan distro linux yang dipakai).
- Menjalankan layanan SSH: Shell script akan menggunakan perintah **systemctl** atau **service** untuk menjalankan layanan SSH.
- Memverifikasi status SSH: Shell script akan menggunakan perintah **systemctl** atau **service** untuk memverifikasi apakah layanan SSH sedang berjalan atau tidak.

Buat kamu yang punya tugas terkait **Linux atau Shell Script**, bisa banget joki tugas **Linux** di sini, selain dibantu mengerjakan, kita juga bantu jelaskan pada dokumen terpisah.

Order bisa langsung via whatsapp admin ya, jelaskan tugas yang akan dikerjakan dan juga deadline nya, admin akan membalas whatsapp kamu beserta rincian yang harus kamu bayar. Tenang saja, [pembayaran](https://stacktugas.id/pembayaran/) boleh dp 50% dan sisanya bisa kamu bayar setelah tugas selesai dikerjakan.

[Order Joki Tugas](https://stacktugas.id/)

“Tugas selesai hati pun senang”