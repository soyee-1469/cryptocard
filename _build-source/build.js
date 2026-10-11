// Static site generator for Crypto Cards Info.
// Usage (any JS runtime): build(contentByLang, langOrder) -> { "path/index.html": "<html…>", ... }
var KO_UI = { lang:"ko", label:"한국어", ogLocale:"ko_KR", skip:"본문 바로가기", tag:"크립토카드 비교·정보", home:"홈", cmpCrumb:"카드비교", guideCrumb:"카드선택가이드", why:"추천 근거", caution:"주의점", review:"{n} 리뷰 보기 →", imgAlt:"{n} 크립토카드 실물 이미지", hint:"← 표를 좌우로 밀어서 보세요 →", lc:"캐시백 전용 카드", lf:"기능성 전문 카드", footBrand:"크립토카드의 비용·한도·기능·캐시백 조건을 같은 기준으로 정리하는 정보 사이트입니다.", updated:"최종 갱신 2026년 10월 11일", kastCap:"KAST Visa Platinum 카드 (Standard 등급)", menu:"주 메뉴", here:"현재 위치", prevail:"" };
var FONTS = {
  ko: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css",
  ja: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;800&display=swap",
  zh: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;800&display=swap",
  th: "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;700;800&display=swap"
};
var FAMILY = { ja:"'Noto Sans JP',", zh:"'Noto Sans SC',", th:"'Noto Sans Thai'," };

function build(ALL, ORDER) {
  var out = {};
  var esc = function (s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); };
  var origin = ALL.ko.site.origin;
  var absUrl = function (lang, slug) { return origin + '/' + (lang === 'ko' ? '' : lang + '/') + (slug ? slug + '/' : ''); };

  ORDER.forEach(function (lang) {
    var C = ALL[lang], S = C.site, U = Object.assign({}, KO_UI, C.ui || {});
    C.pages.forEach(function (p) {
      var depth = (lang === 'ko' ? 0 : 1) + (p.slug ? p.slug.split('/').length : 0);
      var root = '../'.repeat(depth);
      var A = root + 'assets/';
      var LL = function (lg, slug) { return root + (lg === 'ko' ? '' : lg + '/') + (slug ? slug + '/' : '') + 'index.html'; };
      var L = function (slug) { return LL(lang, slug); };
      var rich = function (s) { return String(s).replace(/\{\{([^|}]+)\|([^}]+)\}\}/g, function (m, sl, tx) { return '<a href="' + L(sl) + '">' + tx + '</a>'; }); };
      var plain = function (s) { return String(s).replace(/\{\{([^|}]+)\|([^}]+)\}\}/g, '$2').replace(/<[^>]+>/g, ''); };
      var navH = S.nav.map(function (n) { return '<a href="' + L(n[0]) + '"' + (n[0] === p.slug ? ' aria-current="page"' : '') + '>' + n[1] + '</a>'; }).join('');
      var langH = ORDER.map(function (lg) { var u = Object.assign({}, KO_UI, ALL[lg].ui || {}); return '<a href="' + LL(lg, p.slug) + '" hreflang="' + lg + '" lang="' + lg + '"' + (lg === lang ? ' aria-current="true"' : '') + '>' + u.label + '</a>'; }).join('');

      var crumbs = [['', U.home]];
      if (p.slug.indexOf('cards/') === 0) crumbs.push(['card-comparison', U.cmpCrumb]);
      if (p.slug.indexOf('guide/') === 0) crumbs.push(['card-selection-guide', U.guideCrumb]);
      if (p.slug) crumbs.push([p.slug, p.h1.split(' — ')[0]]);

      var sec = function (s) {
        var head = s.title ? '<div class="sec-h"><h2>' + s.title + '</h2>' + (s.sub ? '<p>' + rich(s.sub) + '</p>' : '') + '</div>' : '';
        var b = '';
        if (s.k === 'text') b = '<div class="prose">' + s.p.map(function (x) { return '<p>' + rich(x) + '</p>'; }).join('') + '</div>';
        if (s.k === 'notice') b = '<aside class="notice ' + (s.tone === 'warn' ? 'warn' : '') + '"><div class="lbl">' + s.label + '</div>' + s.p.map(function (x) { return '<p>' + rich(x) + '</p>'; }).join('') + '</aside>';
        if (s.k === 'alert') b = '<aside class="alert" role="note"><div class="lbl">' + s.label + '</div><p class="big">' + s.big + '</p>' + s.p.map(function (x) { return '<p>' + rich(x) + '</p>'; }).join('') + '</aside>';
        if (s.k === 'compare2') b = '<div class="c2">' + s.cols.map(function (c) { return '<div class="col ' + c.tone + '"><div class="col-h">' + c.label + '</div><div class="col-b"><h3>' + c.t + '</h3><ul>' + c.items.map(function (i) { return '<li>' + rich(i) + '</li>'; }).join('') + '</ul>' + (c.note ? '<p class="note">' + rich(c.note) + '</p>' : '') + '</div></div>'; }).join('') + '</div>';
        if (s.k === 'cards') b = '<div class="cards">' + s.items.map(function (k) { var c = C.cards[k]; return '<article class="card"><div class="im"><img src="' + A + 'cards/' + c.img + '" alt="' + esc(U.imgAlt.replace('{n}', c.name)) + '" width="720" height="430" loading="lazy"></div><div class="bd"><h3>' + c.name + '</h3><span class="tag ' + (c.tone === 'func' ? 'func' : '') + '">' + c.type + '</span><dl>' + c.rows.map(function (r) { return '<div><dt>' + r[0] + '</dt><dd>' + r[1] + '</dd></div>'; }).join('') + '</dl></div><p class="sum">' + c.sum + '</p><a class="more" href="' + L(c.href) + '">' + U.review.replace('{n}', c.name) + '</a></article>'; }).join('') + '</div>';
        if (s.k === 'links') b = '<div class="links">' + s.items.map(function (i) { return '<a href="' + L(i[0]) + '"><div class="k">' + i[1] + '</div><div class="t">' + i[2] + '</div><div class="d">' + i[3] + '</div></a>'; }).join('') + '</div>';
        if (s.k === 'table') {
          var tint = s.tint || [];
          b = (s.head.length > 2 ? '<p class="tw-hint">' + U.hint + '</p>' : '') + '<div class="tw"><table><thead><tr>' + s.head.map(function (h, i) { return '<th scope="col"' + (tint[i] ? ' class="' + tint[i] + '"' : '') + '>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' + s.rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return i === 0 ? '<th scope="row">' + esc(c) + '</th>' : '<td' + (tint[i] ? ' class="' + tint[i] + '"' : '') + '>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
          if (s.legend) b += '<div class="legend"><span><i class="lc"></i>' + U.lc + '</span><span><i class="lf"></i>' + U.lf + '</span></div><p class="legend-why">' + C.legend + '</p>';
          (s.notes || []).forEach(function (n) { b += '<p class="tnote">' + rich(n) + '</p>'; });
        }
        if (s.k === 'steps') b = '<ol class="steps">' + s.items.map(function (i) { return '<li><b>' + i.t + '</b>' + (i.d ? '<span>' + i.d + '</span>' : '') + '</li>'; }).join('') + '</ol>';
        if (s.k === 'grid') b = '<div class="grid3">' + s.items.map(function (i, n) { return '<div class="it"><h3>' + (s.numbered ? '<span class="n">' + (n + 1) + '</span>' : '') + i.t + '</h3><p>' + i.d + '</p></div>'; }).join('') + '</div>';
        if (s.k === 'list') b = '<div class="list">' + s.items.map(function (i) { return '<div class="it"><h3>' + i.t + '</h3><p>' + i.d + '</p></div>'; }).join('') + '</div>';
        if (s.k === 'articles') b = '<div class="arts">' + s.items.map(function (a) { return '<section><h3>' + a.t + '</h3>' + a.p.map(function (x) { return '<p>' + rich(x) + '</p>'; }).join('') + '</section>'; }).join('') + '</div>';
        if (s.k === 'faq') b = '<div class="faq">' + s.items.map(function (f, i) { return '<details' + (i < 3 ? ' open' : '') + '><summary>' + f[0] + '</summary><p>' + rich(f[1]) + '</p></details>'; }).join('') + '</div>';
        if (s.k === 'picks') b = '<div class="picks">' + s.items.map(function (it) { return '<article class="pick ' + it.tone + '"><div class="use">' + it.use + '</div><div class="pb"><h3>' + it.pick + '</h3><h4>' + U.why + '</h4><ul>' + it.why.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul><h4 class="c">' + U.caution + '</h4><ul>' + it.caution.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div><a class="go" href="' + L('cards/' + it.card) + '">' + U.review.replace('{n}', it.pick) + '</a></article>'; }).join('') + '</div>';
        if (s.k === 'branch') b = '<div class="branch"><div class="root">' + s.root + '</div><div class="vl"></div><div class="bs">' + s.branches.map(function (x) { return '<div class="b"><div class="vl"></div><div class="q">' + x.q + '</div><div class="vl"></div><a class="a" href="' + L(x.href) + '"><strong>' + x.card + '</strong><span>' + x.d + '</span></a></div>'; }).join('') + '</div><p class="foot">' + s.foot + '</p></div>';
        if (s.k === 'split') b = '<div class="split">' + s.cols.map(function (c) { return '<div class="col"><div class="col-h">' + c.t + '</div><ol>' + c.steps.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol><p>' + c.note + '</p></div>'; }).join('') + '</div>';
        return '<section class="sec">' + head + b + '</section>';
      };

      var ld = [{ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement: crumbs.map(function (c, i) { return { "@type":"ListItem", position:i + 1, name:c[1], item:absUrl(lang, c[0]) }; }) }];
      if (!p.slug) {
        ld.push({ "@context":"https://schema.org", "@type":"WebSite", name:S.name, url:absUrl(lang, ''), inLanguage:lang });
        ld.push({ "@context":"https://schema.org", "@type":"Organization", name:S.name, url:origin + '/', logo:origin + '/assets/logo.svg' });
      }
      if (p.type === 'article') ld.push({ "@context":"https://schema.org", "@type":"Article", headline:p.h1, description:p.desc, inLanguage:lang, datePublished:"2026-09-06", dateModified:S.updated, mainEntityOfPage:absUrl(lang, p.slug), image:origin + '/assets/og/' + p.og + '.png', author:{ "@type":"Organization", name:S.name }, publisher:{ "@type":"Organization", name:S.name, logo:{ "@type":"ImageObject", url:origin + '/assets/logo.svg' } } });
      if (p.faqSchema) {
        var qs = []; p.sections.forEach(function (s) { if (s.k === 'faq') qs = qs.concat(s.items); });
        ld.push({ "@context":"https://schema.org", "@type":"FAQPage", mainEntity: qs.map(function (q) { return { "@type":"Question", name:q[0], acceptedAnswer:{ "@type":"Answer", text:plain(q[1]) } }; }) });
      }
      var hreflang = ORDER.map(function (lg) { return '<link rel="alternate" hreflang="' + lg + '" href="' + absUrl(lg, p.slug) + '">'; }).join('\n') + '\n<link rel="alternate" hreflang="x-default" href="' + absUrl('ko', p.slug) + '">';
      var footG = S.footGroups.map(function (g) { return '<nav aria-label="' + g[0] + '"><h2>' + g[0] + '</h2><ul>' + g[1].map(function (i) { return '<li><a href="' + L(i[0]) + '">' + i[1] + '</a></li>'; }).join('') + '</ul></nav>'; }).join('');
      var kastHero = p.card === 'kast' ? '<figure class="kast-hero"><img src="' + A + 'cards/kast.png" alt="' + esc(U.kastCap) + '" width="800" height="470"><figcaption>' + U.kastCap + '</figcaption></figure>' : '';
      var fontLink = FONTS[lang] ? '<link rel="stylesheet" href="' + FONTS[lang] + '">\n' : '';
      if (lang !== 'ko') fontLink = '<link rel="stylesheet" href="' + FONTS.ko + '">\n' + fontLink;
      var famStyle = FAMILY[lang] ? '<style>body{font-family:' + FAMILY[lang] + '"Pretendard Variable",Pretendard,-apple-system,BlinkMacSystemFont,sans-serif}</style>\n' : '';

      var html = '<!DOCTYPE html>\n<html lang="' + lang + '">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<meta name="theme-color" content="#FFFFFF">\n<meta name="format-detection" content="telephone=no">\n' +
        '<title>' + esc(p.title) + '</title>\n<meta name="description" content="' + esc(p.desc) + '">\n<meta name="robots" content="index,follow">\n<link rel="canonical" href="' + absUrl(lang, p.slug) + '">\n' + hreflang + '\n' +
        '<meta property="og:type" content="' + (p.type === 'article' ? 'article' : 'website') + '">\n<meta property="og:site_name" content="' + S.name + '">\n<meta property="og:locale" content="' + U.ogLocale + '">\n<meta property="og:title" content="' + esc(p.title) + '">\n<meta property="og:description" content="' + esc(p.desc) + '">\n<meta property="og:url" content="' + absUrl(lang, p.slug) + '">\n<meta property="og:image" content="' + origin + '/assets/og/' + p.og + '.png">\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n' +
        (p.type === 'article' ? '<meta property="article:modified_time" content="' + S.updated + '">\n' : '') + '<meta name="twitter:card" content="summary_large_image">\n' +
        (lang === 'ko' ? '<link rel="alternate" type="application/rss+xml" title="' + S.name + '" href="' + origin + '/rss.xml">\n' : '') +
        '<link rel="icon" href="' + A + 'favicon.svg" type="image/svg+xml">\n' + fontLink + '<link rel="stylesheet" href="' + A + 'style.css">\n' + famStyle +
        ld.map(function (o) { return '<script type="application/ld+json">' + JSON.stringify(o) + '</script>'; }).join('\n') + '\n</head>\n<body>\n' +
        '<a class="skip" href="#main">' + U.skip + '</a>\n<header class="hd">\n<div class="wrap">\n<div class="hd-top"><a class="logo" href="' + L('') + '" aria-label="' + S.name + '"><img src="' + A + 'logo.svg" alt="' + S.name + '" width="300" height="42"></a><span class="hd-tag">' + U.tag + '</span><nav class="langs" aria-label="Language">' + langH + '</nav></div>\n<nav class="nav" aria-label="' + U.menu + '">' + navH + '</nav>\n</div>\n</header>\n' +
        '<main id="main" class="wrap">\n' +
        (p.slug ? '<nav class="crumb" aria-label="' + U.here + '"><ol>' + crumbs.map(function (c, i) { return i === crumbs.length - 1 ? '<li aria-current="page">' + c[1] + '</li>' : '<li><a href="' + L(c[0]) + '">' + c[1] + '</a></li>'; }).join('') + '</ol></nav>\n' : '') +
        '<section class="hero">\n<h1>' + p.h1 + '</h1>\n' + (p.subHtml ? '<p class="sub">' + p.subHtml + '</p>\n' : p.sub ? '<p class="sub">' + p.sub + '</p>\n' : '') + '<p class="lead">' + rich(p.lead) + '</p>\n' + (p.redLine ? '<p class="redline">' + p.redLine + '</p>\n' : '') + (p.stamp ? '<p class="stamp">' + p.stamp + '</p>\n' : '') + kastHero + '</section>\n' +
        p.sections.map(sec).join('\n') + '\n</main>\n' +
        '<footer class="ft">\n<div class="wrap ft-in">\n<div class="ft-grid"><div class="ft-brand"><img src="' + A + 'logo.svg" alt="' + S.name + '" width="240" height="34"><p>' + U.footBrand + '</p></div>' + footG + '</div>\n<p class="ft-note">' + S.footNotice + (U.prevail ? ' ' + U.prevail : '') + '</p>\n<div class="ft-bot"><span>© 2026 Crypto Cards Info</span><span>' + U.updated + ' · www.cryptocardsinfo.com</span></div>\n</div>\n</footer>\n</body>\n</html>\n';
      out[(lang === 'ko' ? '' : lang + '/') + (p.slug ? p.slug + '/' : '') + 'index.html'] = html;
    });
  });

  // sitemap
  var urls = [];
  ORDER.forEach(function (lang) { ALL[lang].pages.forEach(function (p) {
    urls.push('  <url>\n    <loc>' + absUrl(lang, p.slug) + '</loc>\n    <lastmod>' + ALL.ko.site.updated + '</lastmod>\n' + ORDER.map(function (lg) { return '    <xhtml:link rel="alternate" hreflang="' + lg + '" href="' + absUrl(lg, p.slug) + '"/>'; }).join('\n') + '\n    <xhtml:link rel="alternate" hreflang="x-default" href="' + absUrl('ko', p.slug) + '"/>\n  </url>');
  }); });
  out['sitemap.xml'] = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + urls.join('\n') + '\n</urlset>\n';
  return out;
}
