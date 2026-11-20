import { useState } from 'react';
import { ArrowDownToLine, Check, Copy } from 'lucide-react';
import {
  CAREER_MILESTONES,
  CERTIFICATIONS,
  CONTACT_INFO,
  CORE_CAPABILITIES,
  ENDORSEMENTS,
  FAQ_ITEMS,
  HERO_DATA,
  INSIGHTS_ARTICLES,
  TECH_STACK_CARDS,
  type ArticleItem,
  type CareerMilestone,
} from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { ResilientImage } from './components/ResilientImage';
import {
  ArticleModal,
  ContactModal,
  CvPreviewModal,
  MilestoneModal,
} from './components/Modals';

type MilestoneFilter = 'Semua' | CareerMilestone['category'];

const FILTER_OPTIONS: MilestoneFilter[] = [
  'Semua',
  'Cloud & IT',
  'Operasional & HR',
  'Engineering',
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState<MilestoneFilter>('Semua');
  const [selectedMilestone, setSelectedMilestone] = useState<CareerMilestone | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedFooterEmail, setCopiedFooterEmail] = useState(false);

  const filteredMilestones =
    activeFilter === 'Semua'
      ? CAREER_MILESTONES
      : CAREER_MILESTONES.filter((item) => item.category === activeFilter);

  const handleOpenContact = (subject = '') => {
    setContactSubject(subject);
    setIsContactOpen(true);
  };

  const handleCopyFooterEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopiedFooterEmail(true);
      setTimeout(() => setCopiedFooterEmail(false), 2200);
    } catch {
      setCopiedFooterEmail(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-[#1C1E21]">
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main>
        {/* BEGIN: Hero Section */}
        <section
          id="hero"
          className="pt-10 sm:pt-14 pb-16 sm:pb-20 border-b border-[#E2E4E9] overflow-hidden"
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            {/* Oversized Edge-to-Edge Display Name */}
            <div className="w-full text-left mb-6 sm:mb-8">
              <h1 className="huge-name-display font-extrabold tracking-tight text-[#1C1E21] uppercase select-none">
                {HERO_DATA.fullName}
              </h1>
            </div>

            {/* 3-Column Swiss Metadata Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 py-4 border-t border-b border-[#E2E4E9] text-xs sm:text-sm text-[#525866] font-medium mb-10 sm:mb-14">
              <div className="flex items-center sm:justify-start">
                <span>Fokus Utama · {HERO_DATA.focus}</span>
              </div>
              <div className="flex items-center sm:justify-center">
                <span>Domisili · {HERO_DATA.location}</span>
              </div>
              <div className="flex items-center sm:justify-end text-[#1C1E21]">
                <span>Status · {HERO_DATA.status}</span>
              </div>
            </div>

            {/* Centered Editorial Lead Statement */}
            <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
              <p className="text-xl sm:text-2xl md:text-3xl text-[#1C1E21] font-semibold leading-relaxed tracking-tight">
                “{HERO_DATA.leadStatement}”
              </p>
            </div>

            {/* Full-Width Landscape Hero Portrait */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#F6F7F8] border border-[#E2E4E9]">
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#ECEEF1]">
                <ResilientImage
                  src={HERO_DATA.portraitUrl}
                  alt="Donny Afandy Ginting — IT Infrastructure, Cloud & Operations Leader"
                  fallbackLabel={HERO_DATA.fullName}
                  className="w-full h-full object-cover object-[center_28%] transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#E2E4E9] text-xs sm:text-sm font-semibold text-[#1C1E21]">
                  {HERO_DATA.portraitCaption}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: Hero Section */}

        {/* BEGIN: Jejak Karier & Pengalaman (2-Column Asymmetrical Grid) */}
        <section id="works" className="py-20 lg:py-28 border-b border-[#E2E4E9]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C1E21] mb-4">
                  Jejak Karier &amp; Pengalaman
                </h2>
                <p className="text-[#525866] text-base sm:text-lg leading-relaxed">
                  Rekam jejak lintas industri—mulai dari ngawal infrastruktur cloud dan server 24/7, kargo udara, fasilitas energi biogas, hingga tata kelola SDM.
                </p>
              </div>

              {/* Interactive Domain Filter Tabs */}
              <div
                role="group"
                aria-label="Filter pengalaman berdasarkan bidang"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F6F7F8] border border-[#E2E4E9] rounded-lg self-start lg:self-auto"
              >
                {FILTER_OPTIONS.map((option) => {
                  const isActive = activeFilter === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setActiveFilter(option)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-white text-[#1C1E21] shadow-xs'
                          : 'text-[#525866] hover:text-[#1C1E21]'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {filteredMilestones.map((item) => (
                <article
                  key={item.id}
                  className="group flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedMilestone(item)}
                    className="text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1E21] cursor-pointer"
                  >
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#F6F7F8] border border-[#E2E4E9] mb-5 transition-transform duration-200 group-hover:-translate-y-1">
                      <ResilientImage
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        fallbackLabel={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#868C98] font-medium mb-1.5">
                      <span className="text-[#1C1E21] font-semibold">{item.role}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.institution}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{item.period}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#1C1E21] group-hover:underline underline-offset-4 decoration-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#525866] mt-2 leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#E2E4E9] flex flex-wrap items-center justify-between gap-2 text-xs text-[#525866] font-medium">
                      <div className="flex flex-wrap items-center gap-2.5">
                        {item.tags.map((tag, index) => (
                          <span key={tag} className="inline-flex items-center gap-2.5">
                            <span>{tag}</span>
                            {index < item.tags.length - 1 && (
                              <span aria-hidden="true" className="text-[#868C98]">
                                ·
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                      <span className="text-[#1C1E21] font-semibold group-hover:translate-x-0.5 transition-transform">
                        Detail ↗
                      </span>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* END: Jejak Karier & Pengalaman */}

        {/* BEGIN: Skill & Keahlian Utama (Horizontal Row List + 4-Column Tech Stack) */}
        <section id="expertise" className="py-20 lg:py-28 border-b border-[#E2E4E9] bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C1E21] mb-3">
                Skill &amp; Keahlian Utama
              </h2>
              <p className="text-[#525866] text-base sm:text-lg leading-relaxed">
                Kombinasi keahlian teknis cloud, reliabilitas infrastruktur IT, operasional rantai pasok, dan tata kelola tim lintas divisi.
              </p>
            </div>

            <div className="border-t border-[#E2E4E9]">
              {CORE_CAPABILITIES.map((cap) => (
                <div
                  key={cap.index}
                  className="py-8 sm:py-12 border-b border-[#E2E4E9] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  <div className="lg:col-span-1 text-[#868C98] font-mono text-sm tabular-nums">
                    {cap.index}
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1C1E21] tracking-tight">
                      {cap.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                  <div className="lg:col-span-3 flex justify-start lg:justify-end gap-2">
                    {cap.thumbnails.map((thumb) => (
                      <ResilientImage
                        key={thumb.url}
                        src={thumb.url}
                        alt={thumb.alt}
                        fallbackLabel={cap.title}
                        className="w-16 h-16 rounded-md object-cover border border-[#E2E4E9] bg-[#F6F7F8]"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 4-Column Technical Stack & Core Competencies */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TECH_STACK_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="p-6 rounded-xl bg-[#F6F7F8] border border-[#E2E4E9] flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-mono text-[#868C98] mb-2">{card.category}</div>
                    <h4 className="text-base font-bold text-[#1C1E21] mb-2">{card.title}</h4>
                    <p className="text-sm font-medium text-[#1C1E21] leading-snug mb-3">
                      {card.items}
                    </p>
                  </div>
                  <p className="text-xs text-[#525866] leading-relaxed pt-3 border-t border-[#E2E4E9]">
                    {card.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* END: Skill & Keahlian Utama */}

        {/* BEGIN: Validasi Skill & Sertifikasi (2-Column Split + 3x3 Matrix) */}
        <section id="credentials" className="py-20 lg:py-28 border-b border-[#E2E4E9] bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Intro + Formal Education */}
              <div className="lg:col-span-5">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C1E21] mb-6 leading-tight">
                  Validasi Skill &amp; Sertifikasi
                </h2>
                <p className="text-[#525866] text-base sm:text-lg mb-8 leading-relaxed">
                  Bukan cuma modal pengalaman lapangan, kompetensi teknis dan manajerial juga sudah tervalidasi lewat pendidikan Teknik Elektro Universitas Sumatera Utara (USU) dan deretan sertifikasi resmi berikut.
                </p>

                <div className="p-6 bg-[#F6F7F8] rounded-xl border border-[#E2E4E9]">
                  <div className="text-xs uppercase tracking-wider text-[#868C98] font-semibold mb-2">
                    Pendidikan Formal · 2000 – 2006
                  </div>
                  <div className="text-lg font-bold text-[#1C1E21]">
                    Universitas Sumatera Utara (USU), Medan
                  </div>
                  <div className="text-sm text-[#525866] mt-1">
                    S1 Teknik Elektro — Sub-konsentrasi Telekomunikasi
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#E2E4E9] text-xs font-medium text-[#1C1E21]">
                    Terakreditasi · Dasar Teknik Sistem &amp; Jaringan Telekomunikasi
                  </div>
                </div>
              </div>

              {/* Right Column: 3x3 Minimal Monochrome Grid */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#E2E4E9] border border-[#E2E4E9] rounded-xl overflow-hidden">
                  {CERTIFICATIONS.map((cert) => (
                    <div
                      key={cert.title}
                      className="bg-white p-6 flex flex-col justify-between min-h-44 hover:bg-[#F6F7F8] transition-colors duration-150"
                    >
                      <span className="text-xs font-mono text-[#868C98]">{cert.issuer}</span>
                      <div className="my-3">
                        <h4 className="font-bold text-sm text-[#1C1E21] leading-snug">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-[#525866] mt-1 leading-relaxed">{cert.detail}</p>
                      </div>
                      <div className="text-xs font-mono font-medium text-[#1C1E21] tabular-nums">
                        {cert.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: Validasi Skill & Sertifikasi */}

        {/* BEGIN: Endorsements Section */}
        <section className="py-20 lg:py-28 border-b border-[#E2E4E9] bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C1E21] mb-3">
                Testimoni Rekan &amp; Pimpinan
              </h2>
              <p className="text-[#525866] text-base sm:text-lg leading-relaxed">
                Catatan dari pimpinan operasional, plant manager, dan mitra teknis yang pernah berkolaborasi langsung di lapangan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ENDORSEMENTS.map((endorsement) => (
                <div
                  key={endorsement.name}
                  className="p-7 rounded-xl bg-[#F6F7F8] border border-[#E2E4E9] flex flex-col justify-between"
                >
                  <div>
                    <div className="text-3xl font-serif text-[#1C1E21] leading-none mb-4" aria-hidden="true">
                      “
                    </div>
                    <p className="text-sm text-[#1C1E21] leading-relaxed">
                      {endorsement.quote}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#E2E4E9] flex items-center gap-3">
                    <ResilientImage
                      src={endorsement.avatarUrl}
                      alt={endorsement.name}
                      fallbackLabel={endorsement.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#E2E4E9] shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#1C1E21] truncate">
                        {endorsement.name}
                      </div>
                      <div className="text-[11px] text-[#525866] truncate">
                        {endorsement.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* END: Endorsements Section */}

        {/* BEGIN: FAQ Section */}
        <section id="faq" className="py-20 lg:py-28 border-b border-[#E2E4E9] bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1C1E21] mb-4">
                  Yang Sering Ditanyain
                </h2>
                <p className="text-[#525866] text-base leading-relaxed mb-6">
                  Masih penasaran soal cakupan kerja, industri yang pernah dipegang, atau peluang kolaborasi? Ini jawaban singkatnya.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenContact('Pertanyaan Seputar Kolaborasi & Profil')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1C1E21] hover:underline underline-offset-4 cursor-pointer"
                >
                  <span>Punya pertanyaan spesifik? Ngobrol langsung</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              <div className="lg:col-span-8 divide-y divide-[#E2E4E9] border-t border-b border-[#E2E4E9]">
                {FAQ_ITEMS.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={faq.question} className="py-6">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1E21] group cursor-pointer"
                      >
                        <span className="text-lg sm:text-xl font-bold text-[#1C1E21] group-hover:text-black">
                          {faq.question}
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-2xl font-light text-[#525866] shrink-0 w-6 text-center"
                        >
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="mt-4 text-[#525866] text-sm sm:text-base leading-relaxed pr-6">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* END: FAQ Section */}

        {/* BEGIN: Insights & Articles Section */}
        <section id="insights" className="py-20 lg:py-28 border-b border-[#E2E4E9] bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C1E21] mb-3">
                Catatan &amp; Wawasan
              </h2>
              <p className="text-[#525866] text-base sm:text-lg leading-relaxed">
                Tulisan praktis seputar arsitektur cloud, efisiensi operasional kargo, dan cara menyatukan sisi teknis dengan manajemen tim.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {INSIGHTS_ARTICLES.map((article) => (
                <article key={article.id} className="group">
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className="text-left w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1E21] cursor-pointer"
                  >
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#F6F7F8] border border-[#E2E4E9] mb-5">
                      <ResilientImage
                        src={article.imageUrl}
                        alt={article.imageAlt}
                        fallbackLabel={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#868C98] font-medium mb-2.5">
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#1C1E21] font-semibold">{article.topic}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1C1E21] group-hover:underline underline-offset-4 decoration-1 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#525866] mt-2 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* END: Insights & Articles Section */}
      </main>

      {/* BEGIN: Footer & Direct Contact */}
      <footer id="contact" className="pt-20 lg:pt-28 pb-12 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Top Action Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#E2E4E9] items-center">
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1C1E21] mb-6 leading-snug">
                Lagi cari partner diskusi atau posisi strategis buat tim kamu? Gas ngobrol.
              </h2>
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => handleOpenContact()}
                  className="inline-flex items-center gap-2 bg-[#1C1E21] text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#27272A] transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Kirim Pesan</span>
                  <span aria-hidden="true">↗</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsCvOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#F6F7F8] text-[#1C1E21] border border-[#E2E4E9] text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#ECEEF1] transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Unduh CV Lengkap</span>
                  <ArrowDownToLine className="w-4 h-4 text-[#525866]" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 lg:text-right">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-[#1C1E21] tracking-tight hover:opacity-75 transition-opacity break-all sm:break-normal"
              >
                <span>{CONTACT_INFO.email}</span>
                <span aria-hidden="true">↗</span>
              </a>
              <div className="mt-3 flex flex-wrap items-center lg:justify-end gap-3 text-sm text-[#525866]">
                <span>Respon langsung dalam 1x24 jam kerja</span>
                <span aria-hidden="true">·</span>
                <button
                  type="button"
                  onClick={handleCopyFooterEmail}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#1C1E21] hover:underline underline-offset-4 cursor-pointer"
                >
                  {copiedFooterEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Middle 4-Column Navigation & Links */}
          <div className="py-12 border-b border-[#E2E4E9] grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h5 className="text-xs uppercase tracking-wider font-bold text-[#1C1E21] mb-4">
                Navigasi
              </h5>
              <ul className="space-y-2.5 text-[#525866] font-medium">
                <li>
                  <a href="#hero" className="hover:text-[#1C1E21] transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#works" className="hover:text-[#1C1E21] transition-colors">
                    Jejak Karier
                  </a>
                </li>
                <li>
                  <a href="#expertise" className="hover:text-[#1C1E21] transition-colors">
                    Skill Utama
                  </a>
                </li>
                <li>
                  <a href="#credentials" className="hover:text-[#1C1E21] transition-colors">
                    Sertifikasi
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-wider font-bold text-[#1C1E21] mb-4">
                Kompetensi Inti
              </h5>
              <ul className="space-y-2.5 text-[#525866] font-medium">
                <li>Cloud Architecture (AWS &amp; GCP)</li>
                <li>Linux &amp; Python Automation</li>
                <li>Operasional Kargo &amp; SOP</li>
                <li>Keselamatan Kerja (Ahli K3 Umum)</li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-wider font-bold text-[#1C1E21] mb-4">
                Terhubung
              </h5>
              <ul className="space-y-2.5 text-[#525866] font-medium">
                <li>
                  <a
                    href={CONTACT_INFO.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#1C1E21] transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT_INFO.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#1C1E21] transition-colors"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="hover:text-[#1C1E21] transition-colors"
                  >
                    Email Langsung ↗
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-wider font-bold text-[#1C1E21] mb-4">
                Lokasi &amp; Catatan
              </h5>
              <p className="text-[#525866] text-xs leading-relaxed">
                {CONTACT_INFO.location}. Seluruh riwayat karier, pendidikan S1 Teknik Elektro USU, dan sertifikasi terverifikasi sesuai dokumen resmi.
              </p>
              <div className="mt-4 text-xs text-[#868C98] tabular-nums">
                © {currentYear} Donny Afandy Ginting.
              </div>
            </div>
          </div>

          {/* Bottom Edge-to-Edge Display Brandmark */}
          <div className="w-full pt-10 select-none overflow-hidden text-center sm:text-left">
            <div className="huge-footer-watermark font-extrabold text-[#1C1E21] uppercase tracking-tight leading-none">
              Donny Afandy Ginting
            </div>
          </div>
        </div>
      </footer>
      {/* END: Footer & Direct Contact */}

      {/* Interactive Modals */}
      <MilestoneModal
        milestone={selectedMilestone}
        onClose={() => setSelectedMilestone(null)}
        onOpenContact={(subject) => handleOpenContact(subject)}
      />
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
      <CvPreviewModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
      <ContactModal
        isOpen={isContactOpen}
        initialSubject={contactSubject}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
