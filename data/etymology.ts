import type { LanguageEntry } from "@/types/etymology";

export const LANGUAGES: LanguageEntry[] = [
  // ── Germanic ────────────────────────────────────────────────────────────────
  {
    code: "en",
    name: "English",
    native_name: "English",
    family: "Germanic",
    week_start: 0,
    verified: true,
    days: [
      { day_index: 0, name: "Sunday",    planet: "Sun",     etymology_type: "planetary_direct",   root: "Old English Sunnandæg — Sun's day" },
      { day_index: 1, name: "Monday",    planet: "Moon",    etymology_type: "planetary_direct",   root: "Old English Mōnandæg — Moon's day" },
      { day_index: 2, name: "Tuesday",   planet: "Mars",    etymology_type: "norse_substitution", root: "Old English Tīwesdæg — Tyr (Norse war god, matched to Mars)" },
      { day_index: 3, name: "Wednesday", planet: "Mercury", etymology_type: "norse_substitution", root: "Old English Wōdnesdæg — Woden/Odin (matched to Mercury)" },
      { day_index: 4, name: "Thursday",  planet: "Jupiter", etymology_type: "norse_substitution", root: "Old English Þūnresdæg — Thor (matched to Jupiter)" },
      { day_index: 5, name: "Friday",    planet: "Venus",   etymology_type: "norse_substitution", root: "Old English Frīgedæg — Frigg/Freya (matched to Venus)" },
      { day_index: 6, name: "Saturday",  planet: "Saturn",  etymology_type: "planetary_direct",   root: "Old English Sæternesdæg — Saturn's day (kept from Latin)" },
    ],
  },
  {
    code: "de",
    name: "German",
    native_name: "Deutsch",
    family: "Germanic",
    week_start: 1,
    verified: true,
    days: [
      { day_index: 0, name: "Sonntag",    planet: "Sun",     etymology_type: "planetary_direct",   root: "Old High German Sunnūntag — Sun's day",                                            display_note: "Sonne = Sun — direct" },
      { day_index: 1, name: "Montag",     planet: "Moon",    etymology_type: "planetary_direct",   root: "Old High German Mānetag — Moon's day",                                             display_note: "Mond = Moon — direct" },
      { day_index: 2, name: "Dienstag",   planet: "Mars",    etymology_type: "norse_substitution", root: "Old High German Zīostag — Ziu/Tyr's day (matched to Mars)",                       display_note: "Tyr's day via Norse" },
      { day_index: 3, name: "Mittwoch",   planet: "Mercury", etymology_type: "descriptive",        root: "Middle High German Mittewoche — middle of the week (Mercury and Woden both dropped)", display_note: "Middle of the week — planet erased" },
      { day_index: 4, name: "Donnerstag", planet: "Jupiter", etymology_type: "norse_substitution", root: "Old High German Donarestag — Donar/Thor's day (matched to Jupiter)",               display_note: "Donner (Thor) = Jupiter" },
      { day_index: 5, name: "Freitag",    planet: "Venus",   etymology_type: "norse_substitution", root: "Old High German Frīatag — Freia/Freya's day (matched to Venus)",                  display_note: "Freia (Freya) = Venus" },
      { day_index: 6, name: "Samstag",    planet: "Saturn",  etymology_type: "sabbath",            root: "Old High German Sambaztag — from Sabbath tradition",                               display_note: "Sabbath tradition" },
    ],
  },
  {
    code: "nl",
    name: "Dutch",
    native_name: "Nederlands",
    family: "Germanic",
    week_start: 1,
    verified: true,
    days: [
      { day_index: 0, name: "Zondag",    planet: "Sun",     etymology_type: "planetary_direct",   root: "Middle Dutch Sonnendach — Sun's day",                        display_note: "Zon = Sun — direct" },
      { day_index: 1, name: "Maandag",   planet: "Moon",    etymology_type: "planetary_direct",   root: "Middle Dutch Maendach — Moon's day",                         display_note: "Maan = Moon — direct" },
      { day_index: 2, name: "Dinsdag",   planet: "Mars",    etymology_type: "norse_substitution", root: "Middle Dutch Dinxendach — Tyr/Ding's day (matched to Mars)", display_note: "Tyr's day via Norse" },
      { day_index: 3, name: "Woensdag",  planet: "Mercury", etymology_type: "norse_substitution", root: "Middle Dutch Wuonsdach — Wodan/Woden's day (matched to Mercury)", display_note: "Wodan (Woden) = Mercury" },
      { day_index: 4, name: "Donderdag", planet: "Jupiter", etymology_type: "norse_substitution", root: "Middle Dutch Donresdach — Donder/Thor's day (matched to Jupiter)", display_note: "Donder (Thor) = Jupiter" },
      { day_index: 5, name: "Vrijdag",   planet: "Venus",   etymology_type: "norse_substitution", root: "Middle Dutch Vrydach — Vrij/Freya's day (matched to Venus)", display_note: "Vrij (Freya) = Venus" },
      { day_index: 6, name: "Zaterdag",  planet: "Saturn",  etymology_type: "sabbath",            root: "Middle Dutch Saterdach — from Sabbath tradition",            display_note: "Sabbath tradition" },
    ],
  },

  // ── Romance ─────────────────────────────────────────────────────────────────
  {
    code: "es",
    name: "Spanish",
    native_name: "Español",
    family: "Romance",
    week_start: 1,
    verified: true,
    days: [
      { day_index: 0, name: "Domingo",   planet: "Sun",     etymology_type: "liturgical",       root: "Latin Dies Dominicus — Lord's Day (Church replaced Sol)" },
      { day_index: 1, name: "Lunes",     planet: "Moon",    etymology_type: "planetary_direct", root: "Latin Lunae dies — Moon's day" },
      { day_index: 2, name: "Martes",    planet: "Mars",    etymology_type: "planetary_direct", root: "Latin Martis dies — Mars's day" },
      { day_index: 3, name: "Miércoles", planet: "Mercury", etymology_type: "planetary_direct", root: "Latin Mercurii dies — Mercury's day" },
      { day_index: 4, name: "Jueves",    planet: "Jupiter", etymology_type: "planetary_direct", root: "Latin Jovis dies — Jupiter's day" },
      { day_index: 5, name: "Viernes",   planet: "Venus",   etymology_type: "planetary_direct", root: "Latin Veneris dies — Venus's day" },
      { day_index: 6, name: "Sábado",    planet: "Saturn",  etymology_type: "sabbath",          root: "Hebrew Shabbat — day of rest (Church replaced Saturni)" },
    ],
  },
  {
    code: "fr",
    name: "French",
    native_name: "Français",
    family: "Romance",
    week_start: 1,
    verified: true,
    days: [
      { day_index: 0, name: "Dimanche",  planet: "Sun",     etymology_type: "liturgical",       root: "Latin Dominica — Lord's Day" },
      { day_index: 1, name: "Lundi",     planet: "Moon",    etymology_type: "planetary_direct", root: "Latin Lunae dies — Moon's day" },
      { day_index: 2, name: "Mardi",     planet: "Mars",    etymology_type: "planetary_direct", root: "Latin Martis dies — Mars's day" },
      { day_index: 3, name: "Mercredi",  planet: "Mercury", etymology_type: "planetary_direct", root: "Latin Mercurii dies — Mercury's day" },
      { day_index: 4, name: "Jeudi",     planet: "Jupiter", etymology_type: "planetary_direct", root: "Latin Jovis dies — Jupiter's day" },
      { day_index: 5, name: "Vendredi",  planet: "Venus",   etymology_type: "planetary_direct", root: "Latin Veneris dies — Venus's day" },
      { day_index: 6, name: "Samedi",    planet: "Saturn",  etymology_type: "sabbath",          root: "Hebrew Shabbat — Sabbath tradition" },
    ],
  },
  {
    code: "it",
    name: "Italian",
    native_name: "Italiano",
    family: "Romance",
    week_start: 1,
    verified: true,
    days: [
      { day_index: 0, name: "Domenica",  planet: "Sun",     etymology_type: "liturgical",       root: "Latin Dominica — Lord's Day" },
      { day_index: 1, name: "Lunedì",    planet: "Moon",    etymology_type: "planetary_direct", root: "Latin Lunae dies — Moon's day" },
      { day_index: 2, name: "Martedì",   planet: "Mars",    etymology_type: "planetary_direct", root: "Latin Martis dies — Mars's day" },
      { day_index: 3, name: "Mercoledì", planet: "Mercury", etymology_type: "planetary_direct", root: "Latin Mercurii dies — Mercury's day" },
      { day_index: 4, name: "Giovedì",   planet: "Jupiter", etymology_type: "planetary_direct", root: "Latin Jovis dies — Jupiter's day" },
      { day_index: 5, name: "Venerdì",   planet: "Venus",   etymology_type: "planetary_direct", root: "Latin Veneris dies — Venus's day" },
      { day_index: 6, name: "Sabato",    planet: "Saturn",  etymology_type: "sabbath",          root: "Hebrew Shabbat — Sabbath tradition" },
    ],
  },
  {
    code: "pt",
    name: "Portuguese",
    native_name: "Português",
    family: "Romance",
    week_start: 0,
    verified: true,
    days: [
      { day_index: 0, name: "Domingo",       planet: "Sun",     etymology_type: "liturgical", root: "Latin Dominicus — Lord's Day",                                                         display_note: "Lord's Day; English keeps the older Sun-day" },
      { day_index: 1, name: "Segunda-feira", planet: "Moon",    etymology_type: "liturgical", root: "Latin secunda feria — second fair/liturgical day (Church week starting Sunday)",       display_note: "Second fair / liturgical day" },
      { day_index: 2, name: "Terça-feira",   planet: "Mars",    etymology_type: "liturgical", root: "Latin tertia feria — third fair/liturgical day",                                       display_note: "Third fair / liturgical day" },
      { day_index: 3, name: "Quarta-feira",  planet: "Mercury", etymology_type: "liturgical", root: "Latin quarta feria — fourth fair/liturgical day",                                      display_note: "Fourth fair / liturgical day" },
      { day_index: 4, name: "Quinta-feira",  planet: "Jupiter", etymology_type: "liturgical", root: "Latin quinta feria — fifth fair/liturgical day",                                       display_note: "Fifth fair / liturgical day" },
      { day_index: 5, name: "Sexta-feira",   planet: "Venus",   etymology_type: "liturgical", root: "Latin sexta feria — sixth fair/liturgical day",                                        display_note: "Sixth fair / liturgical day" },
      { day_index: 6, name: "Sábado",        planet: "Saturn",  etymology_type: "sabbath",    root: "Hebrew Shabbat — day of rest",                                                         display_note: "Sabbath / rest tradition" },
    ],
  },

  // ── East Asian — elemental-planetary system ─────────────────────────────────
  {
    code: "ja",
    name: "Japanese",
    native_name: "日本語",
    family: "Japonic",
    week_start: 0,
    verified: true,
    days: [
      { day_index: 0, name: "日曜日", planet: "Sun",     etymology_type: "planetary_direct", root: "Nichiyōbi — 日 (Nichi, Sun) + 曜日 (yōbi, luminous day). Direct solar reference via Chinese astronomical tradition.", display_note: "日 = Sun — direct" },
      { day_index: 1, name: "月曜日", planet: "Moon",    etymology_type: "planetary_direct", root: "Getsuyōbi — 月 (Getsu, Moon) + 曜日. Direct lunar reference.",                                                      display_note: "月 = Moon — direct" },
      { day_index: 2, name: "火曜日", planet: "Mars",    etymology_type: "planetary_direct", root: "Kayōbi — 火 (Ka, Fire). In Chinese elemental astronomy, Mars is the fire planet.",                                    display_note: "火 = Fire — Mars's element" },
      { day_index: 3, name: "水曜日", planet: "Mercury", etymology_type: "planetary_direct", root: "Suiyōbi — 水 (Sui, Water). In Chinese elemental astronomy, Mercury is the water planet.",                            display_note: "水 = Water — Mercury's element" },
      { day_index: 4, name: "木曜日", planet: "Jupiter", etymology_type: "planetary_direct", root: "Mokuyōbi — 木 (Moku, Wood). In Chinese elemental astronomy, Jupiter is the wood planet.",                            display_note: "木 = Wood — Jupiter's element" },
      { day_index: 5, name: "金曜日", planet: "Venus",   etymology_type: "planetary_direct", root: "Kin'yōbi — 金 (Kin, Metal/Gold). In Chinese elemental astronomy, Venus is the metal planet.",                        display_note: "金 = Metal — Venus's element" },
      { day_index: 6, name: "土曜日", planet: "Saturn",  etymology_type: "planetary_direct", root: "Doyōbi — 土 (Do, Earth). In Chinese elemental astronomy, Saturn is the earth planet.",                               display_note: "土 = Earth — Saturn's element" },
    ],
  },
  {
    code: "ko",
    name: "Korean",
    native_name: "한국어",
    family: "Koreanic",
    week_start: 0,
    verified: true,
    days: [
      { day_index: 0, name: "일요일", planet: "Sun",     etymology_type: "planetary_direct", root: "Il-yo-il — 日曜日 in Sino-Korean characters. 일(日) = Sun. Direct solar reference.",                      display_note: "일(日) = Sun — direct" },
      { day_index: 1, name: "월요일", planet: "Moon",    etymology_type: "planetary_direct", root: "Wol-yo-il — 月曜日 in Sino-Korean. 월(月) = Moon. Direct lunar reference.",                               display_note: "월(月) = Moon — direct" },
      { day_index: 2, name: "화요일", planet: "Mars",    etymology_type: "planetary_direct", root: "Hwa-yo-il — 火曜日 in Sino-Korean. 화(火) = Fire. Mars is the fire planet in East Asian astronomy.",      display_note: "화(火) = Fire — Mars's element" },
      { day_index: 3, name: "수요일", planet: "Mercury", etymology_type: "planetary_direct", root: "Su-yo-il — 水曜日 in Sino-Korean. 수(水) = Water. Mercury is the water planet.",                          display_note: "수(水) = Water — Mercury's element" },
      { day_index: 4, name: "목요일", planet: "Jupiter", etymology_type: "planetary_direct", root: "Mok-yo-il — 木曜日 in Sino-Korean. 목(木) = Wood. Jupiter is the wood planet.",                           display_note: "목(木) = Wood — Jupiter's element" },
      { day_index: 5, name: "금요일", planet: "Venus",   etymology_type: "planetary_direct", root: "Geum-yo-il — 金曜日 in Sino-Korean. 금(金) = Metal/Gold. Venus is the metal planet.",                    display_note: "금(金) = Metal — Venus's element" },
      { day_index: 6, name: "토요일", planet: "Saturn",  etymology_type: "planetary_direct", root: "To-yo-il — 土曜日 in Sino-Korean. 토(土) = Earth. Saturn is the earth planet.",                           display_note: "토(土) = Earth — Saturn's element" },
    ],
  },

  // ── Indo-Aryan — Sanskrit planetary system ──────────────────────────────────
  {
    code: "hi",
    name: "Hindi",
    native_name: "हिन्दी",
    family: "Indo-Aryan",
    week_start: 0,
    verified: true,
    days: [
      { day_index: 0, name: "रविवार",   planet: "Sun",     etymology_type: "planetary_direct", root: "Ravivaar — Ravi (Sanskrit: the Sun, a Vedic solar deity) + vaar (day). Sanskrit astronomical tradition.", display_note: "Ravi = Sun in Sanskrit" },
      { day_index: 1, name: "सोमवार",   planet: "Moon",    etymology_type: "planetary_direct", root: "Somvaar — Soma (Sanskrit: Moon, also the ritual lunar drink) + vaar. Soma is the Vedic lunar deity.",     display_note: "Soma = Moon in Sanskrit" },
      { day_index: 2, name: "मंगलवार",  planet: "Mars",    etymology_type: "planetary_direct", root: "Mangalvaar — Mangal (Sanskrit: Mars, auspicious) + vaar. Mangala/Angaraka is the Vedic name for Mars.",   display_note: "Mangal = Mars in Sanskrit" },
      { day_index: 3, name: "बुधवार",   planet: "Mercury", etymology_type: "planetary_direct", root: "Budhvaar — Budh (Sanskrit: Mercury, wisdom) + vaar. Budha (distinct from Buddha) is the Vedic Mercury.",  display_note: "Budh = Mercury in Sanskrit" },
      { day_index: 4, name: "गुरुवार",  planet: "Jupiter", etymology_type: "planetary_direct", root: "Guruvaar — Guru/Brihaspati (Sanskrit: Jupiter, teacher of the gods) + vaar. Brihaspati is the divine teacher.", display_note: "Guru = Jupiter in Sanskrit" },
      { day_index: 5, name: "शुक्रवार", planet: "Venus",   etymology_type: "planetary_direct", root: "Shukravaar — Shukra (Sanskrit: Venus, brightness/purity) + vaar. Shukra is the Vedic Venus deity.",        display_note: "Shukra = Venus in Sanskrit" },
      { day_index: 6, name: "शनिवार",   planet: "Saturn",  etymology_type: "planetary_direct", root: "Shanivaar — Shani (Sanskrit: Saturn, the slow one) + vaar. Shani is the Vedic deity of Saturn.",           display_note: "Shani = Saturn in Sanskrit" },
    ],
  },

  // ── Semitic — ordinal system ─────────────────────────────────────────────────
  {
    code: "ar",
    name: "Arabic",
    native_name: "العربية",
    family: "Semitic",
    week_start: 0,
    verified: true,
    days: [
      { day_index: 0, name: "الأحد",    planet: "Sun",     etymology_type: "descriptive", root: "Al-Ahad — 'the one/first.' Sunday is the first day of the Arabic week. No planetary name — pure ordinal.", display_note: "Al-Ahad = the first" },
      { day_index: 1, name: "الاثنين",  planet: "Moon",    etymology_type: "descriptive", root: "Al-Ithnayn — 'the two/second.' Ordinal counting from Sunday.",                                            display_note: "Al-Ithnayn = the second" },
      { day_index: 2, name: "الثلاثاء", planet: "Mars",    etymology_type: "descriptive", root: "Al-Thalathaa — 'the three/third.' Ordinal counting.",                                                     display_note: "Al-Thalatha = the third" },
      { day_index: 3, name: "الأربعاء", planet: "Mercury", etymology_type: "descriptive", root: "Al-Arba'aa — 'the four/fourth.' Ordinal counting.",                                                       display_note: "Al-Arba'a = the fourth" },
      { day_index: 4, name: "الخميس",   planet: "Jupiter", etymology_type: "descriptive", root: "Al-Khamis — 'the five/fifth.' Ordinal counting.",                                                         display_note: "Al-Khamis = the fifth" },
      { day_index: 5, name: "الجمعة",   planet: "Venus",   etymology_type: "liturgical",  root: "Al-Jumu'a — 'the gathering/congregation.' Friday is the Islamic day of congregational prayer. No planetary reference.", display_note: "Al-Jumu'a = the gathering" },
      { day_index: 6, name: "السبت",    planet: "Saturn",  etymology_type: "sabbath",     root: "Al-Sabt — from Hebrew/Aramaic Shabbat (rest). Sabbath tradition preserved in Arabic.",                    display_note: "Al-Sabt = the Sabbath" },
    ],
  },

  // ── Slavic — ordinal + liturgical system ─────────────────────────────────────
  {
    code: "ru",
    name: "Russian",
    native_name: "Русский",
    family: "Slavic",
    week_start: 1,
    verified: true,
    days: [
      { day_index: 0, name: "Воскресенье", planet: "Sun",     etymology_type: "liturgical",  root: "Voskresenye — 'resurrection.' Sunday named for the Christian resurrection, replacing any earlier planetary name.",     display_note: "Resurrection — planet replaced" },
      { day_index: 1, name: "Понедельник", planet: "Moon",    etymology_type: "descriptive", root: "Ponedelnik — 'after nedela (Sunday/the day of rest).' Monday is the day after. No lunar reference in the name.",        display_note: "Po-nedeli = after Sunday" },
      { day_index: 2, name: "Вторник",     planet: "Mars",    etymology_type: "descriptive", root: "Vtornik — from vtoroy (second). Tuesday is the second weekday counted from Monday.",                                    display_note: "Vtornik = the second" },
      { day_index: 3, name: "Среда",       planet: "Mercury", etymology_type: "descriptive", root: "Sreda — 'middle.' Wednesday is the midpoint of the week — the same concept as German Mittwoch. Planet erased.",        display_note: "Sreda = middle — planet erased" },
      { day_index: 4, name: "Четверг",     planet: "Jupiter", etymology_type: "descriptive", root: "Chetverg — from chetvyorty (fourth). Thursday is the fourth weekday.",                                                  display_note: "Chetverg = the fourth" },
      { day_index: 5, name: "Пятница",     planet: "Venus",   etymology_type: "descriptive", root: "Pyatnitsa — from pyat' (five). Friday is the fifth weekday. No planetary name.",                                        display_note: "Pyatnitsa = the fifth" },
      { day_index: 6, name: "Суббота",     planet: "Saturn",  etymology_type: "sabbath",     root: "Subbota — from Greek Sabbaton, itself from Hebrew Shabbat (rest). Sabbath tradition.",                                  display_note: "Subbota = Sabbath" },
    ],
  },

  // ── Bantu — Arabic-derived ordinal system ────────────────────────────────────
  {
    code: "sw",
    name: "Swahili",
    native_name: "Kiswahili",
    family: "Bantu",
    week_start: 0,
    verified: true,
    days: [
      { day_index: 0, name: "Jumapili",  planet: "Sun",     etymology_type: "descriptive", root: "Juma (week) + pili (two in Swahili). Sunday is the second day of the week, counting from Saturday as the first.", display_note: "Juma + pili = 2nd of the week" },
      { day_index: 1, name: "Jumatatu",  planet: "Moon",    etymology_type: "descriptive", root: "Juma + tatu (three). Monday is the third day of the Swahili week.",                                               display_note: "Juma + tatu = 3rd of the week" },
      { day_index: 2, name: "Jumanne",   planet: "Mars",    etymology_type: "descriptive", root: "Juma + nne (four). Tuesday is the fourth day. Some link to Arabic ithnayn (two/Monday) via early borrowing.",      display_note: "Juma + nne = 4th of the week" },
      { day_index: 3, name: "Jumatano",  planet: "Mercury", etymology_type: "descriptive", root: "Juma + tano (five). Wednesday is the fifth day of the Swahili week.",                                              display_note: "Juma + tano = 5th of the week" },
      { day_index: 4, name: "Alhamisi",  planet: "Jupiter", etymology_type: "descriptive", root: "From Arabic al-khamis (the fifth). Thursday borrowed directly from Arabic rather than following the Swahili ordinal pattern.", display_note: "From Arabic al-khamis (the fifth)" },
      { day_index: 5, name: "Ijumaa",    planet: "Venus",   etymology_type: "liturgical",  root: "From Arabic al-jumu'a (the congregation/gathering). Friday is the Islamic holy day — borrowed directly from Arabic.", display_note: "From Arabic al-jumu'a (the gathering)" },
      { day_index: 6, name: "Jumamosi",  planet: "Saturn",  etymology_type: "descriptive", root: "Juma (week) + mosi (one in Swahili). Saturday is the first day of the Swahili week, reflecting Arabic/Islamic week structure.", display_note: "Juma + mosi = 1st of the week" },
    ],
  },
];

/** Languages shown in WeekGrid day cards (keep concise — only 5) */
export const GRID_LANG_CODES = ["es", "fr", "it", "de", "pt"] as const;

/** Convenience: look up a specific day entry */
export function getDayEntry(langCode: string, dayIndex: number) {
  return LANGUAGES.find((l) => l.code === langCode)
    ?.days.find((d) => d.day_index === dayIndex);
}
