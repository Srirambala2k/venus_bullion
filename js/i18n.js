/* Venus Bullion — language switcher (EN / FR / AR).
   English text stays in the HTML (it is the source + fallback). This file swaps each text node
   for its French / Arabic equivalent, sets <html lang dir>, and persists the choice.
   To add or edit a translation, change the entry below — key = the English text exactly. */
(() => {
  'use strict';
  const T = {
    // ---- navigation / generic
    'Skip': ['Passer', 'تخطي'],
    'About': ['À propos', 'من نحن'],
    'Trading': ['Négoce', 'التداول'],
    'How We Work': ['Méthode', 'كيف نعمل'],
    'Compliance': ['Conformité', 'الامتثال'],
    'Our Network': ['Réseau', 'شبكتنا'],
    'Contact Us': ['Contact', 'تواصل معنا'],
    // ---- hero
    'Secure Your Future with the Ultimate Luxury Asset.': ['Sécurisez votre avenir avec l’actif de luxe par excellence.', 'أمّن مستقبلك مع أرقى أصول الفخامة.'],
    'Invest Now': ['Investir maintenant', 'استثمر الآن'],
    'Venus Bullion Gold Trading L.L.C · United Arab Emirates': ['Venus Bullion Gold Trading L.L.C · Émirats arabes unis', 'Venus Bullion Gold Trading L.L.C · الإمارات العربية المتحدة'],
    // ---- credentials
    'UAE': ['ÉAU', 'الإمارات'],
    'Registered Trading Company': ['Société commerciale enregistrée', 'شركة تجارية مسجلة'],
    'Register Number': ['Numéro d’enregistrement', 'رقم السجل'],
    '30 Aug 2027': ['30 août 2027', '30 أغسطس 2027'],
    'License Expiry': ['Expiration de la licence', 'انتهاء الرخصة'],
    'Licensed Activity Categories': ['Catégories d’activité agréées', 'فئات الأنشطة المرخصة'],
    // ---- ticker
    'Raw Gold': ['Or brut', 'الذهب الخام'],
    'Precious Metals': ['Métaux précieux', 'المعادن الثمينة'],
    'Gold & Silver Jewellery': ['Bijoux or & argent', 'مجوهرات الذهب والفضة'],
    'Diamonds & Pearls': ['Diamants & perles', 'الألماس واللؤلؤ'],
    'Watches & Clocks': ['Montres & horloges', 'الساعات'],
    'Trusted Trade': ['Négoce de confiance', 'تجارة موثوقة'],
    // ---- about
    'Who We Are': ['Qui nous sommes', 'من نحن'],
    'A focused trading house for high-value commodities.': ['Une maison de négoce spécialisée dans les matières de grande valeur.', 'بيت تجاري متخصص في السلع عالية القيمة.'],
    'Venus Bullion Gold Trading L.L.C operates across licensed categories spanning raw gold and precious metals, jewellery and accessories, diamonds and precious stones, and watches and clock-related trading.': ['Venus Bullion Gold Trading L.L.C opère dans plusieurs catégories agréées : or brut et métaux précieux, bijoux et accessoires, diamants et pierres précieuses, ainsi que montres et horlogerie.', 'تعمل شركة Venus Bullion Gold Trading L.L.C ضمن فئات مرخصة تشمل الذهب الخام والمعادن الثمينة، والمجوهرات والإكسسوارات، والألماس والأحجار الكريمة، والساعات والتجارة المرتبطة بها.'],
    'Our brand approach is simple: clear communication, disciplined documentation and long-term counterparty relationships.': ['Notre approche est simple : une communication claire, une documentation rigoureuse et des relations durables avec nos contreparties.', 'نهجنا بسيط: تواصل واضح، وتوثيق منضبط، وعلاقات طويلة الأمد مع الأطراف المقابلة.'],
    'Company at a glance': ['La société en un coup d’œil', 'لمحة عن الشركة'],
    'Core corporate details presented for quick verification and professional enquiries.': ['Les informations essentielles de la société, pour une vérification rapide et des demandes professionnelles.', 'أهم بيانات الشركة لتسهيل التحقق السريع والاستفسارات المهنية.'],
    'Legal Name': ['Raison sociale', 'الاسم القانوني'],
    'Legal Type': ['Forme juridique', 'الشكل القانوني'],
    'Limited Liability Company (L.L.C)': ['Société à responsabilité limitée (L.L.C)', 'شركة ذات مسؤولية محدودة (ذ.م.م)'],
    'Register No.': ['N° d’enregistrement', 'رقم السجل'],
    'License Status': ['Statut de la licence', 'حالة الرخصة'],
    'Valid through 30/08/2027': ['Valide jusqu’au 30/08/2027', 'سارية حتى 30/08/2027'],
    // ---- trading
    'Our Capabilities': ['Nos activités', 'قدراتنا'],
    'Licensed trading categories': ['Catégories de négoce agréées', 'فئات التداول المرخصة'],
    'What Venus Bullion is officially licensed to trade — presented clearly, with verified products, markets and service capabilities added as the business grows.': ['Ce que Venus Bullion est officiellement autorisée à négocier, présenté clairement, avec des produits, marchés et services vérifiés ajoutés à mesure que l’activité se développe.', 'ما يحق لـ Venus Bullion تداوله رسميًا، معروضًا بوضوح، مع إضافة المنتجات والأسواق والخدمات الموثقة مع نمو الأعمال.'],
    '01 / PRECIOUS METALS': ['01 / MÉTAUX PRÉCIEUX', '01 / المعادن الثمينة'],
    'Raw Gold & Precious Metals Trading': ['Négoce d’or brut et de métaux précieux', 'تداول الذهب الخام والمعادن الثمينة'],
    'Commercial trading of raw gold and precious metals, with transaction terms, documentation and counterparties handled according to applicable requirements.': ['Négoce commercial d’or brut et de métaux précieux, avec conditions de transaction, documentation et contreparties traitées conformément aux exigences applicables.', 'تداول تجاري للذهب الخام والمعادن الثمينة، مع التعامل مع شروط الصفقات والمستندات والأطراف المقابلة وفق المتطلبات المعمول بها.'],
    'Primary business category': ['Activité principale', 'النشاط الرئيسي'],
    '02 / JEWELLERY': ['02 / BIJOUX', '02 / المجوهرات'],
    'Gold & Silver Jewellery Accessories': ['Bijoux et accessoires en or et argent', 'مجوهرات وإكسسوارات الذهب والفضة'],
    'Trading activity covering jewellery and accessories made from gold and silver for approved commercial requirements.': ['Négoce de bijoux et d’accessoires en or et en argent pour des besoins commerciaux approuvés.', 'نشاط تداول يشمل المجوهرات والإكسسوارات المصنوعة من الذهب والفضة للأغراض التجارية المعتمدة.'],
    'Gold & silver products': ['Produits en or et argent', 'منتجات الذهب والفضة'],
    '03 / PRECIOUS STONES': ['03 / PIERRES PRÉCIEUSES', '03 / الأحجار الكريمة'],
    'Diamonds, Pearls & Precious Stones': ['Diamants, perles et pierres précieuses', 'الألماس واللؤلؤ والأحجار الكريمة'],
    'Trading across diamonds, pearls and precious stones, presented through a premium, verification-led customer experience.': ['Négoce de diamants, de perles et de pierres précieuses, dans une expérience client haut de gamme axée sur la vérification.', 'تداول الألماس واللؤلؤ والأحجار الكريمة ضمن تجربة عملاء راقية قائمة على التحقق.'],
    'High-value goods': ['Biens de grande valeur', 'سلع عالية القيمة'],
    '04 / WATCHES': ['04 / MONTRES', '04 / الساعات'],
    'Watches, Clocks & Spare Parts': ['Montres, horloges et pièces détachées', 'الساعات وقطع الغيار'],
    'Licensed trading of watches, clocks and related spare parts as an additional commercial activity under the company.': ['Négoce agréé de montres, d’horloges et de pièces détachées, en tant qu’activité commerciale complémentaire de la société.', 'تداول مرخص للساعات وقطع الغيار المرتبطة بها كنشاط تجاري إضافي للشركة.'],
    'Licensed activity': ['Activité agréée', 'نشاط مرخص'],
    // ---- process
    'Clear from enquiry to completion.': ['Clair, de la demande à la finalisation.', 'وضوح من الاستفسار حتى الإتمام.'],
    'A disciplined, documented process from first conversation to handover — built for professional, transparent business relationships.': ['Un processus rigoureux et documenté, de la première conversation à la remise, conçu pour des relations d’affaires professionnelles et transparentes.', 'عملية منضبطة وموثقة من أول حوار حتى التسليم، مصممة لعلاقات أعمال مهنية وشفافة.'],
    'Business Enquiry': ['Demande commerciale', 'الاستفسار التجاري'],
    'Understand product, quantity, market, documentation and commercial requirements.': ['Comprendre le produit, la quantité, le marché, la documentation et les exigences commerciales.', 'فهم المنتج والكمية والسوق والمستندات والمتطلبات التجارية.'],
    'Counterparty & Documentation Review': ['Examen de la contrepartie et des documents', 'مراجعة الطرف المقابل والمستندات'],
    'Collect the relevant company and transaction documentation required for the proposed trade.': ['Recueillir les documents de la société et de la transaction nécessaires à l’opération envisagée.', 'جمع مستندات الشركة والصفقة اللازمة للصفقة المقترحة.'],
    'Commercial Terms': ['Conditions commerciales', 'الشروط التجارية'],
    'Confirm product specifications, pricing basis, payment terms and expected timeline.': ['Confirmer les spécifications du produit, la base de prix, les conditions de paiement et le calendrier prévu.', 'تأكيد مواصفات المنتج وأساس التسعير وشروط الدفع والجدول الزمني المتوقع.'],
    'Trade Confirmation': ['Confirmation de la transaction', 'تأكيد الصفقة'],
    'Proceed only after documentation and commercial terms are agreed by the relevant parties.': ['Ne poursuivre qu’une fois la documentation et les conditions commerciales acceptées par les parties concernées.', 'المضي قدمًا فقط بعد اتفاق الأطراف المعنية على المستندات والشروط التجارية.'],
    'Settlement & Handover': ['Règlement et remise', 'التسوية والتسليم'],
    'Complete settlement, documentation and product handover through the agreed channel.': ['Finaliser le règlement, la documentation et la remise du produit par le canal convenu.', 'إتمام التسوية والمستندات وتسليم المنتج عبر القناة المتفق عليها.'],
    // ---- compliance
    'Responsible Business': ['Éthique des affaires', 'أعمال مسؤولة'],
    'Trust starts with documentation.': ['La confiance commence par la documentation.', 'تبدأ الثقة بالتوثيق.'],
    'For precious metals and other high-value goods, credibility is built through clear corporate information, counterparty checks, accurate records and adherence to applicable rules.': ['Pour les métaux précieux et les autres biens de grande valeur, la crédibilité repose sur des informations d’entreprise claires, des contrôles des contreparties, des registres exacts et le respect des règles applicables.', 'في المعادن الثمينة وسائر السلع عالية القيمة، تُبنى المصداقية على معلومات شركة واضحة، وفحص الأطراف المقابلة، وسجلات دقيقة، والالتزام بالقواعد المعمول بها.'],
    'Company identity and license details displayed clearly': ['Identité de la société et détails de la licence clairement affichés', 'عرض هوية الشركة وتفاصيل الرخصة بوضوح'],
    'Counterparty documentation before qualifying transactions': ['Documents de la contrepartie avant toute transaction éligible', 'مستندات الطرف المقابل قبل الصفقات المؤهلة'],
    'Transaction records maintained for commercial traceability': ['Registres des transactions conservés pour la traçabilité commerciale', 'الاحتفاظ بسجلات الصفقات لضمان التتبع التجاري'],
    'Compliance language reviewed before website publication': ['Formulations de conformité relues avant la publication du site', 'مراجعة صياغات الامتثال قبل نشر الموقع'],
    'Professional by design.': ['Professionnel par conception.', 'احترافية في التصميم.'],
    'A factual, verification-led approach. Accreditations, partnerships and live pricing are published only when they can be verified.': ['Une approche factuelle et axée sur la vérification. Accréditations, partenariats et prix en direct ne sont publiés que lorsqu’ils peuvent être vérifiés.', 'نهج واقعي قائم على التحقق. لا تُنشر الاعتمادات والشراكات والأسعار المباشرة إلا عند إمكانية التحقق منها.'],
    // ---- network preview
    'Business Network': ['Réseau d’affaires', 'شبكة الأعمال'],
    'Built for connected precious-metals trade.': ['Conçu pour un négoce de métaux précieux connecté.', 'مصمم لتجارة معادن ثمينة مترابطة.'],
    'Venus Bullion connects verified counterparties across the precious-metals chain from its Dubai base. Named partners are added only once verified.': ['Depuis Dubaï, Venus Bullion relie des contreparties vérifiées tout au long de la chaîne des métaux précieux. Les partenaires nommés ne sont ajoutés qu’une fois vérifiés.', 'تربط Venus Bullion من مقرها في دبي أطرافًا مقابلة موثقة عبر سلسلة المعادن الثمينة. ولا تُضاف أسماء الشركاء إلا بعد التحقق منهم.'],
    'Suppliers': ['Fournisseurs', 'الموردون'],
    'Verified commercial counterparties': ['Contreparties commerciales vérifiées', 'أطراف تجارية موثوقة'],
    'Buyers': ['Acheteurs', 'المشترون'],
    'Qualified trade enquiries': ['Demandes commerciales qualifiées', 'استفسارات تجارية مؤهلة'],
    'Refining': ['Affinage', 'التكرير'],
    'Approved partners, once confirmed': ['Partenaires agréés, une fois confirmés', 'شركاء معتمدون بعد التأكيد'],
    'Logistics': ['Logistique', 'الخدمات اللوجستية'],
    'Approved providers, once confirmed': ['Prestataires agréés, une fois confirmés', 'مزودون معتمدون بعد التأكيد'],
    'Vaulting': ['Coffres-forts', 'التخزين المؤمّن'],
    'Explore Our Network': ['Découvrir notre réseau', 'اكتشف شبكتنا'],
    // ---- CTA + contact
    'Discuss your gold and precious-metals requirements with Venus Bullion.': ['Parlez-nous de vos besoins en or et en métaux précieux avec Venus Bullion.', 'ناقش احتياجاتك من الذهب والمعادن الثمينة مع Venus Bullion.'],
    'Get in Touch': ['Contactez-nous', 'تواصل معنا'],
    'Speak to our team.': ['Parlez à notre équipe.', 'تحدث إلى فريقنا.'],
    'Tell us what you are looking for and we will respond to qualified business enquiries.': ['Dites-nous ce que vous recherchez et nous répondrons aux demandes professionnelles qualifiées.', 'أخبرنا بما تبحث عنه وسنردّ على الاستفسارات التجارية المؤهلة.'],
    'Phone': ['Téléphone', 'الهاتف'],
    'Email': ['E-mail', 'البريد الإلكتروني'],
    'Add official email': ['Ajouter l’e-mail officiel', 'أضف البريد الإلكتروني الرسمي'],
    'Registered office': ['Siège social', 'المقر المسجل'],
    'Add registered office address': ['Ajouter l’adresse du siège social', 'أضف عنوان المقر المسجل'],
    'Name': ['Nom', 'الاسم'],
    'Company': ['Société', 'الشركة'],
    'Phone or email': ['Téléphone ou e-mail', 'الهاتف أو البريد الإلكتروني'],
    'Interest': ['Intérêt', 'الاهتمام'],
    'Raw gold & precious metals': ['Or brut et métaux précieux', 'الذهب الخام والمعادن الثمينة'],
    'Gold & silver jewellery': ['Bijoux or et argent', 'مجوهرات الذهب والفضة'],
    'Diamonds, pearls & stones': ['Diamants, perles et pierres', 'الألماس واللؤلؤ والأحجار'],
    'Watches & clocks': ['Montres et horloges', 'الساعات'],
    'Other': ['Autre', 'أخرى'],
    'Message': ['Message', 'الرسالة'],
    'Send Enquiry': ['Envoyer la demande', 'إرسال الاستفسار'],
    'Submitting opens WhatsApp with your enquiry pre-filled.': ['L’envoi ouvre WhatsApp avec votre demande pré-remplie.', 'سيؤدي الإرسال إلى فتح واتساب مع تعبئة استفسارك مسبقًا.'],
    // ---- footer
    'Venus Bullion Gold Trading L.L.C — professional trading across licensed precious-metals, jewellery, precious-stone and watch categories.': ['Venus Bullion Gold Trading L.L.C — négoce professionnel dans les catégories agréées : métaux précieux, bijoux, pierres précieuses et montres.', 'Venus Bullion Gold Trading L.L.C — تداول احترافي ضمن الفئات المرخصة: المعادن الثمينة والمجوهرات والأحجار الكريمة والساعات.'],
    'About Us': ['À propos de nous', 'عن الشركة'],
    'Explore': ['Explorer', 'استكشف'],
    'Contact': ['Contact', 'اتصال'],
    'Email: add official email': ['E-mail : ajouter l’e-mail officiel', 'البريد الإلكتروني: أضف البريد الرسمي'],
    'Address: add registered office': ['Adresse : ajouter le siège social', 'العنوان: أضف المقر المسجل'],
    'Register No. 2918727 · License expiry 30/08/2027': ['N° d’enregistrement 2918727 · Licence valable jusqu’au 30/08/2027', 'رقم السجل 2918727 · انتهاء الرخصة 30/08/2027'],
    'Call Now': ['Appeler', 'اتصل الآن'],
    'Enquire': ['Demande', 'استفسر'],
    // ---- network page
    'A connected ecosystem of verified suppliers, approved refining partners and secure logistics — built around documentation and trust.': ['Un écosystème connecté de fournisseurs vérifiés, de partenaires d’affinage agréés et de logistique sécurisée, fondé sur la documentation et la confiance.', 'منظومة مترابطة من الموردين الموثقين وشركاء التكرير المعتمدين والخدمات اللوجستية الآمنة، قائمة على التوثيق والثقة.'],
    '01 — Sourcing': ['01 — Approvisionnement', '01 — التوريد'],
    'Global Suppliers': ['Fournisseurs internationaux', 'موردون عالميون'],
    'Venus Bullion works with commercial counterparties who can evidence where their material comes from. Every relationship starts with documentation, not just price.': ['Venus Bullion travaille avec des contreparties commerciales capables de justifier l’origine de leur matière. Chaque relation commence par la documentation, pas seulement par le prix.', 'تتعامل Venus Bullion مع أطراف تجارية قادرة على إثبات مصدر موادها. تبدأ كل علاقة بالتوثيق، لا بالسعر فحسب.'],
    'Source-of-origin documentation requested': ['Justificatifs d’origine exigés', 'طلب مستندات إثبات المصدر'],
    'Responsible-sourcing expectations for every supplier': ['Exigences d’approvisionnement responsable pour chaque fournisseur', 'توقعات التوريد المسؤول لكل مورّد'],
    'Periodic review of counterparties': ['Examen périodique des contreparties', 'مراجعة دورية للأطراف المقابلة'],
    'Multi-market sourcing relationships': ['Relations d’approvisionnement multi-marchés', 'علاقات توريد عبر أسواق متعددة'],
    '02 — Refining': ['02 — Affinage', '02 — التكرير'],
    'Refining Partners': ['Partenaires d’affinage', 'شركاء التكرير'],
    'Material is processed through approved refining partners, with purity and certification confirmed before a trade is completed. Named partners are published once verified.': ['La matière est traitée par des partenaires d’affinage agréés, la pureté et la certification étant confirmées avant la finalisation d’une transaction. Les partenaires nommés sont publiés une fois vérifiés.', 'تُعالَج المواد عبر شركاء تكرير معتمدين، مع تأكيد النقاء والشهادات قبل إتمام الصفقة. وتُنشر أسماء الشركاء بعد التحقق منهم.'],
    'Approved partners, listed once confirmed': ['Partenaires agréés, listés une fois confirmés', 'شركاء معتمدون يُدرجون بعد التأكيد'],
    'Stated purity grades per transaction': ['Titres de pureté indiqués pour chaque transaction', 'درجات النقاء المعلنة لكل صفقة'],
    'Independent assay and certification where required': ['Essai et certification indépendants si nécessaire', 'فحص وشهادات مستقلة عند الحاجة'],
    'Documented handover from refinery': ['Remise documentée depuis la raffinerie', 'تسليم موثق من المصفاة'],
    '03 — Movement': ['03 — Acheminement', '03 — النقل'],
    'Logistics Partners': ['Partenaires logistiques', 'شركاء الخدمات اللوجستية'],
    'Precious goods move through secure, trackable channels. Ground, air and vault-to-vault transfers are arranged with approved providers for each transaction.': ['Les biens précieux circulent par des canaux sécurisés et traçables. Les transferts terrestres, aériens et de coffre à coffre sont organisés avec des prestataires agréés pour chaque transaction.', 'تنتقل السلع الثمينة عبر قنوات آمنة وقابلة للتتبع. وتُرتَّب عمليات النقل البري والجوي ومن خزنة إلى خزنة مع مزودين معتمدين لكل صفقة.'],
    'Secure ground and air transfer': ['Transfert terrestre et aérien sécurisé', 'نقل بري وجوي آمن'],
    'Shipment tracking from dispatch to delivery': ['Suivi des envois, de l’expédition à la livraison', 'تتبع الشحنات من الإرسال حتى التسليم'],
    'Insurance arranged per transaction': ['Assurance organisée pour chaque transaction', 'ترتيب التأمين لكل صفقة'],
    'Full chain-of-custody paperwork': ['Documents complets de chaîne de traçabilité', 'مستندات كاملة لسلسلة العهدة'],
    '04 — Storage': ['04 — Stockage', '04 — التخزين'],
    'Vaulting Partners': ['Partenaires de stockage sécurisé', 'شركاء التخزين المؤمّن'],
    'Where storage is required, Venus Bullion arranges secure vaulting with approved facilities, with clear records of what is held and where.': ['Lorsqu’un stockage est nécessaire, Venus Bullion organise un stockage sécurisé auprès d’installations agréées, avec des registres clairs de ce qui est conservé et où.', 'عند الحاجة إلى التخزين، تنظّم Venus Bullion تخزينًا آمنًا لدى منشآت معتمدة، مع سجلات واضحة لما هو محفوظ ومكانه.'],
    'Secure, approved vaulting facilities': ['Installations de stockage sécurisées et agréées', 'منشآت تخزين آمنة ومعتمدة'],
    'Allocated and unallocated options, where offered': ['Options de stockage alloué et non alloué, selon disponibilité', 'خيارات التخزين المخصص وغير المخصص عند توفرها'],
    'Independent audit and clear records': ['Audit indépendant et registres clairs', 'تدقيق مستقل وسجلات واضحة'],
    'Round-the-clock security monitoring': ['Surveillance de sécurité 24h/24', 'مراقبة أمنية على مدار الساعة'],
    'Our Commitment': ['Notre engagement', 'التزامنا'],
    'Network Standards': ['Normes du réseau', 'معايير الشبكة'],
    'Every partner in the Venus Bullion network is expected to meet the same standards of compliance, reliability and traceability.': ['Chaque partenaire du réseau Venus Bullion doit respecter les mêmes normes de conformité, de fiabilité et de traçabilité.', 'يُتوقع من كل شريك في شبكة Venus Bullion الالتزام بالمعايير نفسها في الامتثال والموثوقية وقابلية التتبع.'],
    'AML / KYC standards applied to counterparties and reviewed regularly.': ['Normes LCB-FT / KYC appliquées aux contreparties et revues régulièrement.', 'تُطبَّق معايير مكافحة غسل الأموال واعرف عميلك على الأطراف المقابلة وتُراجع بانتظام.'],
    'Reliability': ['Fiabilité', 'الموثوقية'],
    'Consistent performance, timely delivery and accurate documentation.': ['Performance constante, livraisons dans les délais et documentation exacte.', 'أداء متسق وتسليم في الوقت المحدد ومستندات دقيقة.'],
    'Traceability': ['Traçabilité', 'قابلية التتبع'],
    'A documented chain of custody from source through to delivery.': ['Une chaîne de traçabilité documentée, de la source à la livraison.', 'سلسلة عهدة موثقة من المصدر حتى التسليم.'],
    'Join Our Network': ['Rejoignez notre réseau', 'انضم إلى شبكتنا'],
    'Suppliers, refiners, logistics providers and institutional buyers are welcome to enquire about working with Venus Bullion.': ['Fournisseurs, affineurs, prestataires logistiques et acheteurs institutionnels sont invités à nous contacter pour travailler avec Venus Bullion.', 'نرحّب باستفسارات الموردين والمصافي ومزودي الخدمات اللوجستية والمشترين المؤسسيين الراغبين في العمل مع Venus Bullion.'],
    'Start Trading With Us': ['Commencez à négocier avec nous', 'ابدأ التداول معنا'],
    'Tell us how you would like to work with Venus Bullion and we will respond to qualified business enquiries.': ['Dites-nous comment vous souhaitez travailler avec Venus Bullion et nous répondrons aux demandes professionnelles qualifiées.', 'أخبرنا كيف ترغب في العمل مع Venus Bullion وسنردّ على الاستفسارات التجارية المؤهلة.'],
    'I am a…': ['Je suis…', 'أنا…'],
    'Supplier': ['Fournisseur', 'مورّد'],
    'Refiner': ['Affineur', 'مصفاة'],
    'Logistics / vaulting provider': ['Prestataire logistique / stockage', 'مزود خدمات لوجستية / تخزين'],
    'Institutional buyer': ['Acheteur institutionnel', 'مشترٍ مؤسسي'],
    // ---- attributes (aria-label / placeholder)
    'Venus Bullion — home': ['Venus Bullion — accueil', 'Venus Bullion — الرئيسية'],
    'Menu': ['Menu', 'القائمة'],
    'Primary': ['Principale', 'الرئيسية'],
    'Language': ['Langue', 'اللغة'],
    'Network diagram: Dubai hub connected to suppliers, buyers, refining, logistics and vaulting': ['Schéma du réseau : Dubaï relié aux fournisseurs, acheteurs, affinage, logistique et stockage', 'مخطط الشبكة: دبي مرتبطة بالموردين والمشترين والتكرير والخدمات اللوجستية والتخزين'],
    'Product, quantity, market and timeline…': ['Produit, quantité, marché et calendrier…', 'المنتج والكمية والسوق والجدول الزمني…'],
    'Please specify': ['Veuillez préciser', 'يرجى التحديد'],
    'Tell us what you have in mind…': ['Dites-nous ce que vous avez en tête…', 'أخبرنا بما تفكر فيه…'],
    'Please tell us what you are looking for.': ['Merci d’indiquer ce que vous recherchez.', 'يرجى إخبارنا بما تبحث عنه.'],
    'Address': ['Adresse', 'العنوان'],
    'Website': ['Site web', 'الموقع الإلكتروني'],
    'No. 203, Al Ghanim Building, Al Dhagaya Gold Souq, Deira, Dubai, U.A.E.': ['N° 203, Al Ghanim Building, Souk de l’or d’Al Dhagaya, Deira, Dubaï, ÉAU', 'رقم 203، مبنى الغانم، سوق الدغاية للذهب، ديرة، دبي، الإمارات العربية المتحدة'],
    'Gold & Precious Metals Trading in Dubai | Venus Bullion Gold Trading L.L.C': ['Négoce d’or et de métaux précieux à Dubaï | Venus Bullion Gold Trading L.L.C', 'تداول الذهب والمعادن الثمينة في دبي | Venus Bullion Gold Trading L.L.C'],
    'Venus Bullion Gold Trading L.L.C — licensed gold and precious metals trading company at Al Dhagaya Gold Souq, Deira, Dubai. Raw gold, gold & silver jewellery, diamonds, pearls, precious stones, watches and clocks.': ['Venus Bullion Gold Trading L.L.C — société agréée de négoce d’or et de métaux précieux au souk de l’or d’Al Dhagaya, Deira, Dubaï. Or brut, bijoux or et argent, diamants, perles, pierres précieuses, montres et horloges.', 'Venus Bullion Gold Trading L.L.C — شركة مرخصة لتداول الذهب والمعادن الثمينة في سوق الدغاية للذهب، ديرة، دبي. ذهب خام ومجوهرات الذهب والفضة والألماس واللؤلؤ والأحجار الكريمة والساعات.'],
    'Our Network: Gold Suppliers, Refining, Logistics & Vaulting | Venus Bullion Dubai': ['Notre réseau : fournisseurs d’or, affinage, logistique et stockage | Venus Bullion Dubaï', 'شبكتنا: موردو الذهب والتكرير والخدمات اللوجستية والتخزين | Venus Bullion دبي'],
    'The Venus Bullion network in Dubai: verified gold suppliers, approved refining, secure logistics and vaulting partners, held to clear AML / KYC, reliability and traceability standards.': ['Le réseau Venus Bullion à Dubaï : fournisseurs d’or vérifiés, partenaires d’affinage, de logistique sécurisée et de stockage agréés, soumis à des normes LCB-FT / KYC, de fiabilité et de traçabilité.', 'شبكة Venus Bullion في دبي: موردو ذهب موثقون وشركاء تكرير ولوجستيات آمنة وتخزين معتمدون، وفق معايير مكافحة غسل الأموال واعرف عميلك والموثوقية وقابلية التتبع.'],
    'Skip to content': ['Aller au contenu', 'تخطي إلى المحتوى'],
    'Privacy Policy': ['Politique de confidentialité', 'سياسة الخصوصية'],
    'Your details are used only to respond to your enquiry.': ['Vos données ne servent qu’à répondre à votre demande.', 'تُستخدم بياناتك فقط للرد على استفسارك.'],
    'Thank you — your enquiry has been sent. We will respond shortly.': ['Merci — votre demande a bien été envoyée. Nous vous répondrons rapidement.', 'شكرًا لك — تم إرسال استفسارك. سنرد قريبًا.'],
    'Could not send online. Opening WhatsApp instead…': ['Envoi en ligne impossible. Ouverture de WhatsApp…', 'تعذّر الإرسال عبر الإنترنت. جارٍ فتح واتساب…'],
    'Drag to explore': ['Faites glisser pour explorer', 'اسحب للاستكشاف'],
    'Previous': ['Précédent', 'السابق'],
    'Next': ['Suivant', 'التالي'],
    'Chat on WhatsApp': ['Discuter sur WhatsApp', 'تحدث عبر واتساب'],
    // ---- page <title> / meta description
  };

  const LANGS = ['en', 'fr', 'ar'], IDX = { fr: 0, ar: 1 };
  const root = document.documentElement;
  let lang = 'en';
  try {
    const q = new URLSearchParams(location.search).get('lang');
    if (q) localStorage.setItem('vb-lang', q);
    lang = q || localStorage.getItem('vb-lang') || 'en';
  } catch (e) {}
  if (!LANGS.includes(lang)) lang = 'en';
  root.lang = lang; root.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const norm = s => s.replace(/\s+/g, ' ').trim();
  const t = s => (lang !== 'en' && T[s] ? T[s][IDX[lang]] : s);
  window.VB = { lang, t, set(l) {
    try { localStorage.setItem('vb-lang', l); localStorage.setItem('vb-intro-seen', '1'); } catch (e) {}
    const u = new URL(location.href); u.searchParams.delete('lang'); u.hash = location.hash;
    location.replace(u.href); if (u.href === location.href) location.reload();
  } };

  // language switcher (inserted before the Contact button)
  const menu = document.getElementById('menu');
  if (menu) {
    const box = document.createElement('div'); box.className = 'lang'; box.setAttribute('role', 'group'); box.setAttribute('aria-label', 'Language');
    [['en', 'EN', 'English'], ['fr', 'FR', 'Français'], ['ar', 'عر', 'العربية']].forEach(([c, label, name]) => {
      const b = document.createElement('button'); b.type = 'button'; b.textContent = label; b.title = name; b.lang = c; b.dataset.lang = c;
      b.setAttribute('aria-pressed', c === lang); if (c === lang) b.classList.add('on');
      b.addEventListener('click', () => { if (c !== lang) window.VB.set(c); });
      box.appendChild(b);
    });
    menu.insertBefore(box, menu.querySelector('.btn'));
  }

  if (lang === 'en') return;

  // translate text nodes
  const skip = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT']);
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: n => skip.has(n.parentNode.nodeName) || n.parentNode.closest('.word, .lang, .bg-word, .ingot') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
  });
  const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
  nodes.forEach(n => { const k = norm(n.nodeValue); if (T[k]) n.nodeValue = n.nodeValue.replace(n.nodeValue.trim(), T[k][IDX[lang]]); });
  // attributes
  document.querySelectorAll('[aria-label],[placeholder]').forEach(el => ['aria-label', 'placeholder'].forEach(a => {
    const v = el.getAttribute(a); if (v && T[v]) el.setAttribute(a, T[v][IDX[lang]]);
  }));
  // title + meta description + og:title
  document.title = t(norm(document.title));
  document.querySelectorAll('meta[name="description"],meta[property="og:title"],meta[property="og:description"],meta[name="twitter:title"],meta[name="twitter:description"]').forEach(m => { m.content = t(m.content); });
  // Form: keep the select values readable for staff (WhatsApp message stays in the visitor's language)
})();
