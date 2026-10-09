# cemreacar.com geçiş planı

Hedef: site `https://cemreacar.com` adresinde açılsın, `cmracar.github.io`
adresine gelen her istek de oraya yönlensin. Bunu uygulamaları (Yelken,
Kurultay), mağaza kayıtlarını ve AdMob'u bozmadan yapmak.

Bu plan iki rehberle birlikte okunur: `~/Desktop/yelken/store/site-rehberi.md`
ve `~/Desktop/kurultay/Docs/site_rehberi.md`. İkisi de alan adı değişikliğini
"önce konuşulacak" işler arasında sayıyor; bu belge o konuşmanın sonucu.

Durum (9 Ekim 2026, 12:55): **geçiş tamam.**
- Ana adres **https://www.cemreacar.com**. `cemreacar.com` ve
  `cmracar.github.io/*` oraya tek adımda, `https` ile 301 yönleniyor.
- Pages ayarı: Custom domain `www.cemreacar.com`, **Enforce HTTPS açık**.
- Rehberlerdeki 21 adres + iki özgeçmiş, üç alan adında da `200`;
  `app-ads.txt` aynı içerikte; MX kayıtları yerinde.
- Otomatik yenileme açık (2 Ekim 2028, 12 ay, kart sonu 6693).
- Kalan işler isteğe bağlı: 5. adım (mağaza/AdMob/OAuth adresleri),
  7. adım (uygulamalardaki adresler), iki rehberin güncellenmesi.

### Geçişte öğrenilenler (9 Ekim)

- Alan adı kaydedilince GitHub önce DNS kontrolü yapıp sertifikayı ~1 dk'da
  üretti; github.io yönlendirmesi ondan sonra başladı (risk penceresi
  oluşmadı).
- **Enforce HTTPS kapalıyken github.io yönlendirmesi `http://` hedefe gider.**
  iOS/Android uygulamalar düz http adımını reddedebilir (Kurultay:
  `insecureHttpOption: 0`). Sertifika hazır olur olmaz Enforce HTTPS'i aç.
- GitHub'ın CDN'i (Fastly) yönlendirme yanıtlarını **~1 saat**, sorgu
  parametresine bakmadan önbelleğe alıyor ve site yeniden yayımlanınca
  temizlenmiyor. Enforce HTTPS'ten önce önbelleğe giren
  `/kurultay/version.json` yönlendirmesi 11:50–12:50 arası (en azından
  Viyana sunucusunda) `https → http → https` zinciri olarak kaldı. Benzer
  bir değişiklikte Enforce HTTPS, yönlendirme başlamadan açık olmalı.
- Alan adını `cemreacar.com`'dan `www.cemreacar.com`'a çevirmek sertifikayı
  yeniden üretmeyi gerektirmedi (www sertifikası zaten hazırdı).

---

## Neden tek adımda yapılmıyor

GitHub Pages'e özel alan adı tanımlanınca `cmracar.github.io/*` adresine
gelen **her** istek 301 ile `cemreacar.com/*` adresine gider. Seçerek
uygulanamaz; `version.json` ve `app-ads.txt` de yönlenir.

1. **Kurultay kilidi.** Oyun `/kurultay/version.json` adresine internet
   denetimi için `HEAD` isteği atıyor (`ConnectionGuard.cs`). Yanıt alamazsa
   kapatılamayan "Bağlantı yok" ekranını gösteriyor. Alan adı tanımlandığı
   an github.io yönlenmeye başlar, ama GitHub cemreacar.com'un HTTPS
   sertifikasını **ondan sonra** üretir. Arada `https://cemreacar.com`
   çalışmazsa eski sürümdeki herkes kilitlenir.
2. **AdMob.** AdMob `app-ads.txt`'yi mağazadaki "geliştirici web sitesi"
   alanından arar. AdMob yardım sayfası (support.google.com/admob/answer/9363762)
   başka bir alan adına yönlendirmeye açıkça izin veriyor; github.io →
   cemreacar.com yönlendirmesi AdMob için sorun değil. Yine de mağazalardaki
   web sitesi alanını cemreacar.com yapmak isteğe bağlı (5. adım).
   Play ve App Store için yönlendirmeyi yasaklayan resmî bir kural
   bulunamadı; önemli olan son açılan sayfanın herkese açık politika olması.
   Mağaza adresleri github.io olarak kalabilir.
3. **Eski sürümler hep var.** Güncellemeyen kullanıcılar aylarca github.io'ya
   istek atar. Bu yüzden github.io'nun sonsuza kadar **çalışan bir hedefe**
   yönlenmesi gerekir; cemreacar.com'un süresi asla dolmamalı.
4. **Kurultay iOS incelemede** (0.2.0 build 12). İçinde github.io adresi var
   ve App Review notunda bu adresin doğrudan yanıt verdiği yazıyor.

---

## Adımlar

Sıra önemli. Bir adım bitmeden sonrakine geçme.

### 1. GitHub'da alan adı doğrulaması ✅ 8 Ekim 2026

DNS'i GitHub'a çevirmeden **önce**. Doğrulanmamış bir alan adını başka bir
GitHub kullanıcısı kendi reposuna bağlayabilir.

1. github.com → profil → **Settings → Pages** (hesap ayarları, repo değil)
   → **Add a domain** → `cemreacar.com`.
2. GitHub bir TXT kaydı verir: adı `_github-pages-challenge-cmracar`, değeri
   rastgele bir dizi.
3. Natro → cemreacar.com → **DNS Yönet** → Yeni Kayıt: TXT,
   `_github-pages-challenge-cmracar`, verilen değer.
4. Birkaç dakika sonra GitHub'da **Verify**.

### 2. Natro DNS: alan adını GitHub'a bağla ✅ 8 Ekim 2026

Natro → cemreacar.com → **DNS Yönet**. "Yönlendirme ya da Özel Park Sayfası"
**Kapalı** kalsın.

| Tip | Ad | Şimdi | Olacak |
|---|---|---|---|
| A | cemreacar.com | 85.159.66.93 | 185.199.108.153 |
| A | cemreacar.com | (yok) | 185.199.109.153 |
| A | cemreacar.com | (yok) | 185.199.110.153 |
| A | cemreacar.com | (yok) | 185.199.111.153 |
| CNAME | www | redirect.natrocdn.com | cmracar.github.io |

**Dokunma:** MX (mx-01/mx-02.kurumsaleposta.com), TXT SPF, TXT
`ntr._domainkey` (DKIM), CNAME `autodiscover`, SRV `_autodiscover._tcp`.
Bunlar `info@cemreacar.com` e-postası için.

Not: Natro'da `www` kaydını "düzenle" ile değiştirmek kaydı sildi ama yenisini
yazmadı (panel "başarılı" dedi). Kayıt, hedefin sonuna nokta konularak
(`cmracar.github.io.`) yeniden eklendi. Natro'da kayıt düzenledikten sonra
hep `dig @ns1.natrohost.com` ile kontrol et.

Bu adım cmracar.github.io'yu **etkilemez**. cemreacar.com bu noktada
GitHub'ın 404 sayfasını gösterir; normal.

Kontrol:

```bash
dig +short cemreacar.com A
dig +short www.cemreacar.com
dig +short cemreacar.com MX
```

İlki dört GitHub IP'si, ikincisi `cmracar.github.io.`, üçüncüsü iki
kurumsaleposta adresi dönmeli.

> **Sıra düzeltmesi (8 Ekim 2026):** İlk taslakta uygulamaları cemreacar.com'a
> çevirmek 3. adımdaydı. Bu yanlıştı: cemreacar.com geçişten önce 404 döner;
> yeni adresli bir Kurultay sürümü o sırada yayına çıksaydı `version.json`
> 404 alır ve oyuncular "Bağlantı yok" ekranına kilitlenirdi. Kural:
> **uygulamalar yeni adrese ancak o adres çalıştıktan sonra geçer.**
> Uygulamalardaki github.io adresleri geçişten sonra da yönlendirmeyle
> çalışır (Unity `UnityWebRequest` ve React Native `fetch` 301'i izliyor),
> bu yüzden uygulama güncellemesi zorunlu değil.

### 3. Hazırlık (geçiş gününden önce) ✅ 9 Ekim 2026

- **Natro'da otomatik yenilemeyi aç** (cemreacar.com → "Otomatik ödeme
  talimatı"). Geçişten sonra uygulamalar cemreacar.com'a bağımlı: alan adının
  süresi dolarsa github.io ölü bir adrese yönlenir ve bütün Kurultay
  oyuncuları kilitlenir.
- GitHub belgelerinden doğrula: özel alan adı tanımlanınca HTTPS sertifikası
  ne zaman hazır olur, bu sırada github.io `http://` mi `https://` mi
  yönlendirir. iOS uygulamaları `http://` adrese izin vermez; risk süresi buna
  göre netleşir.
- Site kodu (geçişle aynı commit'te yayına çıkacak, önceden hazırlanır):
  - `app/layout.tsx`: `metadataBase` → `https://cemreacar.com`, `openGraph.url`.
  - Sayfaların `openGraph.url` alanları (`app/**/page.tsx`, `layout.tsx`).
  - `cv/resume.html`, `cv/ozgecmis.html`: web sitesi satırı → `cemreacar.com`;
    PDF'leri yeniden üret (komut dosyaların başında).
  - `public/` altındaki dosyalar **aynı yerde** kalır; yollar değişmez.
  - `next.config.ts`: yine `basePath`/`trailingSlash` yok.
  - `public/CNAME` **gerekmez**: site GitHub Actions ile yayımlanıyor, alan
    adı Pages ayarından tanımlanır.

### 4. Geçiş ✅ 9 Ekim 2026 (www.cemreacar.com)

1. `alan-adi-gecisi` dalını `main`'e birleştir ve push et, Actions bitsin.
2. Repo → **Settings → Pages → Custom domain**: `cemreacar.com` → Save.
3. "DNS check successful" ve sertifika hazır olana kadar her dakika kontrol:

   ```bash
   for u in https://cemreacar.com/kurultay/version.json https://cemreacar.com/yelken/version.json https://cemreacar.com/app-ads.txt; do printf '%s %s\n' "$(curl -s -o /dev/null -w '%{http_code}' $u)" "$u"; done
   curl -sIL https://cmracar.github.io/kurultay/version.json | grep -iE '^HTTP|^location'
   ```

4. Sertifika hazır olunca **Enforce HTTPS** aç.
5. Bir şey ters giderse geri alma: **Custom domain** alanını boşalt → Save.
   github.io yeniden doğrudan yanıt verir.

### 5. Mağaza, AdMob ve Google kayıtları (isteğe bağlı)

**Zorunlu değil.** github.io adresleri yönlendirmeyle çalışmaya devam eder;
AdMob da başka alan adına yönlendirmeyi kabul ediyor. Çevirmenin faydası:
site GitHub Pages'e bağlı kalmaz (github.io yalnızca orada çalışır),
yönlendirme halkası ortadan kalkar, mağazada kendi alan adın görünür.
Fırsat buldukça yap. Google OAuth yeniden doğrulama isterse o gün yapılmalı
(yönlenen ana sayfa/gizlilik bağlantısı sorun çıkarabilir; doğrulanmadı).

- **App Store Connect:** Marketing URL, Support URL, Privacy Policy URL.
- **Play Console:** Web sitesi, gizlilik politikası, veri silme adresi
  (`/hesap-silme` veya `/delete-account`).
- **AdMob:** uygulamaların "app-ads.txt" durumu. Mağazadaki web sitesi
  cemreacar.com olunca AdMob yeniden tarar; "Doğrulandı" olana kadar takip et
  (birkaç gün sürebilir).
- **AdMob gizlilik mesajları:** gizlilik politikası adresi.
- **Google Cloud → OAuth onay ekranı:** yetkili alan adlarına
  `cemreacar.com` ekle (Search Console doğrulaması ister), gizlilik ve
  koşullar adresleri. `github.io`yu **silme**; eski sürümler kullanıyor.

### 6. Geçişten sonra kontrol

İki rehberdeki `curl` döngülerini **iki alan adıyla** çalıştır:

- `https://cemreacar.com/...` → her satır `200`.
- `https://cmracar.github.io/...` → `301`, `Location: https://cemreacar.com/...`;
  `curl -L` ile sonuç `200`.
- `curl -sIL https://cmracar.github.io/kurultay/version.json` → son satır
  `200` (Kurultay `HEAD` atıyor ve yönlendirmeyi izliyor).
- `curl -s https://cemreacar.com/app-ads.txt` → aynı içerik:
  `google.com, pub-6769070869552073, DIRECT, f08c47fec0942fa0`
- `dig +short cemreacar.com MX` → e-posta kayıtları yerinde.
- Bir telefonda Kurultay'ın mevcut sürümünü aç, reklam sırasını bekle:
  "Bağlantı yok" çıkmamalı. Yelken'de güncelleme kontrolü ve gizlilik
  bağlantısı açılmalı.

İki rehberi güncelle: adresler cemreacar.com, ve **"GitHub Pages özel alan
adını kaldırma / cemreacar.com'un süresini doldurma"** maddesi eklensin.

### 7. Uygulamalar (isteğe bağlı, sonraki normal sürümde)

Ancak 4. adım canlıyken. Yönlendirme adımını ortadan kaldırır ve siteyi
GitHub Pages dışına taşımayı mümkün kılar; yapılmasa da uygulamalar çalışır.

**Yelken**
- `src/utils/brand.ts`: `site`, `privacyUrl`, `termsUrl` (ve diğer yasal
  adresler) → `https://cemreacar.com/yelken/...`. `updateCheck.ts`'deki
  `MANIFEST_URL` `BRAND.site`'tan geliyor.
- `scripts/build-legal-site.ts`, `scripts/build-version-manifest.ts`,
  `store/site-rehberi.md`: adresler.

**Kurultay**
- `Assets/_Game/Scripts/Core/Online/VersionGate.cs`: `Url` →
  `https://cemreacar.com/kurultay/version.json` (`ConnectionGuard` aynı
  adresi kullanıyor).
- `Assets/_Game/Scripts/UI/AccountPopup.cs`: `Site` →
  `https://cemreacar.com/kurultay/`
- `tools/legal_site.sh`, `Docs/site_rehberi.md`: adresler.
- App Review notundaki adres (5.6 beyanı) yeni sürümle birlikte.

`min` yükseltme kuralı aynen geçerli (Kurultay rehberi §1).

---

## Kalıcı kurallar (geçişten sonra)

- Özel alan adı Pages ayarında hep kalır; cemreacar.com'un süresi dolmasın
  (Natro'da otomatik yenileme açık olsun; kayıt 8 Ekim 2028'de bitiyor).
  Süre dolarsa github.io ölü adrese yönlenir: uygulamalardaki bütün
  github.io istekleri, Kurultay'ın internet denetimi dahil, başarısız olur.
- `cmracar` GitHub kullanıcı adı ve `cmracar.github.io` deposunun adı
  değişmez; eski sürümlerin yönlendirmesi buna bağlı.
- cemreacar.xyz de hesapta; kullanılmıyor. İstenirse aynı şekilde
  cemreacar.com'a yönlendirilebilir (Natro'nun yönlendirmesi yalnızca
  `http://` çalışıyor; HTTPS gerekirse ayrı plan).
