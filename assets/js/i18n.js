/* HH Legal demo — i18n
   Hand-rolled dictionary + data-i18n attribute switcher.
   Languages: en (default), es (Spanish), ht (Haitian Creole).
   Brief recommended HT over FR for the Tampa Bay market.
*/
(function () {
  const LANGS = ['en', 'es', 'ht'];

  const DICT = {
    en: {
      meta: { langName: 'English' },
      util: { phone: '(727) 896-7777', cta: 'Free Consultation' },
      nav: {
        home: 'Home',
        about: 'About',
        services: 'What We Do',
        blog: 'Blog',
        contact: 'Contact',
        services_dropdown: {
          auto: 'Automotive Claims',
          fire: 'Fire & Smoke Damage',
          storm: 'Hurricane & Storm',
          roof: 'Roof & Hail Damage',
          sinkhole: 'Sinkhole Damage',
          water: 'Water Damage'
        }
      },
      toolbar: {
        lang: 'Language',
        theme: 'Theme',
        size: 'Text Size',
        themeLight: 'Light theme',
        themeSystem: 'System theme',
        themeDark: 'Dark theme',
        sizeNormal: 'Normal text size',
        sizeLarge: 'Larger text size',
        sizeXL: 'Largest text size'
      },
      home: {
        hero: {
          eyebrow: 'Tampa Bay Insurance Litigation',
          title: 'When the insurance company says no, we say not so fast.',
          lead: 'Haahr Law Group represents Florida policyholders against insurance carriers on property, fire, hurricane, roof, sinkhole and water-damage claims. Over fifteen years on your side of the table.',
          ctaPrimary: 'Free Consultation',
          ctaSecondary: 'About the Firm'
        },
        bandTitle: 'Get a no-cost case review today',
        bandCTA: "Let's Talk",
        intro: {
          eyebrow: 'Insurance Disputes & Litigation',
          title: 'A boutique firm built around one principle: the policyholder.',
          p1: 'We litigate first-party property claims in state and federal courts across Florida — from underpaid auto repairs and denied hurricane claims to total-loss fire investigations and complex sinkhole disputes.',
          p2: 'Insurers know the statutes. So do we. We invoke Florida’s Valued Policy Law, the building-code-driven full-replacement provisions, and the §627.706 sinkhole framework when the facts support them — and we never charge a fee unless we recover.',
          cta: 'Learn More'
        },
        services: {
          eyebrow: 'What We Do',
          title: 'Six core practice areas — built around Florida’s most contested claim types'
        },
        about: {
          title: 'About Haahr Law Group',
          p1: 'Founded in 2007 by Hans Peter Haahr, our St. Petersburg firm focuses on representing Tampa Bay homeowners and small businesses against insurance carriers that delay, deny or underpay legitimate claims.',
          p2: 'Boutique by design. Every case is handled directly by the attorney — not pushed to a junior associate or a call-center settlement mill.',
          tagline: "We're on your side.",
          ctaTeam: 'Meet The Team'
        },
        team: {
          title: 'Meet the team',
          hans: { name: 'Hans Peter Haahr', role: 'Attorney · Founder' },
          staci: { name: 'Staci Haahr', role: 'Business Manager' },
          lina: { name: 'Lina Rodriguez', role: 'Paralegal' }
        },
        blog: {
          title: 'New from the HLG blog',
          cta: 'Read the blog'
        },
        stats: {
          years: 'Years in practice',
          areas: 'Practice areas',
          courts: 'Courts admitted',
          fee: 'No-fee consultation'
        }
      },
      about: {
        title: 'About Us',
        crumbHome: 'Home',
        firmTitle: 'About the firm',
        firmP1: 'Haahr Law Group, PL is a St. Petersburg-based litigation firm founded in 2007 by Hans Peter Haahr to give Tampa Bay homeowners a serious litigator on their side of the property-claim table.',
        firmP2: 'We are admitted to practice before the Florida and Tennessee bars, the U.S. District Courts for the Middle and Southern Districts of Florida, and the U.S. Court of Federal Claims in Washington, D.C.',
        firmP3: 'Our boutique structure is intentional. Clients work directly with their attorney from intake through resolution. There is no shuffle to associates, no junior gatekeepers, no call-center triage.',
        firmP4: 'We accept cases across Florida and travel routinely to Pinellas, Hillsborough, Pasco, Manatee, Sarasota, Polk and Hernando counties.',
        teamTitle: 'Meet our team',
        hansBio1: 'Hans Peter Haahr earned his JD cum laude from the University of Miami School of Law and his BA in Political Science magna cum laude from the University of South Alabama. He began his legal career at Mase & Gasenheimer in Miami before moving to Cole, Scott & Kissane in Tampa, where he served as Senior Litigation Associate.',
        hansBio2: 'In 2007 he founded Haahr Law Group to focus exclusively on representing policyholders. He carries a Martindale-Hubbell BV peer rating and is a member of the Florida Bar (#568457) and the St. Petersburg Bar Real Property Section.',
        hansBio3: 'Born in Denmark and raised in the United States, Hans speaks English, Danish, Swedish and Norwegian and is an active member of the Danish American Chamber of Commerce.',
        staciBio: 'Staci Haahr holds a BBA from Marymount University and an MBA from Clemson. She has run firm operations and client relations since 2007, and assists small-business clients with incorporation, registered-agent setup and entity-maintenance compliance.',
        linaBio: 'Lina Rodriguez holds a degree from St. Petersburg College and is a native Spanish speaker. She prepares contracts, deeds, leases, and case and hearing materials, and serves as the firm’s primary point of contact for Spanish-speaking clients.'
      },
      services: {
        title: 'What We Do',
        intro: 'We litigate the six insurance-claim categories most commonly denied or underpaid in Florida. Click any practice area for a deeper look.',
        otherTitle: 'Other practice areas',
        otherIntro: 'In addition to first-party insurance claims, the firm handles related civil matters on a case-by-case basis:',
        items: {
          auto: { name: 'Automotive Claims', blurb: 'Underestimated repair costs, totaled-vehicle disputes, and the 30–35 percent replacement threshold.' },
          fire: { name: 'Fire & Smoke Damage', blurb: 'Total-loss disputes under Florida’s Valued Policy Law, cause-and-origin investigation pushback.' },
          water: { name: 'Water & Pipe Burst', blurb: 'Pipe failures, dishwasher and refrigerator leaks, ensuing-loss coverage and condo above-unit claims.' },
          storm: { name: 'Hurricane & Storm', blurb: 'Wind, rain, and named-storm damage; rebuts to "old roof" and "no opening" denials.' },
          roof: { name: 'Roof & Hail Damage', blurb: 'Hail evidence, roofing-engineer reports, and code-driven full-replacement entitlement.' },
          sinkhole: { name: 'Sinkhole Damage', blurb: 'The four-element catastrophic ground cover collapse test and the §627.706 structural framework.' }
        },
        otherList: ['Civil Litigation', 'Commercial Law', 'Personal Injury & Wrongful Death', 'Hotel & Condo Claims']
      },
      practice: {
        relatedTitle: 'Our Services',
        ctaTitle: 'Get a no-cost consultation',
        ctaButton: 'Contact Us',
        backToServices: '← All practice areas'
      },
      blog: {
        title: 'Insights & guides',
        intro: 'Practical, plain-English guidance for Florida homeowners navigating insurance, storm season and property-claim disputes.',
        readMore: 'Read more',
        recentTitle: 'Recent posts',
        archivesTitle: 'Archives',
        topicsTitle: 'Topics'
      },
      contact: {
        title: 'Contact us',
        intro: 'Tell us what happened. We respond to every inquiry within one business day, and the consultation is always free.',
        formTitle: 'Send a message',
        f: {
          first: 'First name',
          last: 'Last name',
          email: 'Email',
          phone: 'Phone',
          claim: 'Type of claim',
          message: 'Tell us what happened',
          choose: 'Select one…',
          submit: 'Send Message'
        },
        claims: ['Auto / Property Damage', 'Fire & Smoke', 'Hurricane / Storm', 'Roof / Hail', 'Sinkhole', 'Water / Pipe Burst', 'Other'],
        success: 'Demo form — your message would have been sent. (No data is transmitted on this demo site.)',
        infoTitle: 'Office',
        addrLine1: '4159 Central Avenue',
        addrLine2: 'St. Petersburg, FL 33713',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        hoursLabel: 'Hours',
        hours: 'Mon–Fri · By appointment'
      },
      legal: {
        title: 'Legal Disclaimer',
        p1: 'The information on this website is provided for general informational purposes only and does not constitute legal advice. Visiting this site, contacting the firm, or transmitting information through this website does not create an attorney-client relationship.',
        warrantyH: 'Legal warranty',
        warrantyP: 'Haahr Law Group makes no representations or warranties, express or implied, regarding the accuracy, completeness or currentness of any content on this site. Florida law and insurance-policy interpretations change frequently; do not rely on any statement here as a substitute for case-specific advice from a licensed attorney.',
        liabilityH: 'Limitation of liability',
        liabilityP: 'In no event shall Haahr Law Group, its attorneys, staff or contributors be liable for any indirect, incidental, special or consequential damages arising out of or in connection with the use of this website.',
        relH: 'Attorney-client relationship',
        relP: 'No attorney-client relationship is formed unless and until (a) the firm completes a conflict check and (b) a written engagement agreement is signed by both parties. Please do not send confidential information through the contact form until that relationship is established.'
      },
      footer: {
        notice: 'Notice',
        contact: 'Contact',
        follow: 'Follow Us',
        adv: 'The hiring of a lawyer is an important decision that should not be based solely on advertisements. Before you decide, ask the firm to send you free written information about its qualifications and experience.',
        legal: 'Legal Disclaimer',
        copyright: '© 2026 Haahr Law Group. All Rights Reserved.',
        demo: 'Demo build · Not the live firm site'
      },
      banner: {
        text: 'Demonstration site · Static rebuild for portfolio review · Not affiliated with Haahr Law Group'
      },
      services_v: {
        autoH: 'Automotive Property Damage Claims',
        fireH: 'Fire & Smoke Damage Claims',
        stormH: 'Hurricane & Storm Claims',
        roofH: 'Roof & Hail Damage Claims',
        sinkholeH: 'Sinkhole Damage Claims',
        waterH: 'Water Damage Claims'
      }
    },

    es: {
      meta: { langName: 'Español' },
      util: { phone: '(727) 896-7777', cta: 'Consulta Gratuita' },
      nav: {
        home: 'Inicio',
        about: 'Quiénes Somos',
        services: 'Servicios',
        blog: 'Blog',
        contact: 'Contacto',
        services_dropdown: {
          auto: 'Reclamos de Auto',
          fire: 'Daños por Incendio',
          storm: 'Huracán y Tormenta',
          roof: 'Techo y Granizo',
          sinkhole: 'Hundimiento (Sinkhole)',
          water: 'Daños por Agua'
        }
      },
      toolbar: {
        lang: 'Idioma',
        theme: 'Tema',
        size: 'Tamaño',
        themeLight: 'Tema claro',
        themeSystem: 'Tema del sistema',
        themeDark: 'Tema oscuro',
        sizeNormal: 'Tamaño normal',
        sizeLarge: 'Tamaño más grande',
        sizeXL: 'Tamaño máximo'
      },
      home: {
        hero: {
          eyebrow: 'Litigación de Seguros · Tampa Bay',
          title: 'Cuando la aseguradora dice no, nosotros decimos no tan rápido.',
          lead: 'Haahr Law Group representa a asegurados de Florida frente a las aseguradoras en reclamos de propiedad, incendio, huracán, techo, hundimientos y daños por agua. Más de quince años defendiendo su lado de la mesa.',
          ctaPrimary: 'Consulta Gratuita',
          ctaSecondary: 'Sobre el Bufete'
        },
        bandTitle: 'Reciba una evaluación de su caso sin costo',
        bandCTA: 'Hablemos',
        intro: {
          eyebrow: 'Disputas y Litigios de Seguros',
          title: 'Un bufete boutique con un solo principio: el asegurado.',
          p1: 'Litigamos reclamos de propiedad de primera persona en cortes estatales y federales en toda Florida — desde reparaciones de auto subvaluadas y reclamos de huracán negados hasta investigaciones de incendio por pérdida total y disputas complejas de hundimientos.',
          p2: 'Las aseguradoras conocen los estatutos. Nosotros también. Invocamos la Ley de Póliza Valorada de Florida, las disposiciones de reemplazo total impulsadas por el código de construcción y el marco de hundimientos del §627.706 cuando los hechos lo respaldan — y no cobramos honorarios a menos que recuperemos.',
          cta: 'Más Información'
        },
        services: {
          eyebrow: 'Lo Que Hacemos',
          title: 'Seis áreas de práctica — los reclamos más disputados en Florida'
        },
        about: {
          title: 'Sobre Haahr Law Group',
          p1: 'Fundado en 2007 por Hans Peter Haahr, nuestro bufete en St. Petersburg se enfoca en representar a propietarios y pequeñas empresas de Tampa Bay frente a aseguradoras que retrasan, niegan o subpagan reclamos legítimos.',
          p2: 'Boutique por diseño. Cada caso es manejado directamente por el abogado — no se delega a un asociado junior ni a un centro de llamadas de acuerdos.',
          tagline: 'Estamos de su lado.',
          ctaTeam: 'Conozca al Equipo'
        },
        team: {
          title: 'Conozca al equipo',
          hans: { name: 'Hans Peter Haahr', role: 'Abogado · Fundador' },
          staci: { name: 'Staci Haahr', role: 'Gerente de Operaciones' },
          lina: { name: 'Lina Rodriguez', role: 'Asistente Legal' }
        },
        blog: {
          title: 'Nuevo en el blog HLG',
          cta: 'Leer el blog'
        },
        stats: {
          years: 'Años de práctica',
          areas: 'Áreas de práctica',
          courts: 'Cortes admitidas',
          fee: 'Consulta sin costo'
        }
      },
      about: {
        title: 'Quiénes Somos',
        crumbHome: 'Inicio',
        firmTitle: 'Sobre el bufete',
        firmP1: 'Haahr Law Group, PL es un bufete de litigación con sede en St. Petersburg fundado en 2007 por Hans Peter Haahr para ofrecer a los propietarios de Tampa Bay un litigante serio de su lado en la mesa de los reclamos de propiedad.',
        firmP2: 'Estamos admitidos para ejercer ante los Colegios de Abogados de Florida y Tennessee, las Cortes de Distrito de los EE. UU. para los Distritos Medio y Sur de Florida, y la Corte de Reclamos Federales de los EE. UU. en Washington, D.C.',
        firmP3: 'Nuestra estructura boutique es intencional. Los clientes trabajan directamente con su abogado desde la admisión hasta la resolución. No hay traspaso a asociados, ni filtros junior, ni triaje de centro de llamadas.',
        firmP4: 'Aceptamos casos en toda Florida y viajamos rutinariamente a los condados de Pinellas, Hillsborough, Pasco, Manatee, Sarasota, Polk y Hernando.',
        teamTitle: 'Conozca a nuestro equipo',
        hansBio1: 'Hans Peter Haahr obtuvo su JD cum laude de la Facultad de Derecho de la Universidad de Miami y su BA en Ciencias Políticas magna cum laude de la Universidad del Sur de Alabama. Comenzó su carrera legal en Mase & Gasenheimer en Miami antes de unirse a Cole, Scott & Kissane en Tampa, donde se desempeñó como Asociado Senior de Litigios.',
        hansBio2: 'En 2007 fundó Haahr Law Group para enfocarse exclusivamente en representar a asegurados. Posee la calificación de pares Martindale-Hubbell BV y es miembro del Colegio de Abogados de Florida (#568457) y de la Sección de Bienes Raíces del Colegio de Abogados de St. Petersburg.',
        hansBio3: 'Nacido en Dinamarca y criado en los Estados Unidos, Hans habla inglés, danés, sueco y noruego, y es miembro activo de la Cámara de Comercio Dano-Americana.',
        staciBio: 'Staci Haahr posee un BBA de Marymount University y un MBA de Clemson. Dirige las operaciones del bufete y las relaciones con los clientes desde 2007, y asiste a clientes de pequeñas empresas con la incorporación, la designación de agente registrado y el cumplimiento de mantenimiento de la entidad.',
        linaBio: 'Lina Rodriguez se graduó de St. Petersburg College y es hablante nativa de español. Prepara contratos, escrituras, arrendamientos, y materiales de casos y audiencias, y sirve como punto de contacto principal del bufete para clientes hispanohablantes.'
      },
      services: {
        title: 'Servicios',
        intro: 'Litigamos las seis categorías de reclamos de seguros más comúnmente negados o subpagados en Florida. Haga clic en cualquier área de práctica para más detalles.',
        otherTitle: 'Otras áreas de práctica',
        otherIntro: 'Además de los reclamos de seguros de primera persona, el bufete maneja asuntos civiles relacionados caso por caso:',
        items: {
          auto: { name: 'Reclamos de Auto', blurb: 'Costos de reparación subestimados, disputas de pérdida total y el umbral de reemplazo del 30–35 por ciento.' },
          fire: { name: 'Daños por Incendio', blurb: 'Disputas de pérdida total bajo la Ley de Póliza Valorada de Florida y respuestas a investigaciones de causa y origen.' },
          water: { name: 'Agua y Tuberías', blurb: 'Fallas de tuberías, fugas de electrodomésticos, cobertura de pérdida consecuente y reclamos de condominios entre unidades.' },
          storm: { name: 'Huracán y Tormenta', blurb: 'Daño por viento, lluvia y tormenta nombrada; respuestas a las negaciones por "techo viejo" y "sin abertura".' },
          roof: { name: 'Techo y Granizo', blurb: 'Evidencia de granizo, informes de ingenieros de techos y reemplazo total impulsado por el código.' },
          sinkhole: { name: 'Hundimiento', blurb: 'La prueba de cuatro elementos del colapso catastrófico del terreno y el marco estructural del §627.706.' }
        },
        otherList: ['Litigios Civiles', 'Derecho Comercial', 'Lesiones Personales y Muerte por Negligencia', 'Reclamos de Hoteles y Condominios']
      },
      practice: {
        relatedTitle: 'Nuestros Servicios',
        ctaTitle: 'Reciba una consulta sin costo',
        ctaButton: 'Contáctenos',
        backToServices: '← Todas las áreas de práctica'
      },
      blog: {
        title: 'Información y guías',
        intro: 'Orientación práctica y en lenguaje claro para propietarios de Florida que enfrentan seguros, temporada de tormentas y disputas de reclamos.',
        readMore: 'Leer más',
        recentTitle: 'Publicaciones recientes',
        archivesTitle: 'Archivos',
        topicsTitle: 'Temas'
      },
      contact: {
        title: 'Contáctenos',
        intro: 'Cuéntenos lo que pasó. Respondemos a cada consulta dentro de un día hábil, y la consulta siempre es gratuita.',
        formTitle: 'Envíe un mensaje',
        f: {
          first: 'Nombre',
          last: 'Apellido',
          email: 'Correo electrónico',
          phone: 'Teléfono',
          claim: 'Tipo de reclamo',
          message: 'Cuéntenos lo que pasó',
          choose: 'Seleccione uno…',
          submit: 'Enviar Mensaje'
        },
        claims: ['Auto / Daños a Propiedad', 'Incendio y Humo', 'Huracán / Tormenta', 'Techo / Granizo', 'Hundimiento', 'Agua / Ruptura de Tubería', 'Otro'],
        success: 'Formulario de demostración — su mensaje habría sido enviado. (No se transmiten datos en este sitio de demostración.)',
        infoTitle: 'Oficina',
        addrLine1: '4159 Central Avenue',
        addrLine2: 'St. Petersburg, FL 33713',
        phoneLabel: 'Teléfono',
        emailLabel: 'Correo',
        hoursLabel: 'Horario',
        hours: 'Lun–Vie · Con cita'
      },
      legal: {
        title: 'Aviso Legal',
        p1: 'La información de este sitio web se proporciona únicamente con fines informativos generales y no constituye asesoramiento legal. Visitar este sitio, contactar al bufete o transmitir información a través de este sitio web no crea una relación abogado-cliente.',
        warrantyH: 'Garantía legal',
        warrantyP: 'Haahr Law Group no hace declaraciones ni garantías, expresas o implícitas, sobre la exactitud, integridad o vigencia de ningún contenido de este sitio. Las leyes de Florida y las interpretaciones de las pólizas de seguros cambian con frecuencia; no confíe en ninguna declaración aquí como sustituto del consejo específico de un abogado licenciado.',
        liabilityH: 'Limitación de responsabilidad',
        liabilityP: 'En ningún caso Haahr Law Group, sus abogados, personal o colaboradores serán responsables por daños indirectos, incidentales, especiales o consecuentes que surjan del uso de este sitio web.',
        relH: 'Relación abogado-cliente',
        relP: 'No se forma ninguna relación abogado-cliente hasta que (a) el bufete complete una verificación de conflictos y (b) ambas partes firmen un acuerdo de representación por escrito. Por favor no envíe información confidencial a través del formulario de contacto antes de establecer esa relación.'
      },
      footer: {
        notice: 'Aviso',
        contact: 'Contacto',
        follow: 'Síganos',
        adv: 'La contratación de un abogado es una decisión importante que no debe basarse únicamente en publicidad. Antes de decidir, pida al bufete información gratuita por escrito sobre sus calificaciones y experiencia.',
        legal: 'Aviso Legal',
        copyright: '© 2026 Haahr Law Group. Todos los derechos reservados.',
        demo: 'Versión demo · No es el sitio oficial del bufete'
      },
      banner: {
        text: 'Sitio de demostración · Reconstrucción estática para revisión de portafolio · No afiliado con Haahr Law Group'
      },
      services_v: {
        autoH: 'Reclamos de Daños a Propiedad por Auto',
        fireH: 'Reclamos de Daños por Incendio y Humo',
        stormH: 'Reclamos de Huracán y Tormenta',
        roofH: 'Reclamos de Daños por Techo y Granizo',
        sinkholeH: 'Reclamos por Hundimiento del Terreno',
        waterH: 'Reclamos de Daños por Agua'
      }
    },

    ht: {
      meta: { langName: 'Kreyòl Ayisyen' },
      util: { phone: '(727) 896-7777', cta: 'Konsiltasyon Gratis' },
      nav: {
        home: 'Akèy',
        about: 'Kiyès Nou Ye',
        services: 'Sa Nou Fè',
        blog: 'Blog',
        contact: 'Kontak',
        services_dropdown: {
          auto: 'Reklamasyon Otomobil',
          fire: 'Domaj Dife & Lafimen',
          storm: 'Siklòn & Tanpèt',
          roof: 'Twati & Lagrèl',
          sinkhole: 'Tè ki Tonbe (Sinkhole)',
          water: 'Domaj Dlo'
        }
      },
      toolbar: {
        lang: 'Lang',
        theme: 'Tèm',
        size: 'Gwosè Tèks',
        themeLight: 'Tèm klè',
        themeSystem: 'Tèm sistèm',
        themeDark: 'Tèm fonse',
        sizeNormal: 'Gwosè nòmal',
        sizeLarge: 'Gwosè pi gran',
        sizeXL: 'Pi gwo gwosè'
      },
      home: {
        hero: {
          eyebrow: 'Litijasyon Asirans · Tampa Bay',
          title: 'Lè konpayi asirans la di non, nou di pa kounye a.',
          lead: 'Haahr Law Group reprezante asire Florid yo kont konpayi asirans nan reklamasyon byen, dife, siklòn, twati, sinkhole ak domaj dlo. Plis pase kenz ane sou bò pa w nan tab la.',
          ctaPrimary: 'Konsiltasyon Gratis',
          ctaSecondary: 'Sou Kabinè a'
        },
        bandTitle: 'Resevwa yon revizyon dosye gratis jodi a',
        bandCTA: 'Ann Pale',
        intro: {
          eyebrow: 'Diskisyon ak Litijasyon Asirans',
          title: 'Yon kabinè boutik bati sou yon sèl prensip: asire a.',
          p1: 'Nou litije reklamasyon byen premye-pati nan tribinal eta ak federal atravè Florid — soti nan reparasyon otomobil ki pa peye ase ak reklamasyon siklòn ki refize, jiska envestigasyon dife pèt total ak diskisyon konplèks sou sinkhole.',
          p2: 'Konpayi asirans yo konnen lwa yo. Nou tou. Nou envoke Lwa Polis Valè Florid la, dispozisyon ranplasman konplè pou kòd konstriksyon, ak ankadreman §627.706 la pou sinkhole lè reyalite yo sipòte sa — epi nou pa janm chaje frè si nou pa rekipere.',
          cta: 'Aprann Plis'
        },
        services: {
          eyebrow: 'Sa Nou Fè',
          title: 'Sis domèn pratik prensipal — sou reklamasyon ki pi konteste nan Florid'
        },
        about: {
          title: 'Sou Haahr Law Group',
          p1: 'Fonde an 2007 pa Hans Peter Haahr, kabinè nou nan St. Petersburg konsantre sou reprezante pwopriyetè kay ak ti biznis Tampa Bay yo kont konpayi asirans ki retade, refize oswa peye mwens reklamasyon lejitim.',
          p2: 'Boutik dapre konsepsyon. Chak ka jere dirèkteman pa avoka a — pa pase nan yon asosye junior oswa yon mil rezolisyon nan sant apèl.',
          tagline: 'Nou nan kote ou.',
          ctaTeam: 'Rankontre Ekip la'
        },
        team: {
          title: 'Rankontre ekip la',
          hans: { name: 'Hans Peter Haahr', role: 'Avoka · Fondatè' },
          staci: { name: 'Staci Haahr', role: 'Manadjè Biznis' },
          lina: { name: 'Lina Rodriguez', role: 'Paralegal' }
        },
        blog: {
          title: 'Nouvo nan blog HLG',
          cta: 'Li blog la'
        },
        stats: {
          years: 'Ane nan pratik',
          areas: 'Domèn pratik',
          courts: 'Tribinal admisib',
          fee: 'Konsiltasyon san frè'
        }
      },
      about: {
        title: 'Kiyès Nou Ye',
        crumbHome: 'Akèy',
        firmTitle: 'Sou kabinè a',
        firmP1: 'Haahr Law Group, PL se yon kabinè litijasyon ki baze nan St. Petersburg fonde an 2007 pa Hans Peter Haahr pou bay pwopriyetè kay Tampa Bay yo yon litigan seryo sou bò pa yo nan tab reklamasyon byen yo.',
        firmP2: 'Nou admisib pou pratike devan Florid ak Tennessee bars yo, Tribinal Distrik US pou Distrik Mwayen ak Sid Florid, ak Tribinal US Reklamasyon Federal nan Washington, D.C.',
        firmP3: 'Estrikti boutik nou enpòtan. Kliyan yo travay dirèkteman ak avoka yo soti nan akeyi rive nan rezolisyon. Pa gen okenn pase nan asosye, pa gen okenn jiskontè junior, pa gen okenn triyaj nan sant apèl.',
        firmP4: 'Nou aksepte ka atravè Florid e nou vwayaje regilyèman nan konte Pinellas, Hillsborough, Pasco, Manatee, Sarasota, Polk ak Hernando.',
        teamTitle: 'Rankontre ekip nou an',
        hansBio1: 'Hans Peter Haahr fè JD li cum laude nan Fakilte Lwa Inivèsite Miami ak BA li nan Syans Politik magna cum laude nan Inivèsite South Alabama. Li te kòmanse karyè legal li nan Mase & Gasenheimer nan Miami anvan li te ale nan Cole, Scott & Kissane nan Tampa, kote li te sèvi kòm Asosye Senior Litijasyon.',
        hansBio2: 'An 2007 li te fonde Haahr Law Group pou konsantre eksklizivman sou reprezante asire yo. Li gen yon evalyasyon Martindale-Hubbell BV epi li manm nan Florid Bar (#568457) ak Seksyon Pwopriyete Reyèl St. Petersburg Bar.',
        hansBio3: 'Fèt nan Denmark e leve nan Etazini, Hans pale Anglè, Danwa, Suedwa ak Nòvejyen, e li yon manm aktif nan Chanm Komès Danwa-Ameriken.',
        staciBio: 'Staci Haahr gen yon BBA nan Marymount University ak yon MBA nan Clemson. Li ap dirije operasyon kabinè a ak relasyon kliyan depi 2007, e li ede kliyan ti biznis ak enkòporasyon, konfigirasyon ajan anrejistre ak konfòmite kenbe antite.',
        linaBio: 'Lina Rodriguez gen yon diplòm nan St. Petersburg College e li yon ispanik natif. Li prepare kontra, papye, lwaye, ak materyèl ka ak odyans, e li sèvi kòm pwen prensipal kontak kabinè a pou kliyan ki pale Panyòl.'
      },
      services: {
        title: 'Sa Nou Fè',
        intro: 'Nou litije sis kategori reklamasyon asirans yo ki pi souvan refize oswa peye mwens nan Florid. Klike sou nenpòt domèn pratik pou plis detay.',
        otherTitle: 'Lòt domèn pratik',
        otherIntro: 'Anplis reklamasyon asirans premye-pati, kabinè a jere zafè sivil ki gen rapò sou yon baz ka pa ka:',
        items: {
          auto: { name: 'Reklamasyon Otomobil', blurb: 'Kost reparasyon ki sou-estime, diskisyon machin pèt total, ak limit ranplasman 30–35 pousan.' },
          fire: { name: 'Domaj Dife & Lafimen', blurb: 'Diskisyon pèt total dapre Lwa Polis Valè Florid, repons sou envestigasyon koz ak orijin.' },
          water: { name: 'Dlo & Tiyo Kase', blurb: 'Echèk tiyo, fwit aparèy, kouvèti pèt konsekan ak reklamasyon kondominyòm.' },
          storm: { name: 'Siklòn & Tanpèt', blurb: 'Domaj van, lapli, ak tanpèt nonmen; repons sou refi "twati vye" ak "pa gen ouvèti".' },
          roof: { name: 'Twati & Lagrèl', blurb: 'Prèv lagrèl, rapò enjenyè twati, ak ranplasman konplè ki gen kòd kòm baz.' },
          sinkhole: { name: 'Sinkhole', blurb: 'Tès kat eleman efondreman tè katastwofik ak ankadreman estriktirèl §627.706.' }
        },
        otherList: ['Litijasyon Sivil', 'Lwa Komèsyal', 'Blesi Pèsonèl ak Lanmò pa Neglijans', 'Reklamasyon Otèl ak Kondominyòm']
      },
      practice: {
        relatedTitle: 'Sèvis Nou Yo',
        ctaTitle: 'Resevwa yon konsiltasyon san frè',
        ctaButton: 'Kontakte Nou',
        backToServices: '← Tout domèn pratik'
      },
      blog: {
        title: 'Konesans & gid',
        intro: 'Konsèy pratik ak senp pou pwopriyetè Florid k ap fè fas ak asirans, sezon tanpèt ak diskisyon reklamasyon byen.',
        readMore: 'Li plis',
        recentTitle: 'Piblikasyon resan',
        archivesTitle: 'Achiv',
        topicsTitle: 'Sijè'
      },
      contact: {
        title: 'Kontakte Nou',
        intro: 'Di nou sa ki te pase. Nou reponn chak demann nan yon jou travay, e konsiltasyon an toujou gratis.',
        formTitle: 'Voye yon mesaj',
        f: {
          first: 'Prenon',
          last: 'Non',
          email: 'Imèl',
          phone: 'Telefòn',
          claim: 'Kalite reklamasyon',
          message: 'Di nou sa ki te pase',
          choose: 'Chwazi youn…',
          submit: 'Voye Mesaj'
        },
        claims: ['Otomobil / Domaj Byen', 'Dife & Lafimen', 'Siklòn / Tanpèt', 'Twati / Lagrèl', 'Sinkhole', 'Dlo / Tiyo Kase', 'Lòt'],
        success: 'Fòm demonstrasyon — mesaj ou ta voye. (Pa gen okenn done ki transmèt sou sit demonstrasyon sa a.)',
        infoTitle: 'Biwo',
        addrLine1: '4159 Central Avenue',
        addrLine2: 'St. Petersburg, FL 33713',
        phoneLabel: 'Telefòn',
        emailLabel: 'Imèl',
        hoursLabel: 'Lè',
        hours: 'Len–Van · Sou randevou'
      },
      legal: {
        title: 'Avi Legal',
        p1: 'Enfòmasyon sou sit wèb sa a bay sèlman pou rezon enfòmasyon jeneral epi li pa konstitye konsèy legal. Vizite sit sa a, kontakte kabinè a, oswa transmèt enfòmasyon nan sit wèb sa a pa kreye yon relasyon avoka-kliyan.',
        warrantyH: 'Garanti legal',
        warrantyP: 'Haahr Law Group pa fè reprezantasyon oswa garanti, eksprime oswa implisit, konsènan presizyon, entegrite oswa aktyalite okenn kontni sou sit sa a. Lwa Florid ak entèpretasyon polis asirans chanje souvan; pa konte sou okenn deklarasyon isit la kòm yon ranplasman pou konsèy espesifik nan ka pa yon avoka ki gen lisans.',
        liabilityH: 'Limitasyon responsabilite',
        liabilityP: 'Nan okenn ka, Haahr Law Group, avoka li yo, anplwaye oswa kontribitè yo p ap responsab pou nenpòt domaj endirèk, aksidan, espesyal oswa konsekan ki soti nan oswa an koneksyon ak itilizasyon sit wèb sa a.',
        relH: 'Relasyon avoka-kliyan',
        relP: 'Pa gen okenn relasyon avoka-kliyan ki fòme jiskaske (a) kabinè a fini yon verifikasyon konfli ak (b) yon akò angajman ekri siyen pa de pati yo. Tanpri pa voye enfòmasyon konfidansyèl atravè fòm kontak la jiskaske relasyon sa a etabli.'
      },
      footer: {
        notice: 'Avi',
        contact: 'Kontak',
        follow: 'Suiv Nou',
        adv: 'Anboche yon avoka se yon desizyon enpòtan ki pa ta dwe baze sèlman sou piblisite. Anvan ou deside, mande kabinè a voye w enfòmasyon ekri gratis sou kalifikasyon ak eksperyans li.',
        legal: 'Avi Legal',
        copyright: '© 2026 Haahr Law Group. Tout dwa rezève.',
        demo: 'Vèsyon demo · Pa sit ofisyèl kabinè a'
      },
      banner: {
        text: 'Sit demonstrasyon · Rebati estatik pou revizyon pòtfolyo · Pa afilye ak Haahr Law Group'
      },
      services_v: {
        autoH: 'Reklamasyon Domaj Byen Otomobil',
        fireH: 'Reklamasyon Domaj Dife ak Lafimen',
        stormH: 'Reklamasyon Siklòn ak Tanpèt',
        roofH: 'Reklamasyon Domaj Twati ak Lagrèl',
        sinkholeH: 'Reklamasyon Domaj Sinkhole',
        waterH: 'Reklamasyon Domaj Dlo'
      }
    }
  };

  function resolve(key, dict) {
    return key.split('.').reduce((o, k) => (o && k in o) ? o[k] : undefined, dict);
  }

  function applyLang(lang) {
    if (!LANGS.includes(lang)) lang = 'en';
    const dict = DICT[lang];
    document.documentElement.lang = (lang === 'ht') ? 'ht' : lang;
    try { localStorage.setItem('lang', lang); } catch (e) {}

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = resolve(key, dict);
      if (val == null) return;
      const attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, val);
      } else if (Array.isArray(val)) {
        // unused: arrays are handled via callbacks below
      } else {
        el.textContent = val;
      }
    });

    // Custom hooks: contact form claim-type select options
    const claimSelect = document.querySelector('select[data-i18n-options="contact.claims"]');
    if (claimSelect) {
      const placeholder = resolve('contact.f.choose', dict);
      const opts = resolve('contact.claims', dict) || [];
      claimSelect.innerHTML = '';
      const placeholderOpt = document.createElement('option');
      placeholderOpt.value = '';
      placeholderOpt.textContent = placeholder;
      placeholderOpt.disabled = true;
      placeholderOpt.selected = true;
      claimSelect.appendChild(placeholderOpt);
      opts.forEach(label => {
        const o = document.createElement('option');
        o.value = label;
        o.textContent = label;
        claimSelect.appendChild(o);
      });
    }

    // Other-practice list (services page)
    const otherList = document.querySelector('[data-i18n-list="services.otherList"]');
    if (otherList) {
      const items = resolve('services.otherList', dict) || [];
      otherList.innerHTML = items.map(t => `<li>${t}</li>`).join('');
    }

    // Update language buttons aria-pressed
    document.querySelectorAll('.lang-btn').forEach(b =>
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang))
    );
  }

  function init() {
    let saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    let initial = saved;
    if (!initial) {
      const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
      initial = LANGS.includes(browser) ? browser : 'en';
    }
    applyLang(initial);

    document.querySelectorAll('.lang-btn').forEach(btn =>
      btn.addEventListener('click', () => applyLang(btn.dataset.lang))
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for debugging
  window.HHLegal = window.HHLegal || {};
  window.HHLegal.applyLang = applyLang;
  window.HHLegal.dict = DICT;
})();
