# Akademik Sayfa

Tüm içerik **`content.js`** dosyasındadır. HTML/CSS/JS dosyalarına dokunmanız gerekmez.

## GitHub'da yayınlama
1. `kullaniciadi.github.io` adında bir repo oluşturun.
2. Bu klasördeki tüm dosyaları reponun köküne yükleyin.
3. Settings → Pages → Branch: `main`, Folder: `/ (root)` → Save.

## GitHub web arayüzünden güncelleme
1. Repoda `content.js` dosyasını açın → sağ üstteki **kalem** simgesine tıklayın.
2. Değişikliği yapın → **Commit changes**. Birkaç dakika içinde site güncellenir.

## Sık yapılanlar
- **Yeni makale:** `id: "makaleler"` bölümündeki bir satırı kopyalayıp en üste yapıştırın, değerleri değiştirin.
- **Google Scholar / YÖK / GitHub bağlantısı:** dosyanın başındaki `links` bölümüne adresi yazın. Boşlar gizlenir.
- **Fotoğraf:** `files/foto.jpg` olarak yükleyin, `photo: "files/foto.jpg"` yazın.
- **CV PDF:** `files/cv.pdf` yükleyin, `pdf: "files/cv.pdf"` yazın.
- **Bölümü gizleme:** ilgili bölümde `show: true` yerine `show: false` yazın.
- **Yeni ders dönemi:** `id: "dersler"` bölümüne `{"term":"2025-2026","level":"Lisans","courses":[["Ders adı",2]]}` satırı ekleyin.
- Virgül ve tırnakları silmemeye dikkat edin.
