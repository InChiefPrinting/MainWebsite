import type { Lang } from './ui';

export type SolutionContent = {
  title: string;
  tagline: string;
  intro: string;
  features: string[];
  specs: { label: string; value: string }[];
};

export const solutions: Record<string, Partial<Record<Lang, SolutionContent>>> = {

  // ── 1. Commercial Printing ──────────────────────────────────────────────
  commercial: {
    en: {
      title: 'Commercial Printing',
      tagline: 'Precision Offset at Industrial Scale',
      intro: 'InChief delivers high-quality commercial printing for businesses of all sizes. From business cards and brochures to full-color catalogs and promotional bags, our Heidelberg and Koenig & Bauer offset presses ensure sharp, consistent reproduction at any volume. With X-Rite EXACT color management and automated inspection, every job meets international brand standards.',
      features: ['4 / 6 / 8 / 10-color offset printing', 'Paper weight 80g – 450gsm', 'Inline UV, varnish & lamination', 'Automated defect inspection', 'Rapid turnaround on large runs'],
      specs: [{ label: 'Max Format', value: '1,640 × 1,205 mm' }, { label: 'Daily Output', value: '1,100,000 sheets' }, { label: 'Equipment', value: 'Heidelberg · Koenig & Bauer' }],
    },
    zh: {
      title: '商务印刷',
      tagline: '工业级精准胶印，满足各类商务需求',
      intro: '云创印刷为各类规模的企业提供高品质商务印刷服务。从名片、宣传单、画册到全彩宣传袋，我们的海德堡与高宝多色胶印机确保每批次的清晰度与色彩一致性。借助X-Rite EXACT色彩管理与自动检测系统，每份作业均达到国际品牌标准。',
      features: ['4/6/8/10色胶印', '适用纸重80g–450g', '联机UV、上光及覆膜', '自动化瑕疵检测', '大批量快速交货'],
      specs: [{ label: '最大幅面', value: '1,640 × 1,205 mm' }, { label: '日产能', value: '110万印张' }, { label: '设备品牌', value: '海德堡 · 高宝' }],
    },
    fr: {
      title: 'Impression Commerciale',
      tagline: 'Offset de précision à l\'échelle industrielle',
      intro: 'InChief fournit une impression commerciale de haute qualité pour toutes les tailles d\'entreprises. Des cartes de visite aux catalogues pleine couleur, nos presses Heidelberg et Koenig & Bauer assurent une reproduction nette et cohérente à tout volume.',
      features: ['Impression offset 4/6/8/10 couleurs', 'Grammage papier 80g – 450g', 'UV, vernis et lamination en ligne', 'Contrôle automatisé des défauts', 'Délais rapides sur grands tirages'],
      specs: [{ label: 'Format max', value: '1 640 × 1 205 mm' }, { label: 'Production/jour', value: '1 100 000 feuilles' }, { label: 'Équipements', value: 'Heidelberg · Koenig & Bauer' }],
    },
    ar: {
      title: 'الطباعة التجارية',
      tagline: 'طباعة أوفست دقيقة على نطاق صناعي',
      intro: 'تقدم InChief خدمات طباعة تجارية عالية الجودة للشركات بجميع أحجامها. من بطاقات العمل إلى الكتالوجات الملونة، تضمن مطابعنا من Heidelberg و Koenig & Bauer وضوحًا واتساقًا في كل حجم إنتاج.',
      features: ['طباعة أوفست 4/6/8/10 ألوان', 'أوزان ورق 80 – 450 جم', 'UV والورنيش والتغليف في الخط', 'فحص آلي للعيوب', 'تسليم سريع للطلبات الكبيرة'],
      specs: [{ label: 'الحجم الأقصى', value: '1,640 × 1,205 مم' }, { label: 'الإنتاج اليومي', value: '1,100,000 ورقة' }, { label: 'المعدات', value: 'Heidelberg · Koenig & Bauer' }],
    },
    es: {
      title: 'Impresión Comercial',
      tagline: 'Offset de precisión a escala industrial',
      intro: 'InChief ofrece impresión comercial de alta calidad para empresas de todos los tamaños. Desde tarjetas de visita hasta catálogos a todo color, nuestras prensas Heidelberg y Koenig & Bauer garantizan reproducción nítida y consistente en cualquier volumen.',
      features: ['Impresión offset 4/6/8/10 colores', 'Gramaje papel 80g – 450g', 'UV, barniz y laminado en línea', 'Inspección automatizada de defectos', 'Entrega rápida en grandes tiradas'],
      specs: [{ label: 'Formato máx.', value: '1.640 × 1.205 mm' }, { label: 'Producción/día', value: '1.100.000 hojas' }, { label: 'Equipos', value: 'Heidelberg · Koenig & Bauer' }],
    },
    it: {
      title: 'Stampa Commerciale',
      tagline: 'Offset di precisione su scala industriale',
      intro: 'InChief offre stampa commerciale di alta qualità per aziende di tutte le dimensioni. Da biglietti da visita a cataloghi a piena quadricromia, le nostre presse Heidelberg e Koenig & Bauer garantiscono riproduzione nitida e coerente a qualsiasi volume.',
      features: ['Stampa offset 4/6/8/10 colori', 'Grammatura carta 80g – 450g', 'UV, verniciatura e laminazione in linea', 'Ispezione automatica dei difetti', 'Consegna rapida per grandi tirature'],
      specs: [{ label: 'Formato max', value: '1.640 × 1.205 mm' }, { label: 'Produzione/giorno', value: '1.100.000 fogli' }, { label: 'Attrezzature', value: 'Heidelberg · Koenig & Bauer' }],
    },
  },

  // ── 2. Publication Printing ─────────────────────────────────────────────
  publication: {
    en: {
      title: 'Publication Printing',
      tagline: 'From Manuscript to Masterpiece',
      intro: 'InChief produces hardcover books, softcover publications, magazines, maps, and catalogues with consistent color management and precise binding finishes. Our integrated ESKO digital prepress workflow ensures faithful reproduction from design to print, supported by Kodak CTP plate-making for sharp, accurate results.',
      features: ['Hardcover & softcover formats', 'Saddle stitch & perfect binding', 'Kodak CTP plate-making', 'Color consistency across long runs', 'Automated sheet inspection'],
      specs: [{ label: 'Plate-Making', value: 'Kodak Q800AL / Q1600' }, { label: 'Workflow', value: 'ESKO Digital Prepress' }, { label: 'Binding', value: 'Saddle / Perfect / Case' }],
    },
    zh: {
      title: '出版物印刷',
      tagline: '从稿件到精品，全流程保障',
      intro: '云创印刷生产精装书、平装出版物、杂志、地图及目录，具备一致的色彩管理和精密装订工艺。我们集成的ESKO数字印前工作流确保从设计到印刷的高保真还原，配合柯达CTP制版系统，呈现清晰准确的印刷效果。',
      features: ['精装与平装格式', '骑马订与胶装', '柯达CTP数字制版', '长版印刷色彩一致性', '自动化纸张质量检测'],
      specs: [{ label: '制版系统', value: 'Kodak Q800AL / Q1600' }, { label: '数字印前', value: 'ESKO工作流' }, { label: '装订方式', value: '骑马订 / 胶装 / 精装' }],
    },
    fr: {
      title: 'Impression d\'Édition',
      tagline: 'Du manuscrit au chef-d\'œuvre',
      intro: 'InChief produit livres reliés, publications brochées, magazines, cartes et catalogues avec une gestion des couleurs cohérente et des finitions de reliure précises. Notre workflow ESKO garantit une reproduction fidèle du design à l\'impression.',
      features: ['Formats reliure & broché', 'Piqûre à cheval & reliure parfaite', 'Gravure CTP Kodak', 'Cohérence couleur sur longs tirages', 'Inspection automatisée des feuilles'],
      specs: [{ label: 'Gravure CTP', value: 'Kodak Q800AL / Q1600' }, { label: 'Flux numérique', value: 'ESKO Prepress' }, { label: 'Reliure', value: 'Piqûre / Parfaite / Rigide' }],
    },
    ar: {
      title: 'طباعة المنشورات',
      tagline: 'من المخطوطة إلى التحفة الفنية',
      intro: 'تنتج InChief الكتب المجلدة والمنشورات ذات الغلاف الناعم والمجلات والخرائط والكتالوجات مع إدارة متسقة للألوان وتشطيبات تجليد دقيقة. يضمن سير العمل الرقمي ESKO إعادة إنتاج أمينة من التصميم إلى الطباعة.',
      features: ['تنسيقات غلاف صلب وناعم', 'تجليد بالخياطة والغراء', 'تقنية CTP من Kodak', 'اتساق الألوان في الطباعة الطويلة', 'فحص آلي للصفحات'],
      specs: [{ label: 'صنع الألواح', value: 'Kodak Q800AL / Q1600' }, { label: 'سير العمل', value: 'ESKO الرقمي' }, { label: 'التجليد', value: 'خياطة / غراء / غلاف صلب' }],
    },
    es: {
      title: 'Impresión Editorial',
      tagline: 'Del manuscrito a la obra maestra',
      intro: 'InChief produce libros de tapa dura, publicaciones de bolsillo, revistas, mapas y catálogos con gestión de color consistente y acabados de encuadernación precisos. Nuestro flujo de trabajo digital ESKO garantiza reproducción fiel del diseño a la impresión.',
      features: ['Formatos tapa dura y blanda', 'Encuadernación cosida y perfecta', 'Grabado CTP Kodak', 'Consistencia de color en tiradas largas', 'Inspección automatizada de pliegos'],
      specs: [{ label: 'Plancha CTP', value: 'Kodak Q800AL / Q1600' }, { label: 'Flujo digital', value: 'ESKO Prepress' }, { label: 'Encuadernación', value: 'Cosida / Perfecta / Rígida' }],
    },
    it: {
      title: 'Stampa Editoriale',
      tagline: 'Dal manoscritto al capolavoro',
      intro: 'InChief produce libri con copertina rigida, pubblicazioni in brossura, riviste, mappe e cataloghi con gestione del colore coerente e finiture di rilegatura precise. Il nostro flusso di lavoro digitale ESKO garantisce riproduzione fedele dal design alla stampa.',
      features: ['Formati copertina rigida e morbida', 'Cucitura a filo e brossura', 'Incisione CTP Kodak', 'Coerenza cromatica su tirature lunghe', 'Ispezione automatica dei fogli'],
      specs: [{ label: 'Lastra CTP', value: 'Kodak Q800AL / Q1600' }, { label: 'Flusso digitale', value: 'ESKO Prepress' }, { label: 'Rilegatura', value: 'Punto / Colla / Rigida' }],
    },
  },

  // ── 3. Marketing Materials ──────────────────────────────────────────────
  marketing: {
    en: {
      title: 'Marketing Materials',
      tagline: 'Make Every Impression Count',
      intro: 'From trade show displays to retail inserts, InChief prints the full range of marketing collateral. Our finishing capabilities — UV coating, foil stamping, embossing, custom die-cutting — turn standard materials into powerful brand touchpoints that stand out on any surface.',
      features: ['Flyers, folders, brochures, posters', 'Custom die-cut shapes', 'Spot UV & full-gloss laminate', 'Premium paper stocks', 'Campaign-volume pricing'],
      specs: [{ label: 'Finishing', value: 'UV · Foil · Emboss · Die-cut' }, { label: 'Substrates', value: 'Coated / Uncoated / Specialty' }, { label: 'Min. Run', value: 'From 500 units' }],
    },
    zh: {
      title: '营销物料',
      tagline: '让每一次接触都留下深刻印象',
      intro: '从展会展示物料到零售插页，云创印刷涵盖全系列营销印刷品。我们的印后加工能力——UV上光、烫金、击凸、异形模切——将普通物料升华为极具感染力的品牌触点，在任何场合脱颖而出。',
      features: ['传单、文件夹、宣传册、海报', '异形模切', '局部UV与全亮膜', '优质纸材选择', '大批量活动用料优惠'],
      specs: [{ label: '印后工艺', value: 'UV · 烫金 · 击凸 · 模切' }, { label: '承印材料', value: '铜版纸 / 哑粉纸 / 特种纸' }, { label: '起印量', value: '500份起' }],
    },
    fr: {
      title: 'Supports Marketing',
      tagline: 'Faites forte impression à chaque contact',
      intro: 'Des présentoirs de salon aux encarts retail, InChief imprime toute la gamme des supports de communication. Nos finitions — vernis UV, dorure, gaufrage, découpe — transforment les supports standards en puissants points de contact de marque.',
      features: ['Flyers, dossiers, brochures, affiches', 'Découpes personnalisées', 'UV sélectif & laminage brillant', 'Papiers premium', 'Tarifs dégressifs par volume'],
      specs: [{ label: 'Finitions', value: 'UV · Dorure · Gaufrage · Découpe' }, { label: 'Supports', value: 'Couché / Non couché / Spéciaux' }, { label: 'Tirage min.', value: 'À partir de 500 ex.' }],
    },
    ar: {
      title: 'المواد التسويقية',
      tagline: 'اجعل كل انطباع يدوم',
      intro: 'من لوحات المعارض التجارية إلى إدراجات التجزئة، تطبع InChief المجموعة الكاملة من المواد التسويقية. إمكانيات التشطيب لدينا — طلاء UV والختم بالرقائق والنقش والقطع بالقالب — تحوّل المواد العادية إلى نقاط تواصل فعّالة للعلامة التجارية.',
      features: ['نشرات ومجلدات وكتيبات وملصقات', 'أشكال مقطوعة بالقالب', 'UV موضعي وتغليف لامع', 'أوراق فاخرة', 'أسعار خاصة للحملات الكبيرة'],
      specs: [{ label: 'التشطيب', value: 'UV · رقائق · نقش · قطع' }, { label: 'الركائز', value: 'مطلي / غير مطلي / خاص' }, { label: 'الحد الأدنى', value: 'من 500 قطعة' }],
    },
    es: {
      title: 'Materiales de Marketing',
      tagline: 'Haz que cada impresión cuente',
      intro: 'Desde displays para ferias hasta insertos de retail, InChief imprime toda la gama de materiales de marketing. Nuestras capacidades de acabado — UV, estampado, relieve, troquelado — convierten materiales estándar en poderosos puntos de contacto de marca.',
      features: ['Flyers, carpetas, folletos, carteles', 'Troquelado personalizado', 'UV selectivo y laminado brillante', 'Papeles premium', 'Precios por volumen de campaña'],
      specs: [{ label: 'Acabados', value: 'UV · Foil · Relieve · Troquelado' }, { label: 'Soportes', value: 'Couché / Offset / Especiales' }, { label: 'Tirada mín.', value: 'Desde 500 uds.' }],
    },
    it: {
      title: 'Materiali Marketing',
      tagline: 'Ogni impressione conta',
      intro: 'Dagli espositori per fiere agli inserti retail, InChief stampa l\'intera gamma di materiali di comunicazione. Le nostre capacità di finitura — UV, stampa a caldo, goffratura, fustellatura — trasformano materiali standard in potenti touchpoint di brand.',
      features: ['Volantini, cartelle, brochure, poster', 'Fustellatura personalizzata', 'UV selettivo e laminazione lucida', 'Carte premium', 'Prezzi a volume per campagne'],
      specs: [{ label: 'Finiture', value: 'UV · Foil · Goffratura · Fustella' }, { label: 'Supporti', value: 'Patinato / Offset / Speciali' }, { label: 'Tiratura min.', value: 'Da 500 pezzi' }],
    },
  },

  // ── 4. Variable Data Printing ───────────────────────────────────────────
  vdp: {
    en: {
      title: 'Variable Data Printing',
      tagline: 'Personalized at Industrial Pace',
      intro: 'Variable Data Printing (VDP) enables unique serial numbers, barcodes, QR codes, regulatory track codes (监管码), and personalised content on each piece — without sacrificing throughput. Critical for pharmaceutical compliance, anti-counterfeiting, and loyalty programmes, our LED-UV inkjet systems integrate seamlessly with offset production lines.',
      features: ['Regulatory track codes (监管码)', 'Unique barcodes & QR codes', 'High-speed LED-UV inkjet', 'Pharmaceutical & FMCG compliant', 'Offline & inline options'],
      specs: [{ label: 'System', value: 'Juanda PM1020Z LED-UV' }, { label: 'Integration', value: 'Inline with offset press' }, { label: 'Application', value: 'Pharma · FMCG · Luxury' }],
    },
    zh: {
      title: '可变数据打印',
      tagline: '个性化内容，工业级速度',
      intro: '可变数据打印（VDP）可在每件印品上赋予唯一序列号、条形码、二维码、药品监管码等个性化内容，同时不影响生产效率。我们的高速LED-UV喷码系统与胶印生产线无缝集成，广泛应用于医药合规、防伪及会员营销场景。',
      features: ['药品监管码 / 追溯码', '唯一条形码 & 二维码', '高速LED-UV喷码', '满足医药、快消品合规要求', '离线与联机两种集成方式'],
      specs: [{ label: '核心设备', value: '隽大PM1020Z LED-UV喷码机' }, { label: '集成方式', value: '胶印线内联机' }, { label: '应用场景', value: '医药 · 快消 · 高端品牌' }],
    },
    fr: {
      title: 'Impression à Données Variables',
      tagline: 'Personnalisation à cadence industrielle',
      intro: 'L\'impression à données variables (VDP) permet d\'imprimer des numéros de série, codes-barres, QR codes et codes de traçabilité uniques sur chaque pièce. Nos systèmes LED-UV s\'intègrent aux lignes offset pour la conformité pharmaceutique et la lutte contre la contrefaçon.',
      features: ['Codes de traçabilité réglementaires', 'Codes-barres & QR codes uniques', 'Jet d\'encre LED-UV haute vitesse', 'Conforme pharma & grande conso.', 'Options hors ligne & en ligne'],
      specs: [{ label: 'Système', value: 'Juanda PM1020Z LED-UV' }, { label: 'Intégration', value: 'En ligne avec presse offset' }, { label: 'Application', value: 'Pharma · FMCG · Luxe' }],
    },
    ar: {
      title: 'طباعة البيانات المتغيرة',
      tagline: 'تخصيص بسرعة صناعية',
      intro: 'تتيح طباعة البيانات المتغيرة طباعة أرقام تسلسلية فريدة ورموز شريطية ورموز QR ورموز التتبع التنظيمية على كل قطعة دون التضحية بالإنتاجية. أنظمة LED-UV لدينا تتكامل مع خطوط الأوفست لتلبية متطلبات الامتثال الدوائي.',
      features: ['رموز التتبع التنظيمية', 'رموز شريطية وQR فريدة', 'طباعة نفثية LED-UV عالية السرعة', 'متوافق مع متطلبات الأدوية والسلع', 'خيارات في الخط وخارجه'],
      specs: [{ label: 'النظام', value: 'Juanda PM1020Z LED-UV' }, { label: 'التكامل', value: 'في الخط مع الأوفست' }, { label: 'التطبيق', value: 'دوائي · سلع · فاخر' }],
    },
    es: {
      title: 'Impresión de Datos Variables',
      tagline: 'Personalización a ritmo industrial',
      intro: 'La impresión de datos variables (VDP) permite imprimir números de serie únicos, códigos de barras, QR y códigos de trazabilidad en cada pieza sin sacrificar velocidad. Nuestros sistemas LED-UV se integran con las líneas offset para cumplimiento farmacéutico y antifalsificación.',
      features: ['Códigos de trazabilidad regulatoria', 'Códigos de barras y QR únicos', 'Inyección LED-UV de alta velocidad', 'Compatible con farma y gran consumo', 'Opciones offline e inline'],
      specs: [{ label: 'Sistema', value: 'Juanda PM1020Z LED-UV' }, { label: 'Integración', value: 'Inline con prensa offset' }, { label: 'Aplicación', value: 'Farma · FMCG · Lujo' }],
    },
    it: {
      title: 'Stampa Dati Variabili',
      tagline: 'Personalizzazione a ritmo industriale',
      intro: 'La stampa a dati variabili (VDP) consente di stampare numeri seriali unici, codici a barre, QR code e codici di tracciabilità su ogni pezzo senza sacrificare la produttività. I nostri sistemi LED-UV si integrano con le linee offset per la conformità farmaceutica.',
      features: ['Codici di tracciabilità normativi', 'Codici a barre e QR unici', 'Inkjet LED-UV ad alta velocità', 'Conforme a farma e largo consumo', 'Opzioni offline e inline'],
      specs: [{ label: 'Sistema', value: 'Juanda PM1020Z LED-UV' }, { label: 'Integrazione', value: 'Inline con pressa offset' }, { label: 'Applicazione', value: 'Farma · FMCG · Lusso' }],
    },
  },

  // ── 5. Folding Carton Packaging ─────────────────────────────────────────
  'folding-carton': {
    en: {
      title: 'Folding Carton Packaging',
      tagline: 'Structure Meets Shelf Appeal',
      intro: 'Folding cartons are the backbone of retail and consumer goods packaging. InChief designs and manufactures folding cartons in SBS, coated board, and kraft from 230g to 450gsm, with full decoration and finish options tailored for food, cosmetics, pharmaceuticals, and consumer goods brands.',
      features: ['SBS, coated board & kraft substrates', '4–8 colour offset print', 'Lamination, UV & foil stamping', 'Automated die-cutting & waste removal', 'Pharmaceutical track-code integration'],
      specs: [{ label: 'Board Weight', value: '230 – 450 gsm' }, { label: 'Die-Cutting', value: 'Guowang C106Q (×2)' }, { label: 'Inspection', value: 'Lingyun PackSheet-600' }],
    },
    zh: {
      title: '折叠纸盒包装',
      tagline: '结构与卖场吸引力的完美结合',
      intro: '折叠纸盒是零售及消费品包装的核心形式。云创印刷采用230g至450g铜版卡纸、白卡纸及牛皮纸，为食品、化妆品、医药及消费品品牌提供全套设计与制造服务，涵盖印刷、印后加工全流程。',
      features: ['铜版纸、白卡纸、牛皮纸基材', '4–8色胶印', '覆膜、UV及烫金', '自动化模切与清废', '医药监管码集成'],
      specs: [{ label: '纸板克重', value: '230 – 450 gsm' }, { label: '模切设备', value: '国望C106Q（×2台）' }, { label: '质量检测', value: '凌云PackSheet-600' }],
    },
    fr: {
      title: 'Emballage Carton Pliant',
      tagline: 'Structure et attrait en rayon',
      intro: 'Les cartons pliants sont l\'épine dorsale des emballages retail. InChief fabrique des cartons pliants en SBS, carton couché et kraft de 230 à 450 g/m², avec toutes les options de décoration pour l\'alimentation, la cosmétique, la pharmacie et les biens de consommation.',
      features: ['SBS, carton couché & kraft', 'Impression offset 4–8 couleurs', 'Lamination, UV & dorure', 'Découpe & ébarbage automatisés', 'Intégration codes de traçabilité pharma'],
      specs: [{ label: 'Grammage', value: '230 – 450 g/m²' }, { label: 'Découpe', value: 'Guowang C106Q (×2)' }, { label: 'Inspection', value: 'Lingyun PackSheet-600' }],
    },
    ar: {
      title: 'تغليف الكرتون القابل للطي',
      tagline: 'البنية وجاذبية الرف في آن واحد',
      intro: 'الكراتين القابلة للطي هي العمود الفقري لتغليف التجزئة والسلع الاستهلاكية. تصنّع InChief الكراتين بأوراق SBS والكرتون المطلي والكرافت بأوزان 230–450 جم لكل متر مربع، مع خيارات تزيين شاملة للأغذية والمستحضرات والأدوية.',
      features: ['ركائز SBS ومطلية وكرافت', 'طباعة أوفست 4–8 ألوان', 'تغليف وUV وختم بالرقائق', 'قطع وإزالة نفايات آلية', 'تكامل رموز التتبع الدوائية'],
      specs: [{ label: 'وزن الكرتون', value: '230 – 450 جم/م²' }, { label: 'القطع بالقالب', value: 'Guowang C106Q (×2)' }, { label: 'الفحص', value: 'Lingyun PackSheet-600' }],
    },
    es: {
      title: 'Embalaje de Cartón Plegable',
      tagline: 'Estructura y atractivo en el lineal',
      intro: 'Los cartones plegables son la base del packaging retail. InChief fabrica cartones plegables en SBS, cartón couché y kraft de 230 a 450 g/m², con opciones completas de decoración para alimentación, cosmética, farmacia y bienes de consumo.',
      features: ['Sustratos SBS, couché y kraft', 'Impresión offset 4–8 colores', 'Laminado, UV y estampado en caliente', 'Troquelado y desbarbado automático', 'Integración códigos trazabilidad farma'],
      specs: [{ label: 'Gramaje', value: '230 – 450 g/m²' }, { label: 'Troquelado', value: 'Guowang C106Q (×2)' }, { label: 'Inspección', value: 'Lingyun PackSheet-600' }],
    },
    it: {
      title: 'Packaging in Cartone Pieghevole',
      tagline: 'Struttura e appeal sullo scaffale',
      intro: 'I cartoni pieghevoli sono la base del packaging retail. InChief produce astucci in SBS, cartone patinato e kraft da 230 a 450 g/m², con opzioni di decorazione complete per alimentare, cosmetica, farmaceutica e beni di consumo.',
      features: ['Supporti SBS, patinato e kraft', 'Stampa offset 4–8 colori', 'Laminazione, UV e stampa a caldo', 'Fustellatura e sbavatura automatica', 'Integrazione codici tracciabilità farma'],
      specs: [{ label: 'Grammatura', value: '230 – 450 g/m²' }, { label: 'Fustellatura', value: 'Guowang C106Q (×2)' }, { label: 'Ispezione', value: 'Lingyun PackSheet-600' }],
    },
  },

  // ── 6. Rigid Box Production ─────────────────────────────────────────────
  'rigid-box': {
    en: {
      title: 'Rigid Box Production',
      tagline: 'Luxury Packaging with Structural Integrity',
      intro: 'Rigid setup boxes convey quality before the product is even opened. InChief produces rigid box structures for luxury goods, electronics, cosmetics, and premium gifting — with full surface decoration including hot foil, embossing, spot UV, magnetic closures, and custom foam inserts.',
      features: ['Greyboard 1.5 mm – 3 mm construction', 'Wrapped & bound surface finishes', 'Foil stamping, emboss & spot UV', 'Magnetic closure & ribbon pull options', 'Custom foam, EVA & fabric inserts'],
      specs: [{ label: 'Board', value: 'Greyboard 1.5 – 3 mm' }, { label: 'Decoration', value: 'Foil · Emboss · UV' }, { label: 'Application', value: 'Luxury · Electronics · Gift' }],
    },
    zh: {
      title: '硬盒生产',
      tagline: '彰显品质的奢华包装结构',
      intro: '精装硬盒在产品开封之前便已传递高端品质感。云创印刷为奢侈品、电子产品、化妆品及高端礼品提供硬盒结构定制，表面装饰涵盖烫金、击凸、局部UV、磁吸开合及定制内衬，全面满足顶级品牌需求。',
      features: ['1.5mm–3mm灰板硬盒结构', '蒙面与装裱表面工艺', '烫金、击凸与局部UV', '磁吸盖与丝带提手', '定制海绵、EVA及布料内衬'],
      specs: [{ label: '基材', value: '1.5–3mm灰板' }, { label: '表面装饰', value: '烫金 · 击凸 · UV' }, { label: '应用场景', value: '奢侈品 · 电子 · 礼品' }],
    },
    fr: {
      title: 'Production de Boîtes Rigides',
      tagline: 'Emballage luxe avec intégrité structurelle',
      intro: 'Les boîtes rigides transmettent la qualité avant même l\'ouverture du produit. InChief produit des boîtes rigides pour le luxe, l\'électronique, la cosmétique et les cadeaux premium, avec décoration complète : dorure, gaufrage, UV sélectif, fermeture magnétique et inserts mousse.',
      features: ['Carton gris 1,5 mm – 3 mm', 'Finitions gainées et reliées', 'Dorure, gaufrage & UV sélectif', 'Fermeture magnétique & tirant ruban', 'Inserts mousse, EVA & tissu'],
      specs: [{ label: 'Carton', value: 'Gris 1,5 – 3 mm' }, { label: 'Décoration', value: 'Dorure · Gaufrage · UV' }, { label: 'Application', value: 'Luxe · Électronique · Cadeau' }],
    },
    ar: {
      title: 'إنتاج الصناديق الصلبة',
      tagline: 'تغليف فاخر بمتانة هيكلية',
      intro: 'تنقل الصناديق الصلبة الجودة قبل فتح المنتج. تنتج InChief صناديق صلبة للسلع الفاخرة والإلكترونيات ومستحضرات التجميل والهدايا الراقية، مع تزيين كامل للسطح يشمل الختم بالرقائق والنقش والإغلاق المغناطيسي.',
      features: ['بنية كرتون رمادي 1.5–3 مم', 'تشطيبات ملفوفة ومجلدة', 'ختم بالرقائق ونقش وUV موضعي', 'إغلاق مغناطيسي وشريط سحب', 'حشوات مخصصة من الإسفنج والـEVA'],
      specs: [{ label: 'الكرتون', value: 'رمادي 1.5–3 مم' }, { label: 'الزخرفة', value: 'رقائق · نقش · UV' }, { label: 'التطبيق', value: 'فاخر · إلكترونيات · هدايا' }],
    },
    es: {
      title: 'Producción de Cajas Rígidas',
      tagline: 'Packaging de lujo con integridad estructural',
      intro: 'Las cajas rígidas transmiten calidad antes de abrir el producto. InChief produce cajas rígidas para lujo, electrónica, cosmética y regalo premium, con decoración completa: estampado en caliente, relieve, UV selectivo, cierre magnético e insertos de espuma a medida.',
      features: ['Cartón gris 1,5 mm – 3 mm', 'Acabados forrados y encuadernados', 'Foil, relieve & UV selectivo', 'Cierre magnético y tirador de cinta', 'Insertos de espuma, EVA y tejido'],
      specs: [{ label: 'Cartón', value: 'Gris 1,5 – 3 mm' }, { label: 'Decoración', value: 'Foil · Relieve · UV' }, { label: 'Aplicación', value: 'Lujo · Electrónica · Regalo' }],
    },
    it: {
      title: 'Produzione Scatole Rigide',
      tagline: 'Packaging di lusso con integrità strutturale',
      intro: 'Le scatole rigide trasmettono qualità prima ancora di aprire il prodotto. InChief produce scatole rigide per lusso, elettronica, cosmetica e regali premium, con decorazione completa: stampa a caldo, goffratura, UV selettivo, chiusura magnetica e inserti in gommapiuma.',
      features: ['Cartone grigio 1,5 mm – 3 mm', 'Finiture rivestite e rilegate', 'Foil, goffratura & UV selettivo', 'Chiusura magnetica e nastro', 'Inserti in gommapiuma, EVA e tessuto'],
      specs: [{ label: 'Cartone', value: 'Grigio 1,5 – 3 mm' }, { label: 'Decorazione', value: 'Foil · Goffratura · UV' }, { label: 'Applicazione', value: 'Lusso · Elettronica · Regalo' }],
    },
  },

  // ── 7. Label & Sticker Printing ─────────────────────────────────────────
  labels: {
    en: {
      title: 'Label & Sticker Printing',
      tagline: 'Accurate, Durable, On-Brand',
      intro: 'InChief prints self-adhesive labels, stickers, and wrap-around labels for food, beverage, pharmaceutical, chemical, and logistics applications. Available in paper, PE, PET, and BOPP substrates with a range of adhesive grades and surface finishes suited to any environment.',
      features: ['Paper, PE, PET & BOPP substrates', 'Regulatory batch & track codes', 'Offset & UV inkjet printing', 'Variable data per roll', 'Custom die-cut shapes'],
      specs: [{ label: 'Substrate', value: 'Paper · PE · PET · BOPP' }, { label: 'Variable Data', value: 'Juanda PM1020Z LED-UV' }, { label: 'Application', value: 'Food · Pharma · Logistics' }],
    },
    zh: {
      title: '标签与贴纸印刷',
      tagline: '精准耐用，完美呈现品牌形象',
      intro: '云创印刷为食品、饮料、医药、化工及物流行业提供自粘标签、贴纸及环绕标签印刷服务。可选纸张、PE、PET及BOPP多种基材，配合多种粘合剂等级与表面处理，适应各类使用环境。',
      features: ['纸张、PE、PET及BOPP基材', '监管批次码及追溯码', '胶印与UV喷墨印刷', '卷筒可变数据', '异形模切'],
      specs: [{ label: '基材', value: '纸张 · PE · PET · BOPP' }, { label: '可变数据', value: '隽大PM1020Z LED-UV' }, { label: '应用领域', value: '食品 · 医药 · 物流' }],
    },
    fr: {
      title: 'Impression d\'Étiquettes et Autocollants',
      tagline: 'Précis, durables et fidèles à la marque',
      intro: 'InChief imprime des étiquettes auto-adhésives, autocollants et étiquettes enveloppantes pour l\'alimentation, les boissons, la pharmacie, la chimie et la logistique. Disponibles en papier, PE, PET et BOPP avec différents grades d\'adhésif.',
      features: ['Papier, PE, PET & BOPP', 'Codes de traçabilité réglementaires', 'Offset & jet d\'encre UV', 'Données variables par rouleau', 'Découpes personnalisées'],
      specs: [{ label: 'Substrat', value: 'Papier · PE · PET · BOPP' }, { label: 'Données var.', value: 'Juanda PM1020Z LED-UV' }, { label: 'Application', value: 'Alimentaire · Pharma · Logistique' }],
    },
    ar: {
      title: 'طباعة الملصقات',
      tagline: 'دقيقة ومتينة وتعكس هوية علامتك',
      intro: 'تطبع InChief الملصقات اللاصقة الذاتية وملصقات التغليف لقطاعات الأغذية والمشروبات والأدوية والكيماويات واللوجستيات، بركائز ورقية وPE وPET وBOPP مع مجموعة من درجات اللاصق والتشطيبات السطحية.',
      features: ['ركائز ورقية وPE وPET وBOPP', 'رموز الدُّفعات التنظيمية والتتبع', 'طباعة أوفست وUV نفثية', 'بيانات متغيرة لكل لفة', 'أشكال مقطوعة مخصصة'],
      specs: [{ label: 'الركيزة', value: 'ورق · PE · PET · BOPP' }, { label: 'بيانات متغيرة', value: 'Juanda PM1020Z LED-UV' }, { label: 'التطبيق', value: 'أغذية · دوائي · لوجستي' }],
    },
    es: {
      title: 'Etiquetas y Adhesivos',
      tagline: 'Precisos, duraderos y fieles a la marca',
      intro: 'InChief imprime etiquetas autoadhesivas, pegatinas y etiquetas envolventes para alimentación, bebidas, farmacia, química y logística. Disponibles en papel, PE, PET y BOPP con distintos grados de adhesivo y acabados superficiales.',
      features: ['Sustratos papel, PE, PET & BOPP', 'Códigos de lote y trazabilidad', 'Impresión offset y UV inkjet', 'Datos variables por rollo', 'Formas troqueladas personalizadas'],
      specs: [{ label: 'Sustrato', value: 'Papel · PE · PET · BOPP' }, { label: 'Datos variables', value: 'Juanda PM1020Z LED-UV' }, { label: 'Aplicación', value: 'Alim. · Farma · Logística' }],
    },
    it: {
      title: 'Stampa Etichette e Adesivi',
      tagline: 'Precisi, durevoli e fedeli al brand',
      intro: 'InChief stampa etichette autoadesive, adesivi ed etichette avvolgenti per alimentare, bevande, farmaceutica, chimica e logistica. Disponibili in carta, PE, PET e BOPP con vari gradi di adesivo e finiture superficiali.',
      features: ['Supporti carta, PE, PET & BOPP', 'Codici di lotto e tracciabilità', 'Stampa offset e UV inkjet', 'Dati variabili per rotolo', 'Forme fustellate personalizzate'],
      specs: [{ label: 'Supporto', value: 'Carta · PE · PET · BOPP' }, { label: 'Dati variabili', value: 'Juanda PM1020Z LED-UV' }, { label: 'Applicazione', value: 'Alim. · Farma · Logistica' }],
    },
  },

  // ── 8. Industrial Packaging ─────────────────────────────────────────────
  'industrial-packaging': {
    en: {
      title: 'Industrial Packaging',
      tagline: 'Robust Packaging for Demanding Applications',
      intro: 'Industrial packaging demands durability, precise dimensions, and supply chain integration. InChief manufactures corrugated cartons, double-wall cartons, and custom master cartons for electronics, automotive parts, food export, and heavy goods — supporting direct export-compliance specifications.',
      features: ['Single / double / triple wall corrugated', 'Litho-laminate up to 5 colours', 'Standard & bespoke dimensions', 'High compression strength', 'Export-compliant specification'],
      specs: [{ label: 'Board Type', value: 'Single / Double / Triple Wall' }, { label: 'Die-Cutting', value: 'Jinya SR-1650SHL' }, { label: 'Market', value: 'China · EU · North America' }],
    },
    zh: {
      title: '工业包装',
      tagline: '满足严苛工况的坚固包装解决方案',
      intro: '工业包装要求高耐用性、精密尺寸与供应链协同。云创印刷为电子产品、汽车配件、食品出口及重型商品制造瓦楞纸箱、双瓦纸箱及定制外箱，全面符合出口合规要求。',
      features: ['单瓦/双瓦/三瓦楞结构', '最高5色印刷裱纸', '标准与定制尺寸', '高抗压强度', '符合出口规格要求'],
      specs: [{ label: '楞型', value: '单瓦 / 双瓦 / 三瓦' }, { label: '模切设备', value: '劲亚SR-1650SHL' }, { label: '目标市场', value: '中国 · 欧洲 · 北美' }],
    },
    fr: {
      title: 'Emballage Industriel',
      tagline: 'Emballage robuste pour applications exigeantes',
      intro: 'L\'emballage industriel exige durabilité, dimensions précises et intégration logistique. InChief fabrique cartons ondulés, double cannelure et cartons maîtres pour l\'électronique, l\'automobile, l\'export alimentaire et les produits lourds.',
      features: ['Cannelure simple / double / triple', 'Litho-laminé jusqu\'à 5 couleurs', 'Dimensions standard & sur mesure', 'Résistance à la compression élevée', 'Spécifications export conformes'],
      specs: [{ label: 'Type', value: 'Simple / Double / Triple cannelure' }, { label: 'Découpe', value: 'Jinya SR-1650SHL' }, { label: 'Marché', value: 'Chine · UE · Amérique du Nord' }],
    },
    ar: {
      title: 'التغليف الصناعي',
      tagline: 'تغليف متين للتطبيقات الصعبة',
      intro: 'يتطلب التغليف الصناعي المتانة والأبعاد الدقيقة والتكامل مع سلسلة التوريد. تصنّع InChief الكراتين المموجة وذات الجدار المزدوج والصناديق الرئيسية المخصصة للإلكترونيات وقطع غيار السيارات والتصدير الغذائي.',
      features: ['جدار مفرد / مزدوج / ثلاثي', 'طباعة ليثو-لامينات حتى 5 ألوان', 'أبعاد قياسية ومخصصة', 'قوة ضغط عالية', 'مواصفات متوافقة مع التصدير'],
      specs: [{ label: 'نوع اللوح', value: 'مفرد / مزدوج / ثلاثي' }, { label: 'القطع بالقالب', value: 'Jinya SR-1650SHL' }, { label: 'السوق', value: 'الصين · أوروبا · أمريكا الشمالية' }],
    },
    es: {
      title: 'Embalaje Industrial',
      tagline: 'Embalaje robusto para aplicaciones exigentes',
      intro: 'El embalaje industrial exige durabilidad, dimensiones precisas e integración logística. InChief fabrica cartones corrugados, doble onda y cajas maestras para electrónica, automoción, exportación alimentaria y mercancías pesadas.',
      features: ['Pared simple / doble / triple', 'Litho-laminado hasta 5 colores', 'Dimensiones estándar y a medida', 'Alta resistencia a la compresión', 'Especificaciones cumplimiento exportación'],
      specs: [{ label: 'Tipo', value: 'Simple / Doble / Triple onda' }, { label: 'Troquelado', value: 'Jinya SR-1650SHL' }, { label: 'Mercado', value: 'China · UE · Norteamérica' }],
    },
    it: {
      title: 'Packaging Industriale',
      tagline: 'Imballaggi robusti per applicazioni impegnative',
      intro: 'Il packaging industriale richiede durabilità, dimensioni precise e integrazione logistica. InChief produce cartoni ondulati, doppia onda e casse master per elettronica, automotive, export alimentare e merci pesanti.',
      features: ['Onda singola / doppia / tripla', 'Litho-laminato fino a 5 colori', 'Dimensioni standard e su misura', 'Alta resistenza alla compressione', 'Specifiche conformi all\'export'],
      specs: [{ label: 'Tipo', value: 'Singola / Doppia / Tripla onda' }, { label: 'Fustellatura', value: 'Jinya SR-1650SHL' }, { label: 'Mercato', value: 'Cina · UE · Nord America' }],
    },
  },

  // ── 9. UV & Varnishing ──────────────────────────────────────────────────
  'uv-varnish': {
    en: {
      title: 'UV & Varnishing',
      tagline: 'Protection and Brilliance, Layer by Layer',
      intro: 'UV curing and water-based varnishing add a protective, visually striking finish to printed surfaces. InChief offers full-gloss, matte, and satin UV inline on our Heidelberg and Koenig & Bauer presses — including reverse UV (逆向UV) capability for dramatic contrast effects without a second pass.',
      features: ['Full-gloss, matte & satin UV', 'Spot UV for visual contrast', 'Reverse UV (逆向UV) inline', 'Water-based aqueous varnish', 'No re-pass — single pass inline'],
      specs: [{ label: 'Press Models', value: 'CX104 · XL75+L · RA105+L' }, { label: 'Reverse UV', value: 'RA105-8+L · XL75-7+L' }, { label: 'Application', value: 'Packaging · Covers · Luxury' }],
    },
    zh: {
      title: 'UV上光',
      tagline: '层层叠加，防护与光泽并存',
      intro: 'UV固化与水性上光为印刷表面提供既具保护性又赏心悦目的涂层。云创印刷在海德堡和高宝胶印机上提供全亮UV、哑光UV及丝光UV联机工艺，包括逆向UV特效，无需二次过机，实现强烈视觉对比效果。',
      features: ['全亮UV、哑光UV与丝光UV', '局部UV视觉对比', '逆向UV联机工艺', '水性上光', '单次过机，无需返工'],
      specs: [{ label: '适配机型', value: 'CX104 · XL75+L · RA105+L' }, { label: '逆向UV机型', value: 'RA105-8+L · XL75-7+L' }, { label: '应用场景', value: '包装 · 封面 · 奢侈品' }],
    },
    fr: {
      title: 'UV & Vernissage',
      tagline: 'Protection et brillance, couche par couche',
      intro: 'Le vernis UV et le vernissage aqueux ajoutent une finition protectrice et visuellement saisissante. InChief propose UV brillant, mat et satiné en ligne sur ses presses Heidelberg et Koenig & Bauer, y compris le reverse UV pour des effets de contraste dramatiques sans second passage.',
      features: ['UV brillant, mat & satiné', 'UV sélectif pour contraste visuel', 'Reverse UV en ligne', 'Vernis aqueux', 'Passage unique — sans retour'],
      specs: [{ label: 'Presses', value: 'CX104 · XL75+L · RA105+L' }, { label: 'Reverse UV', value: 'RA105-8+L · XL75-7+L' }, { label: 'Application', value: 'Emballage · Couvertures · Luxe' }],
    },
    ar: {
      title: 'طلاء UV والورنيش',
      tagline: 'حماية وبريق، طبقة تلو طبقة',
      intro: 'يضيف الطلاء بالأشعة فوق البنفسجية والورنيش المائي تشطيبًا واقيًا ولافتًا للنظر. تقدم InChief UV لامعًا وغير لامع وساتينًا في الخط على مطابعها، بما في ذلك الـUV العكسي لتأثيرات تباين مثيرة دون مرور ثانٍ.',
      features: ['UV لامع وغير لامع وساتين', 'UV موضعي للتباين البصري', 'UV عكسي في الخط', 'ورنيش مائي', 'مرور واحد فقط'],
      specs: [{ label: 'المطابع', value: 'CX104 · XL75+L · RA105+L' }, { label: 'UV العكسي', value: 'RA105-8+L · XL75-7+L' }, { label: 'التطبيق', value: 'تغليف · أغلفة · فاخر' }],
    },
    es: {
      title: 'UV y Barnizado',
      tagline: 'Protección y brillo, capa a capa',
      intro: 'El barnizado UV y el barniz acuoso añaden un acabado protector y visualmente impactante. InChief ofrece UV brillante, mate y satinado en línea en sus prensas Heidelberg y Koenig & Bauer, incluido UV inverso para efectos de contraste dramáticos sin segunda pasada.',
      features: ['UV brillante, mate y satinado', 'UV selectivo para contraste visual', 'UV inverso en línea', 'Barniz acuoso', 'Pasada única — sin retorno'],
      specs: [{ label: 'Prensas', value: 'CX104 · XL75+L · RA105+L' }, { label: 'UV inverso', value: 'RA105-8+L · XL75-7+L' }, { label: 'Aplicación', value: 'Embalaje · Portadas · Lujo' }],
    },
    it: {
      title: 'UV e Verniciatura',
      tagline: 'Protezione e brillantezza, strato dopo strato',
      intro: 'La verniciatura UV e il verniciatura acquosa aggiungono una finitura protettiva e visivamente accattivante. InChief offre UV lucido, opaco e satinato in linea sulle presse Heidelberg e Koenig & Bauer, incluso il reverse UV per effetti di contrasto senza secondo passaggio.',
      features: ['UV lucido, opaco e satinato', 'UV selettivo per contrasto visivo', 'Reverse UV in linea', 'Verniciatura acquosa', 'Passata unica — senza rientro'],
      specs: [{ label: 'Presse', value: 'CX104 · XL75+L · RA105+L' }, { label: 'Reverse UV', value: 'RA105-8+L · XL75-7+L' }, { label: 'Applicazione', value: 'Packaging · Copertine · Lusso' }],
    },
  },

  // ── 10. Foil Stamping ───────────────────────────────────────────────────
  'foil-stamping': {
    en: {
      title: 'Foil Stamping',
      tagline: 'The Finishing Touch of Luxury',
      intro: 'Hot foil stamping applies metallic, holographic, or pigmented foil to packaging and print surfaces with precision registration. Our Guowang C106Y automatic foil stamping system handles both large-format areas and intricate fine-detail applications — ideal for premium brand packaging, book covers, and gift products.',
      features: ['Gold, silver, rose gold & holographic foil', 'Guowang C106Y full-auto system', 'Fine detail & large-format areas', 'Foil + emboss combination', 'Manual stamping for short runs'],
      specs: [{ label: 'Main System', value: 'Guowang C106Y (Full-Auto)' }, { label: 'Manual', value: 'Ouer TYMK-930' }, { label: 'Application', value: 'Packaging · Books · Gift' }],
    },
    zh: {
      title: '烫金',
      tagline: '奢华包装的点睛之笔',
      intro: '烫金工艺将金属箔、全息箔或色箔以精准套印的方式贴附于包装及印刷品表面。我们的国望C106Y全自动烫金机既能处理大面积色块，也能呈现精细纹路，适用于高端品牌包装、书籍封面及礼品产品。',
      features: ['金色、银色、玫瑰金及全息烫金箔', '国望C106Y全自动烫金机', '精细纹路与大面积兼容', '烫金+击凸组合工艺', '手动烫金机适配小批量'],
      specs: [{ label: '主力设备', value: '国望C106Y（全自动）' }, { label: '手动设备', value: '奥尔TYMK-930' }, { label: '应用场景', value: '包装 · 书籍 · 礼品' }],
    },
    fr: {
      title: 'Dorure à Chaud',
      tagline: 'La touche finale du luxe',
      intro: 'La dorure à chaud applique un film métallique, holographique ou pigmenté avec une précision de repérage parfaite. Notre système automatique Guowang C106Y gère aussi bien les grandes surfaces que les détails fins — idéal pour les emballages premium et les couvertures de livres.',
      features: ['Or, argent, or rose & holographique', 'Guowang C106Y plein-auto', 'Détails fins & grandes surfaces', 'Combinaison dorure + gaufrage', 'Dorure manuelle pour petites séries'],
      specs: [{ label: 'Système principal', value: 'Guowang C106Y (Auto)' }, { label: 'Manuel', value: 'Ouer TYMK-930' }, { label: 'Application', value: 'Emballage · Livres · Cadeaux' }],
    },
    ar: {
      title: 'الختم بالرقائق',
      tagline: 'اللمسة الأخيرة للفخامة',
      intro: 'يُطبّق الختم بالرقائق الساخنة رقائق معدنية أو هولوغرافية أو ملونة على أسطح التغليف بدقة تسجيل عالية. يتعامل نظام Guowang C106Y الأوتوماتيكي مع المساحات الكبيرة والتفاصيل الدقيقة للتغليف الفاخر.',
      features: ['رقائق ذهبية وفضية وذهب وردي وهولوغرافية', 'نظام Guowang C106Y الكامل', 'تفاصيل دقيقة ومساحات كبيرة', 'تركيبة رقائق + نقش', 'ختم يدوي للكميات الصغيرة'],
      specs: [{ label: 'النظام الرئيسي', value: 'Guowang C106Y (أوتوماتيك)' }, { label: 'يدوي', value: 'Ouer TYMK-930' }, { label: 'التطبيق', value: 'تغليف · كتب · هدايا' }],
    },
    es: {
      title: 'Estampado en Caliente',
      tagline: 'El toque final del lujo',
      intro: 'El estampado en caliente aplica láminas metálicas, holográficas o pigmentadas con precisión de registro. Nuestro sistema automático Guowang C106Y maneja tanto grandes superficies como detalles finos — ideal para packaging premium y portadas de libros.',
      features: ['Lámina oro, plata, oro rosa y holográfica', 'Guowang C106Y totalmente automático', 'Detalles finos y grandes superficies', 'Combinación foil + relieve', 'Estampado manual para tiradas cortas'],
      specs: [{ label: 'Sistema principal', value: 'Guowang C106Y (Auto)' }, { label: 'Manual', value: 'Ouer TYMK-930' }, { label: 'Aplicación', value: 'Embalaje · Libros · Regalo' }],
    },
    it: {
      title: 'Stampa a Caldo',
      tagline: 'Il tocco finale del lusso',
      intro: 'La stampa a caldo applica film metallici, olografici o pigmentati con precisione di registro perfetta. Il nostro sistema automatico Guowang C106Y gestisce sia grandi superfici che dettagli fini — ideale per packaging premium e copertine di libri.',
      features: ['Foil oro, argento, oro rosa e olografico', 'Guowang C106Y completamente automatico', 'Dettagli fini e grandi superfici', 'Combinazione foil + goffratura', 'Stampa manuale per piccole tirature'],
      specs: [{ label: 'Sistema principale', value: 'Guowang C106Y (Auto)' }, { label: 'Manuale', value: 'Ouer TYMK-930' }, { label: 'Applicazione', value: 'Packaging · Libri · Regalo' }],
    },
  },

  // ── 11. Embossing & Debossing ───────────────────────────────────────────
  embossing: {
    en: {
      title: 'Embossing & Debossing',
      tagline: 'Texture That Communicates Quality',
      intro: 'Embossing raises the printed surface to create a tactile, premium feel; debossing presses it inward for an incised, refined effect. Both techniques are available blind or combined with foil, and can be layered with spot UV for maximum visual and tactile impact on brand packaging.',
      features: ['Blind emboss & foil combo', 'Multi-level emboss for depth', 'Deboss with spot UV', 'Fine text, logo & pattern capability', 'Large-format die sets available'],
      specs: [{ label: 'Equipment', value: 'Guowang C106Q · Ouer PYQ-203' }, { label: 'Combo', value: 'Foil + Emboss in one pass' }, { label: 'Application', value: 'Luxury · Books · Packaging' }],
    },
    zh: {
      title: '击凸/击凹',
      tagline: '触感传递品质',
      intro: '击凸工艺将印刷表面向上浮起，呈现立体触感；击凹则向下压制，形成内凹精致效果。两种工艺均可选择无色盲击或结合烫金，并可叠加局部UV，为品牌包装带来最大视觉与触感冲击。',
      features: ['盲击凸与烫金组合', '多层次击凸增加立体感', '击凹结合局部UV', '精细文字、LOGO及纹路处理', '可定制大幅面模具'],
      specs: [{ label: '使用设备', value: '国望C106Q · 奥尔PYQ-203' }, { label: '组合工艺', value: '一次过机完成烫金+击凸' }, { label: '应用场景', value: '奢侈品 · 书籍 · 包装' }],
    },
    fr: {
      title: 'Gaufrage & Embossage',
      tagline: 'La texture qui exprime la qualité',
      intro: 'Le gaufrage soulève la surface pour créer un effet tactile premium ; l\'embossage la presse vers l\'intérieur pour un effet ciselé raffiné. Les deux techniques sont disponibles en aveugle ou combinées avec la dorure et l\'UV sélectif.',
      features: ['Gaufrage aveugle & combiné dorure', 'Gaufrage multi-niveaux', 'Embossage avec UV sélectif', 'Texte fin, logo & motif', 'Grandes matrices disponibles'],
      specs: [{ label: 'Équipement', value: 'Guowang C106Q · Ouer PYQ-203' }, { label: 'Combinaison', value: 'Dorure + Gaufrage en une passe' }, { label: 'Application', value: 'Luxe · Livres · Emballage' }],
    },
    ar: {
      title: 'النقش البارز والغائر',
      tagline: 'نسيج يعبّر عن الجودة',
      intro: 'يرفع النقش البارز السطح المطبوع لإنشاء ملمس فاخر، بينما يضغط النقش الغائر للداخل لتأثير محفور رفيع. كلا الأسلوبين متاحان بشكل أعمى أو مدمجان مع الرقائق وUV موضعي لأقصى تأثير بصري.',
      features: ['نقش أعمى ومدمج مع رقائق', 'نقش متعدد المستويات للعمق', 'نقش غائر مع UV موضعي', 'نص دقيق وشعارات وأنماط', 'قوالب للأحجام الكبيرة'],
      specs: [{ label: 'المعدات', value: 'Guowang C106Q · Ouer PYQ-203' }, { label: 'مدمج', value: 'رقائق + نقش في مرور واحد' }, { label: 'التطبيق', value: 'فاخر · كتب · تغليف' }],
    },
    es: {
      title: 'Relieve y Grabado',
      tagline: 'La textura que comunica calidad',
      intro: 'El relieve eleva la superficie impresa para crear una sensación táctil premium; el grabado la presiona hacia dentro para un efecto inciso refinado. Ambas técnicas están disponibles en ciego o combinadas con foil y UV selectivo.',
      features: ['Relieve ciego y combinado con foil', 'Relieve multinivel para profundidad', 'Grabado con UV selectivo', 'Texto fino, logo y patrón', 'Matrices de gran formato disponibles'],
      specs: [{ label: 'Equipo', value: 'Guowang C106Q · Ouer PYQ-203' }, { label: 'Combinación', value: 'Foil + Relieve en una pasada' }, { label: 'Aplicación', value: 'Lujo · Libros · Embalaje' }],
    },
    it: {
      title: 'Goffratura e Debossatura',
      tagline: 'La texture che comunica qualità',
      intro: 'La goffratura solleva la superficie stampata creando un tocco tattile premium; la debossatura la preme verso l\'interno per un effetto inciso raffinato. Entrambe le tecniche sono disponibili in cieco o combinate con foil e UV selettivo.',
      features: ['Goffratura cieca e combinata con foil', 'Goffratura multilivello per profondità', 'Debossatura con UV selettivo', 'Testo fine, logo e pattern', 'Matrici in grande formato disponibili'],
      specs: [{ label: 'Attrezzatura', value: 'Guowang C106Q · Ouer PYQ-203' }, { label: 'Combinazione', value: 'Foil + Goffratura in una passata' }, { label: 'Applicazione', value: 'Lusso · Libri · Packaging' }],
    },
  },

  // ── 12. Die Cutting ─────────────────────────────────────────────────────
  'die-cutting': {
    en: {
      title: 'Die Cutting',
      tagline: 'Precision Cut, Every Time',
      intro: 'Die cutting shapes packaging components to exact structural specifications. InChief operates fully automated die-cutting and waste-removal systems for both folding carton and corrugated board, supporting complex crease patterns, window cutouts, handle punches, and tight tolerance dimensional accuracy.',
      features: ['Folding carton & corrugated board', 'Complex crease & score patterns', 'Window cutouts & handle punches', 'Automated waste removal', 'Registration accuracy ±0.1 mm'],
      specs: [{ label: 'Carton', value: 'Guowang C106Q (×2)' }, { label: 'Corrugated', value: 'Jinya SR-1650SHL' }, { label: 'Waste Removal', value: 'Qianding HTQF-1080B (×2)' }],
    },
    zh: {
      title: '模切',
      tagline: '精准成型，始终如一',
      intro: '模切工艺将包装部件成型为精确的结构规格。云创印刷为折叠纸盒和瓦楞纸板配备全自动模切清废系统，支持复杂压痕、镂空视窗、提手冲孔及严格尺寸公差控制。',
      features: ['折叠纸盒与瓦楞纸板模切', '复杂压痕与划线图案', '镂空视窗与提手冲孔', '自动化清废', '套准精度±0.1mm'],
      specs: [{ label: '折叠纸盒', value: '国望C106Q（×2台）' }, { label: '瓦楞纸板', value: '劲亚SR-1650SHL' }, { label: '清废设备', value: '乾鼎HTQF-1080B（×2台）' }],
    },
    fr: {
      title: 'Découpe à l\'Emporte-pièce',
      tagline: 'Coupe précise, à chaque fois',
      intro: 'La découpe forme les composants d\'emballage selon des spécifications structurelles exactes. InChief opère des systèmes de découpe et d\'ébarbage entièrement automatisés pour carton pliant et cannelure, supportant motifs de pli complexes, fenêtres et poignées.',
      features: ['Carton pliant & ondulé', 'Motifs de pli & rainurage complexes', 'Fenêtres & poignées', 'Ébarbage automatisé', 'Précision de repérage ±0,1 mm'],
      specs: [{ label: 'Carton', value: 'Guowang C106Q (×2)' }, { label: 'Ondulé', value: 'Jinya SR-1650SHL' }, { label: 'Ébarbage', value: 'Qianding HTQF-1080B (×2)' }],
    },
    ar: {
      title: 'القطع بالقالب',
      tagline: 'قطع دقيق في كل مرة',
      intro: 'يشكّل القطع بالقالب مكونات التغليف وفق مواصفات هيكلية دقيقة. تشغّل InChief أنظمة قطع وإزالة نفايات آلية بالكامل لكل من الكرتون القابل للطي والكرتون المموج، مع دعم أنماط الطيّ المعقدة ونوافذ القطع ومقابض الثقب.',
      features: ['كرتون قابل للطي ومموج', 'أنماط طيّ وكبس معقدة', 'نوافذ قطع ومقابض ثقب', 'إزالة نفايات آلية', 'دقة تسجيل ±0.1 مم'],
      specs: [{ label: 'الكرتون', value: 'Guowang C106Q (×2)' }, { label: 'المموج', value: 'Jinya SR-1650SHL' }, { label: 'إزالة النفايات', value: 'Qianding HTQF-1080B (×2)' }],
    },
    es: {
      title: 'Troquelado',
      tagline: 'Corte preciso, siempre',
      intro: 'El troquelado da forma a los componentes de embalaje según especificaciones estructurales exactas. InChief opera sistemas automáticos de troquelado y desbarbado para cartón plegable y corrugado, con soporte para patrones de pliegue complejos, ventanas y asas.',
      features: ['Cartón plegable y corrugado', 'Patrones de pliegue y ranura complejos', 'Ventanas y asas troqueladas', 'Desbarbado automatizado', 'Precisión de registro ±0,1 mm'],
      specs: [{ label: 'Cartón', value: 'Guowang C106Q (×2)' }, { label: 'Corrugado', value: 'Jinya SR-1650SHL' }, { label: 'Desbarbado', value: 'Qianding HTQF-1080B (×2)' }],
    },
    it: {
      title: 'Fustellatura',
      tagline: 'Taglio preciso, ogni volta',
      intro: 'La fustellatura sagoma i componenti di imballaggio secondo specifiche strutturali esatte. InChief opera sistemi di fustellatura e sbavatura completamente automatizzati per cartone pieghevole e ondulato, con supporto per pattern di piega complessi, finestre e manici.',
      features: ['Cartone pieghevole e ondulato', 'Pattern di piega e goffratura complessi', 'Finestre e manici fustellati', 'Sbavatura automatizzata', 'Precisione di registro ±0,1 mm'],
      specs: [{ label: 'Cartone', value: 'Guowang C106Q (×2)' }, { label: 'Ondulato', value: 'Jinya SR-1650SHL' }, { label: 'Sbavatura', value: 'Qianding HTQF-1080B (×2)' }],
    },
  },

  // ── 13. Custom Production ───────────────────────────────────────────────
  'custom-production': {
    en: {
      title: 'Custom Production',
      tagline: 'Your Specifications, Our Expertise',
      intro: 'InChief builds custom production programs for brands requiring unique packaging formats, sizes, or specifications. From structural prototyping and 3D visualisation via our ESKO digital prepress workflow to mass production ramp-up, we manage the full engineering-to-delivery cycle with dedicated programme management.',
      features: ['Structural design & prototyping', '3D pre-visualisation (ESKO)', 'Engineering & tooling support', 'Mass production scale-up', 'Dedicated programme management'],
      specs: [{ label: 'Prepress', value: 'ESKO Digital Workflow' }, { label: 'Capacity', value: '1,100,000 sheets/day' }, { label: 'Lead Time', value: 'Rapid prototyping to mass prod.' }],
    },
    zh: {
      title: '定制生产',
      tagline: '按您规格，发挥我们的专业能力',
      intro: '云创印刷为需要独特包装形态、尺寸或规格的品牌构建定制生产方案。从结构原型设计、ESKO数字印前3D可视化，到批量生产爬坡，我们提供专属项目管理，全程管控工程到交付的完整周期。',
      features: ['结构设计与原型制作', 'ESKO数字3D预可视化', '工程与工装支持', '批量生产快速放量', '专属项目管理'],
      specs: [{ label: '数字印前', value: 'ESKO数字工作流' }, { label: '产能', value: '日均110万印张' }, { label: '交期', value: '快速打样至批量量产' }],
    },
    fr: {
      title: 'Production Personnalisée',
      tagline: 'Vos spécifications, notre expertise',
      intro: 'InChief conçoit des programmes de production personnalisés pour les marques nécessitant des formats, tailles ou spécifications uniques. De la maquette structurelle et la visualisation 3D ESKO au lancement en production de masse, nous gérons le cycle complet ingénierie-livraison.',
      features: ['Conception & prototypage structurel', 'Pré-visualisation 3D (ESKO)', 'Support ingénierie & outillage', 'Montée en production de masse', 'Gestion de projet dédiée'],
      specs: [{ label: 'Prépresse', value: 'Flux numérique ESKO' }, { label: 'Capacité', value: '1 100 000 feuilles/jour' }, { label: 'Délai', value: 'Proto rapide → production de masse' }],
    },
    ar: {
      title: 'الإنتاج المخصص',
      tagline: 'مواصفاتك، خبرتنا',
      intro: 'تبني InChief برامج إنتاج مخصصة للعلامات التجارية التي تحتاج تنسيقات أو أحجامًا أو مواصفات فريدة. من النماذج الأولية الهيكلية والتصور ثلاثي الأبعاد عبر ESKO إلى الإنتاج الكامل، ندير الدورة الكاملة من الهندسة إلى التسليم.',
      features: ['تصميم هيكلي ونمذجة أولية', 'تصور ثلاثي الأبعاد (ESKO)', 'دعم هندسي وأدوات', 'توسيع الإنتاج الكبير', 'إدارة برنامج مخصصة'],
      specs: [{ label: 'ما قبل الطباعة', value: 'سير عمل ESKO الرقمي' }, { label: 'الطاقة', value: '1,100,000 ورقة/يوم' }, { label: 'المهلة', value: 'نمذجة سريعة ← إنتاج كبير' }],
    },
    es: {
      title: 'Producción Personalizada',
      tagline: 'Sus especificaciones, nuestra experiencia',
      intro: 'InChief desarrolla programas de producción personalizados para marcas que requieren formatos, tamaños o especificaciones únicos. Desde prototipos estructurales y visualización 3D ESKO hasta el lanzamiento en producción masiva, gestionamos el ciclo completo ingeniería-entrega.',
      features: ['Diseño estructural y prototipado', 'Pre-visualización 3D (ESKO)', 'Soporte de ingeniería y utillaje', 'Escalado a producción masiva', 'Gestión de proyecto dedicada'],
      specs: [{ label: 'Preimpresión', value: 'Flujo digital ESKO' }, { label: 'Capacidad', value: '1.100.000 hojas/día' }, { label: 'Plazo', value: 'Proto rápido → producción masiva' }],
    },
    it: {
      title: 'Produzione Personalizzata',
      tagline: 'Le vostre specifiche, la nostra competenza',
      intro: 'InChief sviluppa programmi di produzione personalizzati per brand che richiedono formati, dimensioni o specifiche uniche. Dal prototipo strutturale e la visualizzazione 3D ESKO al lancio in produzione di massa, gestiamo l\'intero ciclo ingegneria-consegna.',
      features: ['Progettazione strutturale e prototipazione', 'Pre-visualizzazione 3D (ESKO)', 'Supporto ingegneristico e attrezzature', 'Scalabilità a produzione di massa', 'Gestione dedicata del programma'],
      specs: [{ label: 'Prestampa', value: 'Flusso digitale ESKO' }, { label: 'Capacità', value: '1.100.000 fogli/giorno' }, { label: 'Lead time', value: 'Proto rapido → produzione di massa' }],
    },
  },

  // ── 14. OEM / ODM ───────────────────────────────────────────────────────
  oem: {
    en: {
      title: 'OEM / ODM Printing',
      tagline: 'Your Brand, Our Production',
      intro: 'InChief operates as a full-service OEM/ODM manufacturing partner. We print and finish to your brand specifications under NDA, manage multi-SKU production schedules, and deliver consistently to your colour and quality standards. Our ISO 9001 quality system ensures repeatability across every order.',
      features: ['Brand-anonymous production', 'NDA & IP protection', 'Multi-SKU scheduling', 'Consistent ISO 9001 quality', 'Direct export capability'],
      specs: [{ label: 'Quality', value: 'ISO 9001:2015 Certified' }, { label: 'Protection', value: 'NDA · IP Agreement' }, { label: 'Export', value: 'China · EU · Americas' }],
    },
    zh: {
      title: 'OEM/ODM印刷',
      tagline: '您的品牌，我们的生产',
      intro: '云创印刷作为全服务OEM/ODM制造合作伙伴，在保密协议下按您的品牌规格进行印刷与印后加工，管理多SKU生产计划，并以一致的色彩与品质标准交付。我们的ISO 9001质量体系确保每个订单的可重复性。',
      features: ['品牌匿名生产', '保密协议与知识产权保护', '多SKU排程管理', '符合ISO 9001的稳定品质', '直接出口能力'],
      specs: [{ label: '质量体系', value: 'ISO 9001:2015认证' }, { label: '商业保护', value: '保密协议 · 知识产权协议' }, { label: '出口', value: '中国 · 欧洲 · 美洲' }],
    },
    fr: {
      title: 'Impression OEM / ODM',
      tagline: 'Votre marque, notre production',
      intro: 'InChief opère en tant que partenaire fabricant OEM/ODM complet. Nous imprimons et finissons selon vos spécifications de marque sous NDA, gérons la production multi-SKU et livrons avec des standards de couleur et qualité constants, certifiés ISO 9001.',
      features: ['Production anonyme de marque', 'NDA & protection IP', 'Planification multi-SKU', 'Qualité ISO 9001 constante', 'Capacité d\'export direct'],
      specs: [{ label: 'Qualité', value: 'ISO 9001:2015 Certifié' }, { label: 'Protection', value: 'NDA · Accord IP' }, { label: 'Export', value: 'Chine · UE · Amériques' }],
    },
    ar: {
      title: 'طباعة OEM / ODM',
      tagline: 'علامتك التجارية، إنتاجنا',
      intro: 'تعمل InChief كشريك تصنيع OEM/ODM متكامل. نطبع وننهي وفق مواصفات علامتك التجارية بموجب NDA، وندير جداول إنتاج متعددة SKU، ونسلم بمعايير لون وجودة ثابتة وفق نظام ISO 9001.',
      features: ['إنتاج مجهول العلامة التجارية', 'NDA وحماية الملكية الفكرية', 'جدولة متعددة SKU', 'جودة ثابتة ISO 9001', 'قدرة تصدير مباشرة'],
      specs: [{ label: 'الجودة', value: 'معتمد ISO 9001:2015' }, { label: 'الحماية', value: 'NDA · اتفاقية IP' }, { label: 'التصدير', value: 'الصين · أوروبا · الأمريكتان' }],
    },
    es: {
      title: 'Impresión OEM / ODM',
      tagline: 'Su marca, nuestra producción',
      intro: 'InChief opera como socio fabricante OEM/ODM de servicio completo. Imprimimos y terminamos según sus especificaciones de marca bajo NDA, gestionamos producción multi-SKU y entregamos con estándares de color y calidad consistentes bajo ISO 9001.',
      features: ['Producción anónima de marca', 'NDA y protección de PI', 'Planificación multi-SKU', 'Calidad constante ISO 9001', 'Capacidad de exportación directa'],
      specs: [{ label: 'Calidad', value: 'ISO 9001:2015 Certificado' }, { label: 'Protección', value: 'NDA · Acuerdo PI' }, { label: 'Exportación', value: 'China · UE · Américas' }],
    },
    it: {
      title: 'Stampa OEM / ODM',
      tagline: 'Il vostro brand, la nostra produzione',
      intro: 'InChief opera come partner produttivo OEM/ODM a servizio completo. Stampiamo e finiamo secondo le specifiche del vostro brand con NDA, gestiamo la produzione multi-SKU e consegniamo con standard di colore e qualità costanti, certificati ISO 9001.',
      features: ['Produzione anonima di brand', 'NDA e protezione IP', 'Pianificazione multi-SKU', 'Qualità costante ISO 9001', 'Capacità di export diretto'],
      specs: [{ label: 'Qualità', value: 'ISO 9001:2015 Certificato' }, { label: 'Protezione', value: 'NDA · Accordo IP' }, { label: 'Export', value: 'Cina · UE · Americhe' }],
    },
  },

  // ── 15. Supply Chain Integration ────────────────────────────────────────
  'supply-chain': {
    en: {
      title: 'Supply Chain Integration',
      tagline: 'From Substrate to Shelf, Managed',
      intro: 'InChief integrates raw material procurement, printing, finishing, assembly, and outbound logistics into a single managed workflow. Our ERP systems and AGV automated internal transport ensure accurate scheduling, minimal lead times, and real-time production visibility for global brand partners.',
      features: ['Raw material sourcing & procurement', 'Print + finish + assembly workflow', 'AGV automated internal transport', 'ERP-integrated scheduling', 'Outbound freight coordination'],
      specs: [{ label: 'Internal Logistics', value: 'AGV Automated Transport' }, { label: 'Management', value: 'ERP-Integrated' }, { label: 'Certifications', value: 'ISO 9001 · ISO 14001' }],
    },
    zh: {
      title: '供应链整合',
      tagline: '从基材到货架，全程托管',
      intro: '云创印刷将原材料采购、印刷、印后加工、装配及外发物流整合为单一托管工作流。我们的ERP系统与AGV自动化厂内运输确保精准排程、最短交货周期，并为全球品牌合作伙伴提供实时生产可视化。',
      features: ['原材料采购管理', '印刷+印后+装配一体化工作流', 'AGV自动化厂内搬运', 'ERP集成排程', '外发物流统筹协调'],
      specs: [{ label: '厂内物流', value: 'AGV自动运输系统' }, { label: '管理系统', value: 'ERP集成管理' }, { label: '认证体系', value: 'ISO 9001 · ISO 14001' }],
    },
    fr: {
      title: 'Intégration de la Chaîne d\'Approvisionnement',
      tagline: 'Du substrat à l\'étagère, géré de bout en bout',
      intro: 'InChief intègre l\'approvisionnement en matières premières, l\'impression, la finition, l\'assemblage et la logistique sortante dans un workflow unique géré. Nos systèmes ERP et transport AGV automatisé assurent une planification précise et une visibilité production en temps réel.',
      features: ['Approvisionnement matières premières', 'Flux impression + finition + assemblage', 'Transport interne AGV automatisé', 'Planification intégrée ERP', 'Coordination fret sortant'],
      specs: [{ label: 'Logistique interne', value: 'Transport AGV automatisé' }, { label: 'Gestion', value: 'ERP intégré' }, { label: 'Certifications', value: 'ISO 9001 · ISO 14001' }],
    },
    ar: {
      title: 'تكامل سلسلة التوريد',
      tagline: 'من الركيزة إلى الرف، مُدار بالكامل',
      intro: 'تدمج InChief توريد المواد الخام والطباعة والتشطيب والتجميع والخدمات اللوجستية الصادرة في سير عمل واحد مُدار. تضمن أنظمة ERP ونقل AGV الآلي الداخلي جدولة دقيقة وأقصر مهل تسليم وإمكانية رؤية الإنتاج في الوقت الفعلي.',
      features: ['توريد وشراء المواد الخام', 'سير عمل طباعة + تشطيب + تجميع', 'نقل AGV داخلي آلي', 'جدولة مدمجة مع ERP', 'تنسيق الشحن الصادر'],
      specs: [{ label: 'اللوجستيات الداخلية', value: 'نقل AGV الآلي' }, { label: 'الإدارة', value: 'متكامل مع ERP' }, { label: 'الشهادات', value: 'ISO 9001 · ISO 14001' }],
    },
    es: {
      title: 'Integración de la Cadena de Suministro',
      tagline: 'Del sustrato al lineal, gestionado',
      intro: 'InChief integra la adquisición de materias primas, impresión, acabado, ensamblaje y logística de salida en un flujo de trabajo único gestionado. Nuestros sistemas ERP y transporte AGV automatizado garantizan planificación precisa y visibilidad de producción en tiempo real.',
      features: ['Aprovisionamiento de materias primas', 'Flujo impresión + acabado + ensamblaje', 'Transporte interno AGV automatizado', 'Planificación integrada ERP', 'Coordinación de flete de salida'],
      specs: [{ label: 'Logística interna', value: 'Transporte AGV automatizado' }, { label: 'Gestión', value: 'ERP integrado' }, { label: 'Certificaciones', value: 'ISO 9001 · ISO 14001' }],
    },
    it: {
      title: 'Integrazione della Filiera',
      tagline: 'Dal supporto allo scaffale, gestito',
      intro: 'InChief integra approvvigionamento di materie prime, stampa, finitura, assemblaggio e logistica in uscita in un unico flusso di lavoro gestito. I nostri sistemi ERP e il trasporto interno automatizzato AGV garantiscono pianificazione precisa e visibilità produzione in tempo reale.',
      features: ['Approvvigionamento materie prime', 'Flusso stampa + finitura + assemblaggio', 'Trasporto interno AGV automatizzato', 'Pianificazione integrata ERP', 'Coordinamento spedizioni in uscita'],
      specs: [{ label: 'Logistica interna', value: 'Trasporto AGV automatizzato' }, { label: 'Gestione', value: 'ERP integrato' }, { label: 'Certificazioni', value: 'ISO 9001 · ISO 14001' }],
    },
  },

  // ── 16. Global Fulfillment ──────────────────────────────────────────────
  fulfillment: {
    en: {
      title: 'Global Fulfillment',
      tagline: 'Reliable Delivery to Every Market',
      intro: 'InChief ships finished packaging and printed goods to clients in China, Europe, North America, and South America. We handle export documentation, compliance labelling, container loading supervision, and freight booking in coordination with international logistics partners — ensuring your product arrives on time, every time.',
      features: ['Export documentation & customs', 'Compliance & regulatory labelling', 'Container loading supervision', 'Air & sea freight options', 'China · Europe · North & South America'],
      specs: [{ label: 'Markets', value: 'CN · EU · NA · SA' }, { label: 'Freight', value: 'Sea · Air · Express' }, { label: 'Compliance', value: 'FSC® · ISO 14001' }],
    },
    zh: {
      title: '全球配送',
      tagline: '可靠交付，覆盖全球每一个市场',
      intro: '云创印刷向中国、欧洲、北美及南美的客户发运成品包装及印刷品。我们处理出口文件、合规标签、集装箱装载监督及货运订舱，与国际物流合作伙伴协同，确保您的产品准时到达。',
      features: ['出口单证与清关', '合规与监管标签', '集装箱装载监督', '海运与空运选项', '中国 · 欧洲 · 北美 · 南美'],
      specs: [{ label: '目标市场', value: '中国 · 欧洲 · 北美 · 南美' }, { label: '运输方式', value: '海运 · 空运 · 快递' }, { label: '合规认证', value: 'FSC® · ISO 14001' }],
    },
    fr: {
      title: 'Expédition Mondiale',
      tagline: 'Livraison fiable sur chaque marché',
      intro: 'InChief expédie emballages finis et imprimés vers la Chine, l\'Europe, l\'Amérique du Nord et l\'Amérique du Sud. Nous gérons la documentation export, l\'étiquetage réglementaire, la supervision du chargement et la réservation de fret avec des partenaires logistiques internationaux.',
      features: ['Documentation export & douanes', 'Étiquetage réglementaire', 'Supervision chargement conteneurs', 'Fret maritime & aérien', 'Chine · Europe · Amériques'],
      specs: [{ label: 'Marchés', value: 'CN · UE · NA · AS' }, { label: 'Transport', value: 'Maritime · Aérien · Express' }, { label: 'Conformité', value: 'FSC® · ISO 14001' }],
    },
    ar: {
      title: 'التوصيل العالمي',
      tagline: 'توصيل موثوق إلى كل سوق',
      intro: 'تشحن InChief التغليف المكتمل والمطبوعات إلى العملاء في الصين وأوروبا وأمريكا الشمالية والجنوبية. نتولى وثائق التصدير والتخليص الجمركي والملصقات الامتثالية والإشراف على تحميل الحاويات وحجز الشحن.',
      features: ['وثائق التصدير والجمارك', 'ملصقات الامتثال التنظيمي', 'الإشراف على تحميل الحاويات', 'خيارات الشحن البحري والجوي', 'الصين · أوروبا · أمريكا الشمالية والجنوبية'],
      specs: [{ label: 'الأسواق', value: 'CN · أوروبا · NA · SA' }, { label: 'الشحن', value: 'بحري · جوي · سريع' }, { label: 'الامتثال', value: 'FSC® · ISO 14001' }],
    },
    es: {
      title: 'Envío Global',
      tagline: 'Entrega fiable a cada mercado',
      intro: 'InChief envía embalajes terminados e impresos a clientes en China, Europa, América del Norte y América del Sur. Gestionamos documentación de exportación, etiquetado normativo, supervisión de carga de contenedores y reserva de flete con socios logísticos internacionales.',
      features: ['Documentación de exportación y aduanas', 'Etiquetado normativo', 'Supervisión de carga de contenedores', 'Flete marítimo y aéreo', 'China · Europa · Américas'],
      specs: [{ label: 'Mercados', value: 'CN · UE · NA · SA' }, { label: 'Transporte', value: 'Marítimo · Aéreo · Express' }, { label: 'Cumplimiento', value: 'FSC® · ISO 14001' }],
    },
    it: {
      title: 'Consegna Globale',
      tagline: 'Consegna affidabile in ogni mercato',
      intro: 'InChief spedisce packaging finito e stampati a clienti in Cina, Europa, Nord America e Sud America. Gestiamo documentazione export, etichettatura normativa, supervisione del carico container e prenotazione frete con partner logistici internazionali.',
      features: ['Documentazione export e dogana', 'Etichettatura normativa', 'Supervisione carico container', 'Frete marittimo e aereo', 'Cina · Europa · Americhe'],
      specs: [{ label: 'Mercati', value: 'CN · UE · NA · SA' }, { label: 'Trasporto', value: 'Marittimo · Aereo · Express' }, { label: 'Conformità', value: 'FSC® · ISO 14001' }],
    },
  },
};

/** Fallback: return English content if the requested lang is missing. */
export function getSolution(slug: string, lang: Lang): SolutionContent | null {
  const s = solutions[slug];
  if (!s) return null;
  return (s[lang] ?? s['en']) as SolutionContent;
}

export const SOLUTION_SLUGS = Object.keys(solutions);
