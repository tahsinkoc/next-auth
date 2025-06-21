# NextAuth + Auth0 Kimlik Doğrulama
- Projenin yayınlanmış haline bu linkten erişebilir ve test edebilirsiniz: <a target="_blank" href="https://next-auth-blond-one.vercel.app/">https://next-auth-blond-one.vercel.app/</a>
## Kullanılan Teknolojiler
- Next.js 14+ (App Router)
- NextAuth.js
- Auth0 (OAuth Provider)
- JWT (JSON Web Token)
- TypeScript
- TailwindCSS
- Git / GitHub
- .env yapılandırması (12 Factor Uygulaması)

## Özellikler
- OAuth ile güvenli kullanıcı giriş sistemi
- JWT tabanlı stateless oturum yönetimi
- Middleware ile sayfa koruma
- Modern ve responsive login arayüzü (TailwindCSS ile)
- 12-Factor prensiplerine uygun yapılandırma ve yönetim

## Proje Yapısı
- `/auth/login` – Giriş sayfası
- `/dashboard` – Korumalı kullanıcı paneli
- `middleware.ts` – Yetkilendirme kontrolü

# Test & Validasyon
- Manuel olarak login, redirect ve middleware ile sayfa koruma test edilmiştir.


# Repoyu klonlayın:
   ```bash
   git clone https://github.com/kullaniciAdi/next-auth.git
   cd next-auth
```
# Kendi .env dosyanızı oluşturun

```env
  AUTH0_CLIENT_ID=
  AUTH0_CLIENT_SECRET=
  AUTH0_ISSUER=
  NEXTAUTH_SECRET=
  NEXTAUTH_URL=http://localhost:3000
```

# Notlar
  - Projenin yayınlanmış haline bu linkten erişebilir ve test edebilirsiniz: <a target="_blank" href="https://next-auth-blond-one.vercel.app/">https://next-auth-blond-one.vercel.app/</a>
  - Bu proje, 12-Factor App prensiplerine uygun olarak yapılandırılmıştır.
  - OAuth ile güvenli, JWT tabanlı stateless oturum yönetimi sağlar.



