/* HH Legal demo — i18n
   Hand-rolled dictionary + data-i18n attribute switcher.
   Languages: en (default), es (Spanish), fr (French).
   NOTE: Per the research dossier, Tampa Bay's Tampa-Bay-region non-English
   population is overwhelmingly Spanish + Haitian Creole. Haitian Creole (HT)
   would likely outperform French (FR) for local market reach. See NOTES.md.
   Spanish and French copy is machine-translated and needs attorney review.
*/
(function () {
  const LANGS = ['en', 'es', 'fr'];

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
          eyebrow: 'Insurance Claims Litigation · Tampa Bay',
          title: 'HAAHR LAW GROUP',
          lead: 'Our insurance attorneys proudly represent policyholders in a wide variety of insurance disputes and have successfully litigated cases arising out of both commercial and personal lines policies.',
          ctaPrimary: 'CONSULTATION',
          ctaSecondary: 'ABOUT HLG'
        },
        bandTitle: 'Get a No-Cost Consultation Today',
        bandCTA: "LET'S TALK",
        intro: {
          eyebrow: '',
          title: 'Insurance Disputes and Litigation',
          p1: 'Our law firm proudly represent policyholders in a wide variety of insurance disputes and have successfully litigated cases arising out of both commercial and personal lines policies.',
          p2: 'In our years of service, we have represented our clients in the dispute of property loss or damage, and automobile / motorcycle and liability policies, in both federal and state courts through appeal. Learn more about how we can help with your insurance claim disputes and litigation.',
          p3: 'If you or your business have been denied an insurance claim, or have only received a portion of your loss, schedule a free consultation now.',
          cta: 'LEARN MORE'
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
        ctaTitle: 'Get a No Cost Consultation',
        ctaButton: 'CONTACT US',
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
          eyebrow: 'Litigación de Reclamos de Seguros · Tampa Bay',
          title: 'HAAHR LAW GROUP',
          lead: 'Nuestros abogados de seguros representan con orgullo a asegurados en una amplia variedad de disputas, y han litigado con éxito casos derivados de pólizas tanto comerciales como personales.',
          ctaPrimary: 'CONSULTA',
          ctaSecondary: 'SOBRE HLG'
        },
        bandTitle: 'Reciba una Consulta Sin Costo Hoy',
        bandCTA: 'HABLEMOS',
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
        ctaTitle: 'Reciba una Consulta Sin Costo',
        ctaButton: 'CONTÁCTENOS',
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

    fr: {
      meta: { langName: 'Français' },
      util: { phone: '(727) 896-7777', cta: 'Consultation Gratuite' },
      nav: {
        home: 'Accueil',
        about: 'À Propos',
        services: 'Nos Services',
        blog: 'Blog',
        contact: 'Contact',
        services_dropdown: {
          auto: 'Sinistres Automobile',
          fire: 'Dégâts Incendie & Fumée',
          storm: 'Ouragan & Tempête',
          roof: 'Toiture & Grêle',
          sinkhole: 'Affaissement de Terrain',
          water: 'Dégâts des Eaux'
        }
      },
      toolbar: {
        lang: 'Langue',
        theme: 'Thème',
        size: 'Taille du Texte',
        themeLight: 'Thème clair',
        themeSystem: 'Thème système',
        themeDark: 'Thème sombre',
        sizeNormal: 'Taille normale',
        sizeLarge: 'Taille agrandie',
        sizeXL: 'Taille maximale'
      },
      home: {
        hero: {
          eyebrow: 'Contentieux Sinistres d\'Assurance · Tampa Bay',
          title: 'HAAHR LAW GROUP',
          lead: 'Nos avocats en droit des assurances représentent fièrement les assurés dans une grande variété de litiges, et ont mené avec succès des dossiers issus de polices commerciales comme personnelles.',
          ctaPrimary: 'CONSULTATION',
          ctaSecondary: 'À PROPOS HLG'
        },
        bandTitle: 'Obtenez une Consultation Sans Frais Aujourd'hui',
        bandCTA: 'PARLONS-EN',
        intro: {
          eyebrow: 'Litiges & Contentieux d\'Assurance',
          title: 'Un cabinet boutique fondé sur un seul principe : l\'assuré.',
          p1: 'Nous traitons les sinistres de première partie devant les tribunaux d\'État et fédéraux de Floride — des réparations automobiles sous-évaluées et sinistres d\'ouragan refusés aux investigations d\'incendie pour perte totale et litiges complexes d\'affaissement.',
          p2: 'Les assureurs connaissent les statuts. Nous aussi. Nous invoquons la Valued Policy Law de Floride, les dispositions de remplacement intégral imposées par le code du bâtiment et le cadre §627.706 sur les affaissements lorsque les faits le justifient — et nous ne facturons aucun honoraire sauf en cas de récupération.',
          cta: 'En Savoir Plus'
        },
        services: {
          eyebrow: 'Nos Services',
          title: 'Six domaines de pratique — autour des sinistres les plus contestés en Floride'
        },
        about: {
          title: 'À Propos de Haahr Law Group',
          p1: 'Fondé en 2007 par Hans Peter Haahr, notre cabinet de St. Petersburg se consacre à représenter les propriétaires et petites entreprises de Tampa Bay face aux assureurs qui retardent, refusent ou sous-évaluent des sinistres légitimes.',
          p2: 'Boutique par conception. Chaque dossier est traité directement par l\'avocat — aucun renvoi à un associé junior ni à une chaîne de centres d\'appels.',
          tagline: 'Nous sommes de votre côté.',
          ctaTeam: 'Rencontrez l\'Équipe'
        },
        team: {
          title: 'Rencontrez l\'équipe',
          hans: { name: 'Hans Peter Haahr', role: 'Avocat · Fondateur' },
          staci: { name: 'Staci Haahr', role: 'Directrice Administrative' },
          lina: { name: 'Lina Rodriguez', role: 'Assistante Juridique' }
        },
        blog: {
          title: 'Nouveautés du blog HLG',
          cta: 'Lire le blog'
        },
        stats: {
          years: 'Années d\'exercice',
          areas: 'Domaines de pratique',
          courts: 'Cours admises',
          fee: 'Consultation sans frais'
        }
      },
      about: {
        title: 'À Propos',
        crumbHome: 'Accueil',
        firmTitle: 'À propos du cabinet',
        firmP1: 'Haahr Law Group, PL est un cabinet de contentieux basé à St. Petersburg, fondé en 2007 par Hans Peter Haahr pour offrir aux propriétaires de Tampa Bay un litigant sérieux à leurs côtés à la table des sinistres immobiliers.',
        firmP2: 'Nous sommes admis à exercer devant les barreaux de Floride et du Tennessee, les Tribunaux de District des États-Unis pour les Districts Moyen et Sud de Floride, et la Cour Fédérale des Réclamations à Washington, D.C.',
        firmP3: 'Notre structure boutique est intentionnelle. Les clients travaillent directement avec leur avocat de l\'admission jusqu\'à la résolution. Pas de renvoi à des associés, pas de gardiens juniors, pas de triage de centre d\'appels.',
        firmP4: 'Nous acceptons des dossiers dans toute la Floride et nous déplaçons régulièrement dans les comtés de Pinellas, Hillsborough, Pasco, Manatee, Sarasota, Polk et Hernando.',
        teamTitle: 'Rencontrez notre équipe',
        hansBio1: 'Hans Peter Haahr a obtenu son JD cum laude à la Faculté de Droit de l\'Université de Miami et son BA en Sciences Politiques magna cum laude à l\'Université du Sud de l\'Alabama. Il a commencé sa carrière juridique chez Mase & Gasenheimer à Miami avant de rejoindre Cole, Scott & Kissane à Tampa, où il a été Associé Senior en Contentieux.',
        hansBio2: 'En 2007 il a fondé Haahr Law Group afin de se consacrer exclusivement à la représentation des assurés. Il détient une évaluation Martindale-Hubbell BV et est membre du Barreau de Floride (#568457) et de la Section Immobilière du Barreau de St. Petersburg.',
        hansBio3: 'Né au Danemark et élevé aux États-Unis, Hans parle anglais, danois, suédois et norvégien, et il est membre actif de la Chambre de Commerce Dano-Américaine.',
        staciBio: 'Staci Haahr possède un BBA de Marymount University et un MBA de Clemson. Elle dirige les opérations du cabinet et les relations client depuis 2007, et accompagne les clients de petites entreprises dans la constitution de société, la désignation d\'un agent enregistré et le respect des obligations de maintien.',
        linaBio: 'Lina Rodriguez est diplômée de St. Petersburg College et hispanophone native. Elle prépare les contrats, les actes, les baux et les documents de dossier et d\'audience, et sert de point de contact principal du cabinet pour les clients hispanophones.'
      },
      services: {
        title: 'Nos Services',
        intro: 'Nous traitons les six catégories de sinistres d\'assurance les plus souvent refusées ou sous-évaluées en Floride. Cliquez sur un domaine pour en savoir plus.',
        otherTitle: 'Autres domaines de pratique',
        otherIntro: 'En complément des sinistres d\'assurance de première partie, le cabinet traite les affaires civiles connexes au cas par cas :',
        items: {
          auto: { name: 'Sinistres Automobile', blurb: 'Coûts de réparation sous-évalués, contestations de perte totale et le seuil de remplacement de 30 à 35 %.' },
          fire: { name: 'Dégâts Incendie & Fumée', blurb: 'Contentieux de perte totale au titre de la Valued Policy Law de Floride, réponses aux investigations de cause et origine.' },
          water: { name: 'Eau & Rupture de Tuyau', blurb: 'Défaillances de tuyauterie, fuites d\'électroménager, garantie de pertes consécutives et sinistres de copropriété.' },
          storm: { name: 'Ouragan & Tempête', blurb: 'Dégâts par vent, pluie et tempête nommée ; réponses aux refus liés à un « toit ancien » ou « pas d\'ouverture ».' },
          roof: { name: 'Toiture & Grêle', blurb: 'Preuves de grêle, rapports d\'ingénieurs en toiture et remplacement intégral imposé par le code.' },
          sinkhole: { name: 'Affaissement', blurb: 'Le test à quatre éléments d\'effondrement catastrophique du sol et le cadre structurel §627.706.' }
        },
        otherList: ['Contentieux Civil', 'Droit Commercial', 'Préjudice Corporel & Décès Accidentel', 'Sinistres Hôtels & Copropriétés']
      },
      practice: {
        relatedTitle: 'Nos Services',
        ctaTitle: 'Obtenez une Consultation Sans Frais',
        ctaButton: 'NOUS CONTACTER',
        backToServices: '← Tous les domaines de pratique'
      },
      blog: {
        title: 'Analyses & guides',
        intro: 'Conseils pratiques en langage clair pour les propriétaires de Floride confrontés à l\'assurance, à la saison des tempêtes et aux litiges de sinistres.',
        readMore: 'Lire la suite',
        recentTitle: 'Articles récents',
        archivesTitle: 'Archives',
        topicsTitle: 'Sujets'
      },
      contact: {
        title: 'Nous Contacter',
        intro: 'Dites-nous ce qui s\'est passé. Nous répondons à chaque demande dans le jour ouvré, et la consultation est toujours gratuite.',
        formTitle: 'Envoyer un message',
        f: {
          first: 'Prénom',
          last: 'Nom',
          email: 'Email',
          phone: 'Téléphone',
          claim: 'Type de sinistre',
          message: 'Dites-nous ce qui s\'est passé',
          choose: 'Choisir…',
          submit: 'Envoyer le Message'
        },
        claims: ['Auto / Dégâts Matériels', 'Incendie & Fumée', 'Ouragan / Tempête', 'Toiture / Grêle', 'Affaissement', 'Eau / Rupture de Tuyau', 'Autre'],
        success: 'Formulaire de démonstration — votre message aurait été envoyé. (Aucune donnée n\'est transmise sur ce site de démo.)',
        infoTitle: 'Bureau',
        addrLine1: '4159 Central Avenue',
        addrLine2: 'St. Petersburg, FL 33713',
        phoneLabel: 'Téléphone',
        emailLabel: 'Email',
        hoursLabel: 'Horaires',
        hours: 'Lun–Ven · Sur rendez-vous'
      },
      legal: {
        title: 'Avis Juridique',
        p1: 'Les informations sur ce site sont fournies à titre purement informatif et ne constituent pas un conseil juridique. Visiter ce site, contacter le cabinet ou transmettre des informations via ce site ne crée pas de relation avocat-client.',
        warrantyH: 'Garantie légale',
        warrantyP: 'Haahr Law Group ne fait aucune déclaration ou garantie, expresse ou implicite, concernant l\'exactitude, l\'exhaustivité ou l\'actualité du contenu de ce site. Le droit de la Floride et l\'interprétation des polices d\'assurance évoluent fréquemment ; ne vous fiez à aucune déclaration ici comme substitut à un conseil spécifique au dossier d\'un avocat agréé.',
        liabilityH: 'Limitation de responsabilité',
        liabilityP: 'En aucun cas Haahr Law Group, ses avocats, son personnel ou ses contributeurs ne pourront être tenus responsables de tout dommage indirect, accessoire, spécial ou consécutif découlant de l\'utilisation de ce site.',
        relH: 'Relation avocat-client',
        relP: 'Aucune relation avocat-client ne se forme tant que (a) le cabinet n\'a pas effectué une vérification de conflit et (b) un accord d\'engagement écrit n\'est pas signé par les deux parties. Veuillez ne pas envoyer d\'informations confidentielles via le formulaire de contact tant que cette relation n\'est pas établie.'
      },
      footer: {
        notice: 'Avis',
        contact: 'Contact',
        follow: 'Suivez-nous',
        adv: 'L\'embauche d\'un avocat est une décision importante qui ne devrait pas reposer uniquement sur la publicité. Avant de décider, demandez au cabinet de vous envoyer gratuitement des informations écrites sur ses qualifications et son expérience.',
        legal: 'Avis Juridique',
        copyright: '© 2026 Haahr Law Group. Tous droits réservés.',
        demo: 'Version démo · Pas le site officiel du cabinet'
      },
      banner: {
        text: 'Site de démonstration · Reconstruction statique pour évaluation de portfolio · Non affilié à Haahr Law Group'
      },
      services_v: {
        autoH: 'Sinistres de Dommages Matériels Automobile',
        fireH: 'Sinistres Incendie & Fumée',
        stormH: 'Sinistres Ouragan & Tempête',
        roofH: 'Sinistres Toiture & Grêle',
        sinkholeH: 'Sinistres d\'Affaissement de Terrain',
        waterH: 'Sinistres Dégâts des Eaux'
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
