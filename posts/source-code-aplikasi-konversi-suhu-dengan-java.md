---
title: "Source Code Aplikasi Konversi Suhu dengan Java"
date: "2024-01-29"
excerpt: "Berikut Source Code Aplikasi Konversi Suhu dengan Java"
cover_image: ""
---

Aplikasi Konversi Suhu dengan Java

![](https://lh6.googleusercontent.com/QSI-cCllZwqOq09diVUm_DG2f2kpqX41V_qAwfFohoRpqoGgyr6o3Wle2ku3v2w2HYPiCXb-F0NDvVKCS4mxYpAcr26eXIQVL1c_CT8poUwv5lxKd3dZfGcgky2GF6T5zlV_zKDXlZSR_8YHT0wUiMrZeh5vsIttKPyQbRmsuR1jRpwBhfP06cDS_KqGz10rEKFNz3EcBg)

SS Hasil akhir aplikasi yang dari emulator

![](https://lh5.googleusercontent.com/L92Jf0Oobe2OOo_bWLtppq5F3tb-MywGqG5UFxVbqeta15Znc1vArtwmyXMHPh2bVaO847mzlR1W08qv6ObS9Qpxh2wgzctrJPUeOyO3dX2fXknVU5ek-Zd7-IcnhaotOVs6FFg-rkKNCNdH-Conkkd6VQIiGmyOgErghDdMVmZZcKdNUCYWCUF06_ZkhkIy9CrrG_HRow)

Layout yang ada di android Studio

Coding XML

```
<?xml version="1.0" encoding="utf-8"?><android.support.constraint.ConstraintLayout   xmlns:android="http://schemas.android.com/apk/res/android"   xmlns:app="http://schemas.android.com/apk/res-auto"   xmlns:tools="http://schemas.android.com/tools"   android:layout_width="match_parent"   android:layout_height="match_parent"   tools:context=".Konversi">

   <LinearLayout       android:id="@+id/layout1"       android:layout_width="409dp"       android:layout_height="729dp"       android:orientation="vertical"       tools:layout_editor_absoluteX="1dp"       tools:layout_editor_absoluteY="1dp">
       <LinearLayout           android:layout_width="match_parent"           android:layout_height="wrap_content"           android:orientation="horizontal">
           <EditText               android:id="@+id/editText1"               android:layout_width="wrap_content"               android:layout_height="wrap_content"               android:layout_weight="1"               android:hint="Masukkan suhu"               android:inputType="numberDecimal"/>
           <Spinner               android:id="@+id/spinner1"               android:layout_width="wrap_content"               android:layout_height="match_parent"/>
       </LinearLayout>
       <LinearLayout           android:layout_width="match_parent"           android:layout_height="wrap_content"           android:orientation="horizontal">
           <Button               android:id="@+id/button1"               android:layout_width="wrap_content"               android:layout_height="wrap_content"               android:layout_weight="1"               android:text="Konversi" />
       </LinearLayout>
       <LinearLayout           android:layout_width="match_parent"           android:layout_height="wrap_content"           android:orientation="horizontal">
           <TextView               android:id="@+id/textViewCelcius"               android:layout_width="wrap_content"               android:layout_height="wrap_content"               android:layout_marginLeft="40dp"               android:layout_weight="1"               android:text="Celcius :"               android:textColor="#000000"               android:textStyle="bold" />
           <EditText               android:id="@+id/editTextCelcius"               android:layout_width="wrap_content"               android:layout_height="wrap_content"               android:ems="10"               android:hint="suhu celcius"               android:inputType="textPersonName" />       </LinearLayout>
       <LinearLayout           android:layout_width="match_parent"           android:layout_height="wrap_content"           android:orientation="horizontal">
           <TextView               android:id="@+id/textViewReamur"               android:layout_width="wrap_content"               android:layout_height="wrap_content"               android:layout_marginLeft="40dp"               android:layout_weight="1"               android:text="Reamur :"               android:textColor="#000000"               android:textStyle="bold" />
           <EditText               android:id="@+id/editTextReamur"               android:layout_width="wrap_content"               android:layout_height="wrap_content"               android:ems="10"               android:hint="suhu reamur"               android:inputType="textPersonName" />       </LinearLayout>
       <LinearLayout           android:layout_width="match_parent"           android:layout_height="wrap_content"           android:orientation="horizontal">
           <TextView               android:id="@+id/textViewFahrenheit"               android:layout_width="wrap_content"               android:layout_height="wrap_content"               android:layout_marginLeft="40dp"               android:layout_weight="1"               android:text="Fahrenheit :"               android:textColor="#000000"               android:textStyle="bold" />
           <EditText               android:id="@+id/editTextFahrenheit"               android:layout_width="wrap_content"               android:layout_height="wrap_content"               android:ems="10"               android:hint="suhu fahrenheit"               android:inputType="textPersonName" />       </LinearLayout>
       <LinearLayout           android:layout_width="match_parent"           android:layout_height="wrap_content"           android:orientation="horizontal">
           <TextView               android:id="@+id/textViewKelvin"               android:layout_width="wrap_content"               android:layout_height="wrap_content"               android:layout_marginLeft="40dp"               android:layout_weight="1"               android:text="Kelvin :"               android:textColor="#000000"               android:textStyle="bold" />
           <EditText               android:id="@+id/editTextKelvin"               android:layout_width="wrap_content"               android:layout_height="wrap_content"               android:ems="10"               android:hint="suhu kelvin"               android:inputType="textPersonName" />       </LinearLayout>
       <LinearLayout           android:layout_width="match_parent"           android:layout_height="wrap_content"           android:orientation="horizontal">
           <TextView               android:id="@+id/textViewRankine"               android:layout_width="wrap_content"               android:layout_height="wrap_content"               android:layout_marginLeft="40dp"               android:layout_weight="1"               android:text="Rankine :"               android:textColor="#000000"               android:textStyle="bold" />
           <EditText               android:id="@+id/editTextRankine"               android:layout_width="wrap_content"               android:layout_height="wrap_content"               android:ems="10"               android:hint="suhu Rankine"               android:inputType="textPersonName" />       </LinearLayout>
   </LinearLayout>
</android.support.constraint.ConstraintLayout>
```

Coding Java

```
package com.ratix.konversisuhu;
import android.support.v7.app.AppCompatActivity;import android.os.Bundle;import android.view.View;import android.widget.ArrayAdapter;import android.widget.Button;import android.widget.EditText;import android.widget.Spinner;import android.widget.Toast;
public class Konversi extends AppCompatActivity {
   private Spinner sp;   private EditText edt_awal, edt_C, edt_R, edt_F, edt_K, edt_Ra;   private String[] list={"C","R","F","K","Ra"};   Double awal, celcius, reamur, fahrenheit, kelvin, rankine;   ArrayAdapter adapter;   Button btnKonversi;
   @Override   protected void onCreate(Bundle savedInstanceState) {       super.onCreate(savedInstanceState);       setContentView(R.layout.activity_konversi);       sp=(Spinner) findViewById(R.id.spinner1);       edt_awal=(EditText) findViewById(R.id.editText1);       edt_C=(EditText) findViewById(R.id.editTextCelcius);       edt_R=(EditText) findViewById(R.id.editTextReamur);       edt_F=(EditText) findViewById(R.id.editTextFahrenheit);       edt_K=(EditText) findViewById(R.id.editTextKelvin);       edt_Ra=(EditText) findViewById(R.id.editTextRankine);       btnKonversi= (Button) findViewById(R.id.button1);
       adapter = new ArrayAdapter(this, android.R.layout.simple_spinner_item, list);       adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);       sp.setAdapter(adapter);
       btnKonversi.setOnClickListener(new View.OnClickListener() {           @Override           public void onClick(View v){               String satuan = String.valueOf(sp.getSelectedItemPosition());               if (edt_awal.getText().toString().equals("")) {                   Toast.makeText(getBaseContext(), "Masukkan suhu awal, jika kosong maka nilai default adalah 0", Toast.LENGTH_LONG).show();                   awal = 0.0;               } else {                   awal = Double.parseDouble(edt_awal.getText().toString());               }               if (satuan.equals("0")) {                   celcius = awal;                   reamur = 0.8 * awal;                   fahrenheit = (1.8 * awal) + 32;                   kelvin = awal + 273;                   rankine = (awal + 273.15)*1.8;
                   edt_C.setText(String.valueOf(celcius));                   edt_R.setText(String.valueOf(reamur));                   edt_F.setText(String.valueOf(fahrenheit));                   edt_K.setText(String.valueOf(kelvin));                   edt_Ra.setText(String.valueOf(rankine));               } else if (satuan.equals("1")) {                   celcius = 1.25 * awal;                   reamur = awal;                   fahrenheit = (2.25 * awal) + 32;                   kelvin = celcius + 273;                   rankine = (awal * 2.25) + 491.67;
                   edt_C.setText(String.valueOf(celcius));                   edt_R.setText(String.valueOf(reamur));                   edt_F.setText(String.valueOf(fahrenheit));                   edt_K.setText(String.valueOf(kelvin));                   edt_Ra.setText(String.valueOf(rankine));               } else if (satuan.equals("2")) {                   celcius = 0.55555 * (awal - 32);                   reamur = 0.44444 * (awal - 32);                   fahrenheit = awal;                   kelvin = celcius + 273;                   rankine = awal + 459.67;
                   edt_C.setText(String.valueOf(celcius));                   edt_R.setText(String.valueOf(reamur));                   edt_F.setText(String.valueOf(fahrenheit));                   edt_K.setText(String.valueOf(kelvin));                   edt_Ra.setText(String.valueOf(rankine));               } else if (satuan.equals("3")) {                   celcius = awal - 273;                   reamur = 0.8 * (awal - 273);                   fahrenheit = (1.8 * (awal - 273)) + 32;                   kelvin = awal;                   rankine = awal * 1.8;
                   edt_C.setText(String.valueOf(celcius));                   edt_R.setText(String.valueOf(reamur));                   edt_F.setText(String.valueOf(fahrenheit));                   edt_K.setText(String.valueOf(kelvin));                   edt_Ra.setText(String.valueOf(rankine));               }else if (satuan.equals("4")) {                   celcius = (awal - 491.67)*0.56;                   reamur = (awal / 1.8 + 273.15) * 0.8;                   fahrenheit = awal - 459.67;                   kelvin = awal - 0.56;                   reamur = awal;
                   edt_C.setText(String.valueOf(celcius));                   edt_R.setText(String.valueOf(reamur));                   edt_F.setText(String.valueOf(fahrenheit));                   edt_K.setText(String.valueOf(kelvin));                   edt_Ra.setText(String.valueOf(rankine));               }
           }
       });
   }}
```

Buat kamu yang punya tugas terkait **Java**, bisa banget joki tugas **Java** disini, selain dibantu mengerjakan, kita juga bantu jelaskan pada dokumen terpisah.

Order bisa langsung via whatsapp admin ya, jelaskan tugas yang akan dikerjakan dan juga deadline nya, admin akan membalas whatsapp kamu beserta rincian yang harus kamu bayar. Tenang saja, [pembayaran](https://stacktugas.id/pembayaran/) boleh dp 50% dan sisanya bisa kamu bayar setelah tugas selesai dikerjakan.

[Order Joki Tugas](https://stacktugas.id/)

“Tugas selesai hati pun senang”