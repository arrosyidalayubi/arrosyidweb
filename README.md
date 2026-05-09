# 🚀 Arrosyid Personal Web & Portfolio

Website portofolio, blog, dan vlog pribadi yang dibangun dengan fokus pada performa maksimal (Lighthouse 100/100), Aksesibilitas (A11y), dan *User Experience* (UX) kelas atas. 

🌐 **Live Demo:** [arrosyid.my.id](https://arrosyid.my.id)

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-1B1F24?style=for-the-badge&logo=mdx&logoColor=white)

## ✨ Fitur Utama

- **Arsitektur Content Collections:** Menggunakan Astro `content.config.ts` dan sinkronisasi Zod untuk validasi tipe data (Blog, Vlog, Proyek) yang ketat (Type-Safe).
- **Penulisan MDX:** Mendukung penulisan konten menggunakan Markdown standar dengan keleluasaan menyisipkan komponen UI (seperti `MosaicGallery`) di tengah artikel.
- **Optimasi Gambar Otomatis:** Integrasi penuh dengan `astro:assets` untuk kompresi gambar ke WebP/AVIF, *lazy-loading*, dan pencegahan *Layout Shift*.
- **Lightbox / Image Pop-up:** Menggunakan `medium-zoom` untuk interaksi galeri dan gambar artikel layar penuh yang mulus.
- **Smart UI / UX:** 
  - *Dark/Light Mode Toggle* (tersimpan di *local storage* dan mengikuti preferensi sistem).
  - *Smart Header* (otomatis sembunyi saat *scroll* ke bawah untuk membaca, muncul saat *scroll* ke atas).
  - *Table of Contents* (Daftar Isi) dinamis dengan pemantau `IntersectionObserver` untuk menyorot bagian yang sedang dibaca.
- **Technical SEO & A11y:** Generasi sitemap otomatis, meta tag Open Graph & Twitter Cards dinamis, *semantic HTML*, dan *Skip to Content link* untuk navigasi *keyboard*.
- **View Transitions:** Transisi perpindahan antar halaman yang sangat mulus layaknya *Single Page Application* (SPA).

## 🛠️ Tech Stack

- **Framework:** [Astro.js](https://astro.build/) (SSG Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + `@tailwindcss/typography`
- **Interaktivitas:** Vanilla JavaScript (Zero-bloatware)
- **Deployment:** Dioptimalkan untuk [Cloudflare Pages](https://pages.cloudflare.com/) (bebas *vendor lock-in*).

## 📂 Struktur Direktori Utama

```text
/
├── public/                 # Aset statis publik (favicon, default-og.webp, font)
├── src/
│   ├── assets/             # Aset gambar lokal (dioptimasi oleh Astro)
│   ├── components/         # Komponen UI modular (Header, Footer, Gallery, Share)
│   ├── content/            # Sumber kebenaran data (MDX)
│   │   ├── blog/           # Artikel blog
│   │   ├── proyek/         # Studi kasus proyek portfolio
│   │   └── vlog/           # Galeri perjalanan & vlog
│   ├── layouts/            # Template layout halaman dasar
│   ├── pages/              # Routing berbasis file Astro
│   └── content.config.ts   # Skema Zod untuk validasi konten
├── astro.config.mjs        # Konfigurasi integrasi Astro (Tailwind, Sitemap, dll)
└── tailwind.config.mjs     # Konfigurasi kustomisasi tema Tailwind