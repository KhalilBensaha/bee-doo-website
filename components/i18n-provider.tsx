"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

type Locale = "en" | "fr" | "ar"

type I18nContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const dictionaries: Record<Locale, any> = {
  en: {
    nav: { home: "Home", about: "About", products: "Products", contact: "Contact" },
    cta: { shopNow: "Shop Now", learnMore: "Learn More", shopOurHoney: "Shop Our Honey", addToCart: "Add to Cart" },
    hero: {
      titleLine1: "Pure Natural",
      titleLine2: "Golden Honey",
      subtext:
        "Discover the finest natural honey, harvested with care and crafted by nature. Experience the pure taste of premium quality honey from Bee Doo.",
    },
    about: {
      title: "Our Story & Mission",
      description:
        "At Bee Doo, we believe in the power of nature's sweetest gift. Our journey began with a passion for pure, natural honey and a commitment to sustainable beekeeping practices.",
      features: {
        madeWithLove: {
          title: "Made with Love",
          desc:
            "Every jar is crafted with care and attention to detail, ensuring the highest quality honey reaches your table.",
        },
        natural: {
          title: "100% Natural",
          desc: "Our honey is completely natural with no additives, preservatives, or artificial ingredients.",
        },
        quality: {
          title: "Premium Quality",
          desc: "Award-winning honey that meets the highest standards of purity and taste excellence.",
        },
      },
      storyText:
        "Founded by passionate beekeepers, Bee Doo represents generations of expertise in honey production. We work closely with local bee colonies, ensuring sustainable practices that protect both the environment and the precious bees that make our honey possible. Each jar tells a story of dedication, purity, and the natural sweetness that only comes from the finest honey.",
    },
    products: {
      title: "Our Premium Honey Collection",
      description:
        "Discover our carefully curated selection of natural honey varieties, each with its own unique flavor profile and health benefits.",
      badges: { bestSeller: "Best Seller", new: "New", organic: "Organic", premium: "Premium" },
      items: {
        1: {
          name: "Natural Antibiotic Honey",
          description: "Premium natural honey with antibiotic properties, perfect for health and wellness.",
        },
        2: {
          name: "Raw Wildflower Honey",
          description: "Unprocessed honey from wildflowers, rich in natural enzymes and nutrients.",
        },
        3: { name: "Organic Acacia Honey", description: "Light, delicate honey with a mild flavor, perfect for tea and baking." },
        4: { name: "Manuka Honey Premium", description: "Rare Manuka honey with exceptional health benefits and unique taste." },
      },
      names: { antibiotic: "Natural Antibiotic", wildflower: "Wildflower", acacia: "Acacia", manuka: "Manuka" },
    },
    contact: {
      title: "Get in Touch",
      description: "Have questions about our honey or want to place a custom order? We'd love to hear from you!",
      form: {
        title: "Send us a Message",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        message: "Message",
        placeholders: {
          firstName: "Your first name",
          lastName: "Your last name",
          email: "your.email@example.com",
          message: "Tell us about your inquiry...",
        },
        send: "Send Message",
      },
      info: { emailUs: "Email Us", callUs: "Call Us", visitUs: "Visit Us", followUs: "Follow Us" },
    },
    footer: {
      quickLinks: "Quick Links",
      ourHoney: "Our Honey",
      brandDescription: "Premium natural honey crafted with care and dedication to quality.",
      newsletter: {
        stayUpdated: "Stay Updated",
        description: "Subscribe to get updates on new products and special offers.",
        placeholderEmail: "Your email",
        subscribe: "Subscribe",
      },
      bottom: { madeWithLove: "Made with", forHoneyLovers: "for honey lovers" },
    },
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", products: "Produits", contact: "Contact" },
    cta: { shopNow: "Acheter maintenant", learnMore: "En savoir plus", shopOurHoney: "Découvrir nos miels", addToCart: "Ajouter au panier" },
    hero: {
      titleLine1: "Pur et naturel",
      titleLine2: "Miel doré",
      subtext:
        "Découvrez le meilleur miel naturel, récolté avec soin et façonné par la nature. Goûtez à la pureté d’un miel de qualité supérieure de Bee Doo.",
    },
    about: {
      title: "Notre histoire et notre mission",
      description:
        "Chez Bee Doo, nous croyons au pouvoir du cadeau le plus sucré de la nature. Notre aventure a commencé par une passion pour le miel pur et un engagement envers l’apiculture durable.",
      features: {
        madeWithLove: {
          title: "Fait avec amour",
          desc:
            "Chaque pot est élaboré avec soin et attention aux détails pour vous offrir un miel de la plus haute qualité.",
        },
        natural: {
          title: "100% naturel",
          desc: "Notre miel est entièrement naturel, sans additifs, conservateurs ni ingrédients artificiels.",
        },
        quality: {
          title: "Qualité premium",
          desc: "Un miel primé qui répond aux normes les plus élevées de pureté et d’excellence gustative.",
        },
      },
      storyText:
        "Fondée par des apiculteurs passionnés, Bee Doo incarne des générations d’expertise dans la production de miel. Nous travaillons en étroite collaboration avec des colonies locales, en garantissant des pratiques durables qui protègent l’environnement et les précieuses abeilles. Chaque pot raconte une histoire de dévouement, de pureté et de douceur naturelle.",
    },
    products: {
      title: "Notre collection de miel premium",
      description:
        "Découvrez notre sélection soignée de miels naturels, chacun avec une saveur unique et des bienfaits pour la santé.",
      badges: { bestSeller: "Meilleure vente", new: "Nouveau", organic: "Bio", premium: "Premium" },
      items: {
        1: {
          name: "Miel antibiotique naturel",
          description: "Miel naturel de qualité, aux propriétés antibiotiques, idéal pour la santé et le bien-être.",
        },
        2: {
          name: "Miel brut de fleurs sauvages",
          description: "Miel non transformé issu de fleurs sauvages, riche en enzymes et nutriments naturels.",
        },
        3: { name: "Miel d’acacia biologique", description: "Miel léger et délicat, parfait pour le thé et la pâtisserie." },
        4: { name: "Miel de Manuka premium", description: "Miel rare de Manuka, aux bienfaits exceptionnels et au goût unique." },
      },
      names: { antibiotic: "Antibiotique naturel", wildflower: "Fleurs sauvages", acacia: "Acacia", manuka: "Manuka" },
    },
    contact: {
      title: "Contactez-nous",
      description: "Des questions sur nos miels ou une commande personnalisée ? Écrivez-nous !",
      form: {
        title: "Envoyez-nous un message",
        firstName: "Prénom",
        lastName: "Nom",
        email: "Email",
        message: "Message",
        placeholders: {
          firstName: "Votre prénom",
          lastName: "Votre nom",
          email: "votre.email@exemple.com",
          message: "Parlez-nous de votre demande...",
        },
        send: "Envoyer",
      },
      info: { emailUs: "Envoyez-nous un email", callUs: "Appelez-nous", visitUs: "Rendez-nous visite", followUs: "Suivez-nous" },
    },
    footer: {
      quickLinks: "Liens rapides",
      ourHoney: "Notre miel",
      brandDescription: "Miel naturel premium, élaboré avec soin et exigence de qualité.",
      newsletter: {
        stayUpdated: "Restez informé",
        description: "Abonnez-vous pour recevoir nos nouveautés et offres spéciales.",
        placeholderEmail: "Votre email",
        subscribe: "S’abonner",
      },
      bottom: { madeWithLove: "Fait avec", forHoneyLovers: "pour les amateurs de miel" },
    },
  },
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", products: "المنتجات", contact: "اتصل بنا" },
    cta: { shopNow: "تسوق الآن", learnMore: "اعرف المزيد", shopOurHoney: "تسوق العسل لدينا", addToCart: "أضف إلى السلة" },
    hero: {
      titleLine1: "طبيعي ونقي",
      titleLine2: "عسل ذهبي",
      subtext:
        "اكتشف أجود أنواع العسل الطبيعي، المحصود بعناية من الطبيعة. استمتع بمذاق نقي وجودة مميزة من Bee Doo.",
    },
    about: {
      title: "قصتنا ورسالتنا",
      description:
        "في Bee Doo نؤمن بقيمة هدية الطبيعة الحلوة. بدأت رحلتنا بشغف للعسل النقي والتزام بممارسات تربية نحل مستدامة.",
      features: {
        madeWithLove: {
          title: "صنع بالمحبة",
          desc: "يُجهز كل برطمان بعناية واهتمام بالتفاصيل لضمان وصول أجود أنواع العسل إلى مائدتكم.",
        },
        natural: { title: "طبيعي 100%", desc: "عسل طبيعي تمامًا دون أي إضافات أو مواد حافظة أو مكونات صناعية." },
        quality: { title: "جودة فائقة", desc: "عسل حاصل على جوائز يحقق أعلى معايير النقاء والمذاق." },
      },
      storyText:
        "تأسست Bee Doo على يد نحّالين شغوفين وتمثل خبرات متوارثة في إنتاج العسل. نعمل عن كثب مع خلايا النحل المحلية لضمان ممارسات مستدامة تحمي البيئة والنحل الثمين. كل برطمان يحكي قصة إخلاص ونقاء وحلاوة طبيعية لا يقدمها إلا أفضل عسل.",
    },
    products: {
      title: "مجموعة العسل المميزة لدينا",
      description: "اكتشف تشكيلتنا المختارة بعناية من أنواع العسل الطبيعي، لكل نوع نكهته وفوائده الصحية.",
      badges: { bestSeller: "الأكثر مبيعًا", new: "جديد", organic: "عضوي", premium: "مميز" },
      items: {
        1: {
          name: "عسل طبيعي مضاد للجراثيم",
          description: "عسل طبيعي فاخر بخصائص مضادة للجراثيم، مثالي للصحة والعافية.",
        },
        2: {
          name: "عسل الأزهار البرية الخام",
          description: "عسل غير معالج من أزهار برية، غني بالإنزيمات والعناصر الغذائية الطبيعية.",
        },
        3: { name: "عسل أكاسيا عضوي", description: "عسل خفيف بطعم لطيف، مثالي للشاي والمخبوزات." },
        4: { name: "عسل مانوكا فاخر", description: "عسل مانوكا نادر بفوائد صحية مميزة وطعم فريد." },
      },
      names: { antibiotic: "مضاد طبيعي", wildflower: "أزهار برية", acacia: "أكاسيا", manuka: "مانوكا" },
    },
    contact: {
      title: "تواصل معنا",
      description: "لديك أسئلة حول عسلنا أو ترغب بطلب مخصص؟ يسعدنا تواصلك!",
      form: {
        title: "أرسل لنا رسالة",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        placeholders: {
          firstName: "اكتب اسمك الأول",
          lastName: "اكتب اسم العائلة",
          email: "your.email@example.com",
          message: "أخبرنا عن استفسارك...",
        },
        send: "إرسال الرسالة",
      },
      info: { emailUs: "راسلنا", callUs: "اتصل بنا", visitUs: "تفضل بزيارتنا", followUs: "تابعنا" },
    },
    footer: {
      quickLinks: "روابط سريعة",
      ourHoney: "أنواع عسلنا",
      brandDescription: "عسل طبيعي فاخر مصنوع بعناية والتزام بالجودة.",
      newsletter: {
        stayUpdated: "ابقَ على اطلاع",
        description: "اشترك للحصول على تحديثات حول المنتجات الجديدة والعروض الخاصة.",
        placeholderEmail: "بريدك الإلكتروني",
        subscribe: "اشترك",
      },
      bottom: { madeWithLove: "صنع بحب", forHoneyLovers: "لعشاق العسل" },
    },
  },
}

function getByPath(obj: any, path: string): any {
  const parts = path.split(".")
  let cur = obj
  for (const p of parts) {
    if (cur == null) return undefined
    cur = cur[p]
  }
  return cur
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Initialize to 'en' to match SSR output; update after mount to avoid hydration mismatch
  const [locale, setLocaleState] = useState<Locale>("en")

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", l)
    }
  }

  useEffect(() => {
    // On mount, pick saved or navigator locale
    try {
      const saved = (localStorage.getItem("locale") as Locale | null) || null
      if (saved && ["en", "fr", "ar"].includes(saved)) {
        setLocaleState(saved)
      } else {
        const nav = navigator.language?.slice(0, 2)
        if (nav === "fr" || nav === "ar") setLocaleState(nav)
      }
    } catch {}
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
    }
  }, [locale])

  const dict = dictionaries[locale]

  const t = useMemo(() => {
    return (key: string) => {
      const val = getByPath(dict, key)
      return typeof val === "string" ? val : key
    }
  }, [dict])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
