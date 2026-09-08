# CryptoCard

암호화폐를 충전하고 전 세계 가맹점에서 결제하는 **CryptoCard** 웹 서비스입니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

## 페이지

| 경로 | 설명 |
| --- | --- |
| `/` | 랜딩 — 카드 소개, 특징, 이용 방법 |
| `/apply` | 카드 신청 폼 (유효성 검사 + 접수 완료 화면) |
| `/about` | 서비스 소개 |
| `/faq` | 자주 묻는 질문 |

## 스택

Next.js · React · TypeScript · Tailwind CSS

## 웹 배포 (Vercel)

`main`에 푸시하면 Vercel이 자동 배포하도록 GitHub와 연결하면 됩니다.

### 최초 1회

1. https://vercel.com 로그인
2. **Add New Project** → GitHub `soyee-1469/cryptocard` Import
3. Framework: **Next.js** (자동 감지)
4. Deploy

이후부터는 `main` 푸시만 하면 자동 반영됩니다.  
연결 확인: Vercel 프로젝트 → **Settings → Git**
