import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
};

const FAQS = [
  {
    q: "어떤 자산으로 충전할 수 있나요?",
    a: "현재 USDT, USDC, BTC, ETH 충전을 기준으로 설계되어 있습니다. 결제 시점에는 가맹점 통화로 전환됩니다.",
  },
  {
    q: "실물 카드 없이 바로 쓸 수 있나요?",
    a: "가능합니다. 가상 카드를 먼저 발급하면 온라인 결제에 바로 사용할 수 있고, 실물 카드는 선택 사항입니다.",
  },
  {
    q: "수수료는 어떻게 보나요?",
    a: "충전, 환전, 해외 결제 수수료는 신청 및 충전 전에 안내하는 것을 원칙으로 합니다. 숨은 월 구독료는 없습니다.",
  },
  {
    q: "카드를 분실하면 어떻게 하나요?",
    a: "앱 또는 고객 지원을 통해 즉시 잠근 뒤 재발급을 요청하면 됩니다. 가상 카드는 번호 재발급으로 대체됩니다.",
  },
  {
    q: "지금 신청하면 바로 발급되나요?",
    a: "이 버전은 신청 흐름을 보여주는 웹 프론트엔드입니다. 제출 내용은 화면에 접수 완료로 표시되며, 실제 KYC·카드 발급 연동은 다음 단계에서 연결됩니다.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <p className="font-display text-xs tracking-[0.28em] text-teal">FAQ</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">자주 묻는 질문</h1>
      <div className="mt-10 space-y-4">
        {FAQS.map((item) => (
          <section
            key={item.q}
            className="rounded-2xl border border-white/8 bg-white/[0.03] p-5"
          >
            <h2 className="text-base font-semibold">{item.q}</h2>
            <p className="mt-2 text-sm leading-7 text-white/65">{item.a}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
