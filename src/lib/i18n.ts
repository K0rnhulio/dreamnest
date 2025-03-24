// Minimal i18n implementation without language switching functionality
import { NextRequest } from 'next/server';

// Define a single language tag
export type AvailableLanguageTag = 'en';
export const availableLanguageTags: AvailableLanguageTag[] = ['en'];
export const sourceLanguageTag: AvailableLanguageTag = 'en';

// Empty middleware for server-side
export const middleware = (request: NextRequest) => {
  return null;
};

// Simple strategy object
const strategy = {
  getLanguageTag: () => 'en' as AvailableLanguageTag,
};

export default strategy;
