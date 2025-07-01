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
  
  // Continue with normal request processing
  return next();
}); 