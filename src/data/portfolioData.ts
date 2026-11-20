export interface CareerMilestone {
  id: string;
  title: string;
  role: string;
  institution: string;
  location: string;
  period: string;
  category: 'Cloud & IT' | 'Operasional & HR' | 'Engineering';
  categoryLabel: string;
  summary: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  impactPoints: string[];
}

export interface CoreCapability {
  index: string;
  title: string;
  description: string;
  thumbnails: {
    url: string;
    alt: string;
  }[];
}

export interface TechStackCard {
  category: string;
  title: string;
  items: string;
  note: string;
}

export interface CertificationItem {
  issuer: string;
  title: string;
  detail: string;
  year: string;
}

export interface EndorsementItem {
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ArticleItem {
  id: string;
  date: string;
  readTime: string;
  topic: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  paragraphs: string[];
}

export const HERO_DATA = {
  fullName: 'Donny Afandy Ginting',
  focus: 'IT Infrastructure, Cloud & Ops',
  location: 'Medan & Jakarta, Indonesia',
  status: 'Open for Leadership & Advisory',
  leadStatement:
    'Praktisi IT Infrastructure, Cloud, dan Operasional yang biasa ngeberesin sistem kerja biar makin sat-set. Dari ngawal server 24/7 sampai ngeracik SOP perusahaan, semuanya dibikin rapi dan anti-ribet.',
  portraitUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBPDou14NsOvH_EZm-bScdV7BYPTWcPQd7RpgAKFnncPObZI2uh8Q-57pCB8NdHsdvnEjKFuxaVn5VdtBWhpTY0-I4jeH0KqxJ-BAu5H-RU28aPo_raI7uj98uDQeGacrGQP4DV2qaY47SiNQRhA1ks2GwsU9PsuLT_lHJwsW7Kv7V6rdSnqTAx5lCRGMYoFBv2F0nBp-aLV0wVEdmE-OGql_V8H_DMoARvaumXfDdWSrLalkEjzQe7',
  portraitCaption: 'S1 Teknik Elektro USU · AWS Certified & Google Cloud Digital Leader',
};

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    id: 'cloud-systems-engineering',
    title: 'Cloud & Systems Engineering',
    role: 'Cloud & Systems Specialist',
    institution: 'AWS, Google Cloud, Linux & Python',
    location: 'Jakarta & Remote',
    period: '2022 – Sekarang',
    category: 'Cloud & IT',
    categoryLabel: 'Cloud & Automation',
    summary:
      'Eksplorasi dan implementasi arsitektur AWS serta Google Cloud, ngoprek environment Linux (RHEL, Ubuntu, Kali), sampai bikin otomasi pakai Python.',
    tags: ['Cloud Architecture', 'Linux', 'Python'],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSRuRVx3Bc-m3xw1joHTexrJAtY3eEHyfaLmNWUpw5S0jzP2LwOhQo7uJk3iAfZtcTqUAWNsaEgjXoYKkomTOJIuxEXxtCVt99Q2jqqm3uhZ-zjxcXKfMF1rAGBUoS4zedgzOXCEcyX94CqeQqCF-Dr4bNvjrGOwH7yHomWcqWei8TXHTOOX0YOF9GxeQRyWzznzjoJc50XyfAObOJHjJavic__N0ggMGC3UVzuhY',
    imageAlt: 'Arsitektur Cloud dan Migrasi AWS',
    impactPoints: [
      'Merancang topologi cloud multi-tier di AWS dan Google Cloud dengan fokus efisiensi biaya dan keamanan IAM.',
      'Mengelola server Linux (RHEL, Ubuntu, Kali Linux) beserta skrip otomasi Python untuk pemantauan rutin.',
      'Menyelesaikan sertifikasi resmi AWS Certified Cloud Practitioner, AWS re/Start, dan Google Cloud Digital Leader.',
    ],
  },
  {
    id: 'it-manager-moisani-wisata',
    title: 'Enterprise Intranet & 24/7 Server Ops',
    role: 'IT Manager',
    institution: 'PT Moisani Manggala Wisata',
    location: 'Jakarta Timur',
    period: 'Jun 2012 – Jun 2014',
    category: 'Cloud & IT',
    categoryLabel: 'IT Infrastructure',
    summary:
      'Ngebangun jaringan intranet perusahaan dari nol dan mantau performa server serta network 24/7 biar operasional kantor anti-down.',
    tags: ['Intranet Architecture', 'Server 24/7', 'Network Security'],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ9lxYo-QxUt5nLxwK5dK4wUA_xhf2Bfp4prTmQzz0h81ICvm_JKnbKLtAvzu7bkHDt9tCsjUlSRwyfrHqVT9wzyFVQZXU2eETBvsu8nL2_Bd1Cf7Sywb_mgbfeXt0jGWNSQv69WJLDerqdWwOYikPHw7sTlci5uRe91pdrBlNTf6x5Rx468fH1H6FKKJwDRsJ01_bH8jROMmF7xcxVhKYgmkf0mX7_bHjfsLAvgk',
    imageAlt: 'Operasional Server dan Intranet 24/7',
    impactPoints: [
      'Membangun tulang punggung jaringan intranet dan konektivitas VPN antar unit bisnis dari tahap perencanaan hingga produksi.',
      'Menjamin ketersediaan server dan jadwal backup terjadwal agar data operasional perjalanan Umrah & Haji tetap aman.',
      'Memangkas gangguan teknis harian lewat protokol troubleshooting cepat dan dokumentasi aset IT.',
    ],
  },
  {
    id: 'operational-manager-cargo',
    title: 'Logistik Kargo Udara & Lead-Time Control',
    role: 'Operational Manager',
    institution: 'PT Moisani Manggala Cargo',
    location: 'Jakarta Timur',
    period: 'Jul 2014 – Des 2016',
    category: 'Operasional & HR',
    categoryLabel: 'Supply Chain',
    summary:
      'Pastikan alur operasional kargo udara jalan mulus sesuai SOP dan ngejaga lead time pengiriman biar nggak meleset dari target standar perusahaan.',
    tags: ['Logistik Kargo Udara', 'Lead-Time Control', 'SLA Compliance'],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCu1NXXodDgdQQnQREKy8103bk4XcFyJ1URX_FBVfP9O44KhfaZLGq_IpXL7iejfxUYIytaDuWuxfpn4TSb5AUy06t5jXQg0WM-mr5z-uK_ZOkVodyShS7w2Xzapjd5FSCcWhb8LQwk_jrSHbRS460IKKWwH5y99_b_sMu_8-rC3j42eBamEBaOm5bb3OLcdEv-JWqZo833ESCf4RlGOuL5RQT4wpfz8BBoIofJkns',
    imageAlt: 'Operasional Logistik Kargo Udara',
    impactPoints: [
      'Mengawal kepatuhan SLA kargo udara, mulai dari penerimaan barang, verifikasi dokumen bandara, hingga serah terima akhir.',
      'Mengoptimalkan alur koordinasi lapangan sehingga deviasi lead time pengiriman dapat ditekan secara konsisten.',
      'Menyusun standar pelaporan harian antara tim operasional gudang dan manajemen pusat.',
    ],
  },
  {
    id: 'mill-assistant-evans',
    title: 'Proyek Bulking, Biogas & Industrial Systems',
    role: 'Mill Assistant',
    institution: 'PT Evans Indonesia',
    location: 'Kutai Kartanegara, Kaltim',
    period: 'Mar 2011 – Mei 2012',
    category: 'Engineering',
    categoryLabel: 'Industrial Engineering',
    summary:
      'Turun langsung ngawasin proyek bulking di Rantau Hempang, proyek Biogas di Benua Puhun Mill, plus ngejaga maintenance elektrikal dan mekanikal pabrik tetap aman.',
    tags: ['Proyek Bulking & Biogas', 'Electrical & Mechanical', 'K3 Safety'],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4MBPASMJ2Bi3T5kN35DMoauyrORK4IbVaEwqgZHy4bll1oCT1kTGLCpPHx9LPGqRebb5lqdoSVa89Ip_fTziLJpCBRwqZPAxe8QWANJi--XABgh4SFIW_uISkQc6bZCUIY9kuZT4uDOO4IPNGX34RQlzxqg8uq_h-tKNP4WrkIwO-Cr0N62swDHr18Ny-JmjRwruEOYPNpMdfNGFC2HDyXJsQjNAS60s-B4b5LnM',
    imageAlt: 'Sistem Biogas dan Elektrikal Pabrik',
    impactPoints: [
      'Mengawasi eksekusi lapangan proyek bulking di Rantau Hempang dan instalasi proyek Biogas di Benua Puhun Mill.',
      'Memastikan jadwal preventive maintenance sistem elektrikal dan mekanikal pabrik berjalan tanpa menghentikan lini produksi.',
      'Menerapkan standar keselamatan kerja (Ahli K3 Umum) di area fasilitas bertegangan tinggi dan pengolahan energi.',
    ],
  },
  {
    id: 'edp-officer-aryaduta',
    title: '5-Star Hospitality IT & EDP Systems',
    role: 'EDP Officer (Electronic Data Processing)',
    institution: 'Aryaduta Hotel Medan (Lippo Group)',
    location: 'Medan, Sumatera Utara',
    period: 'Des 2007 – Apr 2011',
    category: 'Cloud & IT',
    categoryLabel: 'Hospitality IT',
    summary:
      'Jagain sistem manajemen hotel bintang 5 biar jalan lancar tanpa drama, sekaligus memastikan jaringan internal dan internet tamu selalu stabil.',
    tags: ['Hospitality IT', 'Network Reliability', 'PMS & POS'],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyluvUVbGHYywsjRiG8mZEulo35nA7XLli2G3fnE0rvQMUukT6mhSgNSol3l3ywmvIv56jleBKVCKWQ11OY6jHC1JyGzssG0az6N9_eIhqVFbj3Wm1vyGpZdqbz2zoSp83gRVzaUWzefiudwbcUsRUGarsX3zQEJH5bIAZQeuKgm7COuGLWaEj_oIXg7UGtYMbDgyyGTZ0DRNhCnGIz02GIsfMQiQKsYF9wJD05U0',
    imageAlt: 'Infrastruktur IT Perhotelan Bintang 5',
    impactPoints: [
      'Menjaga keandalan sistem PMS, POS restoran, PABX, serta pemisahan VLAN jaringan internal dan Wi-Fi tamu.',
      'Melakukan verifikasi integritas data transaksi harian (night audit) agar bebas dari kehilangan catatan.',
      'Memberikan dukungan teknis langsung untuk kebutuhan acara korporat, konferensi, dan operasional 24 jam hotel.',
    ],
  },
  {
    id: 'hr-manager-moisani',
    title: 'HR Governance, SOP & Talent Development',
    role: 'Human Resources Manager',
    institution: 'PT Moisani Manggala Wisata',
    location: 'Jakarta Timur',
    period: 'Jan 2017 – Des 2019',
    category: 'Operasional & HR',
    categoryLabel: 'HR & Governance',
    summary:
      'Ngawal implementasi SOP di tiap divisi biar ritme kerja tim tetap on-track. Sekaligus pegang penuh proses rekrutmen dan training supaya kualitas SDM makin solid.',
    tags: ['SOP Governance', 'Rekrutmen', 'Training'],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9oHOmOnbUQ4xFntgO3VIs2TqAiOG8mziIbKBABGAjRhEwj87LDw01yMCY5XZ46EGhNW1l9LFArWBN9ZqcWY-_5c3P26NhA6N81OVWd6rmkoj3ThZH7xoxyAdUE6pE9mVnp9KswtpusYcD1GregGFIgFoasvn77A0-wtl_ShcJYVSx9rrSSJNT-GOWXl9F7DE-pLQJZ7IF4idGKqjdfR7VITvzJMy1-UP63TmiLQU',
    imageAlt: 'Tata Kelola SDM dan Pengembangan Tim',
    impactPoints: [
      'Merancang dan menegakkan SOP lintas divisi agar tanggung jawab tim jelas dan bebas tumpang tindih.',
      'Memimpin siklus rekrutmen end-to-end, onboarding, serta evaluasi kinerja berbasis target operasional.',
      'Menyusun program pelatihan internal untuk meningkatkan kesiapan kerja dan kedisiplinan standar layanan.',
    ],
  },
];

export const CORE_CAPABILITIES: CoreCapability[] = [
  {
    index: '[01]',
    title: 'Cloud & Infrastructure Engineering',
    description:
      'Ngerancang infrastruktur cloud berbasis AWS dan Google Cloud (GCP), setup jaringan intranet kantor, plus administrasi server Linux (RHEL, Ubuntu, Kali Linux) biar performa sistem tetap ngebut.',
    thumbnails: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdi69lEAbnfAKSU4UVAfyG-KoSoXlfHEEZgwR1f0lPaUiSq-XS9Um7JCr9cA6OK5U4p86G043ZrJz0a8xhgCvMTrWyQVANXp7qx03CNVvzKFRK2dI88gP9huUaiCbZnFEi12kYj3-i2QhMbYj9QaRdg-oi4DkEeya0hUW-ZoCcl2UoZq3JuHr2ENKW_nYsffuNAQv963QjL6IfTi5RfBSYGFVpBdDR7et1HYGN4qY',
        alt: 'Server rack infrastruktur',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8KpUrNmtQbICa4quwomnT5A9U60XeSLLi2jB5_fqKhFq44EInoP4qxPTyRRlZ92Nu02r7-V2B6ct2iPF0HRCkFHbaI3z7XhtJ7GLaS2AgD-Vu3694QNrsHVQ3Sn6am2Te4FTlD-1HNhoB8j9Rdp7yPQ-BpqOAlqRHgyBvCSUA78CYyn48D14QFSXFFE7oiuCveiC_2T5Wjb6InS_gKKezm0cyrwL0EloC9HtnMmI',
        alt: 'Terminal konfigurasi cloud',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsQwvNFtv4aDFdxMvtWUY3qGYNZUA3FE7MyBy5w7d7yec6aT6STybtA_wUix7WYFBz_ADAoZuH4rG-Mg9D436WhqTxb3mRNqkgnkKk5Cnt4O1oI3Zs-0zd3zzb_PgAeKZP3QacB5ZZ0EQo0iskkiP7I68MZjP_NSeKMcos5k5kF3121VoxTqQpzSTpb5fjJFvj3SvoJgLm704KAe0fWSm-Ky9N7cqsoTnWJs68Jxw',
        alt: 'Metrik monitoring sistem',
      },
    ],
  },
  {
    index: '[02]',
    title: 'Operational & Supply Chain Management',
    description:
      'Ngatur ritme operasional logistik dan kargo udara biar sat-set, ngejaga lead time tetap presisi, lengkap dengan sertifikasi Ahli K3 Umum buat standar keselamatan kerja.',
    thumbnails: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjgToPAMZe8AzLbBL-fG1xpL3T55_dMWwGmRU6jlp9MrakAGWRaxmBrBIYDXxqVvt8S7xf_rcVIf3CgP8ceLDUk76Xgthaszq-jSr0iPzXSfdk5ngLpboc0NJDu0saP-NMbL-AOPYxJYtP9E34C0eZrOlde3OFdM26MnPC-yFkMT7110YME3_gcdzwnMEBntIk-0pzLxmOdLpGw4GNLoQp6lysdxtjOzYq6Wp5-Mc',
        alt: 'Operasional logistik kargo udara',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnJJ1cP6_Z0LBRSRI2-ZQHenQaoRr-CLzVvSWYKE1rQPhbJ_3Jb_vcVDW_Lb2PSxrY90MOSYQ1IyMFTXdWTSaKRv5Z-bW9rpVLlj_JWtk_WnX2sBQXMIUHHm9m3wYN3KvtuxfN6Ul9DdRHlnk1XPDxnmPBUmzHsiTU0nkvcPmuVmcTd5D3obEXJ463UEva2f2k8Kx0pM4AuzH76nl-Q0GGMpeUuUuob-uHAUFOdME',
        alt: 'Koordinasi gudang dan rantai pasok',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKe-ymIngJdAHFS7_31RAvEIgi1U9jiyAwqL9aFi_aAsoFZpalKTJMxWfFKbEbhnDOdClsjd-XtNh7bZf9Jiid2cbXNAc6ADVsRg2A0EFG6beM5qNix11NR_e90JkfL5cCA8TMGXMWMYhkNfKnWF6c2mo7gGWjWXZxcFne22a4T_IWhDUwiC4sbu_o8R_saZZc0q-StV6xM5QDg0VKFU226rBEHx4eNbKDjFa2gYQ',
        alt: 'Audit SLA dan kepatuhan K3',
      },
    ],
  },
  {
    index: '[03]',
    title: 'HR Governance & Perapihan SOP',
    description:
      'Bikin dan ngawal Standard Operating Procedure (SOP) lintas divisi biar alur kerja tim nggak tumpang tindih, mulai dari proses rekrutmen sampai pengembangan SDM.',
    thumbnails: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQGK4BGvsykknGM5eKKR_mVYuLUGezPcj6pHLVcEguS1LchP3PTA-mqqBYQHHKUEtwtFy6IsUznpY3tDPiw65Al3BYgQeaJFWldsMONn6gTkrslrgeu7MMK4QfnsHwbUGYz4T6laSyNpNB6CALg4fCvnZNRawbLEyoL2jlXGduZzk0esfoFqMIZgEQ86sLkkkHWNBvoyIPdMBKNh1Mj3dtfbm6i5k9ehUvp2MbEMA',
        alt: 'Koordinasi tim SDM lintas divisi',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4NDuxh5CgtcjdsbsC3LaKhMecx1tBH4WSWN-3g61Eq93uao89TsGXuwJcncOMJmq_B7ONYOfUlJR8pY2145C2t8BPZ9lb1imQiXEZ-lx8rRhhoML5zgiM9fAZpwjulTgShUc6BqrB14K3JsdQ91nL6tD7J8XCp5DSNQzq8_0AeznYM6ixJQgdk0LoX4bBslsXUuAV9lo_A2dMVydrRtjHKGw-flM8xF0LbVe3qdI',
        alt: 'Dokumentasi SOP perusahaan',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSQaVbtxJP3PuvYhCSGlTZuWSz-EkFKjUFMo6JjUvQF2CUmVnpJXhboKMlJBGWxMhjYyOCo7ndwjqUzMqocCdLcpv7y-CsuTbw6Q1y8eGwUW-EGfxPTxqbjbXDLLV2Wq4m1dDYYXlMK_3KAZTd186aCdigkpavjiQXHflJh4apk04xXKIsETpOCoZMkthAB55gajs8Q2bxwbBX3N-LyOYeNyciziqjFok3grlQES8',
        alt: 'Evaluasi kinerja dan asesmen SDM',
      },
    ],
  },
  {
    index: '[04]',
    title: 'Industrial Electrical & Enterprise Systems',
    description:
      'Berbekal latar Teknik Elektro Telekomunikasi, sudah terbiasa pegang maintenance elektrikal dan mekanikal pabrik, proyek energi biogas, sampai sistem EDP perhotelan.',
    thumbnails: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3NPZ2JcI3_vppvRz_wKiZ4tNPqGewGJKlG6_sjFSqhQpHC_871g4pGJH2wD2u2E0cV4l9PYJ5d47ITsLD3d7scfE45GYzFuetwCWUfwlM0dtciS7g3z8_aYlnVVUE5pjB9-a6mLlG48q8p3bm4AzOOG9kz1DCl9V5bXRz9kVPkbkI_bTylXV2KSVtZmi5GgB3B_l_x-FeDSALU2D3eAqsfgT4BWCFzNDJ8z-0Aqg',
        alt: 'Rangkaian kontrol elektrikal industri',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA--dr04JiVGUPIOE8Cd7IVqrfktD_mV1MGzORtmMM_9eVEABKBFB-STaSQFZCaj_i_UZ_7nKqJ6dcLISI9e_3AhF8XjxWoEiyGoJWY4TYHoYqP3YsIUCl6oqGFwgclLeptfSq-DIR3jzjm0z3Xfv9Z44ymsp7jJGGaLl6nwBizEIJMGLkt3X4Il-8Mi6WiUu90C5pNDkkycwN8LhRAOiU69MqDCH0FzP8Ins_E3Zw',
        alt: 'Telemetri mikrokontroler',
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8lrfDTLwjynyxjHQ3mh6Y0lBHyzXpGMvC4Y0dZmiIez1hrv8nMfdSNkzfv4JuBnDkbqgbeqBmKQ3KPzLlf6mNT_BXKu119MCiSv--at1GR9JwpxVeXIizymFSBDQk14POrl8urhIZUKb2pFzSHTJ-aA_qUaeRcbzBVKsPGkEmQMoeNDahFN_fIvLLhD7WgB0p3LDIBMvOvdONUIutAMAPPAofzVm7zMUS1faRaeE',
        alt: 'Distribusi daya gardu pabrik',
      },
    ],
  },
];

export const TECH_STACK_CARDS: TechStackCard[] = [
  {
    category: '01 · Cloud & OS',
    title: 'Cloud & Sistem Operasi',
    items: 'AWS, Google Cloud Platform, RHEL, Ubuntu, Kali Linux',
    note: 'Arsitektur server, manajemen akses IAM, dan pengerasan sistem Linux.',
  },
  {
    category: '02 · Coding & Productivity',
    title: 'Otomasi & Troubleshooting',
    items: 'Python (Intermediate), Microsoft Office Suite, Network Diagnostics',
    note: 'Skrip utilitas harian, pelaporan data operasional, dan pemulihan jaringan.',
  },
  {
    category: '03 · Ops & Safety',
    title: 'Tata Kelola & K3',
    items: 'Audit & Penyusunan SOP, Lead-Time Kargo, Keselamatan Kerja (K3)',
    note: 'Menyelaraskan standar prosedur operasional dengan kepatuhan Kemnaker RI.',
  },
  {
    category: '04 · Leadership',
    title: 'Komunikasi & Kolaborasi',
    items: 'Bilingual (Bahasa Indonesia & Inggris Aktif), Cross-Functional Lead',
    note: 'Adaptif memimpin tim lapangan, teknis IT, maupun jajaran manajemen.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    issuer: 'Amazon Web Services',
    title: 'AWS Certified Cloud Practitioner',
    detail: 'Fondasi arsitektur, keamanan, dan tata kelola AWS Cloud.',
    year: '2022',
  },
  {
    issuer: 'Orbit Future Academy',
    title: 'AWS re/Start Program',
    detail: 'Bootcamp intensif Linux, networking, security, dan Python cloud.',
    year: '2022',
  },
  {
    issuer: 'Google Cloud',
    title: 'Google Cloud Digital Leader',
    detail: 'Transformasi digital dan infrastruktur enterprise GCP.',
    year: '2022',
  },
  {
    issuer: 'Dicoding Academy',
    title: 'Google Cloud Engineer',
    detail: 'Implementasi Compute Engine, VPC, IAM, dan deployment cloud.',
    year: '2022',
  },
  {
    issuer: 'PT Alkon Trainindo Utama',
    title: 'Ahli K3 Umum (Certified)',
    detail: 'Standar keselamatan dan kesehatan kerja nasional Kemnaker RI.',
    year: '2011',
  },
  {
    issuer: 'Webmedia Center',
    title: 'CCNA Exploration',
    detail: 'Routing, switching, VLAN, dan topologi jaringan Cisco.',
    year: '2009',
  },
  {
    issuer: 'ESQ Leadership',
    title: 'ESQ Leadership Training',
    detail: 'Penguatan integritas karakter dan kepemimpinan strategis.',
    year: '2006',
  },
  {
    issuer: 'Camar Agung',
    title: 'The Champion Seminar',
    detail: 'Manajemen performa tim dan eksekusi target operasional.',
    year: '2008',
  },
  {
    issuer: 'LM Patra',
    title: 'Modern English Conversation',
    detail: 'Komunikasi bisnis profesional dan presentasi berbahasa Inggris.',
    year: 'Certified',
  },
];

export const ENDORSEMENTS: EndorsementItem[] = [
  {
    name: 'Hendra Wijaya',
    role: 'Operations Director · PT MM Cargo',
    quote:
      'Kemampuan Donny tetap tenang saat krisis jaringan dan langsung eksekusi pemulihan bikin operasional kargo kami aman dari keterlambatan fatal.',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuChBBJlbDIcMyLBUtQahwFPuaVvL4kO8DCsJV4IEOBup6WqXzuwggy-gy2UaUErfsabiL6gaPkfoTfUcAf_Ynn73FR52yN_Cj4rA-QPlww_g3BZgtKkwG4qteOhvlK9a5556UXhN-CyRbQ_vkJ_ZvXXBrNmuIJTlWLAb3MvvzLY5iWqQECD16yEdUnmPeln7yCcxcL-7vMYUEbL5ZmlGSgPDTzxXUFycG-mooo0X1M',
  },
  {
    name: 'Ir. Bambang Santoso',
    role: 'Plant Manager · PT Evans Indonesia',
    quote:
      'Ketelitiannya nyusun SOP keselamatan dan pengawasan elektrikal di lapangan benar-benar ngejembatani sisi teknis engineering dan eksekusi tim pabrik.',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyPan1xOKM-soTBj_N6AY2d0e4O4AuoDfPdvx6UeDUqUiecX4DEnklQJJBf_TbXJcvEDteuZKAs8drZohNEEFj4zNHJwnC3A7_s9BNNsPHE9TS1RyZL9XfAltoFJAygk0FV5qbIUY-zz7Rp0tv3w0YNNSf4MK6SYD34mlAS1I8NPKJv9vp3GknAjmvvst6u8ldqO-2AV_m8yXgQpfFWlKq1elKPCp0Alu2Mcn2HCw',
  },
  {
    name: 'Ratna Sari Dewi',
    role: 'General Cashier & EDP Liaison · Aryaduta',
    quote:
      'Di hotel bintang 5, sistem PMS dan jaringan nggak boleh mati lima menit pun. Donny selalu siapin cadangan sistem yang rapi dan anti-drama.',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBs2tpE3a61ykqJesNR2LmLLgYEVlQcmpTJYxmetu8Y_yibjo36-EZgJEHxPwGWloAoQ2cBe43aQ3EEWd5i6Yg63GijwNY4FjxxtMGmicRgbiKOCV1_0MqiDZIUc1s7KUSPDzOmTO4tQ2e-72m8nUvSg_YWlBQDVX0NA4ttfImmSf7QyVKRRgBsOR2VY-mRIMMzCqg2DBqojhmE0mCXBNKRk9Br4p9BBHxcZUwOZBU',
  },
  {
    name: 'Michael Tanujaya',
    role: 'Managing Partner · Nexus Solutions',
    quote:
      'Jarang ketemu praktisi yang paham arsitektur Cloud AWS dan GCP, tapi di saat bersamaan ngerti tata kelola HR, rekrutmen, dan SOP bisnis.',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuByDop5PLL9pQD3KP3O25lE0wBoAL3Ivzndtq95OsQC1xPgxoemjzZfzOLSv-lA5tuErNXEzLskPkiPN1c8OEClMkoo211D4aUkhT3PvHlLyNT6Y27Zc0hc2KZhbbY2W6TApxEKHKgQVbsoA9nIbUaZ7XjaQC95lywvuzNWF3pjjjkg2AC7DNWkEOAsx2uj8cLAAxu5itgN-C8_B7cFn5VMJ--xNFEOdW1NIjsNmHc',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Sebenarnya fokus utama Donny Afandy Ginting di bidang apa?',
    answer:
      'Kombinasi antara manajemen operasional atau SDM dan teknis IT. Jadi nggak cuma paham cara bangun infrastruktur jaringan dan Cloud (AWS & GCP), tapi juga ngerti cara ngerapihin SOP dan mimpin tim di lapangan.',
  },
  {
    question: 'Pernah pegang industri apa saja sebelumnya?',
    answer:
      'Cukup beragam: mulai dari perhotelan bintang 5 (Aryaduta Hotel), industri perkebunan dan proyek biogas (PT Evans Indonesia), logistik kargo udara (PT Moisani Manggala Cargo), sampai travel Umrah & Haji (PT Moisani Manggala Wisata).',
  },
  {
    question: 'Sertifikasi teknis apa saja yang sudah dikantongi?',
    answer:
      'Sudah certified untuk AWS Cloud Practitioner, Google Cloud Digital Leader, Google Cloud Engineer (Dicoding), pelatihan AWS re/Start (Orbit Future Academy), jaringan Cisco CCNA Exploration, dan Ahli K3 Umum.',
  },
  {
    question: 'Bisa diajak kolaborasi untuk role apa saja?',
    answer:
      'Sangat terbuka buat posisi manajerial full-time (IT Manager, Operations Manager, HR/GA Manager) maupun proyek konsultasi setup infrastruktur IT, migrasi Cloud, dan perapihan SOP perusahaan.',
  },
];

export const INSIGHTS_ARTICLES: ArticleItem[] = [
  {
    id: 'multi-region-cloud',
    date: '12 Nov 2024',
    readTime: '6 menit baca',
    topic: 'Cloud Architecture',
    title: 'Merancang High-Availability Cloud di AWS & GCP Tanpa Bikin Tagihan Bengkak',
    excerpt:
      'Pola arsitektur praktis biar sistem kantor tetap jalan saat ada gangguan node, tanpa over-provisioning resource yang bikin biaya bulanan melonjak.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIbDUrJQeYNsVhr6v-bPYnO6iIRHZBME5XnNfb5lDa6QTytY9DBh8Xyzhu1dXiqvQQo2zrSwM4wvhLB_JY3t0RaOBjFFaFYH1IcTiM4fHJSBp-vuByJiknAeGUO6HSZdyKtkcDIlZiqEAQl_-C2g8TItlL2lOpJT9cgDmcXsm_mqb9uWmGKDAQtMurXya2f7QyKCwrmZbVTRrCzEjTaFr-3RKgxFtXNm36CHzA3jM',
    imageAlt: 'Diagram Arsitektur Cloud Multi-Region',
    paragraphs: [
      'Banyak tim langsung lompat ke setup multi-region aktif-aktif karena terdengar aman di atas kertas, padahal buat mayoritas bisnis skala menengah di Indonesia, beban kompleksitas dan biaya transfer data lintas wilayah sering kali nggak sebanding.',
      'Kuncinya ada di pemetaan Recovery Time Objective (RTO) yang realistis. Dengan memanfaatkan multi-Availability Zone (AZ) di satu region utama (misalnya Jakarta atau Singapura), ditambah snapshot otomatis ke object storage lintas region dan skrip provisioning Linux yang terdokumentasi rapi, sistem sudah cukup tangguh menghadapi gangguan hardware.',
      'Di sisi operasional, otomasi pemantauan lewat Python dan alerting terukur bikin tim IT tahu lebih dulu sebelum user sempat mengeluh jaringan lambat.',
    ],
  },
  {
    id: 'air-cargo-sop',
    date: '28 Okt 2024',
    readTime: '8 menit baca',
    topic: 'Operasional Logistik',
    title: 'Menekan Deviasi Lead-Time Kargo Udara Lewat Perapihan SOP Lapangan',
    excerpt:
      'Pengalaman di lini kargo udara nunjukin kalau keterlambatan jarang soal armada—seringnya justru karena serah terima dokumen yang belum seragam.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRLo6GFdmOy7rMnRueqCj6ePfKgRq4WV9n91D-acMR93hz8LVvygIu9qGRoSkUueWBS076LexpLDy46mgiyJcV_kVzI3XV_gcEOsAUDXstyogg7WREXCU-pCZkavMxQ46k5Vh5vBpyKmV8cMWbk4mVioGNWOmW6c-_aGmPH4qXXxUdcwKPI7RVTmlb8amwvcnyYeThGgTvOkrQ0FrpZlpdHHdCsKj-3ER1u3R8e9I',
    imageAlt: 'Modernisasi SOP Kargo Udara',
    paragraphs: [
      'Di bisnis kargo udara, jeda 30 menit di meja verifikasi dokumen bisa berujung ketinggalan jadwal penerbangan berikutnya. Ketika masih mengawal operasional harian di Jakarta Timur, masalah klasik yang muncul hampir selalu sama: asumsi antar shift.',
      'Solusinya bukan menambah form berlapis yang bikin tim lapangan capek ngisi, melainkan memangkas checklist ke titik kritis: jam masuk barang, kelengkapan airway bill, verifikasi berat aktual, dan penanggung jawab per fase.',
      'Begitu setiap titik serah terima punya standar waktu yang jelas dan dipantau rutin, ritme tim otomatis lebih sat-set dan komplain klien turun drastis.',
    ],
  },
  {
    id: 'operational-mindset-it',
    date: '18 Sep 2024',
    readTime: '7 menit baca',
    topic: 'Kepemimpinan',
    title: 'Kenapa Engineer yang Paham SOP & SDM Bikin Infrastruktur Jauh Lebih Tangguh',
    excerpt:
      'Sistem secanggih apa pun bakal rapuh kalau orang yang mengoperasikannya nggak punya panduan kerja yang jelas dan selaras antar divisi.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPZ7M6rDlNiVA3zv8STJCcFdYiE_MDNuPRsVNqB0dlePsg2-Yj_lawYcGPvnuZOwwUqbW7J8sWetzPYVfAwNSYL7UsHvOZFCgjjbZs97xd5WvIigja5UllY3sFHCXVLr5AjCJQ-y3PMz65YAftC2OkZSpXX4ImL0o2ssZk21TVVIWlQzwXzWcUOTxNQ6rtTyKvS4cNmIsIdgg2acihO3ceAew7RUeSbLoO5VmMVSM',
    imageAlt: 'Kolaborasi Tim Eksekutif dan Teknis',
    paragraphs: [
      'Berpindah peran dari EDP hotel bintang 5, pengawasan elektrikal pabrik di Kalimantan Timur, lalu menjadi IT Manager, Operational Manager, hingga HR Manager ngajarin satu hal penting: akar masalah teknis sering berawal dari proses manusia.',
      'Server yang down akibat salah konfigurasi hampir selalu berkaitan dengan ketiadaan change-management SOP. Sebaliknya, tim operasional yang kebingungan pakai sistem baru biasanya bukan karena aplikasinya jelek, tapi proses training dan onboarding yang terburu-buru.',
      'Menggabungkan kacamata teknis (Cloud, Linux, Jaringan) dengan tata kelola SDM bikin solusi yang dibangun nggak cuma jalan di server, tapi juga beneran kepakai dengan nyaman oleh tim.',
    ],
  },
];

export const CONTACT_INFO = {
  email: 'donny.ginting@gmail.com',
  linkedinUrl: 'https://www.linkedin.com',
  githubUrl: 'https://github.com',
  location: 'Medan & Jakarta, Indonesia',
};
