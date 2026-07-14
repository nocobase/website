// Schema.org JSON-LD generators — the single source of truth for the site's
// structured data. Values here must stay consistent with page-visible content
// (Google requires structured data to describe what users actually see).

const SITE_URL = 'https://www.nocobase.com';
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SOFTWARE_ID = `${SITE_URL}/#software`;

const SAME_AS = [
  'https://github.com/nocobase/nocobase',
  'https://www.linkedin.com/company/nocobase',
  'https://www.producthunt.com/products/nocobase',
  'https://www.youtube.com/@nocobase',
  'https://x.com/nocobase',
];

// Our locale codes -> BCP-47 language tags, matching the hreflang region casing.
const LANG_MAP: Record<string, string> = {
  en: 'en-US', cn: 'zh-CN', tw: 'zh-TW', ja: 'ja-JP', fr: 'fr-FR',
  es: 'es-ES', de: 'de-DE', pt: 'pt-BR', id: 'id-ID', vi: 'vi-VN',
};

export function schemaLang(locale: string): string {
  return LANG_MAP[locale] || 'en-US';
}

function absUrl(u?: string): string | undefined {
  if (!u) return undefined;
  if (u.startsWith('http')) return u;
  return `${SITE_URL}${u.startsWith('/') ? '' : '/'}${u}`;
}

// Recursively drop undefined / null / empty values so JSON-LD never carries
// dangling keys (e.g. "image": undefined).
export function removeUndefined(obj: any): any {
  if (Array.isArray(obj)) {
    const arr = obj.map(removeUndefined).filter((v) => v !== undefined && v !== null && v !== '');
    return arr.length ? arr : undefined;
  }
  if (obj && typeof obj === 'object') {
    const out: Record<string, any> = {};
    for (const [k, v] of Object.entries(obj)) {
      const cleaned = removeUndefined(v);
      if (cleaned !== undefined && cleaned !== null && cleaned !== '') out[k] = cleaned;
    }
    return Object.keys(out).length ? out : undefined;
  }
  return obj;
}

function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'NocoBase',
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo.png`,
      width: 320,
      height: 47,
    },
    foundingDate: '2021',
    description:
      'NocoBase is an open-source, self-hosted AI no-code platform for building reliable business systems, internal tools, workflows, and enterprise applications.',
    sameAs: SAME_AS,
    knowsAbout: [
      'AI no-code platform', 'open-source no-code', 'low-code development',
      'internal tools', 'workflow automation', 'role-based access control',
      'self-hosted business applications', 'AI agents', 'enterprise applications',
    ],
  };
}

function websiteNode(locale: string) {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'NocoBase',
    url: `${SITE_URL}/`,
    publisher: { '@id': ORG_ID },
    inLanguage: schemaLang(locale),
  };
}

function softwareNode() {
  return {
    '@type': 'SoftwareApplication',
    '@id': SOFTWARE_ID,
    name: 'NocoBase',
    url: `${SITE_URL}/`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Self-hosted, Docker, Linux, macOS, Windows',
    description:
      'NocoBase is an open-source AI no-code platform for building business systems, internal tools, workflows, CRM, ERP, and enterprise applications.',
    creator: { '@id': ORG_ID },
    sameAs: ['https://github.com/nocobase/nocobase'],
  };
}

type Crumb = { name: string; url?: string };

function breadcrumbNode(items: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      // The last (current) crumb may omit `item`.
      item: absUrl(item.url),
    })),
  };
}

// Homepage entity anchor: Organization + WebSite + SoftwareApplication.
export function generateHomeSchema(locale: string) {
  return removeUndefined({
    '@context': 'https://schema.org',
    '@graph': [organizationNode(), websiteNode(locale), softwareNode()],
  });
}

type ContentOpts = {
  locale: string;
  url: string;
  title: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  image?: string;
  tags?: string[];
  breadcrumbs: Crumb[];
};

// Blog detail: BlogPosting + BreadcrumbList.
export function generateBlogPostingSchema(o: ContentOpts) {
  const pageUrl = absUrl(o.url)!;
  return removeUndefined({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${pageUrl}#blogposting`,
        headline: o.title,
        description: o.description,
        url: pageUrl,
        datePublished: o.datePublished,
        dateModified: o.dateModified || o.datePublished,
        inLanguage: schemaLang(o.locale),
        keywords: o.tags,
        about: o.tags,
        author: o.author ? { '@type': 'Person', name: o.author } : { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
        image: o.image ? { '@type': 'ImageObject', url: absUrl(o.image) } : undefined,
      },
      breadcrumbNode(o.breadcrumbs),
    ],
  });
}

// AI Blueprint (light solution) detail: Article + SoftwareApplication + BreadcrumbList.
export function generateBlueprintSchema(o: ContentOpts) {
  const pageUrl = absUrl(o.url)!;
  return removeUndefined({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: o.title,
        description: o.description,
        url: pageUrl,
        datePublished: o.datePublished,
        dateModified: o.dateModified || o.datePublished,
        inLanguage: schemaLang(o.locale),
        author: o.author ? { '@type': 'Organization', name: o.author } : { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
        image: o.image ? { '@type': 'ImageObject', url: absUrl(o.image) } : undefined,
        about: o.tags,
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${pageUrl}#software`,
        name: o.title,
        url: pageUrl,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Self-hosted, Web',
        description: o.description,
        creator: { '@id': ORG_ID },
        isBasedOn: { '@id': SOFTWARE_ID },
      },
      breadcrumbNode(o.breadcrumbs),
    ],
  });
}
