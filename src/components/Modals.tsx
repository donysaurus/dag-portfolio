import { useEffect, useState, type FormEvent } from 'react';
import { Check, Copy, Mail, Printer, X } from 'lucide-react';
import {
  CAREER_MILESTONES,
  CERTIFICATIONS,
  CONTACT_INFO,
  TECH_STACK_CARDS,
  type ArticleItem,
  type CareerMilestone,
} from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

function useEscapeKey(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);
}

interface MilestoneModalProps {
  milestone: CareerMilestone | null;
  onClose: () => void;
  onOpenContact: (subject?: string) => void;
}

export function MilestoneModal({ milestone, onClose, onOpenContact }: MilestoneModalProps) {
  useEscapeKey(Boolean(milestone), onClose);

  if (!milestone) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="milestone-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl border border-[#E2E4E9] overflow-hidden my-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E4E9]">
          <div className="flex items-center gap-2 text-xs font-medium text-[#525866]">
            <span>{milestone.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{milestone.period}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail pengalaman"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-[#E2E4E9] text-[#1C1E21] hover:bg-[#F6F7F8] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[82vh] overflow-y-auto">
          <div className="w-full aspect-[16/9] bg-[#F6F7F8] border-b border-[#E2E4E9] overflow-hidden">
            <ResilientImage
              src={milestone.imageUrl}
              alt={milestone.imageAlt}
              fallbackLabel={milestone.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="text-xs font-medium text-[#868C98] mb-2">
              {milestone.role} · {milestone.institution} · {milestone.location}
            </div>
            <h3
              id="milestone-modal-title"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1C1E21] mb-4"
            >
              {milestone.title}
            </h3>
            <p className="text-base text-[#525866] leading-relaxed mb-6">{milestone.summary}</p>

            <div className="border-t border-[#E2E4E9] pt-6 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1E21] mb-4">
                Kontribusi &amp; Dampak Utama
              </h4>
              <ul className="space-y-3">
                {milestone.impactPoints.map((point, index) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#525866] leading-relaxed">
                    <span className="font-mono text-xs text-[#868C98] pt-0.5 tabular-nums">
                      0{index + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#E2E4E9] pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#525866] font-medium">
                {milestone.tags.map((tag, idx) => (
                  <span key={tag} className="inline-flex items-center gap-2">
                    <span>{tag}</span>
                    {idx < milestone.tags.length - 1 && (
                      <span aria-hidden="true" className="text-[#868C98]">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenContact(`Diskusi terkait pengalaman: ${milestone.role} (${milestone.institution})`);
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#1C1E21] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#27272A] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Diskusikan Topik Ini</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  useEscapeKey(Boolean(article), onClose);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl border border-[#E2E4E9] overflow-hidden my-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E4E9]">
          <div className="flex items-center gap-2 text-xs font-medium text-[#525866]">
            <span>{article.topic}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup artikel"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-[#E2E4E9] text-[#1C1E21] hover:bg-[#F6F7F8] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[82vh] overflow-y-auto">
          <div className="w-full aspect-[16/9] bg-[#F6F7F8] border-b border-[#E2E4E9] overflow-hidden">
            <ResilientImage
              src={article.imageUrl}
              alt={article.imageAlt}
              fallbackLabel={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <article className="p-6 sm:p-8">
            <h3
              id="article-modal-title"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1C1E21] mb-6 leading-snug"
            >
              {article.title}
            </h3>
            <div className="space-y-4 text-base text-[#525866] leading-relaxed">
              {article.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvPreviewModal({ isOpen, onClose }: CvPreviewModalProps) {
  useEscapeKey(isOpen, onClose);
  const [copiedSummary, setCopiedSummary] = useState(false);

  if (!isOpen) return null;

  const handleCopyCvSummary = async () => {
    const summaryText = [
      'DONNY AFANDY GINTING',
      'IT Infrastructure, Cloud Architecture & Operations Leader | Medan & Jakarta, Indonesia',
      `Email: ${CONTACT_INFO.email}`,
      '',
      'PENDIDIKAN:',
      '- Universitas Sumatera Utara (USU), Medan — S1 Teknik Elektro Telekomunikasi (2000 – 2006)',
      '',
      'PENGALAMAN UTAMA:',
      ...CAREER_MILESTONES.map(
        (m) => `- ${m.role} — ${m.institution} (${m.period}): ${m.summary}`,
      ),
      '',
      'SERTIFIKASI:',
      ...CERTIFICATIONS.map((c) => `- ${c.title} — ${c.issuer} (${c.year})`),
    ].join('\n');

    try {
      await navigator.clipboard.writeText(summaryText);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2200);
    } catch {
      setCopiedSummary(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl border border-[#E2E4E9] overflow-hidden my-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-[#E2E4E9] bg-[#F6F7F8]">
          <div>
            <h3 id="cv-modal-title" className="text-sm font-bold text-[#1C1E21]">
              Pratinjau CV Ringkas — Donny Afandy Ginting
            </h3>
            <p className="text-xs text-[#525866]">Siap dicetak atau disimpan sebagai PDF</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyCvSummary}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-[#E2E4E9] bg-white text-[#1C1E21] hover:bg-[#ECEEF1] transition-colors cursor-pointer"
            >
              {copiedSummary ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSummary ? 'Tersalin' : 'Salin Teks'}</span>
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#1C1E21] text-white hover:bg-[#27272A] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup pratinjau CV"
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-[#E2E4E9] bg-white text-[#1C1E21] hover:bg-[#ECEEF1] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div id="cv-print-area" className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8">
          <div className="border-b border-[#E2E4E9] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1C1E21]">
                DONNY AFANDY GINTING, S.T.
              </h4>
              <p className="text-sm text-[#525866] mt-1">
                IT Infrastructure, Cloud Architecture (AWS &amp; GCP), Operational &amp; HR Leader
              </p>
            </div>
            <div className="text-xs text-[#525866] sm:text-right space-y-0.5">
              <div>{CONTACT_INFO.location}</div>
              <div className="font-semibold text-[#1C1E21]">{CONTACT_INFO.email}</div>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#868C98] mb-3">
              Rekam Jejak Karier
            </h5>
            <div className="divide-y divide-[#E2E4E9] border-t border-b border-[#E2E4E9]">
              {CAREER_MILESTONES.map((item) => (
                <div key={item.id} className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <div className="sm:col-span-4">
                    <div className="text-sm font-bold text-[#1C1E21]">{item.role}</div>
                    <div className="text-xs text-[#525866]">{item.institution}</div>
                    <div className="text-xs font-mono text-[#868C98] mt-0.5">{item.period}</div>
                  </div>
                  <div className="sm:col-span-8 text-xs sm:text-sm text-[#525866] leading-relaxed">
                    {item.summary}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#868C98] mb-3">
                Pendidikan Formal
              </h5>
              <div className="p-4 rounded-xl bg-[#F6F7F8] border border-[#E2E4E9]">
                <div className="text-sm font-bold text-[#1C1E21]">
                  Universitas Sumatera Utara (USU), Medan
                </div>
                <div className="text-xs text-[#525866] mt-1">
                  S1 Teknik Elektro — Sub-konsentrasi Telekomunikasi
                </div>
                <div className="text-xs font-mono text-[#868C98] mt-1">2000 – 2006</div>
              </div>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#868C98] mb-3">
                Kompetensi Inti
              </h5>
              <div className="space-y-2">
                {TECH_STACK_CARDS.map((card) => (
                  <div key={card.title} className="text-xs text-[#525866]">
                    <span className="font-bold text-[#1C1E21]">{card.title}:</span> {card.items}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#868C98] mb-3">
              Sertifikasi &amp; Pelatihan Terverifikasi
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.title} className="p-3 rounded-lg border border-[#E2E4E9]">
                  <div className="text-xs font-bold text-[#1C1E21]">{cert.title}</div>
                  <div className="text-[11px] text-[#525866] mt-0.5">
                    {cert.issuer} · {cert.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ContactModalProps {
  isOpen: boolean;
  initialSubject?: string;
  onClose: () => void;
}

export function ContactModal({ isOpen, initialSubject = '', onClose }: ContactModalProps) {
  useEscapeKey(isOpen, onClose);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [topic, setTopic] = useState(initialSubject || 'Konsultasi Cloud & Infrastruktur IT');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedNotice, setSubmittedNotice] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setTopic(initialSubject);
    }
  }, [initialSubject]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Halo Donny,\n\nNama: ${name || '-'}\nEmail: ${senderEmail || '-'}\n\n${message}`,
    );
    const subject = encodeURIComponent(topic);
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    setSubmittedNotice(true);
    setTimeout(() => setSubmittedNotice(false), 4000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl border border-[#E2E4E9] overflow-hidden my-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E4E9]">
          <span className="text-xs font-mono text-[#525866]">Kontak Langsung</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup form kontak"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-[#E2E4E9] text-[#1C1E21] hover:bg-[#F6F7F8] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <h3
            id="contact-modal-title"
            className="text-2xl font-extrabold tracking-tight text-[#1C1E21] mb-2"
          >
            Gas ngobrol soal posisi atau proyek
          </h3>
          <p className="text-sm text-[#525866] mb-6">
            Langsung kirim brief singkat di bawah atau salin alamat email untuk diskusi langsung.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[#F6F7F8] border border-[#E2E4E9] mb-6">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-[#1C1E21]">
              <Mail className="w-4 h-4 text-[#525866]" aria-hidden="true" />
              <span>{CONTACT_INFO.email}</span>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-[#E2E4E9] text-[#1C1E21] hover:bg-[#ECEEF1] transition-colors cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Email Tersalin' : 'Salin Email'}</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-[#1C1E21] mb-1.5">
                  Nama Kamu
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Raka Pratama"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E4E9] text-[#1C1E21] placeholder:text-[#868C98] focus:outline-none focus:border-[#1C1E21]"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-[#1C1E21] mb-1.5">
                  Email Aktif
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="nama@perusahaan.com"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E4E9] text-[#1C1E21] placeholder:text-[#868C98] focus:outline-none focus:border-[#1C1E21]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-topic" className="block text-xs font-semibold text-[#1C1E21] mb-1.5">
                Topik Diskusi
              </label>
              <input
                id="contact-topic"
                type="text"
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E4E9] text-[#1C1E21] focus:outline-none focus:border-[#1C1E21]"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-[#1C1E21] mb-1.5">
                Pesan Singkat
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ceritain kebutuhan tim, role, atau proyek yang lagi mau dikerjain..."
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E4E9] text-[#1C1E21] placeholder:text-[#868C98] focus:outline-none focus:border-[#1C1E21]"
              />
            </div>

            {submittedNotice && (
              <p className="text-xs font-medium text-[#1C1E21] bg-[#F6F7F8] border border-[#E2E4E9] rounded-lg px-3.5 py-2.5">
                Aplikasi email kamu sudah diarahkan untuk mengirim pesan ke {CONTACT_INFO.email}.
              </p>
            )}

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#525866] hover:text-[#1C1E21] cursor-pointer"
              >
                Batal
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#1C1E21] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#27272A] transition-colors cursor-pointer"
              >
                <span>Kirim via Email</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
