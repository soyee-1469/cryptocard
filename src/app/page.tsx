import Link from "next/link";
import { CryptoCardVisual } from "@/components/CryptoCardVisual";

const FEATURES = [
  {
    title: "가상·실물 카드",
    body: "신청 즉시 가상 카드를 발급하고, 메탈 실물 카드는 2–5일 내 배송됩니다.",
  },
  {
    title: "주요 암호화폐 충전",
    body: "USDT, USDC, BTC, ETH를 충전하면 결제 시 자동으로 법정화폐로 전환됩니다.",
  },
  {
    title: "투명한 수수료",
    body: "숨은 비용 없이 충전·환전·해외 결제 수수료를 신청 전에 확인할 수 있습니다.",
  },
  {
    title: "언제든 잠금",
    body: "분실·의심 거래가 생기면 앱에서 즉시 카드를 잠그고 재발급할 수 있습니다.",
  },
];

const STEPS = [
  { n: "01", title: "신청", body: "이메일과 기본 정보로 1분 만에 신청합니다." },
  { n: "02", title: "확인", body: "본인 확인이 끝나면 가상 카드가 바로 열립니다." },
  { n: "03", title: "충전", body: "보유한 암호화폐를 CryptoCard 잔액으로 옮깁니다." },
  { n: "04", title: "결제", body: "온·오프라인 Visa 가맹점에서 바로 사용하세요." },
];

const STATS = [
  { value: "170+", label: "지원 국가" },
  { value: "4", label: "충전 가능한 자산" },
  { value: "24/7", label: "고객 지원" },
  { value: "2–5일", label: "실물 카드 배송" },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(228,197,107,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(62,224,196,0.08),transparent_28%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-display text-xs tracking-[0.28em] text-teal">
              CRYPTO · SPEND ANYWHERE
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              암호화폐로 충전하고
              <span className="mt-2 block text-gold">전 세계에서 결제하세요</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/65">
              CryptoCard는 스테이블코인과 메이저 코인을 일상 결제로 바꿔 주는
              암호화폐 선불 카드입니다. 해외 쇼핑, 여행, 구독 결제에 맞춰
              설계했습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-semibold text-[#1a1406] hover:bg-gold-strong"
              >
                카드 신청하기
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 items-center rounded-full border border-white/15 px-6 text-sm text-white/80 hover:border-white/40 hover:text-white"
              >
                서비스 소개
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <CryptoCardVisual />
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0b1220]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl text-gold sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="text-3xl font-semibold tracking-tight">왜 CryptoCard인가</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
          거래소 출금만으로는 부족한 순간을 위해, 잔액을 카드 한 장으로
          꺼낼 수 있게 만들었습니다.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold text-gold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0b1220]">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <h2 className="text-3xl font-semibold tracking-tight">이용 방법</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.n} className="rounded-2xl border border-white/8 p-5">
                <p className="font-display text-sm text-teal">{step.n}</p>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="overflow-hidden rounded-[28px] border border-gold/20 bg-[linear-gradient(135deg,#16110a,#0d1b2a_55%,#0a2a28)] px-6 py-12 sm:px-12">
          <h2 className="text-3xl font-semibold">지금 바로 가상 카드를 열어보세요</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
            신청서를 제출하면 검토 후 가상 카드 번호를 발급합니다. 실물 메탈
            카드는 원하는 경우에만 추가로 배송됩니다.
          </p>
          <Link
            href="/apply"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-semibold text-[#1a1406] hover:bg-gold-strong"
          >
            1분 만에 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
}
