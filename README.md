# cryptocard

GitHub에 올린 ZIP(`크립토카드 뉴스 사이트 제작.zip`)을 풀어서 그대로 배포합니다. HTML·JSON·이미지 내용은 수정하지 않았습니다.

- `/` — CryptoCardsInfo (`CryptoCardInfo.dc.html`과 동일한 `index.html`)
- `/크립토카드 뉴스.dc.html` — 뉴스 사이트
- `/Crypto Cards Info.html` — 업로드된 번들 HTML

## 로컬

```bash
npx --yes serve -l 3000
```

## Vercel

1. https://vercel.com 로그인
2. **Add New Project** → GitHub `soyee-1469/cryptocard` Import
3. Framework: **Other** (정적 파일)
4. Deploy
