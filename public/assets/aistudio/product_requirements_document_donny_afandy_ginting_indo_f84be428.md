# Product Requirements Document (PRD)

## Personal Portfolio Website: Donny Afandy Ginting

| Parameter | Spesifikasi | 
| ----- | ----- | 
| **Nama Proyek** | Personal Executive & Technical Portfolio Website | 
| **Pemilik Produk** | Donny Afandy Ginting | 
| **Penyusun** | Senior UI/UX Designer & Lead Web Developer | 
| **Versi Dokumen** | 3.0 (Minimalist Luxury Grey + Gen-Z Indonesian Copywriting) | 
| **Acuan Visual** | Swiss-Editorial Minimalist Grid | 
| **Palet Warna** | Luxury Grey & Pure White | 
| **Bahasa Konten Web** | Bahasa Indonesia (Gaya Gaul / Santai Ala Gen Z, Non-Kaku) | 

## 1. Ringkasan Eksekutif

Website portofolio ini dirancang untuk menampilkan profil profesional **Donny Afandy Ginting**—seorang praktisi berpengalaman di bidang **IT Infrastructure, Cloud Computing (AWS & GCP), Operational & HR Management, serta Electrical Engineering**.

Secara visual, website ini mengadopsi tata letak *editorial* minimalis dengan palet **Luxury Grey & Pure White** yang bersih dan berkelas. Namun, untuk membangun kedekatan (*relatability*) dan kesan modern yang segar, **seluruh copywriting di dalam website wajib menggunakan Bahasa Indonesia gaya gaul ala Gen Z** yang santai, *to-the-point*, *witty*, dan jauh dari kesan birokratis yang kaku—tanpa menghilangkan substansi pencapaian karier yang solid.

## 2. Prinsip Desain & Aturan Copywriting (Anti-AI Slop + Gen-Z Tone)

Tim desain dan pengembangan **wajib** menerapkan kombinasi dua standar berikut: tampilan visual yang sangat bersih dan dewasa, dipadukan dengan narasi Bahasa Indonesia kasual ala Gen Z.

1. **Zero Emoji Policy (Wajib):** Dilarang keras menggunakan emoji pada seluruh elemen antarmuka (UI), judul, label navigasi, kartu pengalaman, maupun teks mikro. Ekspresi gaya Gen Z murni dibangun lewat pilihan diksi yang cerdas, bukan tempelan emoji.

2. **Aturan Copywriting Bahasa Indonesia Ala Gen Z:**

   * **Gaya Bahasa:** Santai, mengalir, percaya diri tanpa terkesan pamer (*lowkey flex*), dan relevan dengan kultur kerja modern (contoh penggunaan kata: *sat-set, anti-ribet, anti-down, ngurusin, ngeracik, valid, no debat, gas, spill*).

   * **Campuran Istilah Teknis (Code-Switching Natural):** Gunakan istilah Inggris untuk terminologi IT/manajemen yang memang umum dipakai sehari-hari (seperti *server, cloud, lead time, SOP, troubleshooting, workflow*), lalu rangkai dengan kalimat Bahasa Indonesia kasual.

   * **Anti-Kaku & Anti-AI Slop:** Hindari bahasa terjemahan kaku seperti *"Saya adalah individu yang berdedikasi tinggi"* atau klise AI seperti *"menggali potensi tanpa batas"*. Langsung ceritakan dampak kerjanya secara jujur dan asik dibaca.

3. **Minimalisme Struktural:** Tetap pertahankan ruang kosong (*whitespace*) yang lega, garis tipis (`1px`), dan hindari efek visual murahan (*neon glow*, *drop-shadow* tebal, atau animasi berlebihan).

## 3. Tujuan & Target Audiens

### 3.1 Tujuan Utama

* Menunjukkan rekam jejak karier lintas bidang (Operasional, HR, dan IT/Cloud) dengan pembawaan yang *fresh*, modern, dan mudah dicerna oleh rekruter maupun *founder* startup/korporat.

* Memvalidasi keahlian teknis lewat deretan sertifikasi resmi (AWS, Google Cloud, Cisco CCNA, hingga Ahli K3 Umum).

* Mempermudah calon klien atau HR untuk langsung *reach out* tanpa alur yang berbelit.

### 3.2 Target Audiens

* **Tech Founders, Startup Leaders & HR Gen-Z/Milenial:** Yang mencari pemimpin operasional atau IT dengan pengalaman matang namun punya *mindset* adaptif dan komunikatif.

* **Klien Korporat (B2B):** Yang butuh jasa konsultasi *Cloud*, perapihan jaringan kantor, atau bikin SOP kerja biar makin efisien.

* **Headhunters & Executive Recruiters:** Di industri teknologi, logistik, *hospitality*, maupun manufaktur/energi.

## 4. Sistem Desain (Design System)

### 4.1 Palet Warna (Luxury Grey & White)

| Token CSS | Nama Warna | Kode Hex | Fungsi Antarmuka | 
| ----- | ----- | ----- | ----- | 
| `--bg-canvas` | Pure White | `#FFFFFF` | Latar belakang utama halaman | 
| `--bg-surface` | Alabaster Mist | `#F6F7F8` | Permukaan kartu, blok metadata, dan latar sekunder | 
| `--bg-subtle` | Architectural Grey | `#ECEEF1` | Status *hover* halus dan pemisah sekunder | 
| `--ink-primary` | Deep Obsidian | `#1C1E21` | Tipografi *display*, judul utama, dan tombol CTA | 
| `--ink-secondary` | Slate Charcoal | `#525866` | Teks paragraf utama dan deskripsi pekerjaan | 
| `--ink-muted` | Cool Ash | `#868C98` | Tahun, lokasi, kategori, dan label metadata | 
| `--border-hairline` | Platinum Line | `#E2E4E9` | Garis pemisah struktural (`1px solid`) | 

### 4.2 Tipografi

Menggunakan keluarga huruf *Neo-Grotesque Sans-Serif* tunggal: **Plus Jakarta Sans** atau **Inter**.

* **Hero Display Name:** `clamp(3.25rem, 8vw, 8rem)`, Weight `700/800`, Line-height `0.95`, Letter-spacing `-0.04em`.

* **Editorial Lead Statement:** `clamp(1.5rem, 2.8vw, 2.5rem)`, Weight `500`, Line-height `1.3`, Letter-spacing `-0.02em`.

* **Section Headings:** `clamp(2rem, 4vw, 3.25rem)`, Weight `700`, Line-height `1.1`, Letter-spacing `-0.03em`.

* **Body Copy:** `1rem (16px)`, Weight `400`, Line-height `1.65`.

## 5. Instruksi Aset Fotografi & Media

> **KETENTUAN WAJIB UNTUK DESAINER & DEVELOPER:**
> Dilarang menggunakan foto stok atau gambar generasi AI. **Lampirkan foto resmi Donny Afandy Ginting** sesuai spesifikasi berikut:

1. **Hero Portrait Utama (Wajib Dilampirkan):**

   * **Penempatan:** Tepat di bawah blok pernyataan pembuka pada *Hero Section*, menggantikan foto pada referensi visual.

   * **Rasio & Resolusi:** Rasio aspek `16:9` atau `21:9` (*full container width*), resolusi minimal `1920 x 1080 px`.

   * **Arahan Visual:** Foto *waist-up* atau *medium close-up* dengan pencahayaan bersih, ekspresi ramah namun berwibawa, mengenakan pakaian *smart-casual* atau formal bernuansa monokrom/netral (putih, abu-abu, atau gelap) dengan latar studio terang (`#E8EAED` atau putih lembut) agar selaras dengan palet *Luxury Grey & White*.

## 6. Arsitektur Informasi & Copywriting Website (Gaya Gen Z)

Seluruh teks di bawah ini adalah *copy* final/acuan yang wajib digunakan di dalam antarmuka website:

### 6.1 Top Navigation Bar

* **Kiri:** Wordmark `Donny.AG`

* **Tengah:** `Jejak Karier`, `Skill Utama`, `Sertifikasi`, `Tentang`, `Tanya Jawab`

* **Kanan:** Tombol kapsul solid `#1C1E21` teks putih `#FFFFFF`: `Ngobrol Yuk →`

### 6.2 Hero Section

* **Oversized Display Header:**

  # Donny Afandy Ginting

* **3-Column Metadata Strip (Dibatasi garis tipis atas & bawah `#E2E4E9`):**

  * *Kiri:* `Fokus Utama` / `IT Infrastructure, Cloud & Ops`

  * *Tengah:* `Domisili` / `Medan & Jakarta, Indonesia`

  * *Kanan:* `Status` / `Open for Leadership & Advisory`

* **Editorial Lead Statement (Gaya Gen Z Profesional):**

  > "Praktisi IT Infrastructure, Cloud, dan Operasional yang biasa ngeberesin sistem kerja biar makin sat-set. Dari ngawal server 24/7 sampai ngeracik SOP perusahaan, semuanya dibikin rapi dan anti-ribet."

* **Hero Image Container:**

  * `[LAMPIRKAN FOTO PROFIL RESMI DONNY AFANDY GINTING DI SINI]` — Sudut membulat `12px`.

### 6.3 Career Milestones ("Jejak Karier & Pengalaman")

Disajikan dalam **2-Column Staggered Grid** (6 kartu bersih dengan copywriting kasual namun faktual sesuai CV):

1. **Human Resources Manager**

   * *Institusi:* PT Moisani Manggala Wisata (Jakarta Timur) | *Periode:* Jan 2017 – Des 2019

   * *Tag:* `SOP Governance | Rekrutmen | Training`

   * *Copywriting:* "Ngeawal implementasi SOP di tiap divisi biar ritme kerja tim tetap on-track. Sekaligus pegang penuh proses rekrutmen dan training supaya kualitas SDM makin solid."

2. **Operational Manager**

   * *Institusi:* PT Moisani Manggala Cargo (Jakarta Timur) | *Periode:* Jul 2014 – Des 2016

   * *Tag:* `Logistik Kargo Udara | Lead-Time Control`

   * *Copywriting:* "Pastikan alur operasional kargo udara jalan mulus sesuai SOP dan ngejaga lead time pengiriman biar nggak meleset dari target standar perusahaan."

3. **IT Manager**

   * *Institusi:* PT Moisani Manggala Wisata (Jakarta Timur) | *Periode:* Jun 2012 – Jun 2014

   * *Tag:* `Intranet Architecture | Server 24/7`

   * *Copywriting:* "Ngebangun jaringan intranet perusahaan dari nol dan mantau performa server serta network 24/7 biar operasional kantor anti-down."

4. **Mill Assistant**

   * *Institusi:* PT Evans Indonesia (Kutai Kartanegara, Kaltim) | *Periode:* Mar 2011 – Mei 2012

   * *Tag:* `Proyek Bulking & Biogas | Electrical & Mechanical`

   * *Copywriting:* "Turun langsung ngawasin proyek bulking di Rantau Hempang, proyek Biogas di Benua Puhun Mill, plus ngejaga maintenance elektrikal dan mekanikal pabrik tetap aman."

5. **EDP Officer (Electronic Data Processing)**

   * *Institusi:* Aryaduta Hotel Medan (Lippo Group) | *Periode:* Des 2007 – Apr 2011

   * *Tag:* `Hospitality IT | Network Reliability`

   * *Copywriting:* "Jagain sistem manajemen hotel bintang 5 biar jalan lancar tanpa drama, sekaligus memastikan jaringan internal dan internet tamu selalu stabil."

6. **Cloud & Systems Engineering**

   * *Fokus:* AWS, Google Cloud, Linux & Python | *Periode:* 2022 – Sekarang

   * *Tag:* `Cloud Architecture | Linux | Python`

   * *Copywriting:* "Eksplorasi dan implementasi arsitektur AWS serta Google Cloud, ngoprek environment Linux (RHEL, Ubuntu, Kali), sampai bikin otomasi pakai Python."

### 6.4 Core Capabilities ("Skill & Keahlian Utama")

Menggunakan **Horizontal Row List** yang dipisahkan garis tipis `#E2E4E9` dengan nomor indeks (`01`–`04`):

* **`01` — Cloud & Infrastructure Engineering**

  * *Copy:* "Ngerancang infrastruktur cloud berbasis AWS dan Google Cloud (GCP), setup jaringan intranet kantor, plus administrasi server Linux (RHEL, Ubuntu, Kali Linux) biar performa sistem tetap ngebut."

* **`02` — Operational & Supply Chain Management**

  * *Copy:* "Ngatur ritme operasional logistik dan kargo udara biar sat-set, ngejaga lead time tetap presisi, lengkap dengan sertifikasi Ahli K3 Umum buat standar keselamatan kerja."

* **`03` — HR Governance & Perapihan SOP**

  * *Copy:* "Bikin dan ngawal Standard Operating Procedure (SOP) lintas divisi biar alur kerja tim nggak tumpang tindih, mulai dari proses rekrutmen sampai pengembangan SDM."

* **`04` — Industrial Electrical & Enterprise Systems**

  * *Copy:* "Berbekal latar Teknik Elektro Telekomunikasi, sudah terbiasa pegang maintenance elektrikal/mekanikal pabrik, proyek energi biogas, sampai sistem EDP perhotelan."

### 6.5 Education & Certifications Matrix ("Pendidikan & Sertifikasi")

Tata letak **2-Column Split** (Kolom kiri: intro & pendidikan formal; kolom kanan: matriks grid `3x3` sertifikasi resmi):

* **Judul Section:** `Validasi Skill & Sertifikasi`

* **Subjudul:** *"Bukan cuma modal pengalaman lapangan, kompetensi teknis dan manajerial juga sudah tervalidasi lewat deretan sertifikasi resmi berikut."*

* **Pendidikan Formal:**

  * **Universitas Sumatera Utara (USU), Medan** — S1 Teknik Elektro, Sub-konsentrasi Telekomunikasi (2000 – 2006).

* **Sertifikasi & Pelatihan Non-Formal (Grid Matrix 3x3):**

  1. **AWS Certified Cloud Practitioner** — AWS Certified (2022)

  2. **AWS re/Start Program** — Orbit Future Academy (2022)

  3. **Google Cloud Digital Leader** — Google Cloud Certified (2022)

  4. **Google Cloud Engineer** — Dicoding Academy (2022)

  5. **Ahli K3 Umum (Certified)** — PT Alkon Trainindo Utama (2011)

  6. **CCNA Exploration** — Webmedia Center (2009)

  7. **ESQ Leadership Training** — ESQ Leadership (2006)

  8. **The Champion Seminar** — Camar Agung (2008)

  9. **Modern English Conversation**  — LM Patra 

### 6.6 Technical Stack & Core Competencies (4-Column Minimalist Cards)

4 kartu profil ringkas di atas latar `#F6F7F8`:

1. **Cloud & OS:** AWS, Google Cloud Platform, RHEL, Ubuntu, Kali Linux.

2. **Coding & Productivity:** Python (Intermediate), Microsoft Office Suite (Excel, Word, PowerPoint), Network Troubleshooting.

3. **Ops & Safety:** Audit & Penyusunan SOP, Manajemen Lead-Time Kargo, Standar Keselamatan Kerja (K3).

4. **Soft Skills:** Komunikasi bilingual (Bahasa Indonesia & Inggris aktif), adaptif, dan terbiasa mimpin tim lintas divisi.

### 6.7 Frequently Asked Questions ("Yang Sering Ditanyain")

Tata letak 2 kolom dengan daftar pertanyaan interaktif (ikon `+` / `−` tipis):

1. **Sebenarnya fokus utama Donny Afandy Ginting di bidang apa?**

   * "Kombinasi antara manajemen operasional/SDM dan teknis IT. Jadi nggak cuma paham cara bangun infrastruktur jaringan dan Cloud (AWS & GCP), tapi juga ngerti cara ngerapihin SOP dan mimpin tim di lapangan."

2. **Pernah pegang industri apa saja sebelumnya?**

   * "Cukup beragam: mulai dari perhotelan bintang 5 (Aryaduta Hotel), industri perkebunan dan proyek biogas (PT Evans Indonesia), logistik kargo udara (PT Moisani Manggala Cargo), sampai travel Umrah & Haji (PT Moisani Manggala Wisata)."

3. **Sertifikasi teknis apa saja yang sudah dikantongi?**

   * "Sudah certified untuk AWS Cloud Practitioner, Google Cloud Digital Leader, Google Cloud Engineer (Dicoding), jaringan Cisco CCNA Exploration, dan Ahli K3 Umum."

4. **Bisa diajak kolaborasi untuk role apa saja?**

   * "Sangat terbuka buat posisi manajerial full-time (IT Manager, Operations Manager, HR/GA Manager) maupun proyek konsultasi setup infrastruktur IT, migrasi Cloud, dan perapihan SOP perusahaan."

### 6.8 Footer & Direct Contact

* **Baris Atas:**

  * *Kiri:* Judul singkat *"Lagi cari partner diskusi atau posisi strategis buat tim kamu? Gas ngobrol."* disertai tombol solid `#1C1E21` (`Unduh CV Lengkap`).

  * *Kanan:* Alamat email berukuran besar dengan panah diagonal tipis (`donny.ginting@email.com ↗` — disesuaikan saat deployment).

* **Baris Tengah:** Navigasi ringkas (`Jejak Karier`, `Skill Utama`, `Sertifikasi`, `Tanya Jawab`) dan tautan profesional (`LinkedIn`, `GitHub`).

* **Baris Bawah:** Tipografi *display* penuh selebar layar: **Donny Afandy Ginting** dalam warna `#1C1E21`.

## 7. Spesifikasi Teknis Pengembangan

* **Arsitektur Frontend:** Semantic HTML5 + Tailwind CSS atau Next.js (App Router) yang ringan dan bersih.

* **Performa:** Target skor Google Lighthouse `98–100` pada seluruh metrik (Performance, Accessibility, Best Practices, SEO).

* **Animasi:** Hanya menggunakan transisi CSS halus (`transition: opacity 0.3s ease, transform 0.3s ease`) untuk interaksi *hover* dan buka-tutup *accordion*.

* **Responsivitas:** Layout adaptif dari desktop (`1440px`), tablet (`768px`), hingga mobile (`375px`) dengan tetap menjaga keterbacaan tipografi *display*.