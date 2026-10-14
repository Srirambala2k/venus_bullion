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
    'How We Work': ['Méthode', 'كيف نعمل'],
    'Our Network': ['Réseau', 'شبكتنا'],
    'Contact Us': ['Contact', 'تواصل معنا'],
    // ---- hero
    'Secure Your Future with the Ultimate Luxury Asset.': ['Sécurisez votre avenir avec l’actif de luxe par excellence.', 'أمّن مستقبلك مع أرقى أصول الفخامة.'],
    'Venus Bullion Gold Trading L.L.C · United Arab Emirates': ['Venus Bullion Gold Trading L.L.C · Émirats arabes unis', 'Venus Bullion Gold Trading L.L.C · الإمارات العربية المتحدة'],
    // ---- credentials
    'UAE': ['ÉAU', 'الإمارات'],
    // ---- ticker
    'Raw Gold': ['Or brut', 'الذهب الخام'],
    'Precious Metals': ['Métaux précieux', 'المعادن الثمينة'],
    'Gold & Silver Jewellery': ['Bijoux or & argent', 'مجوهرات الذهب والفضة'],
    'Diamonds & Pearls': ['Diamants & perles', 'الألماس واللؤلؤ'],
    'Watches & Clocks': ['Montres & horloges', 'الساعات'],
    'Trusted Trade': ['Négoce de confiance', 'تجارة موثوقة'],
    // ---- about
    'Who We Are': ['Qui nous sommes', 'من نحن'],
    // ---- trading
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
    'Our Commitment Goes Beyond Gold.': ['Notre engagement va au-delà de l’or.', 'التزامنا يتجاوز الذهب.'],
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
    'About Us': ['À propos de nous', 'عن الشركة'],
    'Explore': ['Explorer', 'استكشف'],
    'Contact': ['Contact', 'اتصال'],
    'Email: add official email': ['E-mail : ajouter l’e-mail officiel', 'البريد الإلكتروني: أضف البريد الرسمي'],
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
    'Network Standards': ['Normes du réseau', 'معايير الشبكة'],
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
    'Our Network: Gold Suppliers, Refining, Logistics & Vaulting | Venus Bullion Dubai': ['Notre réseau : fournisseurs d’or, affinage, logistique et stockage | Venus Bullion Dubaï', 'شبكتنا: موردو الذهب والتكرير والخدمات اللوجستية والتخزين | Venus Bullion دبي'],
    'Skip to content': ['Aller au contenu', 'تخطي إلى المحتوى'],
    'Privacy Policy': ['Politique de confidentialité', 'سياسة الخصوصية'],
    'Your details are used only to respond to your enquiry.': ['Vos données ne servent qu’à répondre à votre demande.', 'تُستخدم بياناتك فقط للرد على استفسارك.'],
    'Thank you — your enquiry has been sent. We will respond shortly.': ['Merci — votre demande a bien été envoyée. Nous vous répondrons rapidement.', 'شكرًا لك — تم إرسال استفسارك. سنرد قريبًا.'],
    'Could not send online. Opening WhatsApp instead…': ['Envoi en ligne impossible. Ouverture de WhatsApp…', 'تعذّر الإرسال عبر الإنترنت. جارٍ فتح واتساب…'],
    'Trading in watches, clocks and related spare parts as an additional line of business.': ['Négoce de montres, d’horloges et de pièces détachées, comme activité complémentaire.', 'تداول الساعات وقطع الغيار المرتبطة بها كخط عمل إضافي.'],
    'Our Products': ['Nos produits', 'منتجاتنا'],
    'Explore our gold range.': ['Découvrez notre gamme d’or.', 'اكتشف مجموعتنا من الذهب.'],
    'Coins, minted bars, casted bars and pendants in fine gold.': ['Pièces, lingots frappés, lingots coulés et pendentifs en or fin.', 'عملات وسبائك مسكوكة وسبائك مصبوبة وقلائد من الذهب الخالص.'],
    'Gold Coins': ['Pièces d’or', 'عملات ذهبية'],
    'Minted Bars': ['Lingots frappés', 'سبائك مسكوكة'],
    'Casted Bars': ['Lingots coulés', 'سبائك مصبوبة'],
    'Gold Pendants': ['Pendentifs en or', 'قلائد ذهبية'],
    'Minted coins in fine gold.': ['Pièces frappées en or fin.', 'عملات مسكوكة من الذهب الخالص.'],
    'Sealed, numbered minted bars.': ['Lingots frappés, scellés et numérotés.', 'سبائك مسكوكة مختومة ومرقمة.'],
    'Small to large sizes.': ['Du petit au grand format.', 'بأحجام صغيرة وكبيرة.'],
    'Detailed gold pendants.': ['Pendentifs en or finement ciselés.', 'قلائد ذهبية دقيقة النقش.'],
    'Enquire About Products': ['Demander des informations', 'استفسر عن المنتجات'],
    'Venus Bullion gold coin with certificate': ['Pièce d’or Venus Bullion avec certificat', 'عملة ذهبية من Venus Bullion مع شهادة'],
    'Venus Bullion minted gold bars in sealed packs': ['Lingots d’or frappés Venus Bullion sous blister scellé', 'سبائك ذهب مسكوكة من Venus Bullion في عبوات مختومة'],
    'Venus Bullion casted gold bars': ['Lingots d’or coulés Venus Bullion', 'سبائك ذهب مصبوبة من Venus Bullion'],
    'Gold rose pendant': ['Pendentif en or orné d’une rose', 'قلادة ذهبية بنقش وردة'],
    'Why Venus': ['Pourquoi Venus', 'لماذا فينوس'],
    'Trust is built step by step.': ['La confiance se construit pas à pas.', 'تُبنى الثقة خطوة بخطوة.'],
    'Gold is a business of relationships. We keep every conversation clear, every deal carefully handled and every partner informed.': ['L’or est un métier de relations. Chaque échange est clair, chaque transaction soigneusement traitée, chaque partenaire informé.', 'الذهب تجارة علاقات. نحافظ على وضوح كل حوار، وعناية كل صفقة، وإطلاع كل شريك.'],
    'Clear communication from first enquiry to handover': ['Communication claire, de la première demande à la remise', 'تواصل واضح من أول استفسار حتى التسليم'],
    'Careful handling of every transaction': ['Traitement soigné de chaque transaction', 'عناية بكل صفقة'],
    'Long-term relationships with trading partners': ['Relations durables avec nos partenaires commerciaux', 'علاقات طويلة الأمد مع الشركاء التجاريين'],
    'Personal service from our team in Deira': ['Un service personnalisé de notre équipe à Deira', 'خدمة شخصية من فريقنا في ديرة'],
    'Clear, careful and personal — from the first conversation to the final handover.': ['Clair, soigné et personnalisé — de la première conversation à la remise finale.', 'واضح ودقيق وشخصي — من أول حوار حتى التسليم النهائي.'],
    'Venus Bullion Gold Trading L.L.C — professional trading in gold, precious metals, jewellery, precious stones and watches.': ['Venus Bullion Gold Trading L.L.C — négoce professionnel d’or, de métaux précieux, de bijoux, de pierres précieuses et de montres.', 'Venus Bullion Gold Trading L.L.C — تداول احترافي في الذهب والمعادن الثمينة والمجوهرات والأحجار الكريمة والساعات.'],
    'Integrity': ['Intégrité', 'النزاهة'],
    'Honest dealing with every partner, reviewed regularly.': ['Des relations honnêtes avec chaque partenaire, revues régulièrement.', 'تعامل نزيه مع كل شريك، يُراجَع بانتظام.'],
    'Every partner in the Venus Bullion network is expected to meet the same standards of integrity, reliability and traceability.': ['Chaque partenaire du réseau Venus Bullion doit respecter les mêmes normes d’intégrité, de fiabilité et de traçabilité.', 'يُتوقع من كل شريك في شبكة Venus Bullion الالتزام بالمعايير نفسها في النزاهة والموثوقية وقابلية التتبع.'],
    'Venus Bullion Gold Trading L.L.C — gold and precious metals trading company at Al Dhagaya Gold Souq, Deira, Dubai. Raw gold, gold & silver jewellery, diamonds, pearls, precious stones, watches and clocks.': ['Venus Bullion Gold Trading L.L.C — société de négoce d’or et de métaux précieux au souk de l’or d’Al Dhagaya, Deira, Dubaï. Or brut, bijoux or et argent, diamants, perles, pierres précieuses, montres et horloges.', 'Venus Bullion Gold Trading L.L.C — شركة لتداول الذهب والمعادن الثمينة في سوق الدغاية للذهب، ديرة، دبي. ذهب خام ومجوهرات الذهب والفضة والألماس واللؤلؤ والأحجار الكريمة والساعات.'],
    'The Venus Bullion network in Dubai: verified gold suppliers, approved refining, secure logistics and vaulting partners, held to clear integrity, reliability and traceability standards.': ['Le réseau Venus Bullion à Dubaï : fournisseurs d’or vérifiés, partenaires d’affinage, de logistique sécurisée et de stockage agréés, soumis à des normes claires d’intégrité, de fiabilité et de traçabilité.', 'شبكة Venus Bullion في دبي: موردو ذهب موثقون وشركاء تكرير ولوجستيات آمنة وتخزين معتمدون، وفق معايير واضحة للنزاهة والموثوقية وقابلية التتبع.'],
    'Enquiry': ['Demande', 'استفسار'],
    'Our Collections': ['Nos collections', 'مجموعاتنا'],
    'Timeless Luxury. Lasting Value.': ['Luxe intemporel. Valeur durable.', 'فخامة خالدة. قيمة دائمة.'],
    'Discover a world of elegance with Venus Bullion, bringing together fine gold, exclusive timepieces, and exquisite jewellery.': ['Découvrez un monde d’élégance avec Venus Bullion, qui réunit or fin, montres d’exception et bijoux raffinés.', 'اكتشف عالمًا من الأناقة مع Venus Bullion، حيث يجتمع الذهب الخالص والساعات الحصرية والمجوهرات الراقية.'],
    'Our collections': ['Nos collections', 'مجموعاتنا'],
    'Enduring value': ['Valeur durable', 'قيمة دائمة'],
    'Precision': ['Précision', 'الدقة'],
    'Elegance': ['Élégance', 'الأناقة'],
    '01 / GOLD': ['01 / OR', '01 / الذهب'],
    '02 / WATCHES': ['02 / MONTRES', '02 / الساعات'],
    '03 / JEWELLERY': ['03 / BIJOUX', '03 / المجوهرات'],
    'Gold Bullion': ['Lingots d’or', 'سبائك الذهب'],
    'Explore premium gold bars and bullion, offering enduring value and timeless appeal. A trusted choice for those who appreciate the worth of gold.': ['Découvrez des lingots et barres d’or de première qualité, d’une valeur durable et d’un attrait intemporel. Un choix de confiance pour ceux qui apprécient la valeur de l’or.', 'اكتشف سبائك الذهب الفاخرة التي تجمع بين القيمة الدائمة والجاذبية الخالدة. خيار موثوق لمن يقدّرون قيمة الذهب.'],
    'Exclusive & Luxury Watches': ['Montres exclusives et de luxe', 'ساعات حصرية وفاخرة'],
    'Discover an exclusive collection of luxury timepieces that bring together precision, craftsmanship, and timeless sophistication.': ['Découvrez une collection exclusive de montres de luxe qui allient précision, savoir-faire et sophistication intemporelle.', 'اكتشف مجموعة حصرية من الساعات الفاخرة التي تجمع بين الدقة والحرفية والرقي الخالد.'],
    'Fine Jewellery': ['Haute joaillerie', 'مجوهرات راقية'],
    'Explore beautifully crafted jewellery designed to celebrate elegance, individuality, and life\'s most precious moments.': ['Explorez des bijoux magnifiquement façonnés, conçus pour célébrer l’élégance, l’individualité et les moments les plus précieux de la vie.', 'استكشف مجوهرات مصنوعة بإتقان لتحتفي بالأناقة والتفرّد وأثمن لحظات الحياة.'],
    'Our Values': ['Nos valeurs', 'قيمنا'],
    'What we stand for.': ['Ce que nous défendons.', 'ما نؤمن به.'],
    'What we stand for in every conversation, every collection and every relationship at Venus Bullion.': ['Ce que nous défendons dans chaque échange, chaque collection et chaque relation chez Venus Bullion.', 'ما نؤمن به في كل حوار وكل مجموعة وكل علاقة في Venus Bullion.'],
    'Authenticity': ['Authenticité', 'الأصالة'],
    'Innovation': ['Innovation', 'الابتكار'],
    'Quality and Trust': ['Qualité et confiance', 'الجودة والثقة'],
    'Global Engagement': ['Engagement mondial', 'التواصل العالمي'],
    'We stand behind what we say. The gold, watches and jewellery we present are exactly what you can expect to receive.': ['Nous assumons nos paroles. L’or, les montres et les bijoux que nous présentons correspondent exactement à ce que vous recevrez.', 'نحن نلتزم بما نقول. الذهب والساعات والمجوهرات التي نقدمها هي بالضبط ما يمكنك توقع استلامه.'],
    'We keep finding better ways to serve our clients, from how we present our collections to how quickly we respond.': ['Nous cherchons sans cesse de meilleures façons de servir nos clients, de la présentation de nos collections à la rapidité de nos réponses.', 'نواصل البحث عن طرق أفضل لخدمة عملائنا، من طريقة عرض مجموعاتنا إلى سرعة ردنا.'],
    'Quality and trust are never optional. Each piece is chosen with care and each relationship is built to last.': ['La qualité et la confiance ne sont jamais facultatives. Chaque pièce est choisie avec soin et chaque relation est bâtie pour durer.', 'الجودة والثقة ليستا خيارًا. كل قطعة تُختار بعناية وكل علاقة تُبنى لتدوم.'],
    'From the Gold Souq in Deira we welcome clients and partners from around the world, while staying close to our community.': ['Depuis le souk de l’or de Deira, nous accueillons clients et partenaires du monde entier, tout en restant proches de notre communauté.', 'من سوق الذهب في ديرة نرحّب بالعملاء والشركاء من أنحاء العالم، مع بقائنا قريبين من مجتمعنا.'],
    'Our Global Network': ['Notre réseau mondial', 'شبكتنا العالمية'],
    'Connecting Value Across Borders.': ['Relier la valeur au-delà des frontières.', 'نربط القيمة عبر الحدود.'],
    'At Venus Bullion, we bring together trusted relationships across the precious metals industry. From sourcing and refining to secure logistics and trading, our network is built to support seamless and reliable transactions.': ['Chez Venus Bullion, nous réunissons des relations de confiance dans toute l’industrie des métaux précieux. De l’approvisionnement à l’affinage, de la logistique sécurisée au négoce, notre réseau est conçu pour des transactions fluides et fiables.', 'في Venus Bullion نجمع علاقات موثوقة عبر قطاع المعادن الثمينة. من التوريد والتكرير إلى الخدمات اللوجستية الآمنة والتداول، شبكتنا مصممة لدعم صفقات سلسة وموثوقة.'],
    'Precious Metals Sourcing': ['Approvisionnement en métaux précieux', 'توريد المعادن الثمينة'],
    'Connecting with trusted suppliers to support quality and consistency.': ['Des fournisseurs de confiance pour garantir qualité et constance.', 'التواصل مع موردين موثوقين لدعم الجودة والاستمرارية.'],
    'Global Trading': ['Négoce mondial', 'التداول العالمي'],
    'Building valuable relationships with buyers and trading partners worldwide.': ['Des relations durables avec des acheteurs et partenaires commerciaux dans le monde entier.', 'بناء علاقات قيّمة مع المشترين والشركاء التجاريين حول العالم.'],
    'Refining & Quality': ['Affinage et qualité', 'التكرير والجودة'],
    'Working towards high standards of quality, purity, and reliability.': ['Viser des normes élevées de qualité, de pureté et de fiabilité.', 'العمل نحو معايير عالية من الجودة والنقاء والموثوقية.'],
    'Secure Logistics': ['Logistique sécurisée', 'خدمات لوجستية آمنة'],
    'Supporting the safe and efficient movement of precious metals across markets.': ['Favoriser la circulation sûre et efficace des métaux précieux entre les marchés.', 'دعم النقل الآمن والفعّال للمعادن الثمينة عبر الأسواق.'],
    'Network diagram: Dubai hub connected to sourcing, trading, refining and logistics': ['Schéma du réseau : Dubaï relié à l’approvisionnement, au négoce, à l’affinage et à la logistique', 'مخطط الشبكة: دبي مرتبطة بالتوريد والتداول والتكرير والخدمات اللوجستية'],
    'Sourcing': ['Approvisionnement', 'التوريد'],
    'Trading': ['Négoce', 'التداول'],
    'Our Commitment': ['Notre engagement', 'التزامنا'],
    'Trust Is Our Most Valuable Asset.': ['La confiance est notre actif le plus précieux.', 'الثقة أثمن أصولنا.'],
    'At Venus Bullion, trust is the foundation of every relationship. We believe in conducting business with integrity, transparency, and responsibility, ensuring confidence at every stage of the precious metals trading journey.': ['Chez Venus Bullion, la confiance est le fondement de toute relation. Nous menons nos affaires avec intégrité, transparence et responsabilité, pour inspirer confiance à chaque étape du parcours de négoce des métaux précieux.', 'في Venus Bullion الثقة أساس كل علاقة. نؤمن بممارسة الأعمال بنزاهة وشفافية ومسؤولية، لضمان الثقة في كل مرحلة من رحلة تداول المعادن الثمينة.'],
    'Transparency in Every Transaction': ['Transparence dans chaque transaction', 'الشفافية في كل صفقة'],
    'Commitment to Quality & Authenticity': ['Engagement envers la qualité et l’authenticité', 'الالتزام بالجودة والأصالة'],
    'Responsible & Ethical Business Practices': ['Pratiques commerciales responsables et éthiques', 'ممارسات أعمال مسؤولة وأخلاقية'],
    'Building Long-Term Trusted Relationships': ['Bâtir des relations de confiance durables', 'بناء علاقات موثوقة طويلة الأمد'],
    'A trusted name in precious metals and luxury trading.': ['Un nom de confiance dans les métaux précieux et le négoce de luxe.', 'اسم موثوق في المعادن الثمينة وتجارة الفخامة.'],
    'Venus Bullion brings together the worlds of gold bullion, precious metals, luxury watches, and fine jewellery through a brand built on trust, quality, and long-term value.': ['Venus Bullion réunit les univers de l’or en lingots, des métaux précieux, des montres de luxe et de la haute joaillerie au sein d’une marque fondée sur la confiance, la qualité et la valeur durable.', 'تجمع Venus Bullion عوالم سبائك الذهب والمعادن الثمينة والساعات الفاخرة والمجوهرات الراقية في علامة قائمة على الثقة والجودة والقيمة طويلة الأمد.'],
    'With a focus on professionalism and refined service, we are committed to creating a seamless experience for clients who value authenticity, discretion, and confidence in every interaction.': ['Axés sur le professionnalisme et un service raffiné, nous nous engageons à offrir une expérience fluide aux clients qui apprécient l’authenticité, la discrétion et la confiance dans chaque échange.', 'مع التركيز على الاحترافية والخدمة الراقية، نلتزم بتقديم تجربة سلسة للعملاء الذين يقدّرون الأصالة والتكتم والثقة في كل تعامل.'],
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
