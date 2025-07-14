import { defineMiddleware } from 'astro:middleware';

// Define which Russian pages should redirect to English
const RUSSIAN_REDIRECT_PAGES = [
  '/ru/tutorials',
  '/ru/blog',
  '/ru/tutorials/',
  '/ru/blog/'
];

// Define patterns for dynamic routes that should redirect
const RUSSIAN_REDIRECT_PATTERNS = [
  /^\/ru\/tutorials\/.*$/,
  /^\/ru\/blog\/.*$/
];

// Define Chinese pages that should redirect to other pages
const CHINESE_REDIRECT_PAGES = [
  '/cn/plugins-commercial',
  '/cn/plugins-commercial/'
];

// Define English pages that should redirect to other pages
const ENGLISH_REDIRECT_PAGES = [
  '/en/plugins-commercial',
  '/en/plugins-commercial/'
];

// Define Japanese pages that should redirect to other pages
const JAPANESE_REDIRECT_PAGES = [
  '/ja/plugins-commercial',
  '/ja/plugins-commercial/'
];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  
  // Check if the current path is a Russian page that should redirect
  if (RUSSIAN_REDIRECT_PAGES.includes(pathname)) {
    // Redirect to the English version
    const englishPath = pathname.replace('/ru/', '/en/');
    return context.redirect(englishPath, 301); // 301 for permanent redirect
  }
  
  // Check if the current path matches any redirect patterns
  for (const pattern of RUSSIAN_REDIRECT_PATTERNS) {
    if (pattern.test(pathname)) {
      // Redirect to the English version
      const englishPath = pathname.replace('/ru/', '/en/');
      return context.redirect(englishPath, 301); // 301 for permanent redirect
    }
  }
  
  // Check if the current path is a Chinese page that should redirect
  if (CHINESE_REDIRECT_PAGES.includes(pathname)) {
    // Redirect commercial plugins to main plugins page
    if (pathname.includes('/plugins-commercial')) {
      return context.redirect('/cn/plugins', 301); // 301 for permanent redirect
    }
  }
  
  // Check if the current path is an English page that should redirect
  if (ENGLISH_REDIRECT_PAGES.includes(pathname)) {
    // Redirect commercial plugins to main plugins page
    if (pathname.includes('/plugins-commercial')) {
      return context.redirect('/en/plugins', 301); // 301 for permanent redirect
    }
  }
  
  // Check if the current path is a Japanese page that should redirect
  if (JAPANESE_REDIRECT_PAGES.includes(pathname)) {
    // Redirect commercial plugins to main plugins page
    if (pathname.includes('/plugins-commercial')) {
      return context.redirect('/ja/plugins', 301); // 301 for permanent redirect
    }
  }
  
  // Continue with normal request processing
  return next();
}); 