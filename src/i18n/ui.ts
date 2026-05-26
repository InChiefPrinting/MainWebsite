export const LOCALES = ['en', 'zh', 'fr', 'ar', 'es', 'it'] as const;
export type Lang = typeof LOCALES[number];

export const RTL_LANGS = new Set<Lang>(['ar']);

export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  zh: '中文',
  fr: 'Français',
  ar: 'العربية',
  es: 'Español',
  it: 'Italiano',
};

export type UIStrings = {
  meta: { title: string; description: string };
  nav: {
    company: string; solutions: string; equipment: string;
    caseStudies: string; quality: string; contactUs: string;
    overview: string; about: string; industries: string;
    joinUs: string; careers: string; updates: string; news: string;
    printingSolutions: string; commercial: string; publication: string;
    marketing: string; vdp: string;
    packagingIndustrial: string; foldingCarton: string; rigidBox: string;
    labels: string; industrialPkg: string;
    finishingEnhancement: string; uv: string; foil: string;
    embossing: string; dieCutting: string;
    manufacturingServices: string; customProduction: string; oem: string;
    supplyChain: string; fulfillment: string;
  };
  hero: { title: string; sub1: string; sub2: string; cta: string };
  home: {
    overviewTitle: string; overviewText: string;
    servicesTitle: string;
    ctaTitle: string; ctaText: string; ctaBtn: string;
  };
  service: {
    commercial: string; commercialDesc: string;
    packaging: string; packagingDesc: string;
    finishing: string; finishingDesc: string;
  };
  about: {
    pageTitle: string;
    introTitle: string; introP1: string; introP2: string; introP3: string;
    factoryTitle: string; factoryP1: string; factoryP2: string; factoryP3: string;
    historyTitle: string; historyP1: string; historyP2: string; historyP3: string;
  };
  equipment: {
    pageTitle: string; pageSubtitle: string;
    printing: string; ctp: string; cutting: string; coating: string;
    lamination: string; foilDie: string; inspection: string; gluing: string;
    capacityTitle: string; capacitySheets: string; capacityFormat: string;
    capacityProcesses: string;
  };
  quality: {
    pageTitle: string; pageSubtitle: string;
    certTitle: string;
    iso9001: string; iso9001Desc: string;
    iso14001: string; iso14001Desc: string;
    iso45001: string; iso45001Desc: string;
    fsc: string; fscDesc: string;
    hightech: string; hightechDesc: string;
    printLicense: string; printLicenseDesc: string;
    detectionTitle: string; detectionDesc: string;
  };
  contact: {
    pageTitle: string; pageSubtitle: string;
    phone: string; email: string; address: string; addressText: string;
    hours: string; hoursText: string;
  };
  careers: {
    pageTitle: string; pageSubtitle: string;
    whyTitle: string;
    r1: string; r1d: string;
    r2: string; r2d: string;
    r3: string; r3d: string;
    openTitle: string; openNote: string;
    cta: string;
  };
  news: {
    pageTitle: string; pageSubtitle: string;
    n1title: string; n1date: string; n1desc: string;
    n2title: string; n2date: string; n2desc: string;
    n3title: string; n3date: string; n3desc: string;
    n4title: string; n4date: string; n4desc: string;
    n5title: string; n5date: string; n5desc: string;
  };
  industries: {
    pageTitle: string; pageSubtitle: string;
    food: string; foodDesc: string;
    pharma: string; pharmaDesc: string;
    luxury: string; luxuryDesc: string;
    publishing: string; publishingDesc: string;
    retail: string; retailDesc: string;
    industrial: string; industrialDesc: string;
  };
  caseStudies: {
    pageTitle: string; pageSubtitle: string;
    c1title: string; c1tag: string; c1desc: string;
    c2title: string; c2tag: string; c2desc: string;
    c3title: string; c3tag: string; c3desc: string;
    c4title: string; c4tag: string; c4desc: string;
    c5title: string; c5tag: string; c5desc: string;
    c6title: string; c6tag: string; c6desc: string;
  };
  footer: {
    tagline: string; company: string; solutions: string;
    quickLinks: string; contactUs: string; allRights: string;
    creditCode: string;
  };
};

export const ui: Record<Lang, UIStrings> = {

  // ─── ENGLISH ────────────────────────────────────────────────────────────
  en: {
    meta: {
      title: 'InChief Printing — Industrial Printing & Packaging',
      description: 'Zhejiang InChief Printing Technology — world-class offset printing, packaging, and finishing solutions for global brands.',
    },
    nav: {
      company: 'Company', solutions: 'Solutions', equipment: 'Equipment',
      caseStudies: 'Case Studies', quality: 'Quality', contactUs: 'Contact Us',
      overview: 'Overview', about: 'About', industries: 'Industries',
      joinUs: 'Join Us', careers: 'Careers', updates: 'Updates', news: 'News',
      printingSolutions: 'Printing Solutions',
      commercial: 'Commercial Printing', publication: 'Publication Printing',
      marketing: 'Marketing Materials', vdp: 'Variable Data Printing',
      packagingIndustrial: 'Packaging & Industrial',
      foldingCarton: 'Folding Carton Packaging', rigidBox: 'Rigid Box Production',
      labels: 'Label & Sticker Printing', industrialPkg: 'Industrial Packaging',
      finishingEnhancement: 'Finishing & Enhancement',
      uv: 'UV & Varnishing', foil: 'Foil Stamping',
      embossing: 'Embossing & Debossing', dieCutting: 'Die Cutting',
      manufacturingServices: 'Manufacturing Services',
      customProduction: 'Custom Production', oem: 'OEM / ODM Printing',
      supplyChain: 'Supply Chain Integration', fulfillment: 'Global Fulfillment',
    },
    hero: {
      title: 'Technology Creates Endless Possibilities',
      sub1: 'Shaping the Future of Printing with Innovation and Precision.',
      sub2: 'InChief — Printing, in Chief.',
      cta: 'Request a Quote',
    },
    home: {
      overviewTitle: 'Company Overview',
      overviewText: 'Zhejiang InChief Printing Technology Co., Ltd. is a leading high-end color packaging and commercial printer in East China, established March 31, 2020, in Longgang City, Zhejiang. With registered capital of RMB 108.06 million, a fleet of 7 German-brand offset presses (Heidelberg & Koenig & Bauer), and certifications spanning ISO 9001/14001/45001, FSC®, and National High-Tech Enterprise status — InChief delivers large-factory quality with regional cost efficiency and the responsiveness of a dedicated partner.',
      servicesTitle: 'Our Services',
      ctaTitle: 'Ready to Start Your Project?',
      ctaText: 'Contact our team for a custom quote and technical consultation.',
      ctaBtn: 'Contact Us',
    },
    service: {
      commercial: 'Commercial Printing',
      commercialDesc: 'Business cards, brochures, catalogs, flyers, and marketing materials at industrial scale.',
      packaging: 'Packaging Printing',
      packagingDesc: 'Color boxes, gift boxes, corrugated cartons, food & pharmaceutical packaging solutions.',
      finishing: 'Special Finishing',
      finishingDesc: 'UV coating, foil stamping, embossing, debossing, and precision die-cutting for premium results.',
    },
    about: {
      pageTitle: 'About InChief Printing',
      introTitle: 'About the Company',
      introP1: 'Zhejiang InChief Printing Technology Co., Ltd. is an integrated high-tech printing and packaging manufacturer established on March 31, 2020, in Longgang City, Zhejiang Province, China — with strong governmental support.',
      introP2: 'With a registered capital of RMB 108.06 million and a modern production facility, the company provides comprehensive solutions covering packaging design, engineering development, manufacturing, and supply chain services. InChief specializes in corrugated cartons, premium packaging boxes, food and pharmaceutical packaging, gift packaging, hardcover publications, commercial prints, and labeling products.',
      introP3: 'Guided by the philosophy of precision manufacturing and long-term partnership, InChief delivers optimized cost efficiency, stable production capability, and integrated end-to-end services for global customers.',
      factoryTitle: 'Factory Strength',
      factoryP1: 'InChief operates an intelligent manufacturing facility built for large-scale industrial production and high-efficiency workflow integration.',
      factoryP2: 'The factory is equipped with world-class printing systems including Heidelberg and Koenig & Bauer multi-color offset presses, supported by Kodak CTP plate-making technology, automated lamination, hot stamping, die-cutting, inspection, and high-speed folding-gluing lines. Daily sheet capacity reaches 1,100,000 impressions with a maximum print format of 1,640 × 1,205 mm.',
      factoryP3: 'Automated logistics, AGV transportation, and standardized production management ensure stable quality, rapid response capability, and reliable delivery across dedicated manufacturing centers for premium packaging and food & pharmaceutical packaging.',
      historyTitle: 'Development History',
      historyP1: 'Continuous innovation in industrial print manufacturing and packaging engineering.',
      historyP2: 'Founded on March 31, 2020, InChief Printing has focused on integrating advanced industrial equipment, digital workflow systems, and intelligent manufacturing management to build a modern printing enterprise aligned with international standards.',
      historyP3: 'Through sustained investment in technology, talent development, and global cooperation, the company continues to expand production capacity and service capability, building long-term partnerships with international brands and industrial clients across China, Europe, North America, and South America.',
    },
    equipment: {
      pageTitle: 'Equipment',
      pageSubtitle: 'World-Class Printing & Finishing Systems',
      printing: 'Printing Equipment',
      ctp: 'CTP Plate-Making',
      cutting: 'Cutting & Pre-processing',
      coating: 'Coating & UV Systems',
      lamination: 'Lamination & Mounting',
      foilDie: 'Foil Stamping, Die-Cutting & Waste Removal',
      inspection: 'Quality Inspection',
      gluing: 'Box Gluing & Forming',
      capacityTitle: 'Production Capacity',
      capacitySheets: '1,100,000 sheets/day',
      capacityFormat: 'Max format: 1,640 × 1,205 mm',
      capacityProcesses: 'Track code · Varnish · Lamination · UV · Mounting · Foil · Emboss · Die-cut · Waste removal',
    },
    quality: {
      pageTitle: 'Quality Assurance',
      pageSubtitle: 'Certified systems ensuring industrial-grade consistency at every stage.',
      certTitle: 'Certifications & Standards',
      iso9001: 'ISO 9001:2015',
      iso9001Desc: 'Quality Management System — valid through Feb 27, 2029.',
      iso14001: 'ISO 14001:2015',
      iso14001Desc: 'Environmental Management System — valid through Feb 27, 2029.',
      iso45001: 'ISO 45001:2018',
      iso45001Desc: 'Occupational Health & Safety Management — valid through Feb 27, 2029.',
      fsc: 'FSC® Chain of Custody (FSC-C212511)',
      fscDesc: 'Certified by SCS Global Services. Supports FSC Mix and Recycled materials. Valid Jan 25, 2026 – Jan 22, 2030.',
      hightech: 'National High-Tech Enterprise',
      hightechDesc: 'Certificate No. GR202433001592 — valid through Dec 6, 2027.',
      printLicense: 'Printing Business License',
      printLicenseDesc: '(浙)印证字第1-00698号 — valid through Dec 31, 2030.',
      detectionTitle: 'Detection Capability',
      detectionDesc: 'Print color density · Automated defect recognition · Dimensional accuracy · Pressure & temperature monitoring · Weight & process-time control · Track code & regulatory code verification.',
    },
    contact: {
      pageTitle: 'Contact Us',
      pageSubtitle: 'Get in touch with our team for quotes, technical questions, or partnership inquiries.',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      addressText: 'No. 2740–2828, Dongtang Road, Longgang City, Wenzhou, Zhejiang, China',
      hours: 'Business Hours',
      hoursText: 'Monday – Friday, 08:30 – 18:00 (CST)',
    },
    careers: {
      pageTitle: 'Careers',
      pageSubtitle: 'Join a world-class team building the future of industrial printing.',
      whyTitle: 'Why InChief?',
      r1: 'World-Class Equipment', r1d: 'Work alongside Heidelberg, Koenig & Bauer, and Kodak systems in an intelligent manufacturing environment.',
      r2: 'Global Reach', r2d: 'Collaborate with clients and partners from Europe, North America, and South America.',
      r3: 'Growth Culture', r3d: 'Continuous training, cross-functional exposure, and a clear path for professional advancement.',
      openTitle: 'Open Positions',
      openNote: 'We regularly recruit for roles in printing operations, engineering, quality control, sales, and supply chain management. Send your CV to info@InChief.cn.',
      cta: 'Send Your CV',
    },
    news: {
      pageTitle: 'News & Updates',
      pageSubtitle: 'Latest developments from InChief Printing.',
      n1title: 'ISO Triple Certification Renewed', n1date: 'March 2026', n1desc: 'InChief Printing successfully renewed ISO 9001, ISO 14001, and ISO 45001 certifications, reaffirming our commitment to quality, environment, and workplace safety.',
      n2title: 'FSC® Certification Extended to 2030', n2date: 'January 2026', n2desc: 'Our FSC Chain of Custody certification (FSC-C212511) has been extended through January 2030, enabling compliant sustainable packaging for export brands.',
      n3title: 'National High-Tech Enterprise Recognition', n3date: 'December 2024', n3desc: 'InChief Printing was officially recognized as a National High-Tech Enterprise (GR202433001592), reflecting our sustained investment in R&D and intelligent manufacturing.',
      n4title: 'Koenig & Bauer RA164-5 Full-Format Press Commissioned', n4date: 'August 2023', n4desc: 'InChief commissioned the Koenig & Bauer RA164-5 five-color full-format offset press, expanding maximum print format to 1,640 × 1,205 mm and significantly boosting large-format packaging capacity.',
      n5title: 'First FSC-Compliant Export Order Delivered', n5date: 'June 2022', n5desc: 'InChief completed its first large-volume FSC-certified packaging export order, supplying European retail brand partners with sustainably sourced materials — marking an important milestone in global market expansion.',
    },
    industries: {
      pageTitle: 'Industries Served',
      pageSubtitle: 'Precision packaging and printing solutions across key sectors.',
      food: 'Food & Beverage', foodDesc: 'Food-safe packaging materials, regulatory code compliance, hygienic production standards, and shelf-appeal finishing.',
      pharma: 'Pharmaceutical', pharmaDesc: 'Track code printing, anti-counterfeiting features, precision die-cutting, and compliance with medical packaging standards.',
      luxury: 'Luxury & Premium Goods', luxuryDesc: 'Rigid boxes, foil stamping, embossing, UV enhancement, and premium finishing for high-end brand experiences.',
      publishing: 'Publishing & Editorial', publishingDesc: 'Hardcover books, softcover publications, magazines, and marketing collateral with consistent color and quality.',
      retail: 'Retail & Consumer Goods', retailDesc: 'Folding cartons, labels, stickers, and promotional packaging for mass-market consumer products.',
      industrial: 'Industrial & OEM', industrialDesc: 'Custom production, OEM/ODM printing services, and supply chain integration for industrial product packaging.',
    },
    caseStudies: {
      pageTitle: 'Case Studies',
      pageSubtitle: 'Real projects. Measurable results.',
      c1title: 'Premium Gift Box — European Luxury Brand', c1tag: 'Rigid Box · Foil Stamping · Embossing', c1desc: 'Designed and produced a premium rigid gift box line for a European luxury brand. 4-color offset print with hot foil stamping, spot UV, and embossed brand logo. 50,000 units delivered within 18 days.',
      c2title: 'Pharmaceutical Track-Code Packaging', c2tag: 'Packaging · Track Code · Compliance', c2desc: 'Printed and finished pharmaceutical-compliant folding cartons with full regulatory track-code integration and automated quality inspection, achieving zero defect rate on 2,000,000 units.',
      c3title: 'OEM Corrugated Export Cartons', c3tag: 'Corrugated · OEM · Supply Chain', c3desc: 'Managed end-to-end OEM production for a North American retailer — from structural design to mass printing, die-cutting, and global logistics coordination for 500,000 corrugated carton units.',
      c4title: 'FSC-Certified Food & Beverage Packaging', c4tag: 'Food Packaging · FSC® · Sustainable', c4desc: 'Produced FSC-certified folding carton packaging for an export beverage brand using food-safe ink systems, environmentally certified paperboard, and precision color management for shelf appeal across European markets.',
      c5title: 'Annual Brand Catalog — 8-Color Commercial Print', c5tag: 'Commercial · Catalog · Heidelberg CX104', c5desc: 'Delivered a 256-page full-color brand catalog for an international consumer goods client using the Heidelberg CX104 10-color press with inline UV finishing. 80,000 copies completed in 12 days.',
      c6title: 'Variable Data Label Program — Retail Supply Chain', c6tag: 'VDP · Labels · Supply Chain', c6desc: 'Implemented a variable data label production program for a retail supply chain client, printing 3,000,000 unique SKU labels with serialized barcodes and QR codes for end-to-end logistics traceability.',
    },
    footer: {
      tagline: 'Industrial Printing Engineering & Manufacturing Solutions.',
      company: 'Company', solutions: 'Solutions', quickLinks: 'Quick Links',
      contactUs: 'Contact Us', allRights: 'All rights reserved.',
      creditCode: 'Unified Social Credit Code: 913330383MA2HBRJ43K',
    },
  },

  // ─── CHINESE ────────────────────────────────────────────────────────────
  zh: {
    meta: {
      title: '云创印刷 — 工业级印刷与包装制造',
      description: '浙江云创印刷科技有限公司，专注商务印刷、包装印刷、数码快印及出版物印刷，为全球合作伙伴提供高品质解决方案。',
    },
    nav: {
      company: '公司', solutions: '解决方案', equipment: '生产设备',
      caseStudies: '案例研究', quality: '品质保证', contactUs: '联系我们',
      overview: '概览', about: '关于我们', industries: '服务行业',
      joinUs: '加入我们', careers: '招聘', updates: '最新动态', news: '新闻',
      printingSolutions: '印刷解决方案',
      commercial: '商务印刷', publication: '出版物印刷',
      marketing: '营销物料', vdp: '可变数据打印',
      packagingIndustrial: '包装与工业',
      foldingCarton: '折叠纸盒包装', rigidBox: '硬盒生产',
      labels: '标签与贴纸印刷', industrialPkg: '工业包装',
      finishingEnhancement: '印后加工',
      uv: 'UV上光', foil: '烫金',
      embossing: '击凸/击凹', dieCutting: '模切',
      manufacturingServices: '制造服务',
      customProduction: '定制生产', oem: 'OEM/ODM印刷',
      supplyChain: '供应链整合', fulfillment: '全球配送',
    },
    hero: {
      title: '科技创造无限可能',
      sub1: '以创新与精准，引领印刷行业未来。',
      sub2: '云创印刷 — 精于印刷，领于行业。',
      cta: '立即询价',
    },
    home: {
      overviewTitle: '企业概览',
      overviewText: '浙江云创印刷科技有限公司是华东地区高端彩色包装印刷领先企业，成立于2020年3月31日，注册资本1.0806亿元，坐落于浙江省温州市龙港市。公司拥有7台全德进口胶印机（海德堡 & 高宝），持有ISO 9001/14001/45001三体系、FSC®及国家高新技术企业等多项认证，以大厂认证体系、区域成本优势与灵活响应能力，为全球客户提供高端印刷包装一体化解决方案。',
      servicesTitle: '核心业务',
      ctaTitle: '准备开始您的项目？',
      ctaText: '联系我们的团队，获取定制报价与专业技术咨询。',
      ctaBtn: '联系我们',
    },
    service: {
      commercial: '商务印刷',
      commercialDesc: '名片、宣传单、画册、折页及营销物料，工业级规模生产。',
      packaging: '包装印刷',
      packagingDesc: '彩盒、礼品盒、瓦楞纸箱及食品医药包装解决方案。',
      finishing: '印后加工',
      finishingDesc: 'UV上光、烫金、击凸、击凹及精密模切，成就高端品质。',
    },
    about: {
      pageTitle: '关于云创印刷',
      introTitle: '企业简介',
      introP1: '浙江云创印刷科技有限公司成立于2020年3月31日，坐落于浙江省温州市龙港市，是一家由多家行业领军企业战略联合、获得政府大力支持的综合型高新技术印刷包装企业。',
      introP2: '公司注册资本1.0806亿元人民币，拥有现代化生产基地，提供涵盖包装设计、工程开发、制造生产及供应链管理的全链条服务。主营产品包括：瓦楞纸箱、高端包装盒、食品医药包装、礼品包装、精装出版物、商务印刷品及标签产品。',
      introP3: '秉持「精密制造，长期合作」的经营理念，云创印刷致力于为全球客户提供最优成本效益、稳定的生产能力和完整的端到端服务。',
      factoryTitle: '工厂实力',
      factoryP1: '云创印刷运营一座专为大规模工业生产和高效工作流整合而建的智能制造工厂。',
      factoryP2: '工厂配备海德堡（Heidelberg）和高宝（Koenig & Bauer）多色胶印机等国际顶尖印刷设备，搭载柯达（Kodak）CTP制版技术，配套自动化覆膜、烫金、模切、检测及高速糊盒生产线。日印刷产能达110万印张，最大印刷幅面1640×1205mm。',
      factoryP3: '自动化物流、AGV搬运系统和标准化生产管理确保稳定品质、快速响应能力和可靠交付表现，专属制造中心覆盖高端包装及食品医药包装等多个专业领域。',
      historyTitle: '发展历程',
      historyP1: '持续推进工业印刷制造与包装工程领域的技术创新。',
      historyP2: '自2020年3月31日成立以来，云创印刷始终致力于整合先进工业设备、数字化工作流系统和智能制造管理，打造符合国际标准的现代印刷企业。',
      historyP3: '通过持续的技术投入、人才培养与全球合作，公司不断扩大产能与服务能力，与中国大陆、欧洲、北美及南美的国际品牌和工业客户建立长期伙伴关系。',
    },
    equipment: {
      pageTitle: '生产设备',
      pageSubtitle: '国际顶尖印刷与印后加工系统',
      printing: '印刷设备',
      ctp: 'CTP数字制版',
      cutting: '裁切与前处理',
      coating: '喷码/上光设备',
      lamination: '覆膜与裱纸设备',
      foilDie: '烫金 / 模切 / 清废设备',
      inspection: '质量检测设备',
      gluing: '糊盒 / 成型设备',
      capacityTitle: '生产能力',
      capacitySheets: '日产能：1,100,000 印张',
      capacityFormat: '最大幅面：1,640 × 1,205 mm',
      capacityProcesses: '监管码 · 上光 · 覆膜 · UV · 对裱 · 烫金 · 击凸 · 模切 · 清废',
    },
    quality: {
      pageTitle: '品质保证',
      pageSubtitle: '完整的认证体系确保每道工序的工业级品质一致性。',
      certTitle: '认证与资质',
      iso9001: 'ISO 9001:2015',
      iso9001Desc: '质量管理体系认证 — 有效期至2029年2月27日。',
      iso14001: 'ISO 14001:2015',
      iso14001Desc: '环境管理体系认证 — 有效期至2029年2月27日。',
      iso45001: 'ISO 45001:2018',
      iso45001Desc: '职业健康安全管理体系认证 — 有效期至2029年2月27日。',
      fsc: 'FSC® 产销监管链认证（FSC-C212511）',
      fscDesc: '认证机构：SCS Global Services。支持FSC Mix及Recycled类型。有效期：2026年1月25日至2030年1月22日。',
      hightech: '国家高新技术企业',
      hightechDesc: '证书编号：GR202433001592 — 有效期至2027年12月6日。',
      printLicense: '印刷经营许可证',
      printLicenseDesc: '(浙)印证字第1-00698号 — 有效期至2030年12月31日。',
      detectionTitle: '检测能力',
      detectionDesc: '印刷色彩密度检测 · 自动化瑕疵识别与分拣 · 尺寸精度控制 · 压力与温度环境监控 · 重量与工艺时间控制 · 追溯码与监管码验证。',
    },
    contact: {
      pageTitle: '联系我们',
      pageSubtitle: '联系我们的团队，获取报价、技术咨询或合作洽谈。',
      phone: '电话',
      email: '邮箱',
      address: '地址',
      addressText: '浙江省温州市龙港市东塘路2740-2828号 浙江云创印刷科技有限公司',
      hours: '办公时间',
      hoursText: '周一至周五，08:30 – 18:00（北京时间）',
    },
    careers: {
      pageTitle: '加入我们',
      pageSubtitle: '加入一支世界级团队，共同构建工业印刷的未来。',
      whyTitle: '为什么选择云创？',
      r1: '顶尖设备', r1d: '在海德堡、高宝、柯达等世界顶级印刷系统构成的智能制造环境中工作。',
      r2: '全球视野', r2d: '与欧洲、北美、南美的客户和合作伙伴深度协作。',
      r3: '成长文化', r3d: '持续培训、跨职能发展机会，以及清晰的职业晋升通道。',
      openTitle: '招聘岗位',
      openNote: '我们长期招募印刷操作、工程技术、质量管理、销售及供应链等岗位人才。欢迎发送简历至 info@InChief.cn。',
      cta: '发送简历',
    },
    news: {
      pageTitle: '新闻动态',
      pageSubtitle: '云创印刷最新进展。',
      n1title: 'ISO三体系认证成功续期', n1date: '2026年3月', n1desc: '云创印刷成功完成ISO 9001、ISO 14001及ISO 45001三大体系认证续期，再次彰显公司对质量、环境与职业健康安全的持续承诺。',
      n2title: 'FSC®认证延续至2030年', n2date: '2026年1月', n2desc: '我司FSC产销监管链认证（FSC-C212511）已延续至2030年1月，持续支持出口品牌合规可持续包装需求。',
      n3title: '荣获国家高新技术企业认定', n3date: '2024年12月', n3desc: '云创印刷正式获批国家高新技术企业认定（GR202433001592），充分体现了公司在研发与智能制造领域的持续投入。',
      n4title: '高宝RA164-5全开五色胶印机正式投产', n4date: '2023年8月', n4desc: '云创印刷引进高宝RA164-5全开五色胶印机，最大印刷幅面扩展至1640×1205mm，大幅提升大幅面高端包装产品产能。',
      n5title: 'FSC合规首批国际出口订单圆满交付', n5date: '2022年6月', n5desc: '云创印刷完成首批FSC认证大体量包装出口订单，向欧洲零售品牌合作伙伴交付环保认证包装，标志着公司国际市场拓展迈出重要一步。',
    },
    industries: {
      pageTitle: '服务行业',
      pageSubtitle: '为关键行业提供精密包装与印刷解决方案。',
      food: '食品与饮料', foodDesc: '食品级安全包装材料、监管码合规、卫生化生产标准及高颜值印后加工。',
      pharma: '医药行业', pharmaDesc: '追溯码印刷、防伪功能、精密模切及符合医药包装标准的整体解决方案。',
      luxury: '奢侈品与高端品牌', luxuryDesc: '精装硬盒、烫金、击凸、UV增效及高端印后加工，为顶级品牌打造极致体验。',
      publishing: '出版与编辑', publishingDesc: '精装书籍、平装出版物、杂志及营销物料，色彩稳定、品质如一。',
      retail: '零售与消费品', retailDesc: '折叠纸盒、标签、贴纸及促销包装，服务大众消费市场。',
      industrial: '工业与OEM', industrialDesc: '定制生产、OEM/ODM印刷服务及工业产品包装供应链整合。',
    },
    caseStudies: {
      pageTitle: '案例研究',
      pageSubtitle: '真实项目，可量化成果。',
      c1title: '欧洲奢侈品牌高端礼品盒', c1tag: '硬盒 · 烫金 · 击凸', c1desc: '为欧洲奢侈品牌设计并生产高端礼品盒系列。四色胶印配合热烫金、局部UV及品牌浮雕logo，共5万件，18天内完成交付。',
      c2title: '医药追溯码合规包装', c2tag: '包装 · 追溯码 · 合规', c2desc: '为医药客户印刷并加工符合法规要求的折叠纸盒，全程集成监管码，配合自动化质量检测，200万件实现零缺陷交付。',
      c3title: 'OEM出口瓦楞纸箱', c3tag: '瓦楞纸箱 · OEM · 供应链', c3desc: '为北美零售商提供OEM全程生产服务，覆盖结构设计、批量印刷、模切加工及全球物流协调，共交付50万件瓦楞纸箱。',
      c4title: 'FSC认证食品饮料包装', c4tag: '食品包装 · FSC® · 可持续', c4desc: '为出口饮料品牌生产FSC认证折叠纸盒，采用食品安全油墨体系及环保认证纸板，配合精准色彩管理，满足欧洲市场货架展示需求。',
      c5title: '品牌年度画册——八色商务胶印', c5tag: '商务 · 画册 · 海德堡CX104', c5desc: '使用海德堡CX104十色胶印机及联机UV加工，为国际消费品客户完成256页全彩品牌画册生产。8万册，12天交货。',
      c6title: '零售供应链可变数据标签项目', c6tag: 'VDP · 标签 · 供应链', c6desc: '为零售供应链客户实施可变数据标签生产方案，印刷300万枚含序列条码与二维码的唯一SKU标签，实现全链路物流溯源追踪。',
    },
    footer: {
      tagline: '工业级印刷工程与制造解决方案。',
      company: '公司', solutions: '解决方案', quickLinks: '快捷链接',
      contactUs: '联系我们', allRights: '版权所有。',
      creditCode: '统一社会信用代码：913330383MA2HBRJ43K',
    },
  },

  // ─── FRENCH ─────────────────────────────────────────────────────────────
  fr: {
    meta: {
      title: 'InChief Printing — Impression & Emballage Industriels',
      description: 'Zhejiang InChief Printing Technology — solutions d\'impression offset, d\'emballage et de finition de classe mondiale pour les marques internationales.',
    },
    nav: {
      company: 'Entreprise', solutions: 'Solutions', equipment: 'Équipements',
      caseStudies: 'Études de Cas', quality: 'Qualité', contactUs: 'Contactez-nous',
      overview: 'Aperçu', about: 'À propos', industries: 'Industries',
      joinUs: 'Nous rejoindre', careers: 'Carrières', updates: 'Actualités', news: 'Nouvelles',
      printingSolutions: 'Solutions d\'impression',
      commercial: 'Impression commerciale', publication: 'Impression d\'édition',
      marketing: 'Supports marketing', vdp: 'Impression à données variables',
      packagingIndustrial: 'Emballage & Industriel',
      foldingCarton: 'Emballage carton pliant', rigidBox: 'Boîtes rigides',
      labels: 'Étiquettes & Autocollants', industrialPkg: 'Emballage industriel',
      finishingEnhancement: 'Finition & Valorisation',
      uv: 'UV & Vernissage', foil: 'Dorure à chaud',
      embossing: 'Gaufrage & Embossage', dieCutting: 'Découpe à l\'emporte-pièce',
      manufacturingServices: 'Services de fabrication',
      customProduction: 'Production personnalisée', oem: 'Impression OEM / ODM',
      supplyChain: 'Intégration de la chaîne d\'approvisionnement', fulfillment: 'Expédition mondiale',
    },
    hero: {
      title: 'La Technologie Crée des Possibilités Infinies',
      sub1: 'Façonner l\'avenir de l\'impression avec innovation et précision.',
      sub2: 'InChief — L\'impression au sommet.',
      cta: 'Demander un devis',
    },
    home: {
      overviewTitle: 'Aperçu de l\'entreprise',
      overviewText: 'Zhejiang InChief Printing Technology Co., Ltd. est un leader de l\'impression d\'emballage couleur haut de gamme en Chine de l\'Est, fondé le 31 mars 2020 à Longgang, Zhejiang. Avec un capital enregistré de 108,06 millions de RMB, une flotte de 7 presses offset allemandes (Heidelberg & Koenig & Bauer) et des certifications ISO 9001/14001/45001, FSC® et Entreprise nationale haute technologie — InChief combine qualité de grande usine, coûts régionaux et réactivité d\'un partenaire dédié.',
      servicesTitle: 'Nos Services',
      ctaTitle: 'Prêt à démarrer votre projet ?',
      ctaText: 'Contactez notre équipe pour un devis personnalisé et une consultation technique.',
      ctaBtn: 'Nous contacter',
    },
    service: {
      commercial: 'Impression Commerciale',
      commercialDesc: 'Cartes de visite, brochures, catalogues, flyers et supports marketing à l\'échelle industrielle.',
      packaging: 'Impression d\'Emballage',
      packagingDesc: 'Boîtes couleur, boîtes cadeaux, cartons ondulés, emballages alimentaires et pharmaceutiques.',
      finishing: 'Finition Spéciale',
      finishingDesc: 'Vernis UV, dorure à chaud, gaufrage, embossage et découpe précise pour des finitions premium.',
    },
    about: {
      pageTitle: 'À propos d\'InChief Printing',
      introTitle: 'À propos de l\'entreprise',
      introP1: 'Zhejiang InChief Printing Technology Co., Ltd. est un fabricant intégré spécialisé dans l\'impression et l\'emballage haute technologie, fondé le 31 mars 2020 à Longgang, province du Zhejiang, Chine — avec un fort soutien gouvernemental.',
      introP2: 'Avec un capital enregistré de 108,06 millions de RMB et des installations modernes, l\'entreprise propose des solutions complètes couvrant la conception d\'emballages, le développement technique, la fabrication et la chaîne d\'approvisionnement. InChief est spécialisé dans les cartons ondulés, les emballages premium, les emballages alimentaires et pharmaceutiques, les emballages cadeaux, les publications reliées, les impressions commerciales et les produits d\'étiquetage.',
      introP3: 'Guidée par la philosophie de la fabrication de précision et du partenariat à long terme, InChief se concentre sur la livraison d\'une efficacité optimisée des coûts, d\'une capacité de production stable et de services intégrés de bout en bout pour les clients mondiaux.',
      factoryTitle: 'Capacité de fabrication',
      factoryP1: 'InChief exploite une installation de fabrication intelligente conçue pour la production industrielle à grande échelle et l\'intégration de flux de travail à haute efficacité.',
      factoryP2: 'L\'usine est équipée de systèmes d\'impression de classe mondiale : presses offset multi-couleurs Heidelberg et Koenig & Bauer, technologie CTP Kodak, lamination automatisée, dorure à chaud, découpe, inspection et lignes de pliage-collage haute vitesse. La capacité journalière atteint 1 100 000 impressions, format maximum 1 640 × 1 205 mm.',
      factoryP3: 'La logistique automatisée, le transport AGV et la gestion standardisée de la production garantissent qualité stable, réactivité et livraisons fiables dans les centres dédiés aux emballages premium et pharmaceutiques.',
      historyTitle: 'Historique',
      historyP1: 'Innovation continue dans la fabrication d\'impression industrielle et l\'ingénierie d\'emballage.',
      historyP2: 'Fondé le 31 mars 2020, InChief Printing a intégré équipements industriels avancés, systèmes de flux de travail numériques et gestion intelligente de la production pour bâtir une entreprise conforme aux normes internationales.',
      historyP3: 'Grâce à des investissements soutenus en technologie, développement des talents et coopération mondiale, la société continue d\'étendre sa capacité, en établissant des partenariats durables avec des marques internationales en Chine, Europe, Amérique du Nord et Amérique du Sud.',
    },
    equipment: {
      pageTitle: 'Équipements',
      pageSubtitle: 'Systèmes d\'impression et de finition de classe mondiale',
      printing: 'Équipements d\'impression',
      ctp: 'Gravure CTP',
      cutting: 'Découpe & Pré-traitement',
      coating: 'Vernissage & UV',
      lamination: 'Lamination & Montage',
      foilDie: 'Dorure, Découpe & Élimination des déchets',
      inspection: 'Contrôle qualité',
      gluing: 'Encollage & Formage',
      capacityTitle: 'Capacité de production',
      capacitySheets: '1 100 000 feuilles/jour',
      capacityFormat: 'Format max : 1 640 × 1 205 mm',
      capacityProcesses: 'Code traçabilité · Vernissage · Lamination · UV · Montage · Dorure · Gaufrage · Découpe · Ébarbage',
    },
    quality: {
      pageTitle: 'Assurance Qualité',
      pageSubtitle: 'Des systèmes certifiés garantissant une cohérence industrielle à chaque étape.',
      certTitle: 'Certifications & Normes',
      iso9001: 'ISO 9001:2015',
      iso9001Desc: 'Système de management de la qualité — valide jusqu\'au 27 fév. 2029.',
      iso14001: 'ISO 14001:2015',
      iso14001Desc: 'Système de management environnemental — valide jusqu\'au 27 fév. 2029.',
      iso45001: 'ISO 45001:2018',
      iso45001Desc: 'Santé et sécurité au travail — valide jusqu\'au 27 fév. 2029.',
      fsc: 'FSC® Chaîne de contrôle (FSC-C212511)',
      fscDesc: 'Certifié par SCS Global Services. FSC Mix et Recycled. Valide du 25 jan. 2026 au 22 jan. 2030.',
      hightech: 'Entreprise nationale de haute technologie',
      hightechDesc: 'Certificat N° GR202433001592 — valide jusqu\'au 6 déc. 2027.',
      printLicense: 'Licence d\'exploitation d\'imprimerie',
      printLicenseDesc: '(浙)印证字第1-00698号 — valide jusqu\'au 31 déc. 2030.',
      detectionTitle: 'Capacités de détection',
      detectionDesc: 'Densité couleur · Détection automatisée des défauts · Précision dimensionnelle · Température & pression · Contrôle poids & temps · Vérification des codes de traçabilité.',
    },
    contact: {
      pageTitle: 'Contactez-nous',
      pageSubtitle: 'Contactez notre équipe pour des devis, questions techniques ou demandes de partenariat.',
      phone: 'Téléphone',
      email: 'E-mail',
      address: 'Adresse',
      addressText: 'N° 2740–2828, route Dongtang, Longgang, Wenzhou, Zhejiang, Chine',
      hours: 'Heures d\'ouverture',
      hoursText: 'Lundi – Vendredi, 08h30 – 18h00 (heure de Pékin)',
    },
    careers: {
      pageTitle: 'Carrières',
      pageSubtitle: 'Rejoignez une équipe de classe mondiale qui construit l\'avenir de l\'impression industrielle.',
      whyTitle: 'Pourquoi InChief ?',
      r1: 'Équipements de pointe', r1d: 'Travaillez aux côtés de systèmes Heidelberg, Koenig & Bauer et Kodak dans un environnement de fabrication intelligent.',
      r2: 'Portée mondiale', r2d: 'Collaborez avec des clients et partenaires d\'Europe, d\'Amérique du Nord et d\'Amérique du Sud.',
      r3: 'Culture de croissance', r3d: 'Formation continue, exposition multifonctionnelle et parcours d\'avancement professionnel clair.',
      openTitle: 'Postes ouverts',
      openNote: 'Nous recrutons régulièrement pour des postes en opérations d\'impression, ingénierie, contrôle qualité, ventes et gestion de la chaîne d\'approvisionnement. Envoyez votre CV à info@InChief.cn.',
      cta: 'Envoyer votre CV',
    },
    news: {
      pageTitle: 'Actualités',
      pageSubtitle: 'Derniers développements d\'InChief Printing.',
      n1title: 'Triple certification ISO renouvelée', n1date: 'Mars 2026', n1desc: 'InChief Printing a renouvelé avec succès ses certifications ISO 9001, ISO 14001 et ISO 45001, réaffirmant notre engagement envers la qualité, l\'environnement et la sécurité au travail.',
      n2title: 'Certification FSC® prolongée jusqu\'en 2030', n2date: 'Janvier 2026', n2desc: 'Notre certification FSC Chain of Custody (FSC-C212511) a été prolongée jusqu\'en janvier 2030, permettant des emballages durables conformes pour les marques d\'exportation.',
      n3title: 'Reconnaissance nationale haute technologie', n3date: 'Décembre 2024', n3desc: 'InChief Printing a été officiellement reconnu comme Entreprise nationale de haute technologie (GR202433001592), reflétant notre investissement soutenu en R&D et fabrication intelligente.',
      n4title: 'Mise en service de la presse plein format Koenig & Bauer RA164-5', n4date: 'Août 2023', n4desc: 'InChief a mis en service la presse offset 5 couleurs plein format Koenig & Bauer RA164-5, portant le format d\'impression maximum à 1 640 × 1 205 mm et renforçant significativement la capacité d\'emballage grand format.',
      n5title: 'Première commande export certifiée FSC® livrée', n5date: 'Juin 2022', n5desc: 'InChief a livré sa première commande d\'emballage certifié FSC à grande échelle, fournissant des partenaires européens de marques retail avec des matériaux d\'origine durable — une étape clé dans l\'expansion internationale.',
    },
    industries: {
      pageTitle: 'Industries servies',
      pageSubtitle: 'Solutions d\'emballage et d\'impression de précision dans les secteurs clés.',
      food: 'Alimentation & Boissons', foodDesc: 'Emballages alimentaires sûrs, conformité réglementaire, standards de production hygiéniques et finitions attrayantes.',
      pharma: 'Pharmaceutique', pharmaDesc: 'Impression de codes de traçabilité, anti-contrefaçon, découpe précise et conformité aux normes d\'emballage médical.',
      luxury: 'Luxe & Produits premium', luxuryDesc: 'Boîtes rigides, dorure, gaufrage, UV et finitions premium pour des expériences de marque haut de gamme.',
      publishing: 'Édition & Presse', publishingDesc: 'Livres reliés, publications brochées, magazines et supports marketing avec couleur et qualité constants.',
      retail: 'Commerce de détail', retailDesc: 'Cartons pliants, étiquettes, autocollants et emballages promotionnels pour les produits grand public.',
      industrial: 'Industriel & OEM', industrialDesc: 'Production personnalisée, services d\'impression OEM/ODM et intégration de la chaîne d\'approvisionnement pour l\'emballage de produits industriels.',
    },
    caseStudies: {
      pageTitle: 'Études de Cas',
      pageSubtitle: 'Projets réels. Résultats mesurables.',
      c1title: 'Boîte cadeau premium — Marque de luxe européenne', c1tag: 'Boîte rigide · Dorure · Gaufrage', c1desc: 'Conception et production d\'une gamme de boîtes cadeaux rigides premium pour une marque de luxe européenne. Impression offset 4 couleurs avec dorure à chaud, UV sélectif et logo en relief. 50 000 unités livrées en 18 jours.',
      c2title: 'Emballage pharmaceutique avec code de traçabilité', c2tag: 'Emballage · Traçabilité · Conformité', c2desc: 'Impression et finition de cartons pliants conformes aux normes pharmaceutiques avec intégration complète des codes réglementaires et inspection qualité automatisée. Zéro défaut sur 2 000 000 unités.',
      c3title: 'Cartons ondulés OEM pour l\'export', c3tag: 'Ondulé · OEM · Chaîne d\'approvisionnement', c3desc: 'Gestion de la production OEM de bout en bout pour un distributeur nord-américain — de la conception structurelle à l\'impression en masse, la découpe et la coordination logistique mondiale pour 500 000 cartons ondulés.',
      c4title: 'Emballage alimentaire certifié FSC®', c4tag: 'Emballage alimentaire · FSC® · Durable', c4desc: 'Production de cartons pliants certifiés FSC pour une marque de boissons à l\'export, utilisant des encres alimentaires et du carton certifié, avec gestion chromatique de précision pour une attractivité optimale en rayon sur les marchés européens.',
      c5title: 'Catalogue annuel de marque — Impression commerciale 8 couleurs', c5tag: 'Commercial · Catalogue · Heidelberg CX104', c5desc: 'Livraison d\'un catalogue de marque pleine couleur de 256 pages pour un client international, via la presse Heidelberg CX104 10 couleurs avec finition UV en ligne. 80 000 exemplaires en 12 jours.',
      c6title: 'Programme d\'étiquettes à données variables — Chaîne d\'approvisionnement', c6tag: 'VDP · Étiquettes · Logistique', c6desc: 'Mise en place d\'un programme d\'étiquettes à données variables pour un client logistique, avec impression de 3 000 000 d\'étiquettes SKU uniques contenant codes-barres sérialisés et QR codes pour une traçabilité totale.',
    },
    footer: {
      tagline: 'Ingénierie d\'impression industrielle & solutions de fabrication.',
      company: 'Entreprise', solutions: 'Solutions', quickLinks: 'Liens rapides',
      contactUs: 'Nous contacter', allRights: 'Tous droits réservés.',
      creditCode: 'Code de crédit social unifié : 913330383MA2HBRJ43K',
    },
  },

  // ─── ARABIC ─────────────────────────────────────────────────────────────
  ar: {
    meta: {
      title: 'InChief Printing — طباعة وتغليف صناعي',
      description: 'شركة Zhejiang InChief Printing Technology — حلول طباعة أوفست عالمية المستوى وتغليف وتشطيب للعلامات التجارية الدولية.',
    },
    nav: {
      company: 'الشركة', solutions: 'الحلول', equipment: 'المعدات',
      caseStudies: 'دراسات الحالة', quality: 'الجودة', contactUs: 'اتصل بنا',
      overview: 'نظرة عامة', about: 'من نحن', industries: 'الصناعات',
      joinUs: 'انضم إلينا', careers: 'الوظائف', updates: 'التحديثات', news: 'الأخبار',
      printingSolutions: 'حلول الطباعة',
      commercial: 'الطباعة التجارية', publication: 'طباعة المنشورات',
      marketing: 'المواد التسويقية', vdp: 'طباعة البيانات المتغيرة',
      packagingIndustrial: 'التغليف والصناعة',
      foldingCarton: 'تغليف الكرتون القابل للطي', rigidBox: 'إنتاج الصناديق الصلبة',
      labels: 'طباعة الملصقات', industrialPkg: 'التغليف الصناعي',
      finishingEnhancement: 'التشطيب والتحسين',
      uv: 'طلاء UV والورنيش', foil: 'الختم بالرقائق',
      embossing: 'النقش البارز والغائر', dieCutting: 'القطع بالقالب',
      manufacturingServices: 'خدمات التصنيع',
      customProduction: 'الإنتاج المخصص', oem: 'طباعة OEM / ODM',
      supplyChain: 'تكامل سلسلة التوريد', fulfillment: 'التوصيل العالمي',
    },
    hero: {
      title: 'التكنولوجيا تخلق إمكانيات لا نهاية لها',
      sub1: 'تشكيل مستقبل الطباعة بالابتكار والدقة.',
      sub2: '.InChief — الطباعة في قمة الإتقان',
      cta: 'طلب عرض سعر',
    },
    home: {
      overviewTitle: 'نظرة عامة على الشركة',
      overviewText: 'شركة Zhejiang InChief Printing Technology Co., Ltd. هي رائدة في طباعة التغليف الملوّن الفاخر في شرق الصين، تأسست في 31 مارس 2020 في لونغغانغ، تشيجيانغ. برأس مال مسجل 108.06 مليون يوان، وأسطول من 7 مطابع أوفست ألمانية (Heidelberg و Koenig & Bauer)، وشهادات ISO 9001/14001/45001 و FSC® ومؤسسة وطنية للتقنية العالية — تجمع InChief جودة المصنع الكبير مع تكلفة المصنع الإقليمي ومرونة الشريك المتخصص.',
      servicesTitle: 'خدماتنا',
      ctaTitle: 'هل أنت مستعد لبدء مشروعك؟',
      ctaText: 'تواصل مع فريقنا للحصول على عرض سعر مخصص واستشارة تقنية.',
      ctaBtn: 'اتصل بنا',
    },
    service: {
      commercial: 'الطباعة التجارية',
      commercialDesc: 'بطاقات العمل والكتيبات والكتالوجات والمنشورات والمواد التسويقية على نطاق صناعي.',
      packaging: 'طباعة التغليف',
      packagingDesc: 'صناديق ملونة وصناديق هدايا وكراتين مموجة وحلول تغليف الأغذية والأدوية.',
      finishing: 'التشطيب الخاص',
      finishingDesc: 'طلاء UV والختم بالرقائق والنقش البارز والغائر والقطع الدقيق بالقالب للحصول على نتائج متميزة.',
    },
    about: {
      pageTitle: 'عن InChief Printing',
      introTitle: 'عن الشركة',
      introP1: 'شركة Zhejiang InChief Printing Technology Co., Ltd. هي مصنّع متكامل في مجال الطباعة والتغليف عالي التقنية، تأسست في 31 مارس 2020 في مدينة لونغغانغ، مقاطعة تشيجيانغ، الصين — بدعم حكومي قوي.',
      introP2: 'برأس مال مسجل يبلغ 108.06 مليون يوان ومنشأة إنتاج حديثة، تقدم الشركة حلولاً شاملة تغطي تصميم التغليف والتطوير الهندسي والتصنيع وخدمات سلسلة التوريد. تتخصص InChief في الكراتين المموجة وصناديق التغليف الفاخرة وتغليف الأغذية والأدوية والتغليف الهدايا والمنشورات المجلدة والمطبوعات التجارية ومنتجات الملصقات.',
      introP3: 'انطلاقاً من فلسفة التصنيع الدقيق والشراكة طويلة الأمد، تركز InChief على تحقيق كفاءة تكاليف مثلى وقدرة إنتاجية مستقرة وخدمات متكاملة من البداية إلى النهاية للعملاء العالميين.',
      factoryTitle: 'قوة المصنع',
      factoryP1: 'تشغل InChief منشأة تصنيع ذكية مبنية للإنتاج الصناعي على نطاق واسع وتكامل سير العمل عالي الكفاءة.',
      factoryP2: 'يضم المصنع أنظمة طباعة عالمية المستوى تشمل مطابع أوفست متعددة الألوان من Heidelberg و Koenig & Bauer، مدعومة بتقنية CTP من Kodak وخطوط آلية للتلميع والختم الساخن والقطع بالقالب والفحص والطي واللصق عالي السرعة. تصل الطاقة الإنتاجية اليومية إلى 1,100,000 طبعة بتنسيق طباعة أقصى 1,640 × 1,205 مم.',
      factoryP3: 'يضمن اللوجستيات الآلية ونقل AGV وإدارة الإنتاج الموحدة جودة مستقرة وقدرة استجابة سريعة وأداء تسليم موثوقاً عبر مراكز التصنيع المتخصصة للتغليف الفاخر والتغليف الغذائي والصيدلاني.',
      historyTitle: 'تاريخ التطور',
      historyP1: 'ابتكار مستمر في تصنيع الطباعة الصناعية وهندسة التغليف.',
      historyP2: 'منذ تأسيسها في 31 مارس 2020، ركزت InChief Printing على دمج المعدات الصناعية المتقدمة وأنظمة سير العمل الرقمية وإدارة التصنيع الذكي لبناء مؤسسة طباعة حديثة تتوافق مع المعايير الدولية.',
      historyP3: 'من خلال الاستثمار المستمر في التكنولوجيا وتطوير المواهب والتعاون العالمي، تواصل الشركة توسيع طاقتها وقدراتها الخدمية، بناء شراكات طويلة الأمد مع العلامات التجارية الدولية والعملاء الصناعيين في الصين وأوروبا وأمريكا الشمالية وأمريكا الجنوبية.',
    },
    equipment: {
      pageTitle: 'المعدات',
      pageSubtitle: 'أنظمة طباعة وتشطيب عالمية المستوى',
      printing: 'معدات الطباعة',
      ctp: 'تقنية CTP لصنع الألواح',
      cutting: 'القطع والمعالجة المسبقة',
      coating: 'أنظمة الطلاء وUV',
      lamination: 'التغليف والتركيب',
      foilDie: 'الختم بالرقائق، القطع بالقالب وإزالة النفايات',
      inspection: 'فحص الجودة',
      gluing: 'لصق الصناديق والتشكيل',
      capacityTitle: 'الطاقة الإنتاجية',
      capacitySheets: '1,100,000 ورقة/يوم',
      capacityFormat: 'الحجم الأقصى: 1,640 × 1,205 مم',
      capacityProcesses: 'رمز التتبع · الورنيش · التغليف · UV · التركيب · الرقائق · النقش · القطع · إزالة النفايات',
    },
    quality: {
      pageTitle: 'ضمان الجودة',
      pageSubtitle: 'أنظمة معتمدة تضمن الاتساق الصناعي في كل مرحلة.',
      certTitle: 'الشهادات والمعايير',
      iso9001: 'ISO 9001:2015',
      iso9001Desc: 'نظام إدارة الجودة — صالح حتى 27 فبراير 2029.',
      iso14001: 'ISO 14001:2015',
      iso14001Desc: 'نظام الإدارة البيئية — صالح حتى 27 فبراير 2029.',
      iso45001: 'ISO 45001:2018',
      iso45001Desc: 'الصحة والسلامة المهنية — صالح حتى 27 فبراير 2029.',
      fsc: 'شهادة FSC® لسلسلة الحيازة (FSC-C212511)',
      fscDesc: 'معتمد من SCS Global Services. يدعم مواد FSC Mix و Recycled. صالح من 25 يناير 2026 إلى 22 يناير 2030.',
      hightech: 'مؤسسة وطنية للتقنية العالية',
      hightechDesc: 'شهادة رقم GR202433001592 — صالحة حتى 6 ديسمبر 2027.',
      printLicense: 'رخصة مزاولة نشاط الطباعة',
      printLicenseDesc: '(浙)印证字第1-00698号 — صالحة حتى 31 ديسمبر 2030.',
      detectionTitle: 'قدرات الكشف',
      detectionDesc: 'كثافة اللون · التعرف الآلي على العيوب · الدقة الأبعادية · مراقبة الضغط والحرارة · التحكم في الوزن والوقت · التحقق من رموز التتبع والرقابة.',
    },
    contact: {
      pageTitle: 'اتصل بنا',
      pageSubtitle: 'تواصل مع فريقنا للحصول على عروض الأسعار والأسئلة التقنية أو استفسارات الشراكة.',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      address: 'العنوان',
      addressText: 'رقم 2740–2828، طريق دونغتانغ، مدينة لونغغانغ، ونتشو، تشيجيانغ، الصين',
      hours: 'ساعات العمل',
      hoursText: 'الاثنين – الجمعة، 08:30 – 18:00 (بتوقيت بكين)',
    },
    careers: {
      pageTitle: 'الوظائف',
      pageSubtitle: 'انضم إلى فريق عالمي المستوى يبني مستقبل الطباعة الصناعية.',
      whyTitle: 'لماذا InChief؟',
      r1: 'معدات عالمية المستوى', r1d: 'اعمل جنباً إلى جنب مع أنظمة Heidelberg و Koenig & Bauer و Kodak في بيئة تصنيع ذكية.',
      r2: 'انتشار عالمي', r2d: 'تعاون مع عملاء وشركاء من أوروبا وأمريكا الشمالية وأمريكا الجنوبية.',
      r3: 'ثقافة النمو', r3d: 'تدريب مستمر وتعرض متعدد الوظائف ومسار واضح للتقدم المهني.',
      openTitle: 'الوظائف المتاحة',
      openNote: 'نحن نستقطب بانتظام للأدوار في عمليات الطباعة والهندسة ومراقبة الجودة والمبيعات وإدارة سلسلة التوريد. أرسل سيرتك الذاتية إلى info@InChief.cn.',
      cta: 'أرسل سيرتك الذاتية',
    },
    news: {
      pageTitle: 'الأخبار والتحديثات',
      pageSubtitle: 'آخر التطورات من InChief Printing.',
      n1title: 'تجديد الشهادات ISO الثلاثة', n1date: 'مارس 2026', n1desc: 'جددت InChief Printing شهاداتها ISO 9001 و ISO 14001 و ISO 45001 بنجاح، مؤكدةً التزامها بالجودة والبيئة وسلامة مكان العمل.',
      n2title: 'تمديد شهادة FSC® حتى 2030', n2date: 'يناير 2026', n2desc: 'تم تمديد شهادة FSC لسلسلة الحيازة (FSC-C212511) حتى يناير 2030، مما يتيح تغليفاً مستداماً متوافقاً لعلامات التصدير.',
      n3title: 'الاعتراف بمؤسسة وطنية للتقنية العالية', n3date: 'ديسمبر 2024', n3desc: 'اعترف رسمياً بـ InChief Printing كمؤسسة وطنية للتقنية العالية (GR202433001592)، مما يعكس استثمارنا المستمر في البحث والتطوير والتصنيع الذكي.',
      n4title: 'تشغيل مطبعة Koenig & Bauer RA164-5 بالتنسيق الكامل', n4date: 'أغسطس 2023', n4desc: 'شغّلت InChief مطبعة أوفست Koenig & Bauer RA164-5 خماسية الألوان بالتنسيق الكامل، مما وسّع الحجم الأقصى للطباعة إلى 1,640 × 1,205 مم وعزّز طاقة تغليف التنسيقات الكبيرة.',
      n5title: 'تسليم أول طلب تصدير معتمد FSC®', n5date: 'يونيو 2022', n5desc: 'أتمّت InChief أول طلب تصدير تغليف ضخم معتمد من FSC، بتوريد مواد مصادرها مستدامة لشركاء العلامات التجارية الأوروبية — وهو حجر أساس في التوسع بالسوق الدولي.',
    },
    industries: {
      pageTitle: 'الصناعات المخدومة',
      pageSubtitle: 'حلول تغليف وطباعة دقيقة عبر القطاعات الرئيسية.',
      food: 'الغذاء والمشروبات', foodDesc: 'مواد تغليف آمنة غذائياً، امتثال للوائح، معايير إنتاج صحية وتشطيب جذاب.',
      pharma: 'الأدوية', pharmaDesc: 'طباعة رموز التتبع، ميزات مكافحة التزوير، قطع دقيق والامتثال لمعايير التغليف الطبي.',
      luxury: 'السلع الفاخرة والمتميزة', luxuryDesc: 'صناديق صلبة وختم بالرقائق ونقش وUV وتشطيب فاخر لتجارب علامات تجارية راقية.',
      publishing: 'النشر والتحرير', publishingDesc: 'كتب مجلدة ومنشورات غلاف ناعم ومجلات ومواد تسويقية بألوان وجودة ثابتة.',
      retail: 'التجزئة والسلع الاستهلاكية', retailDesc: 'كراتين قابلة للطي وملصقات ومواد ترويجية لمنتجات المستهلكين.',
      industrial: 'الصناعة وOEM', industrialDesc: 'إنتاج مخصص وخدمات طباعة OEM/ODM وتكامل سلسلة التوريد لتغليف المنتجات الصناعية.',
    },
    caseStudies: {
      pageTitle: 'دراسات الحالة',
      pageSubtitle: 'مشاريع حقيقية. نتائج قابلة للقياس.',
      c1title: 'صندوق هدايا فاخر — علامة تجارية أوروبية', c1tag: 'صندوق صلب · ختم بالرقائق · نقش', c1desc: 'تصميم وإنتاج خط صناديق هدايا فاخرة لعلامة تجارية أوروبية راقية. طباعة أوفست 4 ألوان مع ختم رقائق ساخنة وUV موضعي وشعار بارز. تم تسليم 50,000 وحدة في 18 يوماً.',
      c2title: 'تغليف دوائي مع رمز تتبع', c2tag: 'تغليف · رمز التتبع · الامتثال', c2desc: 'طباعة وتشطيب كراتين طي متوافقة مع متطلبات الأدوية مع تكامل كامل لرموز التنظيم وفحص الجودة الآلي. صفر عيوب في 2,000,000 وحدة.',
      c3title: 'كراتين مموجة OEM للتصدير', c3tag: 'كراتين مموجة · OEM · سلسلة التوريد', c3desc: 'إدارة إنتاج OEM من البداية للنهاية لموزع أمريكي — من التصميم الهيكلي إلى الطباعة الجماعية والقطع والتنسيق اللوجستي العالمي لـ 500,000 كرتون مموج.',
      c4title: 'تغليف غذائي معتمد FSC®', c4tag: 'تغليف غذائي · FSC® · مستدام', c4desc: 'إنتاج كراتين طي معتمدة FSC لعلامة مشروبات للتصدير باستخدام أحبار آمنة غذائياً وورق معتمد، مع إدارة ألوان دقيقة لجاذبية عرض المنتج في الأسواق الأوروبية.',
      c5title: 'كتالوج العلامة السنوي — طباعة تجارية 8 ألوان', c5tag: 'تجاري · كتالوج · Heidelberg CX104', c5desc: 'تسليم كتالوج علامة تجارية ملوّن من 256 صفحة لعميل دولي عبر مطبعة Heidelberg CX104 عشرة ألوان مع تشطيب UV في الخط. 80,000 نسخة في 12 يوماً.',
      c6title: 'برنامج ملصقات بيانات متغيرة — سلسلة توريد', c6tag: 'VDP · ملصقات · لوجستيات', c6desc: 'تنفيذ برنامج إنتاج ملصقات بيانات متغيرة لعميل لوجستي، بطباعة 3,000,000 ملصق SKU فريد يحتوي على باركود متسلسل ورمز QR لتتبع كامل السلسلة.',
    },
    footer: {
      tagline: 'هندسة الطباعة الصناعية وحلول التصنيع.',
      company: 'الشركة', solutions: 'الحلول', quickLinks: 'روابط سريعة',
      contactUs: 'اتصل بنا', allRights: 'جميع الحقوق محفوظة.',
      creditCode: 'رمز الائتمان الاجتماعي الموحد: 913330383MA2HBRJ43K',
    },
  },

  // ─── SPANISH ─────────────────────────────────────────────────────────────
  es: {
    meta: {
      title: 'InChief Printing — Impresión y Embalaje Industrial',
      description: 'Zhejiang InChief Printing Technology — soluciones de impresión offset, embalaje y acabado de clase mundial para marcas globales.',
    },
    nav: {
      company: 'Empresa', solutions: 'Soluciones', equipment: 'Equipos',
      caseStudies: 'Casos de Estudio', quality: 'Calidad', contactUs: 'Contáctenos',
      overview: 'Visión general', about: 'Sobre nosotros', industries: 'Industrias',
      joinUs: 'Únete', careers: 'Empleo', updates: 'Actualizaciones', news: 'Noticias',
      printingSolutions: 'Soluciones de impresión',
      commercial: 'Impresión comercial', publication: 'Impresión editorial',
      marketing: 'Materiales de marketing', vdp: 'Impresión de datos variables',
      packagingIndustrial: 'Embalaje e Industrial',
      foldingCarton: 'Embalaje de cartón plegable', rigidBox: 'Cajas rígidas',
      labels: 'Etiquetas y adhesivos', industrialPkg: 'Embalaje industrial',
      finishingEnhancement: 'Acabado y mejora',
      uv: 'UV y barnizado', foil: 'Estampado en caliente',
      embossing: 'Relieve y grabado', dieCutting: 'Troquelado',
      manufacturingServices: 'Servicios de fabricación',
      customProduction: 'Producción personalizada', oem: 'Impresión OEM / ODM',
      supplyChain: 'Integración de la cadena de suministro', fulfillment: 'Envío global',
    },
    hero: {
      title: 'La Tecnología Crea Posibilidades Infinitas',
      sub1: 'Dando forma al futuro de la impresión con innovación y precisión.',
      sub2: 'InChief — La impresión al más alto nivel.',
      cta: 'Solicitar cotización',
    },
    home: {
      overviewTitle: 'Descripción de la empresa',
      overviewText: 'Zhejiang InChief Printing Technology Co., Ltd. es líder en impresión de packaging en color de alta gama en el este de China, fundada el 31 de marzo de 2020 en Longgang, Zhejiang. Con un capital registrado de 108,06 millones de RMB, una flota de 7 prensas offset alemanas (Heidelberg y Koenig & Bauer) y certificaciones ISO 9001/14001/45001, FSC® y Empresa Nacional de Alta Tecnología — InChief combina calidad de gran fábrica, costes regionales y la agilidad de un socio comprometido.',
      servicesTitle: 'Nuestros Servicios',
      ctaTitle: '¿Listo para comenzar su proyecto?',
      ctaText: 'Contacte a nuestro equipo para una cotización personalizada y consulta técnica.',
      ctaBtn: 'Contáctenos',
    },
    service: {
      commercial: 'Impresión Comercial',
      commercialDesc: 'Tarjetas de visita, folletos, catálogos, flyers y materiales de marketing a escala industrial.',
      packaging: 'Impresión de Embalaje',
      packagingDesc: 'Cajas de color, cajas de regalo, cartones corrugados y soluciones de embalaje para alimentos y farmacéutica.',
      finishing: 'Acabado Especial',
      finishingDesc: 'Barnizado UV, estampado en caliente, relieve, grabado y troquelado de precisión para resultados premium.',
    },
    about: {
      pageTitle: 'Sobre InChief Printing',
      introTitle: 'Sobre la empresa',
      introP1: 'Zhejiang InChief Printing Technology Co., Ltd. es un fabricante integrado de alta tecnología en impresión y embalaje, fundado el 31 de marzo de 2020 en Longgang, provincia de Zhejiang, China — con fuerte apoyo gubernamental.',
      introP2: 'Con un capital registrado de 108,06 millones de RMB e instalaciones de producción modernas, la empresa ofrece soluciones integrales que cubren diseño de embalaje, desarrollo técnico, fabricación y servicios de cadena de suministro. InChief se especializa en cartones corrugados, cajas de embalaje premium, embalajes para alimentos y farmacéuticos, embalajes de regalo, publicaciones de tapa dura, impresiones comerciales y productos de etiquetado.',
      introP3: 'Guiada por la filosofía de fabricación de precisión y asociación a largo plazo, InChief ofrece eficiencia de costos optimizada, capacidad de producción estable y servicios integrados de extremo a extremo para clientes globales.',
      factoryTitle: 'Capacidad de fabricación',
      factoryP1: 'InChief opera una instalación de fabricación inteligente diseñada para la producción industrial a gran escala y la integración de flujos de trabajo de alta eficiencia.',
      factoryP2: 'La fábrica está equipada con sistemas de impresión de clase mundial: prensas offset multicolor Heidelberg y Koenig & Bauer, tecnología CTP de Kodak, laminación automatizada, estampado en caliente, troquelado, inspección y líneas de plegado-encolado de alta velocidad. La capacidad diaria alcanza 1.100.000 impresiones con formato máximo de 1.640 × 1.205 mm.',
      factoryP3: 'La logística automatizada, el transporte AGV y la gestión estandarizada garantizan calidad estable, capacidad de respuesta rápida y entrega confiable en centros de fabricación dedicados al embalaje premium y farmacéutico.',
      historyTitle: 'Historia',
      historyP1: 'Innovación continua en fabricación de impresión industrial e ingeniería de embalaje.',
      historyP2: 'Fundada el 31 de marzo de 2020, InChief Printing ha integrado equipos industriales avanzados, sistemas de flujo de trabajo digital y gestión de fabricación inteligente para construir una empresa alineada con los estándares internacionales.',
      historyP3: 'A través de la inversión sostenida en tecnología, desarrollo de talento y cooperación global, la empresa sigue ampliando su capacidad, estableciendo asociaciones a largo plazo con marcas internacionales en China, Europa, América del Norte y América del Sur.',
    },
    equipment: {
      pageTitle: 'Equipos',
      pageSubtitle: 'Sistemas de impresión y acabado de clase mundial',
      printing: 'Equipos de impresión',
      ctp: 'Grabado CTP',
      cutting: 'Corte y pretratamiento',
      coating: 'Sistemas de barnizado y UV',
      lamination: 'Laminación y montaje',
      foilDie: 'Estampado, troquelado y eliminación de residuos',
      inspection: 'Control de calidad',
      gluing: 'Encolado y formado',
      capacityTitle: 'Capacidad de producción',
      capacitySheets: '1.100.000 hojas/día',
      capacityFormat: 'Formato máx: 1.640 × 1.205 mm',
      capacityProcesses: 'Código trazabilidad · Barniz · Laminación · UV · Montaje · Foil · Relieve · Troquelado · Desbarbado',
    },
    quality: {
      pageTitle: 'Aseguramiento de Calidad',
      pageSubtitle: 'Sistemas certificados que garantizan consistencia industrial en cada etapa.',
      certTitle: 'Certificaciones y Normas',
      iso9001: 'ISO 9001:2015',
      iso9001Desc: 'Sistema de gestión de calidad — válido hasta el 27 de feb. de 2029.',
      iso14001: 'ISO 14001:2015',
      iso14001Desc: 'Sistema de gestión ambiental — válido hasta el 27 de feb. de 2029.',
      iso45001: 'ISO 45001:2018',
      iso45001Desc: 'Salud y seguridad ocupacional — válido hasta el 27 de feb. de 2029.',
      fsc: 'FSC® Cadena de Custodia (FSC-C212511)',
      fscDesc: 'Certificado por SCS Global Services. FSC Mix y Recycled. Válido del 25 ene. 2026 al 22 ene. 2030.',
      hightech: 'Empresa Nacional de Alta Tecnología',
      hightechDesc: 'Certificado N.º GR202433001592 — válido hasta el 6 de dic. de 2027.',
      printLicense: 'Licencia de imprenta',
      printLicenseDesc: '(浙)印证字第1-00698号 — válido hasta el 31 de dic. de 2030.',
      detectionTitle: 'Capacidades de detección',
      detectionDesc: 'Densidad de color · Detección automática de defectos · Precisión dimensional · Presión y temperatura · Control de peso y tiempo · Verificación de códigos de trazabilidad.',
    },
    contact: {
      pageTitle: 'Contáctenos',
      pageSubtitle: 'Póngase en contacto con nuestro equipo para cotizaciones, preguntas técnicas o consultas de asociación.',
      phone: 'Teléfono',
      email: 'Correo electrónico',
      address: 'Dirección',
      addressText: 'N.º 2740–2828, calle Dongtang, Longgang, Wenzhou, Zhejiang, China',
      hours: 'Horario de atención',
      hoursText: 'Lunes – Viernes, 08:30 – 18:00 (hora de Pekín)',
    },
    careers: {
      pageTitle: 'Empleo',
      pageSubtitle: 'Únase a un equipo de clase mundial que construye el futuro de la impresión industrial.',
      whyTitle: '¿Por qué InChief?',
      r1: 'Equipos de vanguardia', r1d: 'Trabaje con sistemas Heidelberg, Koenig & Bauer y Kodak en un entorno de fabricación inteligente.',
      r2: 'Alcance global', r2d: 'Colabore con clientes y socios de Europa, América del Norte y América del Sur.',
      r3: 'Cultura de crecimiento', r3d: 'Formación continua, exposición multifuncional y un camino claro de avance profesional.',
      openTitle: 'Posiciones abiertas',
      openNote: 'Reclutamos regularmente para roles en operaciones de impresión, ingeniería, control de calidad, ventas y gestión de la cadena de suministro. Envíe su CV a info@InChief.cn.',
      cta: 'Enviar CV',
    },
    news: {
      pageTitle: 'Noticias',
      pageSubtitle: 'Últimas novedades de InChief Printing.',
      n1title: 'Triple certificación ISO renovada', n1date: 'Marzo 2026', n1desc: 'InChief Printing renovó con éxito sus certificaciones ISO 9001, ISO 14001 e ISO 45001, reafirmando el compromiso con la calidad, el medio ambiente y la seguridad laboral.',
      n2title: 'Certificación FSC® extendida hasta 2030', n2date: 'Enero 2026', n2desc: 'Nuestra certificación FSC Chain of Custody (FSC-C212511) se ha extendido hasta enero de 2030, permitiendo embalajes sostenibles conformes para marcas de exportación.',
      n3title: 'Reconocimiento como empresa nacional de alta tecnología', n3date: 'Diciembre 2024', n3desc: 'InChief Printing fue reconocida oficialmente como Empresa Nacional de Alta Tecnología (GR202433001592), reflejo de nuestra inversión en I+D y fabricación inteligente.',
      n4title: 'Puesta en marcha de la prensa de formato completo Koenig & Bauer RA164-5', n4date: 'Agosto 2023', n4desc: 'InChief incorporó la prensa offset de 5 colores a formato completo Koenig & Bauer RA164-5, ampliando el formato máximo de impresión a 1.640 × 1.205 mm y reforzando significativamente la capacidad de embalaje en gran formato.',
      n5title: 'Primer pedido de exportación certificado FSC® entregado', n5date: 'Junio 2022', n5desc: 'InChief completó su primer gran pedido de embalaje certificado FSC para exportación, suministrando a marcas minoristas europeas materiales de origen sostenible — un hito clave en su expansión al mercado internacional.',
    },
    industries: {
      pageTitle: 'Industrias',
      pageSubtitle: 'Soluciones de embalaje e impresión de precisión en sectores clave.',
      food: 'Alimentación y Bebidas', foodDesc: 'Materiales de embalaje seguros, cumplimiento normativo, estándares de producción higiénicos y acabados atractivos.',
      pharma: 'Farmacéutica', pharmaDesc: 'Impresión de códigos de trazabilidad, anti-falsificación, troquelado preciso y cumplimiento de normas de embalaje médico.',
      luxury: 'Lujo y productos premium', luxuryDesc: 'Cajas rígidas, estampado, relieve, UV y acabados premium para experiencias de marca de alto nivel.',
      publishing: 'Editorial y Publicaciones', publishingDesc: 'Libros de tapa dura, publicaciones de bolsillo, revistas y materiales de marketing con color y calidad consistentes.',
      retail: 'Comercio minorista', retailDesc: 'Cajas de cartón, etiquetas, adhesivos y embalajes promocionales para productos de consumo masivo.',
      industrial: 'Industrial y OEM', industrialDesc: 'Producción personalizada, servicios de impresión OEM/ODM e integración de la cadena de suministro para embalaje industrial.',
    },
    caseStudies: {
      pageTitle: 'Casos de Estudio',
      pageSubtitle: 'Proyectos reales. Resultados medibles.',
      c1title: 'Caja de regalo premium — Marca de lujo europea', c1tag: 'Caja rígida · Estampado · Relieve', c1desc: 'Diseño y producción de una línea de cajas de regalo rígidas premium para una marca de lujo europea. Impresión offset 4 colores con estampado en caliente, UV selectivo y logo en relieve. 50.000 unidades entregadas en 18 días.',
      c2title: 'Embalaje farmacéutico con código de trazabilidad', c2tag: 'Embalaje · Trazabilidad · Cumplimiento', c2desc: 'Impresión y acabado de cajas de cartón conformes a normas farmacéuticas con integración completa de códigos regulatorios e inspección automatizada. Cero defectos en 2.000.000 unidades.',
      c3title: 'Cartones corrugados OEM para exportación', c3tag: 'Corrugado · OEM · Cadena de suministro', c3desc: 'Gestión de producción OEM de extremo a extremo para un distribuidor norteamericano — desde diseño estructural hasta impresión en masa, troquelado y coordinación logística global para 500.000 cartones.',
      c4title: 'Embalaje alimentario certificado FSC®', c4tag: 'Alimentario · FSC® · Sostenible', c4desc: 'Producción de cajas de cartón certificadas FSC para una marca de bebidas de exportación, con tintas alimentarias y cartón certificado, y gestión cromática de precisión para máximo atractivo en lineales europeos.',
      c5title: 'Catálogo anual de marca — Impresión comercial 8 colores', c5tag: 'Comercial · Catálogo · Heidelberg CX104', c5desc: 'Entrega de un catálogo de marca a todo color de 256 páginas para un cliente internacional usando la prensa Heidelberg CX104 de 10 colores con acabado UV en línea. 80.000 ejemplares en 12 días.',
      c6title: 'Programa de etiquetas de datos variables — Cadena de suministro', c6tag: 'VDP · Etiquetas · Logística', c6desc: 'Implementación de un programa de producción de etiquetas de datos variables para un cliente logístico, con impresión de 3.000.000 etiquetas SKU únicas con códigos de barras serializados y códigos QR para trazabilidad total.',
    },
    footer: {
      tagline: 'Ingeniería de impresión industrial y soluciones de fabricación.',
      company: 'Empresa', solutions: 'Soluciones', quickLinks: 'Enlaces rápidos',
      contactUs: 'Contáctenos', allRights: 'Todos los derechos reservados.',
      creditCode: 'Código de crédito social unificado: 913330383MA2HBRJ43K',
    },
  },

  // ─── ITALIAN ─────────────────────────────────────────────────────────────
  it: {
    meta: {
      title: 'InChief Printing — Stampa e Packaging Industriale',
      description: 'Zhejiang InChief Printing Technology — soluzioni di stampa offset, packaging e finitura di livello mondiale per brand internazionali.',
    },
    nav: {
      company: 'Azienda', solutions: 'Soluzioni', equipment: 'Attrezzature',
      caseStudies: 'Casi Studio', quality: 'Qualità', contactUs: 'Contattaci',
      overview: 'Panoramica', about: 'Chi siamo', industries: 'Industrie',
      joinUs: 'Unisciti', careers: 'Carriere', updates: 'Aggiornamenti', news: 'Notizie',
      printingSolutions: 'Soluzioni di stampa',
      commercial: 'Stampa commerciale', publication: 'Stampa editoriale',
      marketing: 'Materiali marketing', vdp: 'Stampa dati variabili',
      packagingIndustrial: 'Packaging e Industriale',
      foldingCarton: 'Packaging in cartone pieghevole', rigidBox: 'Scatole rigide',
      labels: 'Etichette e adesivi', industrialPkg: 'Packaging industriale',
      finishingEnhancement: 'Finitura e valorizzazione',
      uv: 'UV e verniciatura', foil: 'Stampa a caldo',
      embossing: 'Goffratura e debossatura', dieCutting: 'Fustellatura',
      manufacturingServices: 'Servizi di produzione',
      customProduction: 'Produzione personalizzata', oem: 'Stampa OEM / ODM',
      supplyChain: 'Integrazione catena di approvvigionamento', fulfillment: 'Consegna globale',
    },
    hero: {
      title: 'La Tecnologia Crea Possibilità Infinite',
      sub1: 'Plasmare il futuro della stampa con innovazione e precisione.',
      sub2: 'InChief — La stampa, al massimo livello.',
      cta: 'Richiedi un preventivo',
    },
    home: {
      overviewTitle: 'Panoramica aziendale',
      overviewText: 'Zhejiang InChief Printing Technology Co., Ltd. è leader nell\'imballaggio a colori premium nella Cina orientale, fondata il 31 marzo 2020 a Longgang, Zhejiang. Con un capitale registrato di 108,06 milioni di RMB, una flotta di 7 presse offset tedesche (Heidelberg e Koenig & Bauer) e certificazioni ISO 9001/14001/45001, FSC® e Impresa Nazionale Alta Tecnologia — InChief unisce qualità da grande fabbrica, costi regionali e la reattività di un partner dedicato.',
      servicesTitle: 'I Nostri Servizi',
      ctaTitle: 'Pronti per avviare il vostro progetto?',
      ctaText: 'Contatta il nostro team per un preventivo personalizzato e una consulenza tecnica.',
      ctaBtn: 'Contattaci',
    },
    service: {
      commercial: 'Stampa Commerciale',
      commercialDesc: 'Biglietti da visita, brochure, cataloghi, volantini e materiali marketing su scala industriale.',
      packaging: 'Stampa Packaging',
      packagingDesc: 'Scatole colorate, confezioni regalo, cartoni ondulati e soluzioni di packaging per alimenti e farmaceutica.',
      finishing: 'Finitura Speciale',
      finishingDesc: 'Verniciatura UV, stampa a caldo, goffratura, debossatura e fustellatura di precisione per risultati premium.',
    },
    about: {
      pageTitle: 'Chi siamo — InChief Printing',
      introTitle: 'L\'azienda',
      introP1: 'Zhejiang InChief Printing Technology Co., Ltd. è un produttore integrato ad alta tecnologia nel settore della stampa e del packaging, fondato il 31 marzo 2020 a Longgang, provincia dello Zhejiang, Cina — con forte supporto governativo.',
      introP2: 'Con un capitale registrato di 108,06 milioni di RMB e moderni impianti produttivi, l\'azienda offre soluzioni complete che coprono progettazione del packaging, sviluppo tecnico, produzione e servizi della catena di approvvigionamento. InChief è specializzata in cartoni ondulati, scatole di packaging premium, imballaggi alimentari e farmaceutici, packaging regalo, pubblicazioni con copertina rigida, stampe commerciali e prodotti per etichette.',
      introP3: 'Guidata dalla filosofia della produzione di precisione e della partnership a lungo termine, InChief garantisce efficienza dei costi ottimizzata, capacità produttiva stabile e servizi integrati end-to-end per i clienti globali.',
      factoryTitle: 'Capacità produttiva',
      factoryP1: 'InChief gestisce uno stabilimento produttivo intelligente progettato per la produzione industriale su larga scala e l\'integrazione di flussi di lavoro ad alta efficienza.',
      factoryP2: 'Lo stabilimento è dotato di sistemi di stampa di livello mondiale: presse offset multicolore Heidelberg e Koenig & Bauer, tecnologia CTP Kodak, laminazione automatizzata, stampa a caldo, fustellatura, ispezione e linee di piegatura-incollatura ad alta velocità. La capacità giornaliera raggiunge 1.100.000 impressioni con formato massimo di 1.640 × 1.205 mm.',
      factoryP3: 'La logistica automatizzata, il trasporto AGV e la gestione standardizzata della produzione garantiscono qualità stabile, rapida capacità di risposta e consegne affidabili nei centri dedicati al packaging premium e farmaceutico.',
      historyTitle: 'Storia',
      historyP1: 'Innovazione continua nella produzione di stampa industriale e nell\'ingegneria del packaging.',
      historyP2: 'Fondata il 31 marzo 2020, InChief Printing ha integrato attrezzature industriali avanzate, sistemi di flusso di lavoro digitale e gestione intelligente della produzione per costruire un\'azienda conforme agli standard internazionali.',
      historyP3: 'Attraverso investimenti sostenuti in tecnologia, sviluppo del talento e cooperazione globale, l\'azienda continua ad espandersi, costruendo partnership a lungo termine con marchi internazionali in Cina, Europa, Nord America e Sud America.',
    },
    equipment: {
      pageTitle: 'Attrezzature',
      pageSubtitle: 'Sistemi di stampa e finitura di livello mondiale',
      printing: 'Attrezzature di stampa',
      ctp: 'Incisione CTP',
      cutting: 'Taglio e pretrattamento',
      coating: 'Verniciatura e UV',
      lamination: 'Laminazione e montaggio',
      foilDie: 'Stampa a caldo, fustellatura e rimozione sfridi',
      inspection: 'Controllo qualità',
      gluing: 'Incollatura e formatura',
      capacityTitle: 'Capacità produttiva',
      capacitySheets: '1.100.000 fogli/giorno',
      capacityFormat: 'Formato max: 1.640 × 1.205 mm',
      capacityProcesses: 'Codice tracciabilità · Verniciatura · Laminazione · UV · Montaggio · Foil · Goffratura · Fustellatura · Sbavatura',
    },
    quality: {
      pageTitle: 'Garanzia Qualità',
      pageSubtitle: 'Sistemi certificati che garantiscono coerenza industriale in ogni fase.',
      certTitle: 'Certificazioni e Standard',
      iso9001: 'ISO 9001:2015',
      iso9001Desc: 'Sistema di gestione della qualità — valido fino al 27 feb. 2029.',
      iso14001: 'ISO 14001:2015',
      iso14001Desc: 'Sistema di gestione ambientale — valido fino al 27 feb. 2029.',
      iso45001: 'ISO 45001:2018',
      iso45001Desc: 'Salute e sicurezza sul lavoro — valido fino al 27 feb. 2029.',
      fsc: 'FSC® Chain of Custody (FSC-C212511)',
      fscDesc: 'Certificato da SCS Global Services. FSC Mix e Recycled. Valido dal 25 gen. 2026 al 22 gen. 2030.',
      hightech: 'Impresa nazionale ad alta tecnologia',
      hightechDesc: 'Certificato N. GR202433001592 — valido fino al 6 dic. 2027.',
      printLicense: 'Licenza di stampa',
      printLicenseDesc: '(浙)印证字第1-00698号 — valida fino al 31 dic. 2030.',
      detectionTitle: 'Capacità di rilevamento',
      detectionDesc: 'Densità cromatica · Rilevamento automatico difetti · Precisione dimensionale · Pressione e temperatura · Controllo peso e tempi · Verifica codici di tracciabilità.',
    },
    contact: {
      pageTitle: 'Contattaci',
      pageSubtitle: 'Contatta il nostro team per preventivi, domande tecniche o richieste di partnership.',
      phone: 'Telefono',
      email: 'Email',
      address: 'Indirizzo',
      addressText: 'N. 2740–2828, Via Dongtang, Longgang, Wenzhou, Zhejiang, Cina',
      hours: 'Orario di lavoro',
      hoursText: 'Lunedì – Venerdì, 08:30 – 18:00 (ora di Pechino)',
    },
    careers: {
      pageTitle: 'Carriere',
      pageSubtitle: 'Unisciti a un team di livello mondiale che costruisce il futuro della stampa industriale.',
      whyTitle: 'Perché InChief?',
      r1: 'Attrezzature d\'eccellenza', r1d: 'Lavora con sistemi Heidelberg, Koenig & Bauer e Kodak in un ambiente di produzione intelligente.',
      r2: 'Portata globale', r2d: 'Collabora con clienti e partner da Europa, Nord America e Sud America.',
      r3: 'Cultura della crescita', r3d: 'Formazione continua, esposizione multifunzionale e un percorso chiaro di avanzamento professionale.',
      openTitle: 'Posizioni aperte',
      openNote: 'Ricerchiamo regolarmente figure per operazioni di stampa, ingegneria, controllo qualità, vendite e gestione della filiera. Invia il tuo CV a info@InChief.cn.',
      cta: 'Invia il tuo CV',
    },
    news: {
      pageTitle: 'Notizie',
      pageSubtitle: 'Gli ultimi aggiornamenti da InChief Printing.',
      n1title: 'Tripla certificazione ISO rinnovata', n1date: 'Marzo 2026', n1desc: 'InChief Printing ha rinnovato con successo le certificazioni ISO 9001, ISO 14001 e ISO 45001, riaffermando il nostro impegno per qualità, ambiente e sicurezza sul lavoro.',
      n2title: 'Certificazione FSC® estesa fino al 2030', n2date: 'Gennaio 2026', n2desc: 'La nostra certificazione FSC Chain of Custody (FSC-C212511) è stata estesa fino a gennaio 2030, consentendo packaging sostenibile conforme per i brand di esportazione.',
      n3title: 'Riconoscimento come impresa nazionale ad alta tecnologia', n3date: 'Dicembre 2024', n3desc: 'InChief Printing è stata ufficialmente riconosciuta come Impresa Nazionale ad Alta Tecnologia (GR202433001592), a testimonianza del nostro investimento in R&S e produzione intelligente.',
      n4title: 'Avviamento della pressa a formato pieno Koenig & Bauer RA164-5', n4date: 'Agosto 2023', n4desc: 'InChief ha messo in funzione la pressa offset a 5 colori a formato pieno Koenig & Bauer RA164-5, estendendo il formato di stampa massimo a 1.640 × 1.205 mm e aumentando significativamente la capacità per imballaggi in grande formato.',
      n5title: 'Primo ordine export certificato FSC® consegnato', n5date: 'Giugno 2022', n5desc: 'InChief ha completato il suo primo grande ordine di packaging certificato FSC per l\'esportazione, fornendo a partner di marchi retail europei materiali di provenienza sostenibile — una pietra miliare nell\'espansione verso i mercati internazionali.',
    },
    industries: {
      pageTitle: 'Industrie',
      pageSubtitle: 'Soluzioni di packaging e stampa di precisione nei settori chiave.',
      food: 'Alimentare e Bevande', foodDesc: 'Materiali di packaging sicuri per alimenti, conformità normativa, standard di produzione igienici e finiture accattivanti.',
      pharma: 'Farmaceutica', pharmaDesc: 'Stampa di codici di tracciabilità, anticontraffazione, fustellatura precisa e conformità alle norme di packaging medicale.',
      luxury: 'Lusso e prodotti premium', luxuryDesc: 'Scatole rigide, stampa a caldo, goffratura, UV e finiture premium per esperienze di brand di alto livello.',
      publishing: 'Editoria e Pubblicazioni', publishingDesc: 'Libri con copertina rigida, pubblicazioni tascabili, riviste e materiali marketing con colori e qualità costanti.',
      retail: 'Commercio al dettaglio', retailDesc: 'Scatole pieghevoli, etichette, adesivi e packaging promozionale per prodotti di largo consumo.',
      industrial: 'Industriale e OEM', industrialDesc: 'Produzione personalizzata, servizi di stampa OEM/ODM e integrazione della filiera per imballaggi di prodotti industriali.',
    },
    caseStudies: {
      pageTitle: 'Casi Studio',
      pageSubtitle: 'Progetti reali. Risultati misurabili.',
      c1title: 'Confezione regalo premium — Brand di lusso europeo', c1tag: 'Scatola rigida · Stampa a caldo · Goffratura', c1desc: 'Progettazione e produzione di una linea di confezioni regalo rigide premium per un brand di lusso europeo. Stampa offset a 4 colori con stampa a caldo, UV selettivo e logo in rilievo. 50.000 unità consegnate in 18 giorni.',
      c2title: 'Packaging farmaceutico con codice di tracciabilità', c2tag: 'Packaging · Tracciabilità · Conformità', c2desc: 'Stampa e finitura di astucci pieghevoli conformi alle norme farmaceutiche con integrazione completa dei codici normativi e ispezione automatizzata. Zero difetti su 2.000.000 di unità.',
      c3title: 'Cartoni ondulati OEM per export', c3tag: 'Ondulato · OEM · Filiera', c3desc: 'Gestione della produzione OEM end-to-end per un distributore nordamericano — dalla progettazione strutturale alla stampa di massa, fustellatura e coordinamento logistico globale per 500.000 cartoni ondulati.',
      c4title: 'Packaging alimentare certificato FSC®', c4tag: 'Alimentare · FSC® · Sostenibile', c4desc: 'Produzione di astucci pieghevoli certificati FSC per un brand di bevande per l\'export, con inchiostri food-safe e cartone certificato, e gestione cromatica di precisione per la massima visibilità sugli scaffali europei.',
      c5title: 'Catalogo annuale del brand — Stampa commerciale 8 colori', c5tag: 'Commerciale · Catalogo · Heidelberg CX104', c5desc: 'Consegna di un catalogo brand a colori di 256 pagine per un cliente internazionale con la pressa Heidelberg CX104 a 10 colori e finitura UV in linea. 80.000 copie in 12 giorni.',
      c6title: 'Programma etichette a dati variabili — Filiera retail', c6tag: 'VDP · Etichette · Logistica', c6desc: 'Implementazione di un programma di produzione etichette a dati variabili per un cliente logistico, con stampa di 3.000.000 etichette SKU uniche con codici a barre serializzati e QR code per la tracciabilità completa.',
    },
    footer: {
      tagline: 'Ingegneria di stampa industriale e soluzioni produttive.',
      company: 'Azienda', solutions: 'Soluzioni', quickLinks: 'Link rapidi',
      contactUs: 'Contattaci', allRights: 'Tutti i diritti riservati.',
      creditCode: 'Codice di credito sociale unificato: 913330383MA2HBRJ43K',
    },
  },
};
