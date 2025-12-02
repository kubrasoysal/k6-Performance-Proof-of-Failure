#  Performans Testi: Large & Deep DOM Sayfasında Hata Kanıtı (k6)

Bu depo, "The Internet by Herokuapp" hedef uygulamasının **"Large & Deep DOM"** uç noktasında (`/large`) tanımlanmış performans bütçesinin aşıldığını kanıtlamak amacıyla oluşturulmuş otomatik bir yük/performans testini içerir.

Test, k6 aracı kullanılarak yürütülmüş ve 5 Sanal Kullanıcı (VU) yükü altında 95. Persentil Yanıt Süresi (p95) için belirlenen **500ms eşiğini** aşarak hatayı kanıtlamıştır.

***
##  Proje Amacı ve Sonuç

| Ölçüt | Tanımlanan Bütçe (Threshold) | Gerçekleşen Değer | Durum |
| :--- | :--- | :--- | :--- |
| **95. Persentil (p95) Yanıt Süresi** | $< 500ms$ | **667.13ms** | ❌ **BAŞARISIZ (FAIL)** |

Bu testin temel amacı, hedef uygulamada bir performans kusurunun varlığını otomatik bir test betiği ile kanıtlamaktır.

***
##  Kurulum ve Çalıştırma

### Gereksinimler
* **k6** (v1.4.1)
* **Windows PowerShell** (Terminal uyumluluğu nedeniyle önerilir)

### Betiği Çalıştırma
1. Bu depoyu bilgisayarınıza klonlayın.
2. `performance_test.js` dosyasının bulunduğu dizine gidin.
3. Aşağıdaki komutu çalıştırın:
   ```bash
   k6 run performance_test.js



# Çalışma Ekran Görüntüleri (Proof of Work)

## 1. Test Betiği (performance_test.js)
Test, 5 Sanal Kullanıcı (VU) ve 30 saniye süreyle çalışmak üzere yapılandırılmış ve hata kanıtını elde etmek için başarısızlık eşiği (threshold) $p95 < 500ms$ olarak belirlenmiştir.

![image alt](https://github.com/kubrasoysal/k6-Performance-Proof-of-Failure/blob/592efb24cdc9b8ebf63f9899e0b278b39a968455/test-1.png)


## 2. Kurulum ve Terminal Zorlukları
k6'yı Chocolatey ile kurma girişiminin başarısız olması ve ardından PowerShell'e geçişi zorunlu kılan dosya yolu/terminal hataları.

Chocolatey Hatası (Kurulum Zorluğu): (Bu, manuel kurulumu gerektiren ilk engeldi.)

Yol/Dosya Hatası (Terminal Uyumsuzluğu): (Bu, PowerShell'e geçişi zorunlu kılan hataydı.)

![image alt](https://github.com/kubrasoysal/k6-Performance-Proof-of-Failure/blob/592efb24cdc9b8ebf63f9899e0b278b39a968455/test-2.png)


## 3. Nihai Başarısızlık (FAIL) Kanıtı
Testin 30 saniye sonunda FAIL olarak sonuçlandığı, $p95$ bütçesinin aşıldığı ve hata mesajının göründüğü kritik terminal çıktısı.

![image alt](https://github.com/kubrasoysal/k6-Performance-Proof-of-Failure/blob/592efb24cdc9b8ebf63f9899e0b278b39a968455/test-3.1.png)
![image alt](https://github.com/kubrasoysal/k6-Performance-Proof-of-Failure/blob/592efb24cdc9b8ebf63f9899e0b278b39a968455/test-3.2.png)

