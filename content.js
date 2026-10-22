/* ==========================================================================
   content.js  —  SİTENİN TÜM İÇERİĞİ BU DOSYADADIR
   Güncellemek için sadece bu dosyayı düzenleyin (HTML/CSS'e dokunmayın).

   KURALLAR
   - Metinler "çift tırnak" içinde yazılır. Metnin içinde çift tırnak gerekiyorsa \" yazın.
   - Satır sonlarındaki virgülleri (,) silmeyin.
   - Bir bölümü menüden gizlemek için  show: true  yerine  show: false  yazın.
   - Boş ("") bıraktığınız bağlantılar sayfada görünmez.
   ========================================================================== */

window.CONTENT = {

  /* 1) GENEL BİLGİLER (üst menü, yan panel, alt bilgi) */
  site: {
    title: "Mehmet Kemal Aydın",
    name: "Mehmet Kemal Aydın",
    highlightName: "Mehmet Kemal Aydın",      // yazar listelerinde kalın görünecek ad
    role: "Doçent",
    bio: "Hitit Üniversitesi Spor Bilimleri Fakültesi, Beden Eğitimi ve Spor Bölümü. Eğitim Programları ve Öğretim.",
    location: "",                             // şehir/ülke yazabilirsiniz
    institution: "Hitit Üniversitesi",
    photo: "",                                // fotoğraf için "files/foto.jpg" yazın (dosyayı files klasörüne yükleyin)
    lastUpdated: "14.10.2026",
    links: {
      email: "mehmetkemalaydin@hitit.edu.tr",
      orcid: "https://orcid.org/0000-0002-5611-5515",
      scholar: "",      // Google Scholar profil adresi
      yok: "",          // YÖK Akademik profil adresi
      github: "",
      linkedin: "",
      x: ""
    }
  },

  /* 2) ANA SAYFA */
  home: {
    heading: "Merhaba, ben Mehmet Kemal Aydın",
    paragraphs: [
      "Hitit Üniversitesi Spor Bilimleri Fakültesi Beden Eğitimi ve Spor Bölümü'nde Doçent olarak görev yapıyorum. Eğitim Bilimleri Temel Alanı, Eğitim Programları ve Öğretim Anabilim Dalı'ndayım.",
      "Yayınlarım ve projelerim; bilgi ve iletişim teknolojilerinin eğitimde kullanımı, öğretmenlerin dijital yeterlikleri, ölçme ve değerlendirme, program değerlendirme ve uzaktan eğitim konularında yoğunlaşmaktadır. Son yıllarda beden eğitimi ve spor alanıyla ilgili çalışmalar da yer almaktadır.",
      "Bu sayfada makalelerime, kitaplarıma, bildirilerime, projelerime ve verdiğim derslere ulaşabilirsiniz."
    ],
    showCounts: true
  },

  /* 3) ÖZGEÇMİŞ SAYFASI */
  cv: {
    show: true,
    title: "Özgeçmiş",
    pdf: "",   // CV PDF'iniz varsa "files/cv.pdf" olarak yükleyip buraya yazın
    blocks: [
      { heading: "Öğrenim", items: [
        {"when": "2013–2019", "what": "Doktora, Yıldız Teknik Üniversitesi, Sosyal Bilimler Enstitüsü, Eğitim Programları ve Öğretim", "note": "Tez: Öğretme-öğrenme sürecinde bilgi ve iletişim teknolojileri kullanımını etkileyen faktörlere ilişkin bir model önerisi"},
        {"when": "2006–2012", "what": "Yüksek Lisans (tezli), Gazi Üniversitesi, Eğitim Bilimleri Enstitüsü, Eğitim Yönetimi ve Denetimi", "note": "Tez: Kamu ve özel ilköğretim okulu müdürlerinin stratejik liderlik özellikleri ile kurumlarının örgütsel öğrenme düzeyleri arasındaki ilişki"},
        {"when": "2000–2004", "what": "Lisans, Gazi Üniversitesi, Gazi Eğitim Fakültesi, Yabancı Diller Eğitimi Bölümü", "note": ""}
      ] },
      { heading: "Akademik görevler", items: [
        {"when": "2024", "what": "Hitit Üniversitesi, Spor Bilimleri Fakültesi, Beden Eğitimi ve Spor Bölümü", "note": ""},
        {"when": "2022", "what": "Hitit Üniversitesi, Spor Bilimleri Fakültesi, Beden Eğitimi ve Spor Bölümü", "note": ""}
      ] },
      { heading: "İdari görevler", items: [
        {"when": "2023", "what": "Hitit Üniversitesi, Uzaktan Eğitim Uygulama ve Araştırma Merkezi", "note": ""},
        {"when": "2022–2023", "what": "Hitit Üniversitesi, Uzaktan Eğitim Uygulama ve Araştırma Merkezi", "note": ""},
        {"when": "2021", "what": "Hitit Üniversitesi, Rektörlük", "note": ""},
        {"when": "2021", "what": "Hitit Üniversitesi, Spor Bilimleri Fakültesi, Beden Eğitimi ve Spor Bölümü", "note": ""}
      ] },
      { heading: "Üniversite dışı deneyim", items: [
        {"when": "2014–2019", "what": "T.C. Brüksel Büyükelçiliği Eğitim Müşavirliği, Eğitim Müşavirliği Koordinatörü", "note": ""},
        {"when": "2004–2021", "what": "Milli Eğitim Bakanlığı, Öğretmen", "note": ""}
      ] },
      { heading: "Ödüller ve burslar", items: [
        {"when": "2023", "what": "TÜBİTAK UBYT", "note": "Kamu, Türkiye"},
        {"when": "2016", "what": "TÜBİTAK UBYT", "note": "Diğer, Türkiye"},
        {"when": "", "what": "Special Research Fund for Joint Doctorates, Gent Üniversitesi", "note": "Yurtdışı üniversite, Belçika"}
      ] }
    ]
  },

  /* 4) LİSTE BÖLÜMLERİ (menüde bu sırayla görünür)
     Yeni kayıt: bir satırı kopyalayıp yapıştırın, değerleri değiştirin.
       title: başlık | authors: yazarlar | venue: dergi/kongre/yayınevi | year: yıl
       date: tarih (isteğe bağlı) | tags: etiketler | url: DOI/bağlantı (başlık tıklanabilir olur)
       kitaplarda ayrıca: chapter (bölüm adı), editors, pages, isbn */
  sections: [

    { id: "makaleler", title: "Makaleler", show: true, type: "list", groupByYear: true,
       intro: "Hakemli dergilerde yayımlanan makaleler.",
       items: [
      {"title": "The indirect effect of physical activity on aggression among university student-athletes: the mediating role of state anger", "authors": "Sevim Handan Yılmaz, Mert Ayrancı, Murat Sarıkabak, Mehmet Kemal Aydın, Metin Kuş, Abdulmenaf Korkutata, Murat Çelebi, Mehmet Civan", "venue": "FRONTIERS IN PSYCHOLOGY", "year": "2026", "tags": "Uluslararası · Hakemli · SSCI · Özgün Makale", "url": "https://dx.doi.org/10.3389/fpsyg.2026.1717868"},
      {"title": "The moderating role of aerobic exercise in the relationship between stress and cognitive functions", "authors": "Mert Ayrancı, Mehmet Kemal Aydın, Metin Kuş, Murat Sarıkabak, Mehmet İsmail Tosun, Servet Ebrar Bayram, Mehmet Civan", "venue": "Scientific Reports", "year": "2025", "tags": "Uluslararası · Hakemli · SCI-Expanded · Özgün Makale", "url": "https://dx.doi.org/10.1038/s41598-025-14202-w"},
      {"title": "The complex interplay between psychological factors and sports performance: A systematic review and meta-analysis", "authors": "Mert Ayrancı, Mehmet Kemal Aydın", "venue": "PLOS One", "year": "2025", "tags": "Uluslararası · Hakemli · SCI-Expanded · Özgün Makale", "url": "https://dx.doi.org/10.1371/journal.pone.0330862"},
      {"title": "A qualitative inquiry of the value of physical education in primary schools: A call for PE", "authors": "Yasemin Serbest, Metin Kuş, Turgut Yıldırım, Mehmet Kemal Aydın", "venue": "Journal of ROL Sport Sciences", "year": "2025", "tags": "Uluslararası · Hakemli · Alan endeksleri (SportDiscuss) · Özgün Makale", "url": "https://dx.doi.org/10.70736/jrolss.497"},
      {"title": "Eğitimde Robot Kullanımını Ele Alan Çalışmaların Bibliyometrik Analizi", "authors": "Yasemin Serbest, Mehmet Kemal Aydın, Bedreddin Ali Akça", "venue": "Journal of Computer and Education Research", "year": "2025", "tags": "Uluslararası · Hakemli · TR DİZİN · Derleme Makale", "url": "https://dx.doi.org/10.18009/jcer.1231728"},
      {"title": "Teachers' Digital Competences: A Scale Construction and Validation Study", "authors": "Mehmet Kemal Aydın, Turgut Yıldırım, Metin Kuş", "venue": "Frontiers in Psychology", "year": "2024", "tags": "Uluslararası · Hakemli · SSCI · Özgün Makale", "url": "https://dx.doi.org/10.3389/fpsyg.2024.1356573"},
      {"title": "Nomophobia and smartphone addiction amidst COVID-19 home confinement: the parallel mediating role of digital gaming and social media tools usage across secondary school students", "authors": "Mehmet Kemal Aydın, Metin Kuş", "venue": "Frontiers in Psychology", "year": "2023", "tags": "Uluslararası · Hakemli · SSCI · Özgün Makale", "url": "https://dx.doi.org/10.3389/fpsyg.2023.1175555"},
      {"title": "Uncovering the Perspectives of Educators Regarding the STEM Practices in Schools", "authors": "Metin Kuş, Mehmet Kemal Aydın, Ebru Karakurt", "venue": "Bayburt Universitesi", "year": "2023", "tags": "Ulusal · Hakemli · TR DİZİN · Özgün Makale", "url": "https://dx.doi.org/10.35675/befdergi.1320735"},
      {"title": "Öğrencilerin Telefonsuz Kalma Korkusunu (Nomofobi) İnceleyen Çalışmaların Sistematik Bir Analizi", "authors": "Mehmet Kemal Aydın, Metin Kuş", "venue": "Journal of Computer and Education Research", "year": "2023", "tags": "Uluslararası · Hakemli · TR DİZİN · Derleme Makale", "url": "https://dx.doi.org/10.18009/jcer.1233559"},
      {"title": "Üniversite Dijital Eğitim Ortamını Değerlendirme Ölçeği (ÜDEODÖ): Uyarlama, Geçerlik ve Güvenirlik Çalışması", "authors": "Yasemin Serbest, Mehmet Kemal Aydın, Metin Kuş", "venue": "Journal of Computer and Education Research", "year": "2023", "tags": "Uluslararası · Hakemli · TR DİZİN · Özgün Makale", "url": "https://dx.doi.org/10.18009/jcer.1243134"},
      {"title": "Teachers’ dıgıtal competence: bıblıometrıc analysıs of the publıcatıons of the Web of Science Scientometric Database", "authors": "Mehmet Kemal Aydın, Turgut Yıldırım", "venue": "Information Technologies and Learning Tools", "year": "2022", "tags": "Uluslararası · Hakemli · Alan endeksleri (ESCI) · Derleme Makale", "url": "https://dx.doi.org/10.33407/itlt.v91i5.5048"},
      {"title": "Çocuklar İçin Oyun ve Duygu Ölçeği (ODÖ-Ç): Türkçeye Uyarlama, Geçerlik ve Güvenirlik Çalışması", "authors": "Mert Ayrancı, Mehmet Kemal Aydın", "venue": "Akdeniz Eğitim Araştırmaları Dergisi (MJER)", "year": "2022", "tags": "Ulusal · Hakemli · Diğer endeksler (EBSCO Central & Eastern European Aca...) · Özgün Makale", "url": "https://dx.doi.org/10.29329/mjer.2022.541.1"},
      {"title": "Marvin C. Alkin'in Program Değerlendirme Alanına Katkıları ve Değerlendirme Araştırmaları Merkezi Modeli", "authors": "Mehmet Kemal Aydın", "venue": "Anadolu Journal Of Educational Sciences International", "year": "2022", "tags": "Ulusal · Hakemli · TR DİZİN · Derleme Makale", "url": "https://dx.doi.org/10.18039/ajesi.899059"},
      {"title": "Teachers’ Views on Guidance and Counseling Services at Schools during the COVID-19 Pandemic: Challenges and Opportunities", "authors": "Metin Kuş, Mehmet Kemal Aydın", "venue": "Education Quarterly Reviews", "year": "2022", "tags": "Uluslararası · Hakemli · Journals Indexed in Eric · Özgün Makale", "url": "https://dx.doi.org/10.31014/aior.1993.05.03.520"},
      {"title": "A Systematic Review of Critical Factors Regarding ICT Use in Teaching and Learning", "authors": "Mehmet Kemal Aydın, Mehmet Gürol", "venue": "International Journal of Progressive Education", "year": "2019", "tags": "Uluslararası · Hakemli · Journals Indexed in Eric · Derleme Makale", "url": "https://dx.doi.org/10.29329/ijpe.2019.203.9"},
      {"title": "Öğretmenlerin FATİH Projesi'ne İlişkin Görüşlerinin İncelenmesi", "authors": "Ali Semerci, Mehmet Kemal Aydın", "venue": "Akdeniz Eğitim Araştırmaları Dergisi (MJER)", "year": "2018", "tags": "Ulusal · Hakemli · TR DİZİN · Özgün Makale", "url": "https://dx.doi.org/10.29329/mjer.2018.172.3"},
      {"title": "Examining High School Teachers' Attitudes towards ICT Use in Education", "authors": "Ali Semerci, Mehmet Kemal Aydın", "venue": "International Journal of Progressive Education", "year": "2018", "tags": "Uluslararası · Hakemli · Journals Indexed in Eric · Özgün Makale", "url": "https://dx.doi.org/10.29329/ijpe.2018.139.7"},
      {"title": "Öğretmenlerin BİT Tutumları Ölçeğinin Geliştirilmesi", "authors": "Mehmet Kemal Aydın, Ali Semerci", "venue": "Milli Eğitim", "year": "2017", "tags": "Ulusal · Hakemli · TR DİZİN · Özgün Makale", "url": ""},
      {"title": "Evaluating ICT Integration in Turkish K-12 Schools through Teachers' Views", "authors": "Mehmet Kemal Aydın, Mehmet Gürol, Ruben Vanderlinde", "venue": "EURASIA Journal of Mathematics, Science and Technology Education", "year": "2016", "tags": "Uluslararası · Hakemli · SSCI · Özgün Makale", "url": "https://dx.doi.org/10.12973/eurasia.2016.1227a"},
      {"title": "The relationship between school principals’ strategic leadership actions and organizational learning", "authors": "Mehmet Kemal Aydın, Nezahat Güçlü, Pisapia John", "venue": "American Journal of Educational Studies", "year": "2015", "tags": "Uluslararası · Hakemli · Education Full Text (H. W. Wilson) Database Covarage List · Özgün Makale", "url": ""},
      {"title": "Effects of a Haptic Augmented Simulation on K-12 Students' Achievement and their Attitudes towards Physics", "authors": "Turhan Civelek, Erdem Uçar, Hakan Üstünel, Mehmet Kemal Aydın", "venue": "EURASIA Journal of Mathematics, Science and Technology Education", "year": "2014", "tags": "Uluslararası · Hakemli · SSCI · Özgün Makale", "url": "https://dx.doi.org/10.12973/eurasia.2014.1122a"},
      {"title": "Examining the Effects of Pre-service Teachers’ Personality Traits on Their Teaching Competencies", "authors": "Mehmet Kemal Aydın, Bünyamin Bavlı, Bülent Alcı", "venue": "International Online Journal of Educational Sciences", "year": "2013", "tags": "Uluslararası · Hakemli · Education Full Text (H. W. Wilson) Database Covarage List · Özgün Makale", "url": ""}
    ]
    },

    { id: "kitaplar", title: "Kitaplar", show: true, type: "list", groupByYear: true,
       intro: "Kitaplar ve kitap bölümleri.",
       items: [
      {"title": "Yapay Zekâ Çağında Yükseköğretim: Öğrenme, Öğretim Tasarımı ve Etik", "chapter": "", "authors": "Metin Kuş, Mehmet Kemal Aydın, Ali Semerci", "venue": "Nobel Akademik Yayıncılık", "editors": "", "pages": "", "isbn": "978-625-364-282-2", "year": "2025", "tags": "Bilimsel kitap", "url": ""},
      {"title": "Dijital Eğitim Araçları", "chapter": "Ölçme ve Değerlendirme Araçları", "authors": "Yasemin Serbest, Mehmet Kemal Aydın", "venue": "Vizetek", "editors": "Metin Kuş, Mehmet Kemal Aydın", "pages": "185–210", "isbn": "978-625-5531-23-0", "year": "2024", "tags": "Kitap bölümü", "url": ""},
      {"title": "Dijital Eğitim Araçları", "chapter": "Kitlesel Açık Çevrim İçi Dersler (MOOCs)", "authors": "Metin Kuş, Mehmet Kemal Aydın", "venue": "Vizetek", "editors": "Metin Kuş, Mehmet Kemal Aydın", "pages": "17–33", "isbn": "978-625-5531-23-0", "year": "2024", "tags": "Kitap bölümü", "url": ""},
      {"title": "Eğitimde Değerlendirme", "chapter": "Uzaktan Eğitimde Değerlendirme", "authors": "Mehmet Kemal Aydın, Yasemin Serbest", "venue": "Vizetek Yayıncılık", "editors": "Mehmet Kemal Aydın, Metin Kuş", "pages": "225–246", "isbn": "978-625-94017-7-5", "year": "2023", "tags": "Kitap bölümü", "url": ""},
      {"title": "Eğitimde Program Geliştirme", "chapter": "Program Geliştirme ve Süreci", "authors": "Oktay Akbaş, Mehmet Kemal Aydın", "venue": "Pegem Akademi", "editors": "Gürbüz Ocak, Emine Akkaş-Baysal, Ramazan Yurtseven", "pages": "1–34", "isbn": "978-625-6810-87-7", "year": "2023", "tags": "Kitap bölümü", "url": ""},
      {"title": "Eğitimde Değerlendirme", "chapter": "Değerlendirmeye Giriş: Temel Kavramlar", "authors": "Mehmet Kemal Aydın", "venue": "Vizetek Yayıncılık", "editors": "Mehmet Kemal Aydın, Metin Kuş", "pages": "1–16", "isbn": "978-625-94017-7-5", "year": "2023", "tags": "Kitap bölümü", "url": ""},
      {"title": "Yükseköğretimin Yönetimi: Disiplinlerarası Bir Yaklaşım", "chapter": "Yükseköğretimde Uzaktan Eğitim", "authors": "Mehmet Kemal Aydın, Ahmet Koç", "venue": "Nobel Akademik Yayıncılık", "editors": "Semra Kıranlı-Güngör, Deniz Görgülü, Rıdvan Küçükali", "pages": "185–208", "isbn": "978-625-398-336-9", "year": "2023", "tags": "Kitap bölümü", "url": ""},
      {"title": "Kapsayıcı Eğitim: Göçmen, Mülteci ve Sığınmacıların Uyumu ve Eğitim Politikaları", "chapter": "Göçmen, Sığınmacı ve Mültecilerin Eğitimine Yönelik Türkiye'de Gerçekleştirilen Projeler ve Etkinlikler", "authors": "Ali Taş, Mehmet Kemal Aydın", "venue": "Paradigma Akademi", "editors": "Tufan Aytaç, Ali Taş", "pages": "155–170", "isbn": "978-6258187-90-8", "year": "2022", "tags": "Kitap bölümü", "url": ""},
      {"title": "Karşılaştırmalı Beden Eğitimi: Öğretim Programları, Dersler, Öğretmenler ve Örnek Uygulamalar", "chapter": "Karşılaştırmalı Eğitim: Temel Kavramlar, Tarihsel Gelişimi, Yöntemler ve Kurumlar", "authors": "Mehmet Kemal Aydın", "venue": "Vizetek", "editors": "Mehmet Kutlu, Mehmet Kemal Aydın", "pages": "1–21", "isbn": "978-625-8499-40-7", "year": "2022", "tags": "Kitap bölümü", "url": ""},
      {"title": "Kariyer Planlama ve Geliştirme: Kuram Yöntem Uygulama", "chapter": "Örgütlerde Kariyer Yönetimi ve Planlaması", "authors": "Mehmet Kemal Aydın, Ali Taş", "venue": "Anı Yayıncılık", "editors": "Ali Taş, Tufan Aytaç", "pages": "111–131", "isbn": "978-605-170-609-2", "year": "2021", "tags": "Kitap bölümü", "url": ""},
      {"title": "Eğitime Giriş", "chapter": "Eğitimin Felsefi Temelleri", "authors": "Nezahat Güçlü, Mehmet Kemal Aydın", "venue": "Nobel Yayıncılık", "editors": "Nezahat Güçlü, Murat Bülbül", "pages": "90–125", "isbn": "9786254399121", "year": "2021", "tags": "Kitap bölümü", "url": ""},
      {"title": "Çocuk ve Spor", "chapter": "Çocuklarda Gelişim Dönemleri", "authors": "Damla Nur Şahin, Mehmet Kemal Aydın", "venue": "Akademisyen Yayınevi", "editors": "Emrah Yılmaz", "pages": "1–15", "isbn": "978-625-8430-43-1", "year": "2021", "tags": "Kitap bölümü", "url": ""},
      {"title": "Program Değerlendirme: Alternatif Yaklaşımlar ve Uygulama Rehberi", "chapter": "İlk Yaklaşımlar: Tüketici ve Uzmanlık Yönelimli Yaklaşımlar", "authors": "Mehmet Kemal Aydın", "venue": "Pegem Akademi", "editors": "Mehmet Kemal Aydın, Bünyamin Bavlı", "pages": "135–164", "isbn": "978-605-241-456-9", "year": "2019", "tags": "Kitap tercümesi · Kitap bölümü", "url": ""},
      {"title": "Program Değerlendirme: Alternatif Yaklaşımlar ve Uygulama Rehberi", "chapter": "Değerlendirmede Farklı Bakış Açıları", "authors": "Mehmet Kemal Aydın", "venue": "Pegem Akademi", "editors": "Mehmet Kemal Aydın, Bünyamin Bavlı", "pages": "119–134", "isbn": "978-605-241-456-9", "year": "2019", "tags": "Kitap tercümesi · Kitap bölümü", "url": ""},
      {"title": "Multicultural Education: Diversity, Pluralism, and Democracy An International Perspective", "chapter": "British Multiculturalism: Diversity Issues and Development of Multicultural Education in Britain", "authors": "Mehmet Kemal Aydın", "venue": "LAP Lambert Academic Publishing", "editors": "Hasan Aydın", "pages": "58–91", "isbn": "978-3-659-43625-3", "year": "2013", "tags": "Kitap bölümü", "url": ""}
    ]
    },

    { id: "bildiriler", title: "Bildiriler", show: true, type: "list", groupByYear: true,
       intro: "Ulusal ve uluslararası kongre/konferans bildirileri.",
       items: [
      {"title": "Farklı duygusal zekâ düzeylerine sahip bireylerin yerel yönetimlerin spor hizmetlerine yönelik algıları", "authors": "Murat Sarıkabak, Ender Eyuboğlu, Mehmet Kemal Aydın, Mert Ayrancı", "venue": "18. Uluslararası Güncel Araştırmalarla Sosyal Bilimler Kongresi", "year": "2024", "date": "08.10.2024 – 09.10.2024", "tags": "Uluslararası · Tam metin bildiri", "url": ""},
      {"title": "Spor yapan ve yapmayan bireylerde depresyon ve duygusal zekâ", "authors": "Murat Sarıkabak, Ender Eyuboğlu, Mehmet Kemal Aydın, Mert Ayrancı", "venue": "18. Uluslararası Güncel Araştırmalarla Sosyal Bilimler Kongresi", "year": "2024", "date": "08.10.2024 – 09.10.2024", "tags": "Uluslararası · Tam metin bildiri", "url": ""},
      {"title": "Fiziksel Aktiviteye Katılımın Depresyon, Anksiyete ve İyi Oluş Üzerine Etkisi: Sistematik İnceleme ve Meta -Analiz", "authors": "Mert Ayrancı, Mehmet Kemal Aydın, Metin Kuş, Murat Sarıkabak", "venue": "22. ULUSLARARASI SPOR BİLİMLERİ KONGRESİ", "year": "2024", "date": "21.11.2024", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "Eğitimde Kullanılan Yapay Zekâ Uygulamalarının Doğurguları: Fırsatlar ve Tehditler", "authors": "Metin Kuş, Mehmet Kemal Aydın", "venue": "XI. INTERNATIONAL EURASIAN EDUCATIONAL RESEARCH CONGRESS", "year": "2024", "date": "21.05.2024 – 24.05.2024", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "Sports Participation and Critical Thinking Skills in Undergraduate Students", "authors": "Mehmet Kemal Aydın, Metin Kuş", "venue": "International conference on Education, Humanities and Social Science (ICOEHSS - 24)", "year": "2024", "date": "19.12.2024 – 20.12.2024", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "Beden Eğitimi ve Spor Derslerinin Değerlendirilmesinde Uluslararası Standartlar: SHAPE Amerika Standartları", "authors": "Tuba Önal, Mehmet Kemal Aydın", "venue": "Uluslararası 21. YY Eğitim Araştırmaları Kongresi (INER CONGRESS)", "year": "2023", "date": "08.06.2023 – 10.06.2023", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "Eğitimde İyi Uygulamalar: ABİTUR Eğitim Modelinin Tanıtımı", "authors": "Metin Kuş, Mehmet Kemal Aydın", "venue": "International Education Congress (EDUCONGRESS-2023)", "year": "2023", "date": "20.09.2023 – 23.09.2023", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "Eğitim Robotları Öğretmenlerin Yerini Alır mı? Eğitim Robotlarını Ele Alan Çalışmaların Bibliyometrik Analizi", "authors": "Mehmet Kemal Aydın, Yasemin Serbest", "venue": "3rdd International Conference on Educational Technology and Online Learning – ICETOL 2023", "year": "2023", "date": "20.06.2023 – 23.06.2023", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "Elit seviyedeki güreşçilerin zihinsel dayanıklılıklarının belirlenmesinde optimal performans duygu durumunun rolü", "authors": "Mert Ayrancı, Mehmet Kemal Aydın", "venue": "I. International Congress of Science and Health in Wrestling Sport", "year": "2023", "date": "13.10.2023 – 15.10.2023", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "Değerlendirmeye Bütüncül Bir Bakış: Hammond’un Küp Modeline Göre Değerlendirme Standartları", "authors": "Mehmet Kemal Aydın", "venue": "10. INTERNATIONAL EURASIAN EDUCATIONAL RESEARCH CONGRESS", "year": "2023", "date": "08.06.2023 – 11.06.2023", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "Relations between Body Gold Ratios and Competition Degrees in Elite Monofin Swimmers", "authors": "Mehmet İsmail Tosun, Mehmet Kutlu, Mustafa Arıcı, Mehmet Kemal Aydın, Erkan Demirkan", "venue": "1st International Conference on Science and Medicine in Aquatic Sports : Split, Croatia, 1st - 4th September 2022.", "year": "2022", "date": "01.09.2022 – 04.09.2022", "tags": "Uluslararası · Tam metin bildiri", "url": ""},
      {"title": "Öğretmenlerin Dijital Yeterlilikleri: Bibliyometrik Bir Analiz", "authors": "Mehmet Kemal Aydın, Turgut Yıldırım", "venue": "2nd International Conference on Educational Technology and Online Learning – ICETOL 2022", "year": "2022", "date": "23.06.2022 – 26.06.2022", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "Üniversite Öğrencilerinin Yaşam Becerilerinin Çeşitli Değişkenler Açısından İncelenmesi", "authors": "Mehmet Kemal Aydın, Damla Nur Şahin", "venue": "IXth EJERCongress 2022", "year": "2022", "date": "22.06.2022", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "Dezavantajlı Gruplar için Evrensel Tasarım: Bir Sistematik Analiz Çalışması", "authors": "Metin Kuş, Mehmet Kemal Aydın", "venue": "IXth EJERCongress 2022", "year": "2022", "date": "22.06.2022 – 25.06.2022", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "Öğrencilerin Telefonsuz Kalma Korkusunu (NOMOFOBİ) İnceleyen Çalışmaların Sistematik Bir Analizi", "authors": "Mehmet Kemal Aydın, Metin Kuş", "venue": "VIII. EJERCongress 2021", "year": "2021", "date": "07.07.2021", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "COVID-19 Pandemisi sürecinde, Okullarda Rehberlik ve Psikolojik Danışma Hizmetleri: Zorluklar ve Fırsatlar", "authors": "Metin Kuş, Mehmet Kemal Aydın", "venue": "VIII. EJERCongress 2021", "year": "2021", "date": "07.07.2021", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "Teachers’ Attitude Towards ICT Use in Secondary Schools: A Scale Development Study", "authors": "Mehmet Kemal Aydın, Ali Semerci, Mehmet Gürol", "venue": "13th International Conference on Cognition and Exploratory Learning in the Digital Age: CELDA 2016 Proceedings", "year": "2016", "date": "28.10.2016", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "Perceptions of Prospective Teachers on Multicultural Teaching Competence", "authors": "Mehmet Kemal Aydın, Hasan Aydın", "venue": "1. Avrasya Eğitim Araştırmaları Kongresi (1st EJER CONGRESS)", "year": "2014", "date": "24.04.2014", "tags": "Ulusal · Özet bildiri", "url": ""},
      {"title": "Examining the Dimensions of Organizational Learning in Primary Schools", "authors": "Nezahat Güçlü, Mehmet Kemal Aydın", "venue": "7th International Academic Conference Proceedings", "year": "2013", "date": "01.09.2013", "tags": "Uluslararası · Özet bildiri", "url": ""},
      {"title": "Kamu ve Özel İlköğretim Okulu Müdürlerinin Stratejik Liderlik Davranışlarının İncelenmesi", "authors": "Mehmet Kemal Aydın, Nezahat Güçlü", "venue": "8. Ulusal Eğitim Yönetimi Kongresi", "year": "2013", "date": "07.11.2013", "tags": "Ulusal · Özet bildiri", "url": ""}
    ]
    },

    { id: "projeler", title: "Projeler", show: true, type: "list", groupByYear: true,
       intro: "",
       items: [
      {"title": "Fen Eğitiminde Bilişsel Becerilere Dayalı Soru Hazırlama Eğitimi", "authors": "Ahmet Bolat, Miraç Aydın, Metin Kuş, Süleyman Yaman, Servet Ebrar Bayram, Ertan Yıldırım, Erdem Boduroğlu, Semih Aşiret, Ahmet Yıldırım, Mehmet Kemal Aydın, Tuncay Özsevgeç, Sevilay Karamustafaoğlu, Nuri Doğan, Özgül Su Özenir, Orhan Karamustafaoğlu", "venue": "TÜBİTAK 2237-A · TÜBİTAK projesi", "year": "2025", "date": "19.06.2025 – 21.06.2025", "tags": "Tamamlandı · 195.000 TL", "url": ""},
      {"title": "Yarına Bir Adım da Bizimle At", "authors": "İbrahim Sarı, Mehmet Kemal Aydın, Şahin Oruç, Hülya Çelik, Savaş Akgül, Burcu Ünal, Mustafa İçen, Hakan Akçay, Özlem Bektaş, Bülent Arif Güleç, Gül Tuncel, Ayşe Hacıoğlu", "venue": "Diğer kamu kuruluşları (yükseköğretim kurumları hariç)", "year": "2022", "date": "03.03.2022 – 15.12.2022", "tags": "Tamamlandı · 864.821,00 TL", "url": ""},
      {"title": "Kovid-19 kısıtlamaları süresince uzaktan eğitim alan üniversite öğrencilerinin stres, sanal kaytarma (cyberloafing), akıllı telefon bağımlılığı, akademik başarı ve algılanan yaşam kalitesi düzeyleri arasındaki ilişki", "authors": "Mehmet Kemal Aydın, Mehmet Kutlu, Celal Taşkıran, Esin Çağla Çağlar, Damla Nur Şahin", "venue": "Yükseköğretim kurumları tarafından desteklenen bilimsel araştırma projesi", "year": "2022", "date": "31.12.2021 – 31.12.2022", "tags": "Tamamlandı · 4.100 TL", "url": ""},
      {"title": "Öğretme-öğrenme sürecinde bilgi ve iletişim teknolojileri kullanımını etkileyen faktörlere ilişkin bir model önerisi", "authors": "Mehmet Gürol, Mehmet Kemal Aydın", "venue": "Yükseköğretim kurumları tarafından desteklenen bilimsel araştırma projesi", "year": "2019", "date": "01.01.2016 – 15.10.2019", "tags": "Tamamlandı · 13.840,03 TL", "url": ""},
      {"title": "Kamu ve özel ilköğretim okulu müdürlerinin stratejik liderlik özellikleri ile kurumlarının örgütsel öğrenme düzeyleri arasındaki ilişki", "authors": "Mehmet Kemal Aydın, Nezahat Güçlü", "venue": "Yükseköğretim kurumları tarafından desteklenen bilimsel araştırma projesi", "year": "2012", "date": "01.04.2011 – 01.06.2012", "tags": "Tamamlandı · 4.758 TL", "url": ""}
    ]
    },

    /* Dersler: her dönem için bir kutu. courses: [ ["Ders adı", haftalık saat], ... ] */
    { id: "dersler", title: "Dersler", show: true, type: "teaching",
       intro: "Hitit Üniversitesi'nde verilen dersler.",
       items: [
      {"term": "2022-2023", "level": "Lisans", "courses": [["Eğitimde Program Geliştirme", 2], ["Eğitimde Ahlak ve Etik", 2], ["Öğretim İlke ve Yöntemleri", 2], ["Eğitime Giriş", 2], ["Sınıf Yönetimi", 2], ["Karşılaştırmalı Eğitim", 2], ["Eğitimsel Liderlik", 3], ["Öğretim Teknolojileri", 2], ["Öğretmenlik Uygulaması I", 2]]},
      {"term": "2021-2022", "level": "Lisans", "courses": [["Eğitimde Araştırma Yöntemleri", 2], ["Eğitimde Ölçme ve Değerlendirme", 2], ["Öğretmenlik Uygulaması II", 2], ["Eğitim Felsefesi", 2], ["Mikro Öğretim", 2], ["Türk Eğitim Tarihi", 2], ["Türk Eğitim Sistemi ve Okul Yönetimi", 2], ["Eğitim Psikolojisi", 2], ["Karşılaştırmalı Eğitim", 2], ["Eğitimde Proje Hazırlama", 2], ["Öğretmenlik Uygulaması I", 2], ["Eğitimde Program Geliştirme", 2], ["Öğretim İlke ve Yöntemleri", 2], ["Öğretim Teknolojileri", 2], ["Eğitimde Ahlak ve Etik", 2], ["Eğitime Giriş", 2], ["Sınıf Yönetimi", 2]]},
      {"term": "2020-2021", "level": "Lisans", "courses": [["Öğretmenlik Uygulaması II", 2], ["Eğitimde Ölçme ve Değerlendirme", 2], ["Eğitimde Araştırma Yöntemleri", 2], ["Türk Eğitim Tarihi", 2], ["Okul Dışı Öğrenme Ortamları", 2], ["Eğitimde Program Geliştirme", 2], ["Eğitim Psikolojisi", 2], ["Eğitim Felsefesi", 2]]}
    ]
    },

    { id: "tezler", title: "Yönetilen Tezler", show: true, type: "list", groupByYear: false,
       intro: "",
       items: [
      {"title": "Öz düzenleme, akademik stres ve okul aidiyeti arasındaki ilişkide sporun düzenleyici etkisi", "authors": "Mehmet Civan", "venue": "Hitit Üniversitesi", "year": "2025", "tags": "Doktora", "url": ""}
    ]
    }

  ]
};
