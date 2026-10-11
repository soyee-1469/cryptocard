# Crypto Cards Info: 배포 안내 (개발자용)

`site/` 폴더 전체를 웹서버의 루트(`https://www.cryptocardsinfo.com/`)에 그대로 업로드하면 됩니다.
모든 페이지는 정적 HTML이라 빌드나 서버 렌더링이 필요 없습니다.

## 다국어 구성 (7개 언어)
- 한국어(기본) `/` · 영어 `/en/` · 일본어 `/ja/` · 중국어 `/zh/` · 베트남어 `/vi/` · 태국어 `/th/` · 인도네시아어 `/id/`
- 모든 페이지 우측 상단 언어 버튼으로 같은 페이지의 다른 언어판으로 이동합니다.
- 페이지마다 hreflang 7개 + x-default(한국어)가 있고, sitemap.xml에 119개 URL과 언어 대응 관계가 모두 들어 있습니다.
- 외국어 법적 페이지는 요약 번역본이며 "한국어판 우선" 문구가 표시됩니다.

## 폴더 구조
```
index.html                      홈
crypto-card-recommend/          크립토 카드 추천 2026 (신규)
card-comparison/                카드비교
fee-comparison/                 수수료 항목
card-features-limits/           카드기능 및 한도
cashback-guide/                 캐시백 비교·주의점
card-selection-guide/           카드선택가이드
crypto-tax-2027/                2027 가상자산 과세 (신규)
guide/korea/                    한국에서 크립토카드 사용 (신규)
cards/kast/  cards/etherfi/  cards/anytap/   카드별 리뷰
faq/  about/  disclaimer/  terms/  privacy/
assets/style.css  assets/logo.svg  assets/favicon.svg
assets/cards/*.png              카드 이미지
assets/og/*.png                 페이지별 OG 이미지 (1200×630)
sitemap.xml  robots.txt  rss.xml
```

## 서버 설정
1. `/card-comparison/`처럼 끝에 슬래시가 붙은 주소에서 `index.html`을 내려주도록 설정합니다(대부분 호스팅의 기본값).
2. 슬래시가 없는 `/card-comparison` 주소는 `/card-comparison/`로 301 리다이렉트합니다.
3. `cryptocardsinfo.com`(www 없음)과 `http://` 요청은 `https://www.cryptocardsinfo.com/`으로 301 리다이렉트합니다.
4. **SPA fallback(모든 경로에 같은 index.html을 돌려주는 설정)은 반드시 끕니다.** 진단 보고서에서 지적된 핵심 문제입니다.
5. 존재하지 않는 주소는 404 상태 코드로 응답합니다.
6. 기존 OKX·RedotPay 리뷰 페이지가 운영 중이었다면 `/card-comparison/`로 301 리다이렉트합니다.

## 업로드 후 네이버 서치어드바이저에서 할 일
1. 사이트맵 제출: `https://www.cryptocardsinfo.com/sitemap.xml`
2. RSS 제출: `https://www.cryptocardsinfo.com/rss.xml`
3. 주요 URL 수집 요청: 홈, `/crypto-card-recommend/`, `/card-comparison/`, `/fee-comparison/`, `/crypto-tax-2027/`
4. '웹 페이지 최적화' 점검에서 title, description, 본문이 인식되는지 확인합니다.
5. 기존 소유확인 메타태그(네이버·구글)를 쓰고 있었다면 `index.html`의 `<head>`에 다시 넣어야 합니다. 또는 HTML 파일 인증 방식을 씁니다.

## 내용을 수정할 때
- 글은 `site-src/content.js`에서 관리합니다. 수정한 뒤 다시 생성해야 합니다.
- 수정일(`updated`)은 내용이 실제로 바뀐 경우에만 변경합니다. 사이트맵의 `lastmod`와 Article 스키마의 `dateModified`에 함께 반영됩니다.
- 외부 의존 리소스는 Pretendard 웹폰트(jsdelivr CDN) 하나뿐입니다. 자체 호스팅하려면 각 HTML의 `<link>`를 바꿉니다.

## 원본 파일 (_build-source/)
- `content.js`(한국어), `content-en.js` 등 언어별 원고와 생성기 `build.js`가 들어 있습니다. robots.txt로 수집을 막아 두었고, 서버에 올리지 않아도 됩니다.
- JS 환경에서 `build({ko, en, ja, zh, vi, th, id}, ['ko','en','ja','zh','vi','th','id'])`를 실행하면 경로별 HTML이 반환됩니다.
- 수수료·한도 같은 수치를 바꿀 때는 7개 언어 파일을 모두 수정해야 합니다.
