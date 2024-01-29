---
title: "Jawaban Routing & Switching, Contoh Perhitungan Subnetting IPv4"
date: "2024-01-29"
excerpt: "Routing & Switching adalah proses pengiriman data melalui jaringan komputer"
cover_image: ""
---

Routing & Switching adalah proses pengiriman data melalui jaringan komputer. Routing adalah proses menentukan jalur terbaik untuk mengirimkan data dari satu lokasi ke lokasi lain, sedangkan switching adalah proses mengalihkan data dari satu port ke port lainnya di dalam suatu perangkat jaringan, seperti switch atau router.

Routing & Switching memungkinkan data untuk terus-menerus bertukar antara perangkat-perangkat jaringan yang terhubung, sehingga memungkinkan komunikasi antar perangkat yang terhubung di dalam jaringan. Routing & Switching merupakan bagian penting dari jaringan komputer dan membantu menjaga agar data dapat terus-menerus bertukar antar perangkat jaringan dengan efisien.

## Berikut adalah jawaban Ujian Tengah Semester – Routing & Switching – Kelas TIB5J

## Scenario

Pada soal berikut anda diminta untuk melakukan perhitungan subnetting IPv4, mengimplementasikan metode Router-on-a-Stick untuk inter-VLAN routing, termasuk didalamnua mengkonfigurasikan IP Address, VLAN, trunk dan subinterface.

### Tabel Pengalamatan

Buatlah tabel subnet /26 dari alamat 172.17.33.0/24. Dari tabel yang terbentuk gunakanlah untuk melengkapi tabel pengalamatan berikut.

![](https://lh5.googleusercontent.com/LwqjqowVWog6bp_bbRAFAnuxguubYQ1VgrXIXR626cM7wVhkRCnw1Hv-deILmMaFzWC_8YNcWcStxaDWQEozvLoqdsWSVltVrSuOS3QhiE9E8AVpe3mQxvyY8njKFlL4IX9cDfeIINJFMZIL5f2DkFMfcgKyQRbHYCys6suFmMVl8yZp6vMXvWuncV6hKw=s16000)

### Tabel Pengalamatan VLAN dan Port VLAN

![](https://lh6.googleusercontent.com/Y-X2AIdfCAyeLjvLqjv4finWaI3W3PFpmPHkdW2_oydmGysXHNoLoFlSB-toKipy12BBQRwtnPDk-ja9fcJ4aMPy9SNbitXkf5-pLZWC-OORB8aCp149kfuLub1BcJlfw68c9t5-7xv5nRBxDPEClYe3LLWmpN3cD4gqUhdMhCHhQTrgj5Z6JtjWmGFfyw)

### Tahapan Kerja

1.  Lengkapi tabel pengalamatan sesuai hasil perhitungan subnetting kemudian pasang IP address-nya pada masing-masing port di R1 dan S1.
2.  Sesuai Tabel Pengalamatan VLAN, buatlah ID VLAN beserta namanya lalu sesuaikan port-nya. Buat agar seluruh port dalam mode access.
3.  Konfigurasikan port di S1 yang menuju R1 untuk menjadi trunk. Ijinkan hanya VLAN yang ada dalam tabel pengalamatan VLAN. Pastikan mengkonfigurasi native VLAN-nya dengan benar.
4.  Konfigurasikan default gateway pada S1. Gunakan VLAN Management sebagai default gateway.
5.  Buat agar seluruh port di S1 yang tidak difungsikan untuk VLAN berada dalam kondisi mati (shutdown).
6.  Buatlah konfigurasi inter-VLAN routing di R1 dengan mengacu pada tabel pengalamatan. Pastikan Native VLAN terkonfigurasi dengan benar.
7.  Verifikasi koneksi (ping), pastikan R1, S1 dan seluruh PC terkoneksi satu sama lain serta dapat mengakses server cisco.pka melalui web browser.

Jawaban :

**S1**

```
enconf tinterface GigabitEthernet0/1no shutdowninterface GigabitEthernet0/1.10encapsulation dot1Q 10ip address 172.17.10.1 255.255.255.192interface GigabitEthernet0/1.20encapsulation dot1Q 20ip address 172.17.20.1 255.255.255.192interface GigabitEthernet0/1.30encapsulation dot1Q 30ip address 172.17.30.1 255.255.255.192interface GigabitEthernet0/1.88encapsulation dot1Q 88 nativeip address 172.17.88.1 255.255.255.0interface GigabitEthernet0/1.99encapsulation dot1Q 99ip address 172.17.99.1 255.255.255.0do write
```

**R1**

```
enconfig tinterface vlan 99ip address 172.17.99.10 255.255.255.0no shutdownip default-gateway 172.17.99.1!Note: VLAN naming only requires the first letter be correctvlan 10name Faculty/Staffvlan 20name Studentsvlan 30name Guest(Default)vlan 88name Nativevlan 99name Managementinterface range fa0/11 – 17switchport mode accessswitchport access vlan 10interface range fa0/18 – 24switchport mode accessswitchport access vlan 20interface range fa0/6 – 10switchport mode accessswitchport access vlan 30interface g0/1switchport mode trunkswitchport trunk native vlan 99interface range fa0/1 – 5 , g1/2shutdowndo write
```

Buat kamu yang punya tugas terkait **Jaringan Packet Tracer**, bisa banget joki tugas **Jaringan** di sini, selain dibantu mengerjakan, kita juga bantu jelaskan pada dokumen terpisah.

Order bisa langsung via whatsapp admin ya, jelaskan tugas yang akan dikerjakan dan juga deadline nya, admin akan membalas whatsapp kamu beserta rincian yang harus kamu bayar. Tenang saja, [pembayaran](https://stacktugas.id/pembayaran/) boleh dp 50% dan sisanya bisa kamu bayar setelah tugas selesai dikerjakan.

[Order Joki Tugas](https://stacktugas.id/)

“Tugas selesai hati pun senang”