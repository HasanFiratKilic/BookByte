## My Library (Expo React Native)

Bu proje, kullanıcıların kendi kitaplıklarını yönetebildiği bir Expo React Native uygulamasıdır. Firebase Authentication ile oturum açma/kayıt olma, Realtime Database ile kitap verilerini tutma, kitap ekleme/düzenleme/silme ve filtreleme özellikleri içerir.

### Tanıtım

My Library; okuduğunuz, okumayı planladığınız ve yarım bıraktığınız kitapları tek bir yerde toplamanıza yardımcı olan basit ve hızlı bir mobil uygulamadır. E-posta ile giriş yaparak kişisel kitaplığınızı oluşturur, kitaplara durum ve kategori atar, filtreler ile aradığınızı hızla bulursunuz. Minimal arayüzü ve pratik akışları ile kitap yönetimi deneyimini kolaylaştırır.

### Özellikler
- **Kimlik Doğrulama**: Firebase Auth ile e-posta/şifre bazlı giriş ve kayıt
- **Kitaplık Yönetimi**: Kitap ekle, güncelle, sil; durum ve kategori yönetimi
- **Filtreleme ve Arama**: Durum/kategori seçiciler ve filtre kartları
- **Modern Arayüz**: React Navigation, modal ve bildirim bileşenleri

### Ekran Görüntüleri

Aşağıdaki görselleri `assets/screenshots/` klasörüne bu dosya adlarıyla koyabilirsiniz. Yerleştirdikten sonra README otomatik olarak görselleri gösterecektir.

- `assets/screenshots/01-sign-in.png` – Giriş ekranı
- `assets/screenshots/02-sign-up.png` – Kayıt ekranı
- `assets/screenshots/03-library-empty.png` – Boş kitaplık
- `assets/screenshots/04-library.png` – Kitap listesi
- `assets/screenshots/05-save-book.png` – Kitap ekleme
- `assets/screenshots/06-book-update.png` – Kitap detay/güncelleme
- `assets/screenshots/07-filters.png` – Filtreler
- `assets/screenshots/08-settings.png` – Ayarlar

Önerilen çözünürlük: 1080×2340 veya cihazınızın doğal ekran çözünürlüğü.

```startLine:endLine:assets/screenshots
assets/screenshots/
├─ 01-sign-in.png
├─ 02-sign-up.png
├─ 03-library-empty.png
├─ 04-library.png
├─ 05-save-book.png
├─ 06-book-update.png
├─ 07-filters.png
└─ 08-settings.png
```

Örnek yerleşim:

![Giriş](assets/screenshots/01-sign-in.png)
![Kayıt](assets/screenshots/02-sign-up.png)
![Kitaplık](assets/screenshots/04-library.png)
![Kitap Ekle](assets/screenshots/05-save-book.png)

### Teknolojiler
- **Expo** `~54` ve **React Native** `0.81`
- **React** `19`
- **React Navigation** (`@react-navigation/native`, `@react-navigation/native-stack`)
- **Firebase** `^12` (Auth + Realtime Database)
- **Formik** ve **Yup** (form doğrulama)
- **react-native-flash-message**, **react-native-modal**, **@expo/vector-icons**

---

### Başlangıç

1) Depoyu indirin ve bağımlılıkları kurun:

```bash
pnpm i || yarn || npm i
```

2) Firebase yapılandırmasını doldurun:
- `firebaseConfig.js` içinde `firebaseConfig` nesnesini kendi değerlerinizle doldurun.
  - Auth ve Realtime Database etkin olmalı.

```startLine:endLine:firebaseConfig.js
// Firebase yapılandırması
const firebaseConfig = {
  // apiKey: "...",
  // authDomain: "...",
  // databaseURL: "...",
  // projectId: "...",
  // storageBucket: "...",
  // messagingSenderId: "...",
  // appId: "..."
};
```

3) Uygulamayı çalıştırın:

```bash
# Expo yerel geliştirme
npm run start

# Android cihaz/simülatör
npm run android

# iOS simülatör (macOS)
npm run ios

# Web hedefi (sınırlı)
npm run web
```

> Komutlar `package.json` içindedir ve `expo start` tabanlıdır.

---

### Proje Yapısı

```startLine:endLine:.
.
├─ app.json                # Expo uygulama yapılandırması
├─ eas.json                # EAS Build profilleri
├─ index.js                # Giriş noktası (registerRootComponent)
├─ Router.js               # Navigasyon ve ekran yönlendirmesi
├─ firebaseConfig.js       # Firebase başlatma ve dışa aktarımlar
├─ assets/                 # Uygulama ikonları ve görseller
├─ src/
│  ├─ pages/               # Ekranlar
│  │  ├─ SignIn/
│  │  ├─ SignUp/
│  │  ├─ Library/
│  │  ├─ SaveBook/
│  │  └─ BookUpdate/
│  ├─ components/          # Yeniden kullanılabilir bileşenler
│  ├─ utile/               # Yardımcı fonksiyonlar (renkler, hata mesajı çevirileri)
│  └─ validation/          # Yup şemaları
└─ package.json
```

Önemli dosyalar:
- `Router.js`: Oturum durumuna göre başlangıç rotasını belirler ve ekranları tanımlar.
- `firebaseConfig.js`: `initializeApp`, `initializeAuth` (AsyncStorage kalıcılığı ile) ve Realtime Database kurulumu.
- `src/pages/*`: Giriş, kayıt, kitaplık, kitap kaydetme ve güncelleme ekranları.
- `src/components/*`: Butonlar, kartlar, modal ve filtre bileşenleri.

---

### Çevre Değişkenleri ve Firebase

Projede Firebase yapılandırması doğrudan `firebaseConfig.js` içine girilmektedir. İsterseniz aşağıdaki gibi `.env` yaklaşımına geçiş yapabilirsiniz:

```js
// .env (örnek)
EXPO_PUBLIC_FIREBASE_API_KEY=...
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=...
EXPO_PUBLIC_FIREBASE_DATABASE_URL=...
EXPO_PUBLIC_FIREBASE_PROJECT_ID=...
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=...
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
EXPO_PUBLIC_FIREBASE_APP_ID=...
```

Ve `firebaseConfig.js` içinde `process.env.EXPO_PUBLIC_*` değerlerini kullanın. Expo 54 ile `EXPO_PUBLIC_*` öneki gereklidir.

---

### EAS / Derleme Notları

- `app.json` Android paket adı: `com.frtklc.my_library`
- `eas.json` içinde `development`, `preview`, `production` profilleri tanımlıdır.
- Üretim için EAS Build kullanabilirsiniz. Örnek:

```bash
eas build -p android --profile production
```

> Gerekli: `eas-cli` ve Expo hesabı. Android için `keystore`, iOS için `certs` gereklidir.

---

### Komutlar

- `npm run start`: Expo geliştirici sunucusu
- `npm run android`: Android cihaz/simülatörde başlat
- `npm run ios`: iOS simülatörde başlat (macOS)
- `npm run web`: Web hedefi

---

### Kod Kalitesi ve Stiller

- Bileşenler ve stiller `src/components/*Styles.js` ve `src/pages/*Styles.js` altında ayrıştırılmıştır.
- Form yönetimi için `Formik`, doğrulama için `Yup` kullanılır (`src/validation`).

---

### Sorun Giderme

- Boş ekran/gri ekran: `firebaseConfig` değerlerinin doğru olduğundan emin olun; `Router.js` içinde `loading` durumunda `null` dönüyor.
- Android cihaz bağlanmıyor: Cihazın ve bilgisayarın aynı ağda olduğundan emin olun, Expo QR ile bağlanın.
- Modül bulunamadı: `node_modules` temizleyip yeniden kurun ve Metro önbelleğini sıfırlayın.

```bash
rm -rf node_modules package-lock.json yarn.lock
npm i
expo start -c
```

---

### Lisans

Bu proje için lisans belirtilmemiştir. Kurumsal kullanımda lisans eklemeyi değerlendirin.

