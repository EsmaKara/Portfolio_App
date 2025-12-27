export const LanguageTags = {
  TR: '🇹🇷',
  EN: '🇺🇸',
  DE: '🇩🇪',
  FR: '🇫🇷',
  ES: '🇪🇸',
  IT: '🇮🇹',
  RU: '🇷🇺',
} as const;

export type LanguageTags = keyof typeof LanguageTags;
