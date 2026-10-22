# Akademik Sayfa

Tüm içerik **content.js** dosyasındadır. HTML/CSS/JS dosyalarına dokunmanız gerekmez.

## Yayınlama (GitHub Pages)
1. `kullaniciadi.github.io` adlı bir repo oluşturun.
2. Bu klasörün **içindekileri** (`index.html`, `style.css`, `script.js`, `content.js`, `README.md`, varsa `files/`) reponun köküne yükleyin. Zip'in kendisini değil.
3. Settings > Pages: `main` dalı, `/ (root)`.
4. Eski dosyalar (ör. `data.js`) repoda kalmışsa silin.

## Güncelleme
- GitHub'da `content.js` dosyasını açın, kalem simgesine tıklayın, düzenleyin, **Commit changes** deyin.
- Yeni yayın: ilgili listede bir satırı kopyalayıp başa yapıştırın, değerleri değiştirin.
- Fotoğraf: `files/foto.jpg` yükleyin, `photo: "files/foto.jpg"` yazın.
- CV PDF: `files/cv.pdf` yükleyin, `pdf: "files/cv.pdf"` yazın.
- Bir bölümü gizlemek için `show: false`.

## Renkler
`style.css` dosyasının en üstündeki `:root` (açık tema) ve `[data-theme="dark"]` (koyu tema) bloklarında. Ana renk `--primary` (bordo), vurgu `--accent` (altın).
