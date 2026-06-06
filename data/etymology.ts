import type { LanguageEntry } from "@/types/etymology";

export const LANGUAGES: LanguageEntry[] = [
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
      { day_index: 4, name: "Thursday",  planet: "Jupiter", etymology_type: "norse_substitution", root: "Old English Þūnresdæg — Thor (god of thunder, matched to Jupiter)" },
      { day_index: 5, name: "Friday",    planet: "Venus",   etymology_type: "norse_substitution", root: "Old English Frīgedæg — Frigg/Freya (matched to Venus)" },
      { day_index: 6, name: "Saturday",  planet: "Saturn",  etymology_type: "planetary_direct",   root: "Old English Sæternesdæg — Saturn's day (kept from Latin)" },
    ],
  },
  {
    code: "es",
    name: "Spanish",
    native_name: "Español",
    family: "Romance",
    week_start: 1,
    verified: true,
    days: [
      { day_index: 0, name: "Domingo",   planet: "Sun",     etymology_type: "liturgical",         root: "Latin Dies Dominicus — Lord's Day (Church replaced Sol)" },
      { day_index: 1, name: "Lunes",     planet: "Moon",    etymology_type: "planetary_direct",   root: "Latin Lunae dies — Moon's day" },
      { day_index: 2, name: "Martes",    planet: "Mars",    etymology_type: "planetary_direct",   root: "Latin Martis dies — Mars's day" },
      { day_index: 3, name: "Miércoles", planet: "Mercury", etymology_type: "planetary_direct",   root: "Latin Mercurii dies — Mercury's day" },
      { day_index: 4, name: "Jueves",    planet: "Jupiter", etymology_type: "planetary_direct",   root: "Latin Jovis dies — Jupiter's day" },
      { day_index: 5, name: "Viernes",   planet: "Venus",   etymology_type: "planetary_direct",   root: "Latin Veneris dies — Venus's day" },
      { day_index: 6, name: "Sábado",    planet: "Saturn",  etymology_type: "sabbath",            root: "Hebrew Shabbat — day of rest (Church replaced Saturni)" },
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
      { day_index: 0, name: "Dimanche",  planet: "Sun",     etymology_type: "liturgical",         root: "Latin Dominica — Lord's Day" },
      { day_index: 1, name: "Lundi",     planet: "Moon",    etymology_type: "planetary_direct",   root: "Latin Lunae dies — Moon's day" },
      { day_index: 2, name: "Mardi",     planet: "Mars",    etymology_type: "planetary_direct",   root: "Latin Martis dies — Mars's day" },
      { day_index: 3, name: "Mercredi",  planet: "Mercury", etymology_type: "planetary_direct",   root: "Latin Mercurii dies — Mercury's day" },
      { day_index: 4, name: "Jeudi",     planet: "Jupiter", etymology_type: "planetary_direct",   root: "Latin Jovis dies — Jupiter's day" },
      { day_index: 5, name: "Vendredi",  planet: "Venus",   etymology_type: "planetary_direct",   root: "Latin Veneris dies — Venus's day" },
      { day_index: 6, name: "Samedi",    planet: "Saturn",  etymology_type: "sabbath",            root: "Hebrew Shabbat — Sabbath tradition" },
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
      { day_index: 0, name: "Domenica",  planet: "Sun",     etymology_type: "liturgical",         root: "Latin Dominica — Lord's Day" },
      { day_index: 1, name: "Lunedì",    planet: "Moon",    etymology_type: "planetary_direct",   root: "Latin Lunae dies — Moon's day" },
      { day_index: 2, name: "Martedì",   planet: "Mars",    etymology_type: "planetary_direct",   root: "Latin Martis dies — Mars's day" },
      { day_index: 3, name: "Mercoledì", planet: "Mercury", etymology_type: "planetary_direct",   root: "Latin Mercurii dies — Mercury's day" },
      { day_index: 4, name: "Giovedì",   planet: "Jupiter", etymology_type: "planetary_direct",   root: "Latin Jovis dies — Jupiter's day" },
      { day_index: 5, name: "Venerdì",   planet: "Venus",   etymology_type: "planetary_direct",   root: "Latin Veneris dies — Venus's day" },
      { day_index: 6, name: "Sabato",    planet: "Saturn",  etymology_type: "sabbath",            root: "Hebrew Shabbat — Sabbath tradition" },
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
      { day_index: 0, name: "Sonntag",    planet: "Sun",     etymology_type: "planetary_direct",   root: "Old High German Sunnūntag — Sun's day",          display_note: "Sonne = Sun — direct" },
      { day_index: 1, name: "Montag",     planet: "Moon",    etymology_type: "planetary_direct",   root: "Old High German Mānetag — Moon's day",           display_note: "Mond = Moon — direct" },
      { day_index: 2, name: "Dienstag",   planet: "Mars",    etymology_type: "norse_substitution", root: "Old High German Zīostag — Ziu/Tyr's day (matched to Mars)", display_note: "Tyr's day via Norse" },
      { day_index: 3, name: "Mittwoch",   planet: "Mercury", etymology_type: "descriptive",        root: "Middle High German Mittewoche — middle of the week (Mercury and Woden both dropped)", display_note: "Middle of the week — planet erased" },
      { day_index: 4, name: "Donnerstag", planet: "Jupiter", etymology_type: "norse_substitution", root: "Old High German Donarestag — Donar/Thor's day (matched to Jupiter)", display_note: "Donner (Thor) = Jupiter" },
      { day_index: 5, name: "Freitag",    planet: "Venus",   etymology_type: "norse_substitution", root: "Old High German Frīatag — Freia/Freya's day (matched to Venus)", display_note: "Freia (Freya) = Venus" },
      { day_index: 6, name: "Samstag",    planet: "Saturn",  etymology_type: "sabbath",            root: "Old High German Sambaztag — from Sabbath tradition", display_note: "Sabbath tradition" },
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
      { day_index: 0, name: "Domingo",       planet: "Sun",     etymology_type: "liturgical", root: "Latin Dominicus — Lord's Day",                                 display_note: "Lord's Day; English keeps the older Sun-day" },
      { day_index: 1, name: "Segunda-feira", planet: "Moon",    etymology_type: "liturgical", root: "Latin secunda feria — second fair/liturgical day (Church week starting Sunday)", display_note: "Second fair / liturgical day" },
      { day_index: 2, name: "Terça-feira",   planet: "Mars",    etymology_type: "liturgical", root: "Latin tertia feria — third fair/liturgical day",               display_note: "Third fair / liturgical day" },
      { day_index: 3, name: "Quarta-feira",  planet: "Mercury", etymology_type: "liturgical", root: "Latin quarta feria — fourth fair/liturgical day",              display_note: "Fourth fair / liturgical day" },
      { day_index: 4, name: "Quinta-feira",  planet: "Jupiter", etymology_type: "liturgical", root: "Latin quinta feria — fifth fair/liturgical day",               display_note: "Fifth fair / liturgical day" },
      { day_index: 5, name: "Sexta-feira",   planet: "Venus",   etymology_type: "liturgical", root: "Latin sexta feria — sixth fair/liturgical day",                display_note: "Sixth fair / liturgical day" },
      { day_index: 6, name: "Sábado",        planet: "Saturn",  etymology_type: "sabbath",    root: "Hebrew Shabbat — day of rest",                                 display_note: "Sabbath / rest tradition" },
    ],
  },
];

/** Languages to display in WeekGrid cards, in column order */
export const GRID_LANG_CODES = ["es", "fr", "it", "de", "pt"] as const;

/** Convenience: look up a specific day entry */
export function getDayEntry(langCode: string, dayIndex: number) {
  return LANGUAGES.find((l) => l.code === langCode)
    ?.days.find((d) => d.day_index === dayIndex);
}
