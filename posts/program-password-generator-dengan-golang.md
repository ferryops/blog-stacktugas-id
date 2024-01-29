---
title: "Program Password Generator dengan Golang"
date: "2024-01-29"
excerpt: "contoh Program Password Generator dengan Golang"
cover_image: ""
---

Golang adalah bahasa pemrograman yang dikembangkan oleh Google. Golang dikenal sebagai bahasa yang mudah dipelajari, efisien, dan memiliki fitur keamanan yang baik. Golang juga memiliki fitur yang memungkinkan para pengembang untuk membuat aplikasi yang dapat dijalankan di berbagai sistem operasi dan arsitektur hardware. Golang banyak digunakan untuk membuat aplikasi web, aplikasi pemrosesan data, dan aplikasi sistem.

## Berikut contoh Program Password Generator dengan Golang :

```
// Golang program to reverse a string
    package main

    // importing fmt
    import (
      "fmt"
      "strings"
    )

    // function, which takes a string as
    // argument and return the reverse of string.
    func reverse(str string) string {
      rns := []rune(str) // convert to rune
      for i, j := 0, len(rns)-1; i < j; i, j = i+1, j-1 {

        // swap the letters of the string,
        // like first with last and so on.
        rns[i], rns[j] = rns[j], rns[i]
      }

      // return the reversed string.
      return string(rns)
    }

    // nih func ubah vokal

    func reverseVowels(s string) string {
      runeS := []rune(s)
      lenS := len(runeS)

      for i, j := 0, lenS-1; i < j; {
        for i < j {
          if !vowel(runeS[i]) {
            i++
          } else {
            break
          }
        }
        if i == j {
          break
        }
        for i < j {
          if !vowel(runeS[j]) {
            j--
          } else {
            break
          }
        }

        if i == j {
          break
        }

        runeS[i], runeS[j] = runeS[j], runeS[i]
        i++
        j--

      }

      return string(runeS)

    }

    func vowel(s rune) bool {
      if s == 'a' || s == 'i' || s == 'u' || s == 'e' || s == 'o' {
        return true
      }

      if s == 'A' || s == 'I' || s == 'U' || s == 'e' || s == 'O' {
        return true
      }

      return false
    }


    func main() {

      // Reversing the string.

      str := "PassWord Generator @123"

      // returns the reversed string.
      strRev := reverse(str)
      fmt.Println(str)
      fmt.Println(strRev)

        output := reverseVowels(strRev)
      fmt.Println(output)

      rep := strings.ToUpper(strRev)
      fmt.Println(rep)

        result := strings.ReplaceAll(strRev, " ", "")
        fmt.Println(result)

        substr :="@"
        if strings.Contains(str, substr) {
            fmt.Println(result,": Kuat")
        } else {
            fmt.Println(result,": Lemah")
        }

    }
```

## output

![](http://localhost:2368/content/images/wordpress/2022/10/Screenshot-20from-202022-10-13-2018-31-51.png)

[](http://localhost:2368/content/images/wordpress/2022/10/Screenshot-20from-202022-10-13-2018-31-51.png)Download source code : [https://sfile.mobi/hi23QgOuiW7](https://sfile.mobi/hi23QgOuiW7)

Buat kamu yang punya tugas terkait **Golang**, bisa banget joki tugas **Golang atau tugas coding lainnya** di sini, selain dibantu mengerjakan, kita juga bantu jelaskan pada dokumen terpisah.

Order bisa langsung via whatsapp admin ya, jelaskan tugas yang akan dikerjakan dan juga deadline nya, admin akan membalas whatsapp kamu beserta rincian yang harus kamu bayar. Tenang saja, [pembayaran](https://stacktugas.id/pembayaran/) boleh dp 50% dan sisanya bisa kamu bayar setelah tugas selesai dikerjakan.

[Order Joki Tugas](https://stacktugas.id/)

“Tugas selesai hati pun senang”