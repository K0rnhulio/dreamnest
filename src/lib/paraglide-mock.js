'use client';

// Mock implementation of Paraglide runtime
export const sourceLanguageTag = 'en';
export const availableLanguageTags = ['en'];
export const languageTag = () => 'en';
export const setLanguageTag = (fn) => {};
export const isAvailableLanguageTag = (tag) => tag === 'en';

// Type definition for TypeScript
/**
 * @typedef {'en'} AvailableLanguageTag
 */

// Export the type for TypeScript
export const AvailableLanguageTag = /** @type {const} */ ('en');
