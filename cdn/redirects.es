# =====================================================================
# nocode.nocobase.com redirects (Aliyun CDN EdgeScript)
#
# The site is static files on OSS. The redirects src/middleware.ts made
# while the site was rendered on request are made here, at the edge,
# before the request reaches the bucket. This file is the source of
# truth: the CDN console holds a copy (rule nocode_redirects, position
# head). Change it here and paste it into the console in the same go.
#
# Not here:
# - Blog posts that moved to www.nocobase.com: which posts moved
#   depends on the content of each build, so the build writes a page
#   with a canonical link and a meta refresh in their place
#   (src/build/static-site.ts).
# - URLs that answer 404 (the blog outside en/cn/ja, AI Blueprints,
#   internal tags): the build writes no page for them.
#
# Every redirect is a 301 and keeps the query string. First match
# wins: every rule checks not(handled) and sets handled = true.
# =====================================================================

handled = false
site = 'https://nocode.nocobase.com'
www = 'https://www.nocobase.com'

# The query string with its '?', or '' (the group always matches).
q = get(capture_re($request_uri, '^[^?]*(.*)$'), 1)

# ---------------------------------------------------------------------
# 0. Russian was dropped: read /ru/* as its English path, so each rule
#    below answers with a single 301 to the final URL. A Russian URL no
#    rule claims goes to its English twin at the end.
# ---------------------------------------------------------------------
p = $uri
ru = false
if match_re($uri, '^/ru/?$') {
    p = '/en'
    ru = true
}
if match_re($uri, '^/ru/') {
    p = concat('/en/', get(capture_re($uri, '^/ru/(.*)$'), 1))
    ru = true
}

# ---------------------------------------------------------------------
# 1. The community moved to the forum
# ---------------------------------------------------------------------
if and(not(handled), match_re(p, '^/[a-z]{2}/community/?$')) {
    rewrite('https://forum.nocobase.com/', 'enhance_redirect', 301)
    handled = true
}

# ---------------------------------------------------------------------
# 2. Pages now on www.nocobase.com (src/utils/moved-to-www.ts)
# ---------------------------------------------------------------------
if and(not(handled), match_re(p, '^/(en|cn)/(partner|find-partner|contact)/?$')) {
    m = capture_re(p, '^/(en|cn)/([a-z-]+)/?$')
    prefix = '/zh-CN'
    if match_re(get(m, 1), '^en$') {
        prefix = ''
    }
    rewrite(concat(www, prefix, '/', get(m, 2), '/', q), 'enhance_redirect', 301)
    handled = true
}
# Blog index and the old categories -> blog list; customer stories -> customers list
if and(not(handled), match_re(p, '^/(en|cn)/blog(/(release-notes|tech-tutorials|no-code-insights|nocode-news|nocobase-tutorials|task-management|serials-title|news-updates|nocobase-stories))?/?$')) {
    prefix = '/zh-CN'
    if match_re(p, '^/en/') {
        prefix = ''
    }
    rewrite(concat(www, prefix, '/blog/', q), 'enhance_redirect', 301)
    handled = true
}
if and(not(handled), match_re(p, '^/(en|cn)/blog/(tags/)?customer-stories/?$')) {
    prefix = '/zh-CN'
    if match_re(p, '^/en/') {
        prefix = ''
    }
    rewrite(concat(www, prefix, '/customers/', q), 'enhance_redirect', 301)
    handled = true
}

# ---------------------------------------------------------------------
# 3. Pricing -> commercial
# ---------------------------------------------------------------------
if and(not(handled), match_re(p, '^/pricing/?$')) {
    rewrite(concat(site, '/en/commercial', q), 'enhance_redirect', 301)
    handled = true
}
if and(not(handled), match_re(p, '^/(en|cn|tw|ja|fr|es|de|pt|id|vi)/pricing/?$')) {
    m = capture_re(p, '^/([a-z]+)/')
    rewrite(concat(site, '/', get(m, 1), '/commercial', q), 'enhance_redirect', 301)
    handled = true
}

# ---------------------------------------------------------------------
# 4. Module pages moved under all-in-one
# ---------------------------------------------------------------------
if and(not(handled), match_re(p, '^/[a-z]{2}/solutions/(sales|asset|hr)-management/?$')) {
    m = capture_re(p, '^/([a-z]+)/solutions/([a-z]+)-management/?$')
    rewrite(concat(site, '/', get(m, 1), '/solutions/all-in-one/', get(m, 2), q), 'enhance_redirect', 301)
    handled = true
}

# ---------------------------------------------------------------------
# 5. Tutorials -> the v2 tutorials on nocode.docs.nocobase.com
#    (English has no prefix there; tw falls back to cn)
# ---------------------------------------------------------------------
if and(not(handled), match_re(p, '^/en/tutorials(/.*)?$')) {
    rewrite('https://nocode.docs.nocobase.com/tutorials/v2/', 'enhance_redirect', 301)
    handled = true
}
if and(not(handled), match_re(p, '^/tw/tutorials(/.*)?$')) {
    rewrite('https://nocode.docs.nocobase.com/cn/tutorials/v2/', 'enhance_redirect', 301)
    handled = true
}
if and(not(handled), match_re(p, '^/(cn|ja|fr|es|de|pt|id|vi)/tutorials(/.*)?$')) {
    m = capture_re(p, '^/([a-z]+)/')
    rewrite(concat('https://nocode.docs.nocobase.com/', get(m, 1), '/tutorials/v2/'), 'enhance_redirect', 301)
    handled = true
}

# ---------------------------------------------------------------------
# 6. Commercial plugins -> plugins
# ---------------------------------------------------------------------
if and(not(handled), match_re(p, '^/(en|cn|ja)/plugins-commercial/?$')) {
    m = capture_re(p, '^/([a-z]+)/')
    rewrite(concat(site, '/', get(m, 1), '/plugins', q), 'enhance_redirect', 301)
    handled = true
}

# ---------------------------------------------------------------------
# 7. Any other Russian URL -> its English twin
# ---------------------------------------------------------------------
if and(not(handled), ru) {
    rewrite(concat(site, p, q), 'enhance_redirect', 301)
    handled = true
}
