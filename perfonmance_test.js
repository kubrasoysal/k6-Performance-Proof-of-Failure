import http from 'k6/http';
import { sleep } from 'k6';

// KRİTİK KISIM: 1. Ayarlar (Yük ve Performans Bütçesi)
export const options = {
    // a. Yük Tanımı: 30 saniye boyunca 5 sanal kullanıcı (VU)
    vus: 5,        
    duration: '30s', 

    // b. Performans Bütçesi (Thresholds)
    thresholds: {
    // Önceki: 1500ms (BAŞARILI oldu)
    // Yeni Hedef: Gerçekleşen 809.44ms değerinin altı (Örneğin 500ms)
        http_req_duration: ['p(95)<500'], 
        
        // Ek İddia: Hata oranı %1'in altında olmalı.
        http_req_failed: ['rate<0.01'], 
    },
};

// 2. Test Senaryosu (Her bir sanal kullanıcı tarafından çalıştırılır)
export default function () {
    // Hedef URL: Large & Deep DOM sayfası
    http.get('https://the-internet.herokuapp.com/large');
    
    // Yükü simüle etmek için 1 saniye bekleme
    sleep(1); 

}