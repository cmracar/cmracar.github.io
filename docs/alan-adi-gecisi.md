# cemreacar.com geçiş planı

Hedef: site `https://cemreacar.com` adresinde açılsın, `cmracar.github.io`
adresine gelen her istek de oraya yönlensin. Bunu uygulamaları (Yelken,
Kurultay), mağaza kayıtlarını ve AdMob'u bozmadan yapmak.

Bu plan iki rehberle birlikte okunur: `~/Desktop/yelken/store/site-rehberi.md`
ve `~/Desktop/kurultay/Docs/site_rehberi.md`. İkisi de alan adı değişikliğini
"önce konuşulacak" işler arasında sayıyor; bu belge o konuşmanın sonucu.

Durum (8 Ekim 2026, akşam):
- **1. adım tamam:** cemreacar.com GitHub'da doğrulandı ("Verified").
- **2. adım tamam:** Natro DNS'te dört GitHub A kaydı ve `www` →
  `cmracar.github.io` var; e-posta kayıtları yerinde. Kamu DNS'lerine
  yayılması birkaç saat sürebilir.
- cemreacar.com şu an GitHub'ın 404 sayfasını gösteriyor (beklenen).
- cmracar.github.io etkilenmedi: rehberlerdeki 21 adresin hepsi `200`.
- Site tasarım değişiklikleri henüz commit edilmedi.
- **Sıradaki: 3. adım** (uygulamaların yeni sürümleri).

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
   alanından arar. Reklam ağlarının uyduğu ads.txt kuralı, başka bir kök alan
   adına giden yönlendirmeyi izlemeyebilir. Mağazalardaki web sitesi
   cemreacar.com olmadan geçilirse doğrulama bozulabilir.
3. **Eski sürümler hep var.** Uygulamayı güncellemek yetmez; güncellemeyen
   kullanıcılar aylarca github.io'ya istek atar. Bu yüzden github.io'nun
   sonsuza kadar **çalışan bir hedefe** yönlenmesi gerekir.
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

### 3. Uygulamaların yeni sürümleri

Adresler yeni sürümlerde cemreacar.com olsun. Eski sürümler 5. adımdan sonra
yönlendirmeyle çalışmaya devam eder.

**Yelken**
- `src/utils/brand.ts`: `site`, `privacyUrl`, `termsUrl` (ve varsa diğer
  yasal adresler) → `https://cemreacar.com/yelken/...`
- `src/utils/updateCheck.ts`: `MANIFEST_URL`, `BRAND.site` üzerinden geliyor;
  brand.ts değişince değişir.
- `scripts/build-legal-site.ts`, `scripts/build-version-manifest.ts`:
  içlerindeki github.io adresi/açıklamaları.
- `store/site-rehberi.md`: adresler.

**Kurultay**
- `Assets/_Game/Scripts/Core/Online/VersionGate.cs`: `Url` →
  `https://cemreacar.com/kurultay/version.json` (`ConnectionGuard` aynı
  adresi kullanıyor).
- `Assets/_Game/Scripts/UI/AccountPopup.cs`: `Site` →
  `https://cemreacar.com/kurultay/`
- `tools/legal_site.sh`, `Docs/site_rehberi.md`: adresler.
- App Review notundaki adres (5.6 beyanı): cemreacar.com.
- Şu an incelemedeki build 12 github.io ile gidiyor. Onaylanırsa sorun değil
  (5. adımdan sonra yönlenir); yeni adresli build sonraki sürümle.

Yeni sürümler **iki mağazada da yayına çıktıktan** sonra 4. adıma geç.
`min` yükseltme kuralı aynen geçerli (Kurultay rehberi §1).

### 4. Mağaza, AdMob ve Google kayıtları

Her uygulama için, eski adresin yerine cemreacar.com:

- **App Store Connect:** Marketing URL, Support URL, Privacy Policy URL.
- **Play Console:** Web sitesi, gizlilik politikası, veri silme adresi
  (`/hesap-silme` veya `/delete-account`).
- **AdMob:** uygulamaların "app-ads.txt" durumu. Mağazadaki web sitesi
  cemreacar.com olunca AdMob yeniden tarar; durum "Doğrulandı" olana kadar
  bekle (birkaç gün sürebilir). `app-ads.txt` 5. adımdan sonra
  `https://cemreacar.com/app-ads.txt` adresinde aynı içerikle yayında olur.
- **AdMob gizlilik mesajları:** gizlilik politikası adresi.
- **Google Cloud → OAuth onay ekranı:** yetkili alan adlarına
  `cemreacar.com` ekle (Search Console doğrulaması ister), gizlilik ve
  koşullar adresleri. `github.io`yu **silme**; eski sürümler kullanıyor.

### 5. Site kodu

Site deposunda, 6. adımla aynı commit'te:

- `app/layout.tsx`: `metadataBase` → `https://cemreacar.com`, `openGraph.url`.
- Sayfaların `openGraph.url` alanları (`app/**/page.tsx`, `layout.tsx`).
- `cv/resume.html`, `cv/ozgecmis.html`: web sitesi satırı → `cemreacar.com`;
  PDF'leri yeniden üret (komut dosyaların başında).
- `public/` altındaki dosyalar **aynı yerde** kalır; yollar değişmez.
- `next.config.ts`: yine `basePath`/`trailingSlash` yok.
- Yönlendirme için `public/CNAME` **gerekmez**: site GitHub Actions ile
  yayımlanıyor, alan adı Pages ayarından tanımlanır.

### 6. Geçiş (birlikte, trafiğin düşük olduğu bir saatte)

Önce kontrol: GitHub'ın HTTPS sertifikasını alan adı tanımlanmadan önce
hazırlayıp hazırlayamadığını ve hazırlanırken github.io'nun `http://` mi
`https://` mi yönlendirdiğini GitHub belgelerinden doğrula. iOS uygulamaları
`http://` adrese izin vermez; buna göre risk süresi netleşir.

1. Repo → **Settings → Pages → Custom domain**: `cemreacar.com` → Save.
2. "DNS check successful" ve sertifika hazır olana kadar her dakika kontrol:

   ```bash
   for u in https://cemreacar.com/kurultay/version.json https://cemreacar.com/yelken/version.json https://cemreacar.com/app-ads.txt; do printf '%s %s\n' "$(curl -s -o /dev/null -w '%{http_code}' $u)" "$u"; done
   curl -sIL https://cmracar.github.io/kurultay/version.json | grep -iE '^HTTP|^location'
   ```

3. Sertifika hazır olunca **Enforce HTTPS** aç.
4. Bir şey ters giderse geri alma: **Custom domain** alanını boşalt → Save.
   github.io yeniden doğrudan yanıt verir.

### 7. Geçişten sonra kontrol

İki rehberdeki `curl` döngülerini **iki alan adıyla** çalıştır:

- `https://cemreacar.com/...` → her satır `200`.
- `https://cmracar.github.io/...` → `301`, `Location: https://cemreacar.com/...`;
  `curl -L` ile sonuç `200`.
- `curl -sI https://cemreacar.com/kurultay/version.json | head -1` → `200`
  (Kurultay `HEAD` atıyor).
- `curl -s https://cemreacar.com/app-ads.txt` → aynı içerik:
  `google.com, pub-6769070869552073, DIRECT, f08c47fec0942fa0`
- `dig +short cemreacar.com MX` → e-posta kayıtları yerinde.
- Bir telefonda Kurultay'ın eski sürümünü aç, reklam sırasını bekle: "Bağlantı
  yok" çıkmamalı.

Son olarak iki rehberi güncelle: adresler cemreacar.com, ve **"GitHub Pages
özel alan adını kaldırma"** maddesi eklensin (kaldırılırsa eski sürümlerin
yönlendirmesi biter).

---

## Kalıcı kurallar (geçişten sonra)

- Özel alan adı Pages ayarında hep kalır; cemreacar.com'un süresi dolmasın
  (Natro'da otomatik yenileme açık olsun; kayıt 8 Ekim 2028'de bitiyor).
- `cmracar` GitHub kullanıcı adı ve `cmracar.github.io` deposunun adı
  değişmez; eski sürümlerin yönlendirmesi buna bağlı.
- cemreacar.xyz de hesapta; kullanılmıyor. İstenirse aynı şekilde
  cemreacar.com'a yönlendirilebilir (Natro'nun yönlendirmesi yalnızca
  `http://` çalışıyor; HTTPS gerekirse ayrı plan).
