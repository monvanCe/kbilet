Projeyi indiren kişinin ilk yapması gereken kök dizininde terminal açıp alttaki kodu yazmaktır:

### `npm install`

Ardından projeyi başlatmak için aynı konumda terminale alttaki kodu yazmalıdır:

### `npm start`

uygulama geliştirici modda başlayacaktır. uygulamayı test etmeye başlayabilirsiniz. varsayılan olarak en son komutu yazmanızın ardından tarayıcınızda sekmede yaptığım uygulamayı göreceksiniz.

uygulamayı yazarken state management etmek için jotai adlı 3. parti bir kütüphane kullandım. bu kütüphanenin öğrenmesi kolaydır ve uygulamaya dökmekte kolaydır.
bu uygulam sayesinde uzun configurasyonlar yazmak zorunda kalmıyorsunuz. ayrıca size local verileri yönetmenize de imkan veriyor. normal şartlarda context yapısını kendim kurardım bu sayede yönetimi
kolay olurdu fakat tabi bunun zorlukları da var. jotai bütün herşeyi benim için çözüyor.
navigasyon yönetimi için react-router-dom adlı resmi kütüphaneyi kullandım. olabildiğince kütüphane yüklemekten kaçınmak istedim.
son olarak bootstrap 4.6.2 kullandım. bu uzun uzun stil yazmaktan kurtardı beni. alışık olduğum bir şekilde sadece className parametresini doldurarak istediğim gibi tasarımı düzenlememe yardımcı oldu.
tabi yaptığım uygulama da çok gelişmiş bir tasarım olmasa da bootstrap 4.6.2 aslında her şeyi yapabilmemize olanak sağlıyor.
son olarak otobüs şemasından bahsetmek istiyorum. otobüs'ün şeklini bir svg dosyası şeklinde internetten indirdim. tabi bu indirdiğim haliyle jsx kullanımına uygun değildi. gerekli düzeltmeleri yapmam gerekti. ardından dinamik olarak yönetmek için bir component içinde svg dosyasının sahip olduğu className'leri yönettim. aslında sonradan bazı classlar oluşturdum. gerekli durumlarda bu classları kullanmasını if koşulu ile sağladım.
uygulama da gerekli kısımlarda veriler javascript ile yönetilirken gerekli kısımlarda parametreler ile veri alışverişi sağlanmıştır. bu koşullara göre güvenlik ve performans arasında seçim yapmamızı gerekiyor.

# kbilet
