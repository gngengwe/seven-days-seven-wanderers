export type Planet =
  | "Sun"
  | "Moon"
  | "Mars"
  | "Mercury"
  | "Jupiter"
  | "Venus"
  | "Saturn"
  | "none";

export type EtymologyType =
  | "planetary_direct"    // Romance: Lunes from Luna
  | "norse_substitution"  // EN/DE: Tuesday from Tyr (Mars equivalent)
  | "liturgical"          // PT/ES/FR/IT Sunday, PT Mon–Fri
  | "descriptive"         // DE: Mittwoch (middle of week — no god, no planet)
  | "sabbath"             // Sábado, Samedi, Saturday, Samstag
  | "other";

/** 0 = Sunday, 1 = Monday … 6 = Saturday */
export type DayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface DayEntry {
  day_index: DayIndex;
  name: string;
  planet: Planet;
  etymology_type: EtymologyType;
  root: string;
  display_note?: string; // short note shown in WeekGrid card
  detail?: string;       // longer explainer for LanguageDiscovery section
}

export interface LanguageEntry {
  code: string;          // BCP 47 (e.g. "es", "pt", "de")
  name: string;          // English name
  native_name: string;   // name in the language itself
  family: string;        // language family
  week_start: 0 | 1;     // 0 = Sunday, 1 = Monday
  days: DayEntry[];      // exactly 7 entries, ordered by day_index
  verified?: boolean;
  contributor?: string;
}
