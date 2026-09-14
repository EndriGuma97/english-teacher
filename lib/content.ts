/**
 * ALL of the website copy lives in this file.
 * Edit the text here and the components will pick it up — no need to touch the components.
 *
 * Conventions
 * - `RichText` lets a sentence contain a highlighted phrase (`stat`) or an Albanian
 *   word (`sq`, rendered with lang="sq") without splitting the copy across files.
 * - Emojis are part of Debora's voice; keep them.
 */

export type RichSegment = string | { text: string; kind: "stat" | "sq" | "strong" };
export type RichText = RichSegment[];

export const nav = {
  brand: "Learn Albanian with Debora",
  links: [
    { label: "About", href: "#about" },
    { label: "Why me", href: "#why" },
    { label: "What you'll learn", href: "#learn" },
    { label: "My approach", href: "#approach" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Reserve your spot", href: "#book" },
} as const;

export const hero = {
  title: "Learn Albanian with Debora 🇦🇱",
  subtitle: "Your friendly guide to speaking Albanian with confidence.",
  primaryCta: { label: "Reserve your spot", href: "#book" },
  secondaryCta: { label: "Why learn with me", href: "#why" },
  trust: ["8 years of teaching", "5,000+ students worldwide", "Native speaker"],
  badge: { greeting: "Përshëndetje!", emoji: "👋", line: "Native Albanian speaker" },
  portraitAlt: "Debora, a native Albanian teacher, smiling in a royal-blue dress",
} as const;

export const marquee: { sq: string; en: string }[] = [
  { sq: "Përshëndetje", en: "Hello" },
  { sq: "Faleminderit", en: "Thank you" },
  { sq: "Mirëmëngjes", en: "Good morning" },
  { sq: "Si je?", en: "How are you?" },
  { sq: "Mirë", en: "Good" },
  { sq: "Gëzohem që u njohëm", en: "Nice to meet you" },
  { sq: "Mirupafshim", en: "Goodbye" },
];

export const about = {
  heading: "Hi, I'm Debora",
  paragraphs: [
    ["Hi, I'm Debora, a passionate Albanian teacher and native speaker."],
    [
      "With ",
      { text: "8 years", kind: "stat" },
      " of teaching experience, I have helped more than ",
      { text: "5,000 students", kind: "stat" },
      " from around the world learn, practise, and improve their language skills.",
    ],
    [
      "Albanian is my native language and I love helping international students discover not only the language, but also the culture, expressions, and everyday way of communicating in Albania.",
    ],
  ] as RichText[],
  collageCaption: "Inside my lessons",
  images: {
    vowels: {
      src: "/images/lesson-vowels.jpg",
      width: 1200,
      height: 472,
      alt: "Debora teaching Albanian vowels in a live online lesson",
    },
    slide: {
      src: "/images/lesson-intro-slide.jpg",
      width: 1200,
      height: 675,
      alt: "A lesson slide reading Përshëndetje, Unë quhem Debora, used to practise introductions",
    },
    tablet: {
      src: "/images/lesson-tablet.jpg",
      width: 1000,
      height: 752,
      alt: "A young student pointing at a tablet during an online lesson with Debora",
    },
  },
} as const;

export const why = {
  heading: "Why Learn Albanian with Me?",
  intro: [
    "Learning a new language should feel exciting — not stressful.",
    "My lessons are friendly, practical, interactive, and personalised. I adapt each lesson to your level, goals, and interests so you can make real progress from the very beginning.",
  ],
  pills: ["Friendly", "Practical", "Interactive", "Personalised"],
  subheading: "Whether you are learning Albanian because you are:",
  reasons: [
    { emoji: "🇦🇱", text: "moving to Albania" },
    { emoji: "❤️", text: "in a relationship with an Albanian speaker" },
    { emoji: "👨‍👩‍👧", text: "connecting with Albanian family or heritage" },
    { emoji: "✈️", text: "travelling to Albania" },
    { emoji: "💼", text: "working or studying in Albania" },
    { emoji: "🌍", text: "simply interested in the Albanian language and culture" },
  ],
  closing: "— I'm here to help you feel confident using Albanian in real-life situations.",
} as const;

export const learn = {
  heading: "What Will You Learn?",
  skills: [
    { emoji: "🗣️", title: "Conversation", text: "Speak naturally and confidently." },
    { emoji: "📚", title: "Vocabulary", text: "Learn useful words and everyday expressions." },
    { emoji: "✏️", title: "Grammar", text: "Understand Albanian grammar in a simple and practical way." },
    { emoji: "👂", title: "Listening", text: "Improve your understanding of spoken Albanian." },
    { emoji: "🔤", title: "Pronunciation", text: "Learn to pronounce Albanian words clearly and naturally." },
    {
      emoji: "🇦🇱",
      title: "Culture & Expressions",
      text: "Discover the phrases and expressions Albanians actually use.",
    },
  ],
} as const;

export const approach = {
  heading: "My Teaching Approach",
  lead: "I don't want you to simply memorise Albanian words.",
  pullQuote: "I want you to use them.",
  paragraphs: [
    "My lessons focus on real communication, practical vocabulary, conversation, and situations you are likely to encounter in everyday life.",
    "I create a supportive environment where you can ask questions, make mistakes, practise, and gradually build your confidence.",
  ],
} as const;

export type Review = {
  quote: string;
  /** "Student" when the platform only shows a date. */
  name: string;
  country?: "BE" | "US" | "IT" | "RO" | "GB";
  /** Approximate month; the list below is ordered newest first. */
  when: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export const reviews = {
  heading: "What my students say",
  items: [
    {
      quote:
        "Deborah adjusts her teaching according to your level and is well prepared with exercises and teaching material.",
      name: "Katrien",
      country: "BE",
      when: "August 2026",
      rating: 5,
    },
    {
      quote:
        "An amazing tutor who has helped me so much. She is very professional and attentive to detail, very helpful with pronunciation & accent reduction. I am very happy with my progress from this tutor! She is so kind!",
      name: "Elizabeth",
      country: "US",
      when: "August 2026",
      rating: 5,
    },
    {
      quote: "A great teacher.",
      name: "Stefano",
      country: "IT",
      when: "August 2026",
      rating: 4,
    },
    {
      quote: "Deborah is an amazing tutor. She is very attentive and supportive.",
      name: "Qamile",
      country: "IT",
      when: "July 2026",
      rating: 5,
    },
    {
      quote:
        "Deborah is a very involved person who helps you progress quickly and with very well-structured lessons.",
      name: "Mitrache",
      country: "RO",
      when: "July 2026",
      rating: 5,
    },
    {
      quote: "Professional, kind, cooperative, caring tutor that guarantees success.",
      name: "Xhuljana",
      country: "GB",
      when: "2025",
      rating: 5,
    },
    {
      quote: "Debora is very kind and friendly. Her pronunciation is very beautiful.",
      name: "Student",
      when: "May 2023",
      rating: 5,
    },
    {
      quote: "It is always fun to talk to her. Thank you for your lesson.",
      name: "Student",
      when: "January 2023",
      rating: 5,
    },
    {
      quote:
        "Thank you so much Teacher Debora!! I'm so happy to see you and know each other^^ You are so kindly and patiently, so that I could study comfortably. See you soon !! Feleminderit^^",
      name: "Student",
      when: "April 2022",
      rating: 5,
    },
  ] satisfies Review[],
} as const;

export const journey = {
  heading: "Your Albanian journey starts here.",
  paragraph: [
    "From your first \u201C",
    { text: "Përshëndetje!", kind: "sq" },
    "\u201D to having your first real conversation in Albanian, I'll be there to guide you.",
  ] as RichText,
  ready: "Ready to learn Albanian?",
  closing: "🇦🇱 Let's speak Albanian together.",
  cta: { label: "Reserve your spot", href: "#book" },
} as const;

export const book = {
  heading: "Reserve your spot",
  subtext: "Pick a time that suits you and let's start speaking Albanian.",
  steps: ["Choose 1:1 or group", "Pick a time that suits you", "Meet me online and start speaking Albanian"],
  choose: {
    label: "First, what kind of lesson would you like?",
    options: [
      {
        key: "one",
        emoji: "🙋",
        title: "1:1 lessons",
        text: "Private lessons, fully adapted to your level and goals.",
      },
      {
        key: "group",
        emoji: "👥",
        title: "Group class",
        text: "Learn Albanian in a small, fun and friendly beginner group.",
      },
    ],
    hint: "Choose a lesson type above and the available times will appear here.",
  },
  emailPrompt: "Prefer email? Write to me at",
} as const;

export const english = {
  kicker: "Also",
  heading: "I teach English to kids, too",
  text: "Alongside Albanian, I'm a TEFL/TESOL-certified English teacher. I've taught hundreds of online English lessons to children and international students — with songs, phonics, drawing and lots of encouragement. If your child needs a friendly English tutor, get in touch.",
  cta: "Ask about English lessons",
  emailSubject: "English lessons for my child",
  photos: [
    { src: "/images/english-hello-song.jpg", alt: "A Hello Song slide from one of Debora's English lessons for children" },
    { src: "/images/english-phonics.jpg", alt: "A phonics lesson slide on long vowels used in Debora's English classes" },
    { src: "/images/english-drawing.jpg", alt: "Hearts drawn together with a young student during an online English lesson" },
  ],
  certificates: [
    {
      src: "/images/cert-tefl.jpg",
      width: 640,
      height: 452,
      alt: "120-hour Advanced TEFL/TESOL certificate, TEFL Universal, 2021",
      label: "120-hour Advanced TEFL/TESOL, 2021",
    },
    {
      src: "/images/cert-tesol.jpg",
      width: 640,
      height: 452,
      alt: "TESOL certificate, American TESOL Institute, 2026",
      label: "TESOL Certificate, American TESOL Institute, 2026",
    },
  ],
} as const;

export const contact = {
  heading: "Contact",
  copy: "Copy",
  copied: "Copied",
} as const;

export const footer = {
  tagline: "Your friendly guide to speaking Albanian with confidence.",
  copyright: "© 2026 Learn Albanian with Debora",
} as const;

export const notFound = {
  title: "Page not found",
  text: "This page does not exist, but the lessons do.",
  cta: "Back to the homepage",
} as const;
